import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["az", "en", "ru"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "az",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
