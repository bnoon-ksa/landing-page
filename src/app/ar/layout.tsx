import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/arabic.css";
import "../../styles/arabic-responsive.css";
import { Cairo } from "next/font/google";
import Footer from "@/features/Layout/Footer";
import GoTop from "@/features/Layout/GoTop";
import "@fontsource/alexandria/400.css"; // Regular
import "@fontsource/alexandria/700.css"; // Bold (optional)
const cairo = Cairo({ variable: "--font-cairo", subsets: ["arabic"], weight: ["400","700"] });
export const metadata = {

  icons: {
    icon: "/images/fav.png",
  },
};
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">

      <body className={`${cairo.variable} arabic`}>
   {/* Google Analytics 4 snippet */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6CDMTCELGG"></script>
        <script
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
