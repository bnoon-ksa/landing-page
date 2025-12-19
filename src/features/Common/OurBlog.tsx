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
    description:`
على مدار أكثر من 12 عاماً، استطاع مركز "بنون" في الرياض أن يرسّخ مكانته كأحد أكثر المراكز موثوقية في طب الخصوبة وصحة المرأة والرجل في المملكة. من خلال نهج يضع المريض أولاً، يجمع المركز بين الرعاية الإنسانية والتكنولوجيا المتقدمة، ويضم فريقاً من أبرز الاستشاريين في طب الإخصاب...   `,
 },
    {
      id: 2,
      imageSrc: "images/blog/bnoon-jeddah.avif",
      title: "بنون – جدة",
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&ved=1t:2428&ictx=111",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6924446189687!2d39.1215956!3d21.558878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbc1b47a93e5%3A0x403eb3afa0ca3bd7!2zQm5vb24gLSBKZWRkYWgg2KjZhtmI2YYgLSDYrNiv2KkgKGZvcm1lcmx5IGtub3duIGFzIEhlYWx0aFBsdXMgRmVydGlsaXR5IEplZGRhaCk!5e0!3m2!1sen!2s!4v1762873494627!5m2!1sen!2s",
      buttonLink: "ar/bnoon-jeddah",
   description: `انضم إلى شبكة "بنون" في يونيو 2025 (وكان يُعرف سابقاً بمركز "هيلث بلس للإخصاب – جدة" منذ افتتاحه عام 2019)، ويواصل المركز تقديم خدمات رعاية خصوبة متقدمة، مع الحفاظ على السمعة الطبية المرموقة والثقة التي بناها في المجتمع.

وبصفته مركزاً معتمداً من اللجنة الدولية...`,
   },
    {
      id: 3,
      imageSrc: "images/blog/king-salman.avif",
       title: `بنون – طريق الملك سلمان، الرياض <br /><span style="margin-right:22px !important; font-size:14px; font-weight:400; color:#004E78;">(الافتتاح: مطلع عام 2026)</span>`,

      slug: "https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3583391235643!2d46.59119140000001!3d24.8174163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee69d1c7fb897%3A0x46a86841c1f1d0e8!2zUlJRQTQxNTAsIDQxNTAgS2luZyBTYWxtYW4gQmluIEFiZHVsYXppeiBSZCwgNjkzMtiMINit2Yog2KfZhNmC2YrYsdmI2KfZhtiMIFJpeWFkaCAxMzUzMiwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2s!4v1762873544370!5m2!1sen!2s",
      buttonLink: "ar/our-clinics",
      description: `ضمن خطتها لتوسيع الوصول إلى علاجات الإخصاب عالية المستوى في المملكة، تعمل "بنون" على تطوير منشأة طبية متكاملة بمساحة 3,800 متر مربع في شمال الرياض على طريق الملك سلمان، والمقرّر افتتاحها نهاية...`,
  },
    {
      id: 4,
      imageSrc: "images/blog/bnoon-alahsa.jpg",
      title: ` بنون – الأحساء`,

      slug: "https://maps.app.goo.gl/N4qVpDH22TnbpVDV7",
      embedMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3603.0477616735334!2d49.572361099999995!3d25.4366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI2JzEyLjAiTiA0OcKwMzQnMjAuNSJF!5e0!3m2!1sen!2s!4v1765645696414!5m2!1sen!2s",
      buttonLink: "ar/bnoon-alahsa",
      description: `يقدّم مركز بنون – الأحساء الواقع داخل مستشفى الموسى التخصصي خدمات رعاية الخصوبة وصحة المرأة بمعايير عالمية، ليكون الوجهة الأولى للعائلات في المنطقة الشرقية في السعودية. وقد صُمّم المركز ليمنح المرضى تجربة علاجية متميّزة تجمع بين أحدث التقنيات في الطب...`

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

        <div className="row justify-content-center">
          {blogData.map((post, index) =>(
            <div key={post.id} className="col-lg-5 col-md-6 pb-3">
               <div
                className={`blog-card mx-md-2 ${
      index % 2 === 0 ? "blog-left-card" : "blog-right-card"
    }`}
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
            .blog-card .content p {
  font-size: 14px !important;      /* font size kam */
  line-height: 1.5;    /* line height kam */
}
  .blog-card {
width:450px;
}
.blog-right-card {
   margin-right: 50px !important;
}
    .blog-left-card {
    margin-right: 20px !important;
}
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
    min-height: 200px; /* adjust according to design */
}

/* Make image area fixed height */
.blog-card .image {
    height: 300px; /* all images/iframes same height */
    overflow: hidden;
}
.blog-card .image img {
    width: 100%;
    height: auto; /* natural ratio maintain */
    display: block;
}
.blog-card .image {
    height: 220px; /* desktop height */
    overflow: hidden;
}
.blog-card .image img,
.blog-card .image iframe {
    width: 100%;
    height: 100%; /* fills .image container */
    display: block;
}
/* Content area fills remaining space */
.blog-card .content {
    flex: 1; /* ensures content area grows to fill height */
}

 @media (max-width: 767px) {
     .blog-card .content h3 {
        font-size: 14px;
    }
        .blog-card .image {
    height: 200px; /* all images/iframes same height */
    overflow: hidden;
}
     .blog-card .image {
        height: 200px; /* mobile height */
    }
                   .blog-card .content p {
  font-size: 12px !important;      /* font size kam */
  line-height: 1.5;    /* line height kam */
}
    .blog-card {
width:330px;
}
.blog-right-card {
   margin-right: 0px !important;
}
    .blog-left-card {
    margin-right: 0px !important;
}
  }
`}</style>
    </div>
  );
};

export default OurBlog;
