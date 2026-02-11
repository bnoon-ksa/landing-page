"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ArabicError({ error, reset }: ErrorPageProps) {
  return (
    <div className="not-found-area ptb-140">
      <div className="container">
        <div className="not-found-content text-center">
          <div
            style={{
              fontSize: "5rem",
              color: "#336AEA",
              marginBottom: "1rem",
              lineHeight: 1,
            }}
          >
            !
          </div>

          <h3>حدث خطأ غير متوقع</h3>
          <p
            style={{
              color: "#5A6A85",
              marginBottom: "2rem",
              fontSize: "1rem",
            }}
          >
            {error.digest
              ? `مرجع الخطأ: ${error.digest}`
              : "نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية."}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={reset}
              className="default-btn"
              style={{
                border: "none",
                cursor: "pointer",
                margin: 0,
              }}
            >
              حاول مرة أخرى
            </button>
            <Link
              href="/ar"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20.5px 30px",
                backgroundColor: "transparent",
                color: "#336AEA",
                borderRadius: "100px",
                fontWeight: 500,
                border: "2px solid #336AEA",
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
