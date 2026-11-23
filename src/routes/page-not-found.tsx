import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/business";
import { buildHead } from "@/lib/seo";

// Prerendered, then copied to dist/client/404.html by scripts/generate-sitemap.mjs so
// Vercel returns a real 404 status for unknown URLs (previously every unknown URL
// returned 200 with the home page — a "soft 404" that Google penalises).
export const Route = createFileRoute("/page-not-found")({
  head: () =>
    buildHead({
      title: "Page not found | Balaji Invisible Grills",
      description: "The page you're looking for doesn't exist or has moved.",
      path: "/page-not-found",
      noindex: true,
    }),
  component: PageNotFound,
});

function PageNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-xl font-semibold text-foreground">Page not found</p>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved. Try one of our services:</p>
        <ul className="mt-6 space-y-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link to="/services/$service" params={{ service: s.slug }} className="text-accent font-semibold hover:underline">{s.keyword}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-6"><Link to="/" className="btn-primary">Go home</Link></div>
      </div>
    </div>
  );
}
