"use client";

import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";

export default function EnglishNotFound() {
  return (
    <>
      <Navbar />

      <div className="not-found-area ptb-140">
        <div className="container">
          <div className="not-found-content text-center">
            <div
              style={{
                fontSize: "6rem",
                fontWeight: 700,
                color: "#336AEA",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              404
            </div>

            <h3>Oops! That Page Can&apos;t Be Found</h3>
            <p
              style={{
                color: "#5A6A85",
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link href="/en" className="default-btn">
              <span className="left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                    fill="white"
                  />
                </svg>
              </span>
              Back To Home
              <span className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
