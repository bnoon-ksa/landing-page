import React, { useState } from "react";
import Link from "next/link";

import 'remixicon/fonts/remixicon.css';
const OurBlog = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const blogData = [
    {
      id: 1,
      imageSrc: "images/blog/bnoon-riyadh.avif",
      title: "بنون – الرياض",
      slug: "https://maps.app.goo.gl/Uwu7B8FT8n7bYNid6", // Maps link
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1839039641172!2d46.7350649!3d24.789155499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2zQm5vb24gLSBSaXlhZGgg2KjZhtmI2YYgLSDYp9mE2LHZitin2LY!5e0!3m2!1sen!2s!4v1762873112473!5m2!1sen!2s",
      buttonLink: "ar/bnoon-riyadh", // internal page
      description:
        "تُعد بنون من المراكز الرائدة في علاجات الإخصاب وصحة المرأة والرجل في العاصمة منذ افتتاحه عام 2013. يضم المركز أحدث التقنيات والمرافق ويتميز بنسب نجاح عالية على يد كادر طبي متميز۔",
    },
    {
      id: 2,
      imageSrc: "images/blog/bnoon-jeddah.avif",
      title: "بنون – جدة",
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&ved=1t:2428&ictx=111",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6924446189687!2d39.1215956!3d21.558878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbc1b47a93e5%3A0x403eb3afa0ca3bd7!2zQm5vb24gLSBKZWRkYWgg2KjZhtmI2YYgLSDYrNiv2KkgKGZvcm1lcmx5IGtub3duIGFzIEhlYWx0aFBsdXMgRmVydGlsaXR5IEplZGRhaCk!5e0!3m2!1sen!2s!4v1762873494627!5m2!1sen!2s", 
      buttonLink: "ar/bnoon-jeddah",
      description:
        "انضم مركز بنون في جدة (المعروف سابقاً بمركزهيلث بلاس للإخصاب) إلى الشبكة في يونيو 2025 لتقديم خدمات موسّعة للعائلات في المنطقة الغربية بفرق  طبية متخصصة۔",
    },
    {
      id: 3,
      imageSrc: "images/blog/king-salman.avif",
  title: `بنون – طريق الملك سلمان، الرياض <br /><span style="font-size:14px; font-weight:400; color:#004E78;">(الافتتاح في نهاية 2025)</span>`,

      slug: "https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb",
        embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3583391235643!2d46.59119140000001!3d24.8174163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee69d1c7fb897%3A0x46a86841c1f1d0e8!2zUlJRQTQxNTAsIDQxNTAgS2luZyBTYWxtYW4gQmluIEFiZHVsYXppeiBSZCwgNjkzMtiMINit2Yog2KfZhNmC2YrYsdmI2KfZhtiMIFJpeWFkaCAxMzUzMiwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2s!4v1762873544370!5m2!1sen!2s",
      buttonLink: "ar/our-clinics",
      description:
        "مرفق رائد تبلغ مساحته 3,800 متر مربع ويضم 4 طوابق، صُمّم ليجسّد المستقبل الواعد لرعاية الخصوبة باستخدام الذكاء الاصطناعي والتكنولوجيا المتقدمة۔",
    },
  ];

  return (
    <div className="blog-area ptb-140">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>مراكزنا</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {blogData.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
               <div
                className="blog-card"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
             
                {/* Image links to Google Maps */}
          <div className="image">
            {hoveredId === post.id ? (
  <iframe
    src={post.embedMap} // <-- yahi har card ka map show karega
    width="100%"
    height="200"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
) : (
  <a href={post.slug} target="_blank" rel="noopener noreferrer">
    <img src={post.imageSrc} alt={post.title} />
  </a>
)}

                </div>


                {/* Heading links to Google Maps */}
                <div className="content">
                 <h3>
                    <i className="ri-map-pin-line" style={{ color: "#004E78", marginLeft: "8px" }}></i>
  <a
    href={post.slug}
    target="_blank"
    rel="noopener noreferrer"
    dangerouslySetInnerHTML={{ __html: post.title }}
  ></a>
</h3>

                  <p>{post.description}</p>

                  {/* Button links to internal page */}
                  <Link href={post.buttonLink} className="btn btn-success btn-blog">
                   اقرأ المزيد
                  </Link>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
       <style jsx global>{`
       .small-text {
  font-size: 16px; /* smaller size for note */
  color: #004E78;
  margin-left: 32px;
}

 .blog-card .content h3:hover, .blog-card .content .h3:hover {
    transform: none;
}
    /* Blog card container */
.blog-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* important for same height in grid */
    min-height: 400px; /* adjust according to design */
}

/* Make image area fixed height */
.blog-card .image {
    height: 200px; /* all images/iframes same height */
    overflow: hidden;
}

/* Content area fills remaining space */
.blog-card .content {
    flex: 1; /* ensures content area grows to fill height */
}

 @media (max-width: 767px) {
     .blog-card .content h3 {
        font-size: 14px;
    }
  }
`}</style>
    </div>
  );
};

export default OurBlog;
