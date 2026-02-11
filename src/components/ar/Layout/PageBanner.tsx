import React from "react";

interface PageBannerProps {
  bgImage: string; // har page ke liye alag image
}

const PageBanner: React.FC<PageBannerProps> = ({ bgImage }) => {
  return (
    <div
      className="page-banner-area container-fluid"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center g-0">
          <div className="col-lg-12 col-md-12">
            {/* optional content if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

