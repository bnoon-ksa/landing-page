'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function EnglishError({ error, reset }: ErrorPageProps) {
  return (
    <div className="not-found-area ptb-140">
      <div className="container">
        <div className="not-found-content text-center">
          <div
            style={{
              fontSize: '5rem',
              color: '#336AEA',
              marginBottom: '1rem',
              lineHeight: 1,
            }}
          >
            !
          </div>

          <h3>Something Went Wrong</h3>
          <p
            style={{
              color: '#5A6A85',
              marginBottom: '2rem',
              fontSize: '1rem',
            }}
          >
            {error.digest
              ? `Error reference: ${error.digest}`
              : 'We apologize for the inconvenience. Please try again or return to the homepage.'}
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
              className="default-btn"
              style={{
                border: 'none',
                cursor: 'pointer',
                margin: 0,
              }}
            >
              Try Again
            </button>
            <Link
              href="/en"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20.5px 30px',
                backgroundColor: 'transparent',
                color: '#336AEA',
                borderRadius: '100px',
                fontWeight: 500,
                border: '2px solid #336AEA',
                textDecoration: 'none',
                lineHeight: 1,
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
