import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/responsive.css";
import localFont from "next/font/local";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";
import Script from "next/script";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../fonts/plus-jakarta-sans-latin.woff2",
      style: "normal",
    },
    {
      path: "../../fonts/plus-jakarta-sans-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
export const metadata = {

  icons: {
    icon: "/images/fav.png",
  },
};
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${plusJakartaSans.variable}`}>
        {/* Google Analytics 4 snippet */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6CDMTCELGG" strategy="afterInteractive" />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6CDMTCELGG');
            `,
          }}
        />
        {children}
        <Footer />
        <GoTop />
      </body>
    </html>
  );
}
