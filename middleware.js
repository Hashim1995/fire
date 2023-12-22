import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["az", "en", "ru"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)x
  defaultLocale: "az",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!_next|.*\\..*).*)",],
};


// import { NextResponse } from 'next/server';
// import createIntlMiddleware from 'next-intl/middleware';
// import authMiddleware from 'next-auth/middleware';

// export function middleware(request) {
//   // next-intl middleware logic
//   const intlMiddleware = createIntlMiddleware({
//     locales: ["az", "en", "ru"],
//     defaultLocale: "az",
//   });
//   const intlResponse = intlMiddleware(request);
//   if (intlResponse instanceof NextResponse) return intlResponse;

//   // next-auth middleware logic
//   const authResponse = authMiddleware(request, {
//     matcher: ['/dashboard', '/protected/:path*'],
//   });
//   if (authResponse instanceof NextResponse) return authResponse;

//   // Continue to the next middleware or the request handler
//   return NextResponse.next();
// }

// export const config = {
//   // Merge matchers from both middlewares
//   matcher: [
//     "/((?!api|_next|.*\\..*).*)", // from next-intl
//     '/dashboard', '/protected/:path*' // from next-auth
//   ],
// };
