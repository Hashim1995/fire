import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";
import Layout from "./components/layout/Layout";
import "../../public/css/responsive.css";
import { Inter } from "next/font/google";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import NextTopLoader from "nextjs-toploader";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import Providers from "./components/Providers";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ToastContainerWrapper from "./components/toasProvider";
import { unstable_setRequestLocale } from "next-intl/server";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IVIZA",
  description: "iviza.az",
};
const locales = ["az", "en", "ru"];

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });
  const session = await getServerSession(options);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Providers session={session}>
            <NextTopLoader />

            <Layout HeaderStyle="three">{children}</Layout>
            <ToastContainerWrapper />
          </Providers>

          <Script
            id="tawk-to"
            strategy="afterInteractive" // Loads script after page is interactive
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/66f25d67e5982d6c7bb368b0/1i8hbpnur';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
