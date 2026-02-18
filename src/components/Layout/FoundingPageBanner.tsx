import React from "react";

type Props = {
  bgImage: string;
};
export default function FoundingDayBanner({ bgImage }: Props) {
  return (
    <>
      <div
        className="founding-banner-area"
        style={{
          backgroundImage: `url(${bgImage})`,
        
        }}
      />

      <style>{`

       .founding-banner-area {
          width: 100%;
          height: 360px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .founding-banner-area {
            height: 100px;
            background-position: 100% center;
          }
        }
      `}</style>
    </>
  );
}
