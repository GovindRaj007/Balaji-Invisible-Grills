export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Default: console + no external network calls. Integrate a real error
  // reporting provider (Sentry, LogRocket, etc.) in production as needed.
  console.error("Reported error:", error, context);
}

export function captureException(error: unknown) {
  reportError(error, { mechanism: "captureException" });
}

export default reportError;
