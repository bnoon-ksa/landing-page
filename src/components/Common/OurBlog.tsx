import React, { useState } from "react";
import Link from "next/link";
import 'remixicon/fonts/remixicon.css';

const OurBlog = () => {
const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogData = [
    {
      id: 1,
      imageSrc: "images/blog/bnoon-riyadh.avif",
      title: "Bnoon - Riyadh",
      slug: "https://maps.app.goo.gl/Uwu7B8FT8n7bYNid6",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1839039641172!2d46.7350649!3d24.789155499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2zQm5vb24gLSBSaXlhZGgg2KjZhtmI2YYgLSDYp9mE2LHZitin2LY!5e0!3m2!1sen!2s!4v1762873112473!5m2!1sen!2s",
      buttonLink: "en//bnoon-riyadh",
      description:
        "With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years...",
    },
    {
      id: 2,
      imageSrc: "images/blog/bnoon-jeddah.avif",
      title: "Bnoon – Jeddah",
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&amp;ved=1t:2428&amp;ictx=111",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6924446189687!2d39.1215956!3d21.558878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbc1b47a93e5%3A0x403eb3afa0ca3bd7!2zQm5vb24gLSBKZWRkYWgg2KjZhtmI2YYgLSDYrNiv2KkgKGZvcm1lcmx5IGtub3duIGFzIEhlYWx0aFBsdXMgRmVydGlsaXR5IEplZGRhaCk!5e0!3m2!1sen!2s!4v1762873494627!5m2!1sen!2s",
      buttonLink: "en//bnoon-jeddah",
      description:
        "Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its...",
    },
    {
      id: 3,
      imageSrc: "images/blog/king-salman.avif",
      title: "Bnoon – King Salman Road, Riyadh ",
       note: "(Opening December 2025)",
      slug: "https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3583391235643!2d46.59119140000001!3d24.8174163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee69d1c7fb897%3A0x46a86841c1f1d0e8!2zUlJRQTQxNTAsIDQxNTAgS2luZyBTYWxtYW4gQmluIEFiZHVsYXppeiBSZCwgNjkzMtiMINit2Yog2KfZhNmC2YrYsdmI2KfZhtiMIFJpeWFkaCAxMzUzMiwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2s!4v1762873544370!5m2!1sen!2s",
      buttonLink: "en//our-clinics",
      description:
        "To further expand access and redefine the standard of fertility care in the Kingdom...",
    },
     {
      id: 4,
      imageSrc: "images/blog/bnoon-alahsa.jpg",
      title: "Bnoon – Al Ahsa ",
        buttonLink: "en//bnoon-alahsa",
      description:
        "Situated within Almoosa Specialist Hospital,<strong> Bnoon – Al Ahsa </strong>brings world-class fertility and women’s health..."
    },
  ];

  return (
    <div className="blog-area ptb-140 mt-4 mb-5">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>Our Clinics</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {blogData.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div
                className="blog-card"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
             <div className="image">
  <img
    src={post.imageSrc}
    alt={post.title}
    className={hoveredId === post.id ? "fade-out" : "fade-in"}
  />
  <iframe
    src={post.embedMap}
    width="100%"
    height="201"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className={hoveredId === post.id ? "fade-in" : "fade-out"}
  ></iframe>
</div>


                <div className="content">
                  <h3>
                     <i className="ri-map-pin-line" style={{ color: "#004E78", marginRight: "6px" }}></i>
                    <a href={post.slug} target="_blank" rel="noopener noreferrer">
                      {post.title}
                       {post.note && <span className="small-note">{post.note}</span>}
                    </a>
                  </h3>
                 <p
  dangerouslySetInnerHTML={{
    __html: post.description
  }}
></p>


                  <Link href={post.buttonLink} className="btn btn-success btn-blog">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* ✅ Responsive style only for mobile */}
        <style jsx>{`
        .small-note {
  font-size: 16px; /* smaller size for note */
  color: #004E78;
  margin-left: 32px;
}

        .blog-card .content h3, .blog-card .content .h3 {
    font-size: 22px;
    line-height: 1;
    transition:none;
    color: #004E78;
    margin-top: 8px;
}
    .blog-card .content h3:hover, .blog-card .content .h3:hover {
    transform: none;
}
  .blog-card .image {
    position: relative;
    height: 201px;
    overflow: hidden;
  }

  .blog-card .image img,
  .blog-card .image iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .fade-in {
    opacity: 1;
    z-index: 2;
  }

  .fade-out {
    opacity: 0;
    z-index: 1;
  }
    
    @media (max-width: 768px) {
        .blog-card .content h3, .blog-card .content .h3 {
    font-size: 18px;
    line-height: 1;
    transition:none;
    color: #004E78;
    margin-top: 8px;
}
           .small-note {
  font-size: 13px; /* smaller size for note */
  color: #004E78;
  margin: 6px 0px 0px;
   display: block; /* moves to next line */
}
    }
`}</style>

    </div>
  );
};

export default OurBlog;
