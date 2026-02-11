"use client";


import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function OurServices() {
  // Dynamic data for services
  const servicesData = [
    {
      id: 1,
      icon: "https://bnoon.blob.core.windows.net/website/images/icons/Website-Icons_1.png",
      title: "رعاية يقودها خبراء وتتمحور حول الزوجين",
      description:
        "فريقنا من الاستشاريين المعتمدين، وأخصائيي الأجنة، والممرضين المتخصصين يجمع بين التميّز الطبي والتعاطف الإنساني. نحن لا نقدّم العلاج فقط؛ بل الرعاية والاهتمام۔",
    
    },
    {
      id: 2,
      icon: "https://bnoon.blob.core.windows.net/website/images/icons/Website-Icons_2.png",
      title: "مرافق حديثة مصمّمة بعناية",
      description:
        "​تصميم هادئ ومساحات مريحة تساعد في تخفيف التوتر وتعزيز الراحة النفسية للأزواج. كل تفصيل مدروس ليعكس بيئة داعمة ومُطمئِنة۔",
    
    },
    {
      id: 3,
      icon: "https://bnoon.blob.core.windows.net/website/images/icons/Website-Icons_3.png",
      title: "رعاية متكاملة تحت سقف واحد",
      description:
        "من التشخيص إلى العلاجات المتقدمة مثل عمليات أطفال الأنابيب، وتجميد البويضات، وحفظ الخصوبة، إلى متابعة الحمل—كل ذلك ضمن مركز واحد دون تأخير أو إحالات إلى تخصصات أخرى۔",
     
    },
    {
      id: 4,
      icon: "https://bnoon.blob.core.windows.net/website/images/icons/Website-Icons_4.png",
      title: "خطط علاجية مخصصة",
      description:
        "كل خطة علاجية مصمّمة وفقاً لاحتياجاتكم كزوجين، وظروفكم الصحية، وتطلعاتكم—بما يتماشى مع نمط حياتكم۔",
     
    },
  ];
 // Animation refs
    const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<{ [key: number]: boolean }>({});

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisible((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  refs.current.forEach((ref) => {
    if (ref) observer.observe(ref); // ✅ ignore null
  });

  return () => observer.disconnect();
}, []);

  return (
      <div className="services-area mt-5">
        <div className="inner ptb-140">
          <div className="container">
            <div className="section-title">
              <div className="row justify-content-center align-items-center g-4">
                <div className="col-lg-12 col-md-12">
                  <div className="left">
                    <h2 className="service-h2">لماذا يثق الأزواج ببنون في رحلتهم نحو الأبوة والأمومة؟
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                
                </div>
              </div>
            </div>
   <div className="container-fluid px-0 service-section">
           <div className="row justify-content-center g-4">

  {servicesData.map((service, index) => (
    <div
      key={index}
      ref={(el) => {
        refs.current[index] = el;
      }}
      className="col-md-6"
      style={{
        opacity: visible[index] ? 1 : 0,
        transform: visible[index]
          ? "translateX(0)"
          : index % 2 === 0
          ? "translateX(50px)"
          : "translateX(-50px)",
        transition: "all 0.6s ease-out",
        padding: "0px",
      }}
    >
      <div
        className={`service-card wrap2 ${
          index === 1 || index === 3 ? "special-card" : ""
        }`}
        style={{ maxWidth: "600px" }}
      >
        <div className="top">
          <div
            className="d-flex align-items-center mb-2"
            style={{ justifyContent: "space-between", gap: "20px" }}
          >
            <h3 className="mb-0">{service.title}</h3>

            <Image
              src={service.icon}
              alt="icon"
              width={90}
              height={90}
            />
          </div>

          <p>{service.description}</p>
        </div>
      </div>
    </div>
  ))}

</div>

          </div>

        </div>
      </div>
        <style jsx>{`
.special-card {
    margin-right: auto;
    border-radius:30px !important;
    height: 212px !important;
}
    .service-card .top {
    padding: 15px 30px !important;
    border-radius: 30px !important;
}
    .service-card{
    border-radius:30px !important;
    }
    .service-h2 {
    font-size: 32px;
    margin-bottom: 0px;
    line-height: 1.3;
    margin-top: 20px;
    color: #004E78;
}
.service-card .top p {
    margin-bottom: 0;
     margin-top: 0px !important; 
}
  /* ✅ Mobile responsive */
  @media (max-width: 767px) {
   .service-section{
   padding:0px 15px 30px 15px !important
   }
       .service-card .top h3 {
        font-size: 16px;
        margin-bottom: 15px;
        margin-left: auto !important;
    }
       .service-card .top {
    padding: 15px 20px !important;
    border-radius: 30px !important;
}
        .section-title {
        margin-bottom: 3px !important;
    }
        
  .service-card .top .d-flex {
    flex-direction: row-reverse !important;
  }
    .service-card .top img {
    width: 60px !important;
    height: 60px !important;
  }
    .special-card {
    margin-right: auto;
    border-radius:30px !important;
    height: auto !important;
}
  }
`}</style>
    </div>
  );
}

export default OurServices;
