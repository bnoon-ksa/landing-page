import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/responsive.css";
import localFont from "next/font/local";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";
import Script from "next/script";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://bnoon.sa"),
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bnoon.sa/en",
    siteName: "Bnoon",
    images: [
      {
        url: "/images/bnoon-logo.png",
        width: 1200,
        height: 630,
        alt: "Bnoon - Fertility & Women Health Centers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Bnoon",
  alternateName: "بنون",
  url: "https://bnoon.sa",
  logo: "https://bnoon.sa/images/bnoon-logo.png",
  description:
    "Bnoon is a leading network of fertility and women's health centers in Saudi Arabia, offering IVF, ICSI, and infertility treatments.",
  medicalSpecialty: "Reproductive Medicine",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Al Ahsa",
      addressCountry: "SA",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Arabic", "English"],
  },
  sameAs: [],
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${plusJakartaSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
