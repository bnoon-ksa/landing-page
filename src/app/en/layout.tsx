import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/responsive.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin"] });
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
