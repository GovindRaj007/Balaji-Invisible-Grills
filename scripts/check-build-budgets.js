import { promises as fs } from "fs";
import path from "path";
import { gzipSync } from "zlib";

const distDir = path.resolve(process.cwd(), "dist/client/assets");

const budgets = [
  {
    label: "JavaScript/CSS asset",
    test: /\.(js|css)$/i,
    maxBytes: 250 * 1024,
  },
  {
    label: "Image asset",
    test: /\.(avif|webp|jpg|jpeg|png)$/i,
    maxBytes: 1500 * 1024,
  },
];

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await listFiles(fullPath)));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }

  return results;
}

async function main() {
  try {
    const files = await listFiles(distDir);
    if (!files.length) {
      throw new Error(`No assets found in ${distDir}. Run build first.`);
    }

    const budgetViolations = [];
    const summary = [];

    for (const file of files) {
      const buffer = await fs.readFile(file);
      const size = buffer.byteLength;
      const gzSize = gzipSync(buffer).byteLength;
      const relPath = path.relative(process.cwd(), file).replace(/\\/g, "/");

      for (const budget of budgets) {
        if (budget.test.test(file) && size > budget.maxBytes) {
          budgetViolations.push({ relPath, size, maxBytes: budget.maxBytes, label: budget.label });
        }
      }

      summary.push({ relPath, size, gzSize });
    }

    summary.sort((a, b) => b.size - a.size);
    console.log("\nBuild asset size summary (top 12):");
    summary.slice(0, 12).forEach((asset) => {
      const sizeKb = (asset.size / 1024).toFixed(1);
      const gzKb = (asset.gzSize / 1024).toFixed(1);
      console.log(`  ${sizeKb} KB (${gzKb} KB gzipped) — ${asset.relPath}`);
    });

    if (budgetViolations.length) {
      console.error("\nBuild budget violations:");
      budgetViolations.forEach((violation) => {
        console.error(
          `  [${violation.label}] ${violation.relPath} is ${(violation.size / 1024).toFixed(1)} KB, limit is ${(violation.maxBytes / 1024).toFixed(1)} KB`
        );
      });
      process.exit(1);
    }

    console.log("\nBuild budgets passed.");
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
