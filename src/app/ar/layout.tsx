import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/arabic.css";
import "../../styles/arabic-responsive.css";
import { Cairo } from "next/font/google";
import Footer from "@/components/ar/Layout/Footer";
import GoTop from "@/components/ar/Layout/GoTop";
import Script from "next/script";
import type { Metadata } from "next";
import "@fontsource/alexandria/400.css";
import "@fontsource/alexandria/700.css";

const cairo = Cairo({ variable: "--font-cairo", subsets: ["arabic"], weight: ["400","700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bnoon.sa"),
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://bnoon.sa/ar",
    siteName: "بنون",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "بنون - مراكز الإخصاب وصحة المرأة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cairo.variable} arabic`}>
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
    </div>
  );
}
