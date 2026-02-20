'use client';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorPageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: "Cairo, 'Plus Jakarta Sans', Arial, sans-serif",
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
        }}
      >
        <div
          style={{
            fontSize: '5rem',
            marginBottom: '1rem',
            lineHeight: 1,
            color: '#336AEA',
          }}
        >
          !
        </div>

        <h1
          style={{
            fontSize: '1.75rem',
            color: '#2A3547',
            marginBottom: '0.5rem',
          }}
        >
          حدث خطأ غير متوقع
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#5A6A85',
            marginBottom: '0.25rem',
          }}
        >
          Something went wrong
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#5A6A85',
            marginBottom: '2rem',
          }}
        >
          {error.digest
            ? `Error reference: ${error.digest}`
            : 'Please try again or return to the homepage.'}
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={reset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              backgroundColor: '#336AEA',
              color: '#ffffff',
              borderRadius: '100px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
          >
            حاول مرة أخرى / Try Again
          </button>
          <a
            href="/ar"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              backgroundColor: 'transparent',
              color: '#336AEA',
              borderRadius: '100px',
              fontWeight: 500,
              border: '2px solid #336AEA',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
          >
            الصفحة الرئيسية / Home
          </a>
        </div>
      </div>
    </div>
  );
}
