"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";



  const ContactUsSection = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);

    useEffect(() => {
      const observerLeft = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLeftVisible(true);
            observerLeft.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      const observerRight = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRightVisible(true);
            observerRight.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (leftRef.current) observerLeft.observe(leftRef.current);
      if (rightRef.current) observerRight.observe(rightRef.current);

      return () => {
        observerLeft.disconnect();
        observerRight.disconnect();
      };
    }, []);

    return (
    <div className="fertility-area mt-5">
      <div className="container">
        {/* Existing Section */}
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center">
                <h2>Let’s Start Your Journey Together</h2>
              </div>
              <div className="left text-center mt-2">
                <p>
                  At Bnoon, we understand that the path to parenthood is deeply personal — and often filled with questions. Whether you’re facing challenges with male or female infertility, seeking support for gynecological conditions, or planning for a healthy pregnancy, we are here to guide you with compassion, expertise, and care. <br /><br />
                  Our multidisciplinary team provides comprehensive, evidence-based treatments tailored to your needs — from advanced fertility solutions and hormone health to obstetric and gynecological care. Wherever you are in your journey, Bnoon is here to support your next step.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with 2 Divs in one row */}
        <div className="row justify-content-center text-center g-4">
          {/* First Div */}
          <div className={`col-lg-6 col-md-8 animate-left ${leftVisible ? "show" : ""}`} ref={leftRef}>
            <div className="p-4 contact-border h-100">
              <Image 
                src="https://bnoon.blob.core.windows.net/website/images/icons/c3.png" 
                alt="Icon 1" 
                width={80} 
                height={80} 
                className="mb-3"
              />
              <h5 className="mb-3"><strong>Request an Appointment</strong></h5>
              <Link href="https://book.bnoon.sa" className="btn btn-primary mb-3 contact-btn">
                Click here
              </Link>
              <p>
                Please fill out the Request an Appointment form and one of our patient coordinators will contact you within 48 hours to confirm your appointment and answer any initial questions.
              </p>
            </div>
          </div>

          {/* Second Div */}
                <div className={`col-lg-6 col-md-8 animate-right ${rightVisible ? "show" : ""}`} ref={rightRef}>

            <div className="p-4 contact-border h-100">
              <Image 
                src="https://bnoon.blob.core.windows.net/website/images/icons/recruiting-icons.png" 
                alt="Icon 2" 
                width={80} 
                height={80} 
                className="mb-3"
              />
              <h5 className="mb-3"><strong>Prefer to speak with us directly?</strong></h5>
              <Link href="https://book.bnoon.sa" className="btn btn-primary mb-3 contact-btn">
                Call us
              </Link>
              <p>
                Bnoon - Riyadh: +966 11 444 8080 <br />
                Bnoon - Jeddah: +966 12 680 0800
              </p>
            </div>
          </div>
        </div>

          <div className="section-title mt-5">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center">
                <h2>Our Locations </h2>
              </div>
              <div className="left text-center mt-2">
                <p>
                Bnoon has leading fertility centers across Saudi Arabia, designed with your comfort, privacy, and outcomes in mind. 
                </p>
              </div>
            </div>
          </div>
        </div>

         {/* New Section with 2 Divs in one row */}
        <div className="row text-center g-4">
          {/* First Div */}
        <div className="col-lg-6 col-md-8">
  <div className="p-0 p-lg-4 location-border h-100">
    <h5 className="mb-3"><strong>Bnoon - Riyadh</strong></h5>
    <p>
      Abi Jafar Bin Mansur Street, <br />
      Al-Shuhada, 13241 Riyadh, Saudi Arabia<br />
      +966 11 444 8080
    </p>

    {/* Google Map Embed */}
  <div className="map-responsive mt-0 mt-lg-3">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3932190536176!2d46.732875315003445!3d24.78915548405014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2sBnoon%20-%20Riyadh!5e0!3m2!1sen!2s!4v1695980800000!5m2!1sen!2s"
    width="90%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
     <p className="text-center text-lg-start text-left">
      Opening Hours:<br />
      Saturday – Thursday  9:00 am – 2:30 pm <br />
      Friday: Closed 
    </p>
  </div>
</div>


          {/* Second Div */}
         <div className="col-lg-6 col-md-8">
  <div className="p-0 p-lg-4 location-border h-100 text-center">
    <h5 className="mb-3"><strong>Bnoon - Jeddah</strong></h5>
    <p className="text-left">
      3340 Quartz Building, Al Cornishe Road, Al Shatea,<br /> Jeddah 23412, 
      Saudi Arabia<br />
      +966 12 680 0800
    </p>

    {/* Google Map Embed */}
    <div className="map-responsive mt-3 text-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d39.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x403eb3afa0ca3bd7!2sHealthPlus%20Fertility%20%26%20Women%27s%20Health%20Center%20-%20Jeddah!5e0!3m2!1sen!2s!4v1695974523456!5m2!1sen!2s"
        width="90%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   <p className="text-center text-lg-start text-left">
      Opening Hours:<br />
      Saturday – Thursday: 9 am – 8:30 pm <br />
      Friday: Closed 
    </p>
  </div>
</div>


          {/* Third Div */}
         <div className="col-lg-6 col-md-8">
  <div className="p-0 p-lg-4 location-border h-100 text-center">
    <h5 className="mb-3"><strong>Bnoon – Al Ahsa </strong></h5>
    <p className="text-left">
     South Tower, Floor 12, <br />Almoosa Specialist Hospital  

Dharan Road,<br /> Al Mubarraz 36342 
    </p>

    {/* Google Map Embed */}
    <div className="map-responsive mt-3 text-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3603.0477616735334!2d49.572361099999995!3d25.4366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI2JzEyLjAiTiA0OcKwMzQnMjAuNSJF!5e0!3m2!1sen!2s!4v1765622876993!5m2!1sen!2s"
        width="90%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   <p className="text-center text-lg-start text-left">
      Opening Hours:<br />
      Saturday – Thursday: 7 am – 8 pm  <br />
      Friday: Closed 
    </p>
  </div>
</div>
    <div className="section-title border-top">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center  mt-3">
                <h2>Share Your Feedback With Us </h2>
              </div>
              <div className="left text-center mt-2">
                <p>
                 At Bnoon, your feedback matters. We are committed to delivering the highest standards of care, and your feedback helps us grow, improve, and serve you better. Whether it's a suggestion, a story, or a simple rating — thank you for taking a moment to share your thoughts with us.  
                </p>
              </div>
              <div className="mt-4"><Link href="submit-feedback" className="btn btn-primary mb-3 contact-btn">
                Click Here
              </Link></div>
            </div>
            
          </div>
          
        </div>

        </div>
        
<style jsx>{`
.text-left{
        margin-left: 30px;
}
  @media (max-width: 768px) {
.text-left{
        margin-left: 0px;
}
  }
`}</style>
      </div>
    </div>
    
  );
};

export default ContactUsSection;
