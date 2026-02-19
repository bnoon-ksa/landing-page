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
                   .text-banner{
              
                   max-width: 50% !important;
              }
        @media (max-width: 768px) {
          .founding-banner-area {
            height: 100px;
            background-position: 100% center;
          }
                .text-size {
        font-size: 13px !important;
        font-weight: 800;
        line-height: 1.4;
    }
              .text-banner{
               left: 4% !important;
                  top: 56% !important;
                  width: 50%;
              }
        }
      `}</style>
    </>
  );
}
