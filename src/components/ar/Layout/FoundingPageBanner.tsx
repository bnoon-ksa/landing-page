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
           .text-size{
              font-size: 44px !important;
             
          }
        @media (max-width: 768px) {
          .founding-banner-area {
            height: 100px;
            background-position: 0% center;
          }
             .text-size{
                font-size: 13px !important;
        line-height: 16px;
        font-weight: 700;
              
          }
                .text-banner{
              
              }
        }
      `}</style>
    </>
  );
}

