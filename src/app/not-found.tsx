import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          fontFamily: "Cairo, 'Plus Jakarta Sans', Arial, sans-serif",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "480px",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "6rem",
                fontWeight: 700,
                color: "#336AEA",
                lineHeight: 1,
                marginBottom: "1rem",
              }}
            >
              404
            </div>

            <h1
              style={{
                fontSize: "1.75rem",
                color: "#2A3547",
                marginBottom: "0.5rem",
              }}
            >
              الصفحة غير موجودة
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "#5A6A85",
                marginBottom: "2rem",
              }}
            >
              Page not found
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/ar"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "#336AEA",
                  color: "#ffffff",
                  borderRadius: "100px",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                الرئيسية (العربية)
              </Link>
              <Link
                href="/en"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "#336AEA",
                  borderRadius: "100px",
                  fontWeight: 500,
                  border: "2px solid #336AEA",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Home (English)
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
