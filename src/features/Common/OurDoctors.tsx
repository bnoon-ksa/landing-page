import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import 'remixicon/fonts/remixicon.css';

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  imageUrl: string;
  profileLink: string;
  location?: string;
}

const OurDoctors = () => {
  // ✅ Sample doctor data
  // ✅ FIX: Hooks must be inside the component
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // ✅ Sample doctor data
  const doctorsData: Doctor[] = [
    {
      id: 1,
      name: "الدكتور عبد العزيز  الشهراني",
      qualification:
        "المدير الطبي للمجموعة استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/1.jpg",
      profileLink: "ar/dr-abdalaziz-alshahrani",
      location: "الرياض",
    },
    {
      id: 2,
      name: "الدكتور فواز  إدريس ",
      qualification:
        "المدير التنفيذي، بنون - جدة استشاري أمراض النساء والولادة والحمل الحرج وطب الأمومة والأجنة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/2.jpg",
      profileLink: "ar/dr-fawaz-edris",
      location: "جدة",
    },
    {
      id: 3,
      name: "الدكتور مازن بشارة",
      qualification:
        "المدير الطبي، بنون - جدة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/3.jpg",
      profileLink: "ar/dr-mazin-bishara",
      location: "جدة",
    },
    {
      id: 4,
      name: "الدكتور عاصم الوهيبي",
      qualification: "استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/4.jpg",
      profileLink: "ar/dr-asim-alwohaibi",
      location: "الرياض",
    },
    {
      id: 6,
      name: "الدكتور أحمد الشيخ",
      qualification:
        "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب/الحقن المجهري والمناظير والغدد الصماء التناسلية",
      imageUrl: "images/doctors/6.jpg",
      profileLink: "ar/dr-ahmed-alshaikh",
      location: "جدة",
    },
    {
      id: 7,
      name: "الدكتور وجدي  العمرى",
      qualification: " استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/7.jpg",
      profileLink: "ar/dr-wajdi-alomari",
      location: "الرياض",
    },
    {
      id: 8,
      name: "الدكتورة داليا  نور",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/8.jpg",
      profileLink: "ar/dr-dalia-nour",
      location: "الرياض",
    },
    {
      id: 9,
      name: "الدكتور أحمد هارون",
      qualification: " استشاري جراحة المسالك البولية وأمراض الذكورة والعقم",
      imageUrl: "images/doctors/9.jpg",
      profileLink: "ar/dr-ahmad-haroun",
      location: "جدة",
    },
    {
      id: 10,
      name: "الدكتور موسى  النعمي",
      qualification: " استشاري أمراض الذكورة  والعقم",
      imageUrl: "images/doctors/10.jpg",
      profileLink: "ar/dr-moussa-el-naiemy",
      location: "الرياض",
    },
    {
      id: 11,
      name: "الدكتورة مايا البزرة ",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/11.jpg",
      profileLink: "ar/dr-maya-albezreh",
      location: "جدة",
    },
    {
      id: 12,
      name: "الدكتورة رزان غيث",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/12.jpg",
      profileLink: "ar/dr-razan-ghaith",
       location: "جدة",
    },
    {
      id: 13,
      name: "الدكتورة مرام دعدوع",
      qualification: "نائب أول، أمراض النساء والولادة",
      imageUrl: "images/doctors/13.jpg",
      profileLink: "ar/dr-maram-dadoua",
       location: "جدة",
    },
     {
      id: 14,
      name: "الدكتورة رانيا الشريفي",
      qualification: "أخصائية أمراض النساء والولادة",
      imageUrl: "images/doctors/14.jpg",
      profileLink: "ar/dr-rania-elsherify",
       location: "الأحساء",
    },
     {
      id: 15,
      name: "الدكتور بسام نصير ",
      qualification: " استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/15.jpg",
      profileLink: "ar/dr-bassamnusair",
       location: "الأحساء",
    },
     {
      id: 16,
      name: "الدكتور أحمد النواصر",
      qualification: " استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/16.jpg",
      profileLink: "ar/dr-ahmedal-nowasser",
       location: "الأحساء",
    },
     {
      id: 17,
      name: "الدكتور مدين الخلف",
      qualification: "استشاري أمراض النساء والولادة",
      imageUrl: "images/doctors/17.jpg",
      profileLink: "ar/dr-median-alkhalaf",
       location: "الأحساء",
    },
  ];
 return (
    <div className="container doctors-section">
         <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
              
                <h2>أطباؤنا</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

      <motion.div
        className="doctors-scroll-container"
        initial={{ opacity: 0, x: 100 }}
  animate={isMobile ? { opacity: 1, x: 0 } : undefined}
  whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
      >
        <div className="row g-4">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="col-xl-3 col-md-6">
              <div className="doctor-card">
                <div className="doctors-wrapper">
                  <img src={doctor.imageUrl} alt={doctor.name} style={{ borderRadius: 10, width: "100%", height: "auto" }} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <Link href={doctor.profileLink} className="btn btn-success doctor-btn doctor-hover-btn">عرض الملف الشخصي</Link>
                      {doctor.location && <div className=" location-icon"><i className="ri-map-pin-line"></i> {doctor.location}</div>}
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h3 className="doctor-text">
                    <Link href={doctor.profileLink} legacyBehavior><a className="doctor-link">{doctor.name}</a></Link>
                    </h3>
                  <span className="sub">{doctor.qualification}</span>
                   {doctor.location && (
    <div className="doctor-location">
      <i className="ri-map-pin-line"></i> {doctor.location}
    </div>
  )}
                  <div className="doctors-button">
                    <Link href="ar/request-an-appoinment" className="btn btn-success doctor-btn doctors-button">طلب موعد</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
     
        h3 a {
    color: #404040 !important;
    text-decoration: none;
}
      .ri-map-pin-line {
    font-size: 15px;
}
    .doctor-card .content .sub {
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
    margin-top: 0px;
    font-weight: 100;
}
        .doctor-card { position: relative; overflow: hidden; border-radius: 14px;}
        .doctors-wrapper { position: relative; }
        .doctor-card:hover .image-overlay { opacity: 1; }
        .image-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex; justify-content: center; align-items: center;
          opacity: 0; transition: opacity 0.3s ease;
          border-radius: 10px;
        }
        .image-overlay .doctor-btn { padding: 10px 20px; color: #fff; border-radius: 5px; }
        .location-icon{
         color: #ffffffff;
    margin: 10px 0px 0px;
    font-size: 10px;
        }
           .doctor-location
 {
    color: #000000;
    margin: 10px 0px 0px;
    font-size: 13px;
    font-weight: 600;
    display:none;
}
    
         @media (max-width: 768px) {
   .doctor-location
 {
   display: block;
    color: #000000;
    margin: 10px 0px 0px;
    font-size: 13px;
    font-weight: 600;
}
        .doctor-card {
        padding: 15px;
    }
    .doctors-section {
    padding: 0px 20px;
}
        .doctor-card .content .doctor-btn {
        margin-top: 5px !important;
    }
             h3 a {
    color: #404040 !important;
    text-decoration: none;
    font-size:14px;
}
    .doctor-card {
    position: relative;
    overflow: hidden;
    margin: -20px 0px 20px;
}
    }
@media only screen and (max-width: 767px) {
    .doctor-card .content .doctor-btn {
        margin-top: 15px !important;
    }
       .doctors-button {
        margin-top: -20px !important;
    }
}
      `}</style>
    </div>
  );
};

export default OurDoctors;
