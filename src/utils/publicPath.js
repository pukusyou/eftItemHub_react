export const resolvePublicPath = (resourcePath = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedResource = resourcePath.startsWith("/")
    ? resourcePath.slice(1)
    : resourcePath;
  return `${normalizedBase}${normalizedResource}`;
};