"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TabContent {
  text: string;
  image: string;
  bottomText: string;
  bottomTextList?: string[];
  extraText?: string[];   // 👈 ab array
  secondlist?: string[];
  secondText?: string;
}


const TreatmentsSection: React.FC = () => {
  const tabs = [
    "Ovulation Induction",
    "Intrauterine Insemination",
    "Swim-Up for Gender Wish",
    "In Vitro Fertilization (IVF)",
    "In Vitro Maturation (IVM)",
    "Sperm Freezing",
    "Egg Freezing",
    "Preimplantation Genetic Screening (PGS)",
    "Preimplantation Genetic Diagnosis",
    "Recurrent Miscarriage",
    "Fertility Counselling",
    "Antenatal care deliveries",
  ];

  const tabContents: Record<string, TabContent> = {
    "Ovulation Induction": {
      text: `
        Ovulation Induction is usually one of the first treatment options utilized if a woman is struggling to conceive. 
        It is the process of stimulating ovulation by using medications. Women who do not ovulate regularly are good candidates for this type of treatment. 
        Induction of ovulation with gonadotropins requires a patient and physician commitment.<br /><br />
        The injectable drugs are hormones that your pituitary gland normally produces. Although FSH is the hormone primarily responsible for follicular development, 
        both FSH and LH play a role in the normal development and ovulation of ovarian follicles. LH is normally responsible for triggering ovulation when a mature follicle is present.<br />
        Each of these drugs acts directly on the ovaries and do not have activities elsewhere in the body. Example:
      `,
      image: "/images/treatments/ovulation-induction.jpg",
      bottomText: `
        <strong>Gonal</strong> F Pen is given subcutaneously. Gonal  F comes in multi-dose Pen (300 – 450 – 900 – 1200 IU).<br /><br />
        <strong> Menopur</strong>  is given subcutaneously. Menopur comes in ampule (75 – 600 – 1200 IU).<br /><br />
        <strong> Merional</strong>  is given intramuscular or subcutaneously. Merional comes in ampule (75 – 150 IU).<br /><br />
        <strong> Menogon</strong>  is given intramuscular or subcutaneously. Merional comes in ampule (75 IU).<br />
        HCG (Human Chorionic Gonadotropin): Its action is to trigger the final maturation of the egg and ovulation. Examples: <br />
        Pregnyl–Choriomon–Choragon (5000 – 10000 IU) is given intramuscularly.<br />
        Ovidrel-Ovitrelle (250 µg) is given subcutaneously.<br /><br />
        <strong> Indications for Treatment</strong>  In women who do not ovulate on their own (anovulation) like cases of Polycystic Ovaries. 
        It is also used in women who do ovulate on their own like cases of unexplained infertility and endometriosis. 
        These drugs are used to produce more follicles in the ovaries in a controlled fashion and are used alone or in combination with tablets like Clomid and others. 
        For most women, any of the above mentioned drugs may be appropriate to use. However, in certain situations, one drug may be more advantageous to you. 
        The choice of medications will be discussed during your counselling session prior to initiating therapy.<br /><br /><strong> Monitoring</strong> 
      `,
      bottomTextList: [
        "It is essential that close monitoring with ultrasound and sometimes blood tests be done to reduce the chances of adverse consequences and to increase the chances of success.",
        "Please call the center when your period starts (day 1 of your cycle with normal flow) to arrange for ultrasound and clinic visit to see the physician.",
        "Medicines are usually started on day 2-3 of the cycle. Baseline ultrasound is required before starting the medicine.",
        "The ultrasound determines how many follicles are developing and how mature they are, based on their size.",
        "After the baseline tests, you will take the medicine 5-9 days then return for an ultrasound and the physician will inform for any adjustments in medicine dosage and return visits, if required, until the follicles are mature.",
        "Once we have reached our goals for follicle development HCG will be given to induce the final maturation of the egg and ovulation. Do not take the HCG until you are told to.",
        "We generally recommend timing of intercourse in the next 2 days after HCG injection.",
        "The earliest pregnancy test can be done is 14 days after the HCG was given. Please call the treatment coordinator to communicate your result of pregnancy test."
      ],
    extraText: [
  "Adverse Reactions and Risks to Ovarian Stimulation"
],
      secondlist: [
        "Local irritation at injection site",
        "Dizziness, nausea, headaches, mood swings irritability, hot flashes, breast fullness or tenderness",
        "Ovarian cyst formation/enlargement and twisting",
        "Ovarian Hyperstimulation Syndrome",
        "Multiple pregnancy",
        "Cycle cancellation"
      ],
      secondText: `3 Frequency of Therapy: 3-6 cycles
      <br />
      Informed Consent for the treatment is essential and has to be completed by both husband and wife.`
    },

    "Intrauterine Insemination": {
      text: `
        Intrauterine Insemination (IUI) is a procedure used to assist patients in achieving a pregnancy. This procedure involves ovulation induction using tablets and injectable drugs until mature follicles develop then HCG injection is given to trigger final egg maturation and ovulation. Then, within 12-36 hours after HCG injection, the husband will be asked to produce a semen sample.<br /><br />
        The sample will be processed by our lab through a “sperm wash” technique that separates mobile sperm from non-mobile sperm and other cellular debris present in the ejaculate. Most of the fluid will also be washed off, resulting in a highly concentrated specimen of sperm. Within an hour or two of semen preparation your doctor will use a small catheter to place the washed sperms into the uterus. This process
      `,
      image: "/images/treatments/intrauterine-insemination.jpg",
      bottomText: `
        does not cause any discomfort, does not need any sedation or anesthesia. At least one fallopian tube must be open because after being placed into the uterus the sperm must swim the length of the fallopian tube and fertilize the egg at the distal end of the fallopian tube. The goal of the IUI procedure is to present a high concentration of motile sperm into the uterus to facilitate the union of an egg with a sperm in the fallopian tubes..<br /><br />
        The IUI procedure can be used in a number of different situations. Some examples are:
      `,
      bottomTextList: [
        "Patients with unexplained infertility",
        "Patients with slightly low sperm concentration or motility",
        "Patients with thick cervical mucus or any other conditions involving the cervix."
      ],

      secondText: `The process of ovarian stimulation is similar as ovulation induction described previously.
      Cancellation of the Cycle – Cancelling the cycle (not giving the HCG or doing intercourse) can prevent OHSS and multiple pregnancies. At times, this may be the safest way to proceed. Cycles may also be cancelled for inadequate response.
      The earliest pregnancy tests The earliest pregnancy test can be done is 14 days after the HCG was given. Please call the treatment coordinator to communicate your result of pregnancy test.
      <br /><br />
      Pregnancy occurs<br />
      If pregnancy occurs, you need to continue on the luteal support medications with the same dose and frequency till 12 weeks or as otherwise recommended by your physician. Subsequently, a follow-up visit for pregnancy ultrasound will be arranged.<br />
      If pregnancy test is negative, you need to arrange a follow-up visit to see your physician for further discussion of future plan and recommendation.<br />
      3 Frequency of Therapy: 3-4 cycles<br />
      Informed Consent for the treatment is essential and has to be completed by both husband and wife.`
    },

       "Swim-Up for Gender Wish": {
      text: `
      As we all know, it is ultimately Allah’s will to get pregnant with the gender you desire. That is, if you are destined to have it, you will have it, and the opposite is absolutely true. We understand the desire to balance your family. We will do everything in our capacity, based on scientific evidence, to help you increase your chances of having a child of your desired gender.<br /><br />
      The swim-up method for gender selection is the separation of X and Y-sperm using a standard technique in which the isolated motile Y-sperm is used to be placed inside the uterus using the intrauterine insemination technique. This increases the chances of having more male or female sperm in the sample used to fertilize the eggs. The chance to get pregnant in a male is, approximately, 70%. There is still 30% chance this pregnancy will end up to be a female. This is because there is No sperm sorting method 100% accurate in sorting the sperm into male and female batches.<br /><br />
      The Process:<br />
      Informed Consent for the treatment is essential and has to be completed by both husband and wife.
      `,
      image: "/images/treatments/swim-up.jpg",
      bottomText: `
      `,
      bottomTextList: [
        "Semen is placed in a test tube then washed and centrifuged.",
        "A culture medium is carefully placed on top of the semen. The medium is a hospitable environment for the sperm, and healthy sperm will swim up into it. Slow and immobile sperm are left behind, along with most debris in the semen.",
        "The test tube is let stand an hour or so; in some cases, it is placed at an angle, and/or in an incubator. In the standard procedure, the top layer is collected for use. Using this technique for attempted male gender selection, a small fraction of the top layer is first    discarded. This practice is based on the following theory: A small fraction of X-sperm are the fastest of all • Next fastest are the Y-sperm • Slowest are the majority of X-sperm. The modified swim-up attempted to discard that first group of fast X-sperm",
        " The portion retained for use may be washed and centrifuged again, the swim-up method is approximately 70% accurate in sorting the sperm into male and female batches. The ‘predominantly’ male or female batch is then used to fertilize the eggs. The process of ovarian stimulation is similar as ovulation induction described previously."
      ],

      secondText: `If pregnancy occurs, you need to continue on the luteal support medications with the same dose and frequency till 12 weeks or otherwise recommended by your physician. Subsequently, a follow-up visit for pregnancy ultrasound will be arranged. If pregnancy test is negative, you need to arrange a follow-up visit to see your physician for further discussion of future plan and recommendation.`
    },
          "In Vitro Fertilization (IVF)": {
      text: `
      IVF is the most widely used treatment and the most effective assisted reproductive technology for both men and women with a range of infertility conditions.
      `,
      image: "/images/treatments/ivf.jpg",
      bottomText: `
      `,
    },
         "In Vitro Maturation (IVM)": {
      text: `
     We at Bnoon Center are pleased to be the FIRST and currently the ONLY reproductive medicine center in Saudi Arabia that maintains and offers this procedure. IVM is a form of assisted reproductive technology in which eggs are retrieved from the ovaries prior to maturation and cultured in special IVM media for 24-48 hours until the maturation process is complete.<br /><br />
     Surgical sperm retrieval <br />
     At Bnoon Center, we are proud of the pregnancy results achieved using frozen-thawed embryos for transfer. We use the latest freezing method called ‘Vitrification’.
      `,
      image: "/images/treatments/ivm.jpg",
      bottomText: `
      `,
    },
        "Sperm Freezing": {
      text: `
    Sperm freezing is the process where sperms are collected through ejaculate or surgical retrieval and then stored by freezing for subsequent use. It is ideal for cases when the husband’s sperms would be difficult to obtain at the time of egg collection from his wife. Other conditions, sperm freezing can be offered is men with cancer where chemotherapy or radiotherapy is planned and they have a good chance of survival. Cancer treatment can damage the sperm production in the testes and sometimes this damage is permanent. Sperms are known to stands freezing for longer period of time compared to embryos. Thus, cancer survivors can use their sperms for several attempts for fertility treatment.
      `,
      image: "/images/treatments/sperm-freezing.jpg",
      bottomText: `
      `,
    },
     "Egg Freezing": {
      text: `
    We are, at Bnoon Center, delighted to be the FIRST, and currently, the ONLY reproductive medicine center in Saudi Arabia to retain and offer this technology for our patients if indicated. <br /><br />
    Egg freezing is, relatively, a new challenging technique in which ovarian stimulation is required similar to the standard IVF. Then the collected eggs will not be injected with the sperms but rather will be stored using the ‘Vitrification Method’ without fertilization. In a future plan for pregnancy, the frozen eggs will be warmed again then will be injected using husband’s sperms to produce embryos and the process will be similar to standard IVF and embryo transfer.<br />
    ​Egg freezing can be offered to:
    `,
      image: "/images/treatments/egg-freezing.jpg",
       bottomTextList: [
        "Women diagnosed with cancer. Egg freezing offers a chance to preserve eggs prior to chemotherapy, surgery or radiation. Most of these treatments  destroy the eggs and lead to infertility. In some cases, viable eggs may be present after cancer treatment. Fertility preserving options vary depending on age, type of cancer, and cancer-treatment plan.",
        "Women undergoing standard IVF but some emerging technical issues regarding the husband’s sperms, rescue egg freezing would save the eggs,    temporary, for later date when the husband’s sperms are ready for use."
      ],
      bottomText: ``,
      secondText: `Informed Consent for the treatment is essential and has to be completed by the patient.`
    },
         "Preimplantation Genetic Screening (PGS)": {
      text: `
    A Through Bnoon Medical Center, numerous Preimplantation Genetic Screening (PGS) is now possible. This technology performs a comprehensive chromosomal screening through which Bnoon Medical Center helps couples to achieve their goal of having a healthy baby. While some IVF patients can benefit from PGS, it is offered to the following patient groups:
    `,
      image: "/images/treatments/pgs.jpg",
       bottomTextList: [
        "Recurrent Miscarriage.  ",
        "Advanced Maternal Age",
        "Male Infertility ",
        "Repeated IVF Failure  ",
        "Chromosomal Structural Abnormalities: Translocations, Inversions and Deletions.",
        "Aneuploidy  "
      ],
      bottomText: ``,
      secondText: `Chromosome translocations are abnormalities of a chromosome’s structure. Translocations occur when fragments or pieces of a chromosome break off and rearrange onto a different chromosome or rearrange within itself. Balanced translocations contain all genetic information, but pieces of chromosomes have switched places resulting in no gain or loss of chromosome material. Unbalanced translocations result in an individual having more or less chromosomal material, thus causing genetic defects.<br /><br />
      <strong>Aneuploidy</strong><br />
      Aneuploidy is a condition which involves a cell with an incorrect number of chromosomes—too many or too few. Chromosomes contain all genes and DNA; the building blocks of the body. Humans have 46 chromosomes, or 23 pairs. These include chromosomes 1 to 22 (the autosomes) and chromosomes X and Y (the sex chromosomes). During fertilization, an embryo receives 23 chromosomes from the sperm and 23 chromosomes from the egg to form either 46,XY (normal male) or 46,XX (normal female). Aneuploidy disorders do not typically run in families and can include Down syndrome, Trisomy 18, Trisomy 13 and Turner syndrome. Aneuploidy testing of preimplanted embryos can determine these chromosomal disorders in addition to the sex of the embryo before transferring them back to the uterus.<br /><br />
      <strong>PGS</strong><br />
      PGS is performed as a part of a standard IVF cycle where multiple eggs are produced, retrieved from the ovaries and fertilized with the husband’s sperm in the Embryology Laboratory. IVF gives us access to embryo(s) in vitro. PGS is then performed by removing one or two cells from each embryo through a procedure called embryo biopsy. These cells are analyzed for the presence of chromosomal abnormalities that may contribute to failure of pregnancy. This sophisticated and technologically advanced testing attempts to identify embryos which are free of abnormalities and more able to achieve the patient’s goal of having a healthy baby.<br />
      In some situations, embryos may need to be frozen in case the testing results will take longer time to be available and the embryos will be transferred into the uterus in a future cycle.<br />
      Informed Consent for the treatment is essential and has to be completed by both husband and wife.
`

    },
            "Preimplantation Genetic Diagnosis": {
      text: `
    Through Bnoon Medical Center, numerous pre implantation genetic diagnoses (PGD) are now possible. Couples, who are at risk of passing inherited genetic diseases to their children, can benefit from the new advances in genetic testing. Through PGD for inherited single gene disorders, Bnoon Medical Center helps couples to achieve their goal of having a healthy baby free from the genetic disorder that runs in the family.<br /><br />
      <strong>Genetic </strong><br /><br />
      There are hundreds of genetic disorders that can be diagnosed and PGD being offered. The following list shows example of genetic disorders in Saudi Arabia (but not limited to):
    `,
      image: "/images/treatments/pgs.jpg",
       bottomTextList: [
        "Sickel-cell anemia ",
        "Thalassemia",
        "Congenital glaucoma",
        "Bardet–Biedl syndrome",
        "Meckel–Gruber syndrome",
        "Organic acidemias ",
        "Lysosomal storage disorders ",
        "Retinal dystrophies",
        "Hearing loss ",
        "Primary microcephaly",
        "Sanjad-Sakati syndrome",
        "Joubert syndrome ",
        "Muscular dystrophy ",
        "Desanto-Shinawi syndrome ",
        "Waardenburg-Shah syndrome",
        "Hirschsprung’s disease",
        "Wolf-Hirschhorn syndrome",
        "Familial intrahepatic cholestasis ",
        "Aicardi-Goutieres syndrome",
        "Galactosemia",
        "Cystic fibrosis",
        "Other unlisted genetic disorders (briefing "
      ],
      bottomText: ``,
      secondText: `At Bnoon Center, we offer genetic counselling before attempting the PGD process. You will be explained the steps of PGD treatment. Both couple and affected child, if present, are required to give sample of blood to process it for pre-PGD testing to develop the genetic probes (6-8 weeks) and once are ready, you will be contacted by the PGD coordinator to arrange your visit to your physician to start the process of IVF.<br /><br />
      PGD is performed as a part of an In Vitro Fertilization cycle where multiple eggs are produced, retrieved from the ovaries and fertilized with the husband’s sperm in the Embryology Laboratory. IVF gives us access to embryo(s) in vitro. PGD is then performed by removing one or two cells from each embryo through a procedure called embryo biopsy. These cells are analyzed for the presence of the pre-identified genetic disorder. This sophisticated and technologically advanced testing attempts to identify embryos which are free of the pre-identified genetic disease. So couple will be more able to achieve their goal of having a healthy baby.<br /><br />
      Often, embryos need to be frozen for testing results to be available (1-2 weeks) and the embryos will be transferred into the uterus in a future cycle. Informed Consent for the treatment is essential and has to be completed by both husband and wife.
`
    },
            "Recurrent Miscarriage": {
      text: `
    After three consecutive miscarriages, it is recognized that there may be an increased chance that there could be a specific or recurring underlying cause for this.<br /><br />
    The clinic aims to identify the cause of the repeated pregnancy losses by performing certain investigations and commence treatment appropriately.
    `,
      image: "/images/treatments/recurrent-miscarriage.jpg",
      
      bottomText: ``,
    },

         "Fertility Counselling": {
      text: `
      Through our dedicated fertility experts, you can schedule a counselling session to address you problem and discuss your specific concerns in a relax environment respecting your privacy and understanding your needs.<br /><br />
      <strong>Genetic Counselling</strong><br /><br />
      When planning to conceive, many couples will consider their own health, and that of their family, in terms of genetic conditions that they may pass on to their children. Bnoon Medical Center runs a dedicated Genetics Clinic for patients who wish to discuss the possibility of genetic testing, either
    `,
      image: "/images/treatments/fertility-counselling.jpg",
      bottomText: `for a specific condition or for chromosomal abnormalities, to minimize their chance of passing on a genetic condition to a child. Your initial contact will be with one of our dedicated clinic coordinators. They will ensure your enquiry is passed on to our Genetics team who will then contact you as soon as possible to discuss your individual circumstances. It is very useful if you are able to gather any specific information about your condition, your family history and/or previous diagnostic test results as you will be asked about this. Through our dedicated medical genetics experts, you can schedule a counselling session to address your problem and discuss your specific concerns in a relax environment respecting your privacy and understanding your needs.<br /><br />
      <strong>Prenatal Counselling</strong><br /><br />
      Through our dedicated maternal fetal medicine experts, you can schedule a counselling session to address your problem and discuss your specific concerns in a relax environment respecting your privacy and understanding your needs.
      <br /><br />
      <strong>Pre conceptional Counselling</strong><br /><br />
      Through our dedicated experts of reproductive medicine, maternal fetal medicine and medical genetics, you can schedule a counselling session to address your problem and discuss your specific concerns in a relax environment respecting your privacy and understanding your needs. Women who have pre-existing medical conditions in which pregnancy might be complicated or she has a risk being sicker if she gets pregnant will benefit from pre conceptional counselling and having a consensus opinion in regard to her family planning.
      `,
    },
       "Antenatal care deliveries": {
      text: `
     Bnoon Center is pleased to be the first and only reproductive medicine center that adopts these high-tech technological technologies in the Kingdom of Saudi Arabia.<br /><br />
     We are pleased to offer you the opportunity to enjoy good health
    `,
      image: "/images/treatments/antenatal-care-deliveries.jpg",
      bottomText: `
      `,
    },
    // ... add other tabs here
  };



  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const currentContent = tabContents[activeTab];

  return (
    
    <div className="ptb-140">
        <div className="fertility-area">
            <div className="container">
              <div className="section-title">
                <div className="row justify-content-center align-items-center g-4">
                  <div className="col-lg-12 col-md-12">
                    <div className="left">
                      <h2>Treatments at Bnoon</h2>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div className="container tabs-container">
        {/* Tabs buttons */}
       <div className="tabs-row-container mb-4 d-flex flex-wrap justify-content-center gap-2">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`tabs-btn ${activeTab === tab ? "active" : ""}`}
    onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>

<style jsx>{`
  @media (max-width: 768px) {
    .tabs-row-container {
      flex-wrap: nowrap !important;      /* ek line me rakhe */
      overflow-x: auto;                  /* scroll allow kare */
      justify-content: flex-start !important; /* scroll start se */
      -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
    }

    .tabs-row-container .tabs-btn {
      flex: 0 0 auto;   /* button shrink na ho */
      margin-right: 10px; /* buttons ke beech gap */
    }
        .image-col {
      order: -1; /* image ko top pe le aao */
      width: 100%; /* full width */
      margin-bottom: 15px;
    }
      .tabs-container {
    border: 1px solid #0000003d;
    padding: 10px 10px !important;
    /* margin: 0px 0px; */
}
  }
`}</style>
        {/* Tabs Content */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-lg-8 col-md-6">
            <div
              className="left mx-lg-3 treatment-text"
              dangerouslySetInnerHTML={{ __html: currentContent.text }}
            />
          </div>
          <div className="col-lg-4 col-md-6 image-col">
            <img
              src={currentContent.image}
              alt={activeTab}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Bottom text + list + second list + second text */}
        <div className="row mt-3">
          <div className="col-lg-11 mx-lg-3 treatment-text">
            {/* First bottom text */}
            <div dangerouslySetInnerHTML={{ __html: currentContent.bottomText }} />

            {/* First list */}
            {currentContent.bottomTextList && (
              <ul className="custom-list mt-3">
                {currentContent.bottomTextList.map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <Image
                      src="/images/icons/bnoon-symbol.avif"
                      alt="icon"
                      width={20}
                      height={20}
                      className="me-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

      {/* Extra text (if available) */}
{currentContent.extraText && (
  <div className="mt-3">{currentContent.extraText}</div>
)}

            {/* Second list */}
            {currentContent.secondlist && (
              <ul className="custom-list mt-3">
                {currentContent.secondlist.map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <Image
                      src="/images/icons/bnoon-symbol.avif"
                      alt="icon"
                      width={20}
                      height={20}
                      className="me-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Second text */}
            {currentContent.secondText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.secondText }}
              />
            )}
          </div>
        </div>
           <style jsx global>{`
.tabs-container {
    width: 1280px;
}
    .tabs-btn {
    padding: 8px 12px;
}
      @media only screen and (max-width: 767px) {
.tabs-container {
    width: 350px;
}
    .treatment-text{
    font-size: 14px;
    }
      }

  `}</style>
      </div>
    
    </div>
  );
};

export default TreatmentsSection;
