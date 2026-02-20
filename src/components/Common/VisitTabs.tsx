'use client';

import React, { useState, useEffect } from 'react';

import CustomList from '@/components/Common/CustomList';
import OptimizedImage from '@/components/ui/OptimizedImage';
const tabToHash = (tab: string) =>
  tab
    .toLowerCase()
    .replace(/\//g, '') // slash remove
    .replace(/\s+/g, '-'); // spaces → dash

interface TabContent {
  text: string;
  imageName: string;
  bottomText: string;
  bottomTextList?: string[];
  secondlist?: string[];
  secondText?: string;
  extraList?: string[];
  extraText?: string;
  thirdText?: string;
  thirdList?: string[];
  fourText?: string;
  fiveText?: string;
  sixText?: string;
  fourList?: string[];
  fiveList?: string[];
  sixList?: string[];
  sevenText?: string;
  eightText?: string;
  nineText?: string;
  sevenList?: string[];
  eightList?: string[];
  nineList?: string[];
}

const VisitTabs: React.FC = () => {
  const tabs = [
    'Your First Visit',
    'Out of Town Patients',
    'IVF monitoring',
    'Egg Collection',
    'Embryo Transfer/Replacement',
  ];

  const tabContents: Record<string, TabContent> = {
    'Your First Visit': {
      text: `
       You may feel helpless and hopeless when pregnancy does not come easily. You might even feel alone, like no one understands what you are going through. 15% of married couples deal with delayed conception. This means you are not alone and rest assured that your situation is not hopeless.<br />
       Wondering what to take with you to your first fertility clinic appointment? Here are things that you do not want to leave behind:<br /><br />
       Your partner<br /><br />
       A list of questions to ask your fertility physician (do not be afraid to speak up and advocate for yourself!). Please pay attention to your time during the visit and don’t lose time by remembering and suffering the past. Make use of your present time where we all care for you.

​ `,
      imageName: 'visit-first-clinic',
      bottomText: `
        <strong>Documents including your medical history</strong><br />Documents including your medical history, hospital discharge summaries, laboratory test results, results of medical imaging examinations (e.g. ultrasound), medical reports with attached test results confirming the diagnosis and treatment, information about previous surgeries and interventions (including inseminations, IVF programs) and other documents providing the basis for the verification of your medical situation by the previous physicians.<br /><br />
        This would be helpful to save your time and commence your treatment as early as possible.<br />
        When it comes to infertility, time is not always on your side. The sooner you seek help and begin treatment, the better your chances of success.<br /><br />
        At your first fertility appointment, your doctor will ask you many questions to make an accurate diagnosis. Be prepared to share details about the followings:<br /><br />
        Previous pregnancies, births, and miscarriages
      `,
      secondlist: [
        'Ovulation and menstrual cycle patterns',
        'Current and past symptoms, medications, surgeries, illnesses, and injuries',
        'Exposures to environmental toxins or major life stressors.',
        'Any family history of infertility or reproductive health problems',
        'Certain illnesses like sexually transmitted diseases (STDs), pelvic inflammatory disease (PID), and others',
        'Birth defects and previous surgeries',
        'Scar tissue, fibroids, or polyps in the uterus',
        'Scar tissue, fibroids, or polyps in the uterus',
      ],
      secondText: `If you have had any other health issues, be initiative and prepared to discuss them with your fertility physician.<br />
       After your first appointment, you may need to come back for more fertility tests.
      <br /><br />
      Fertility tests may include hormonal tests, ultrasound, hysterosalpingography, semen analysis and other additional tests may be required based on your condition.<br /><br />
      After extensive review, your physician will create a fertility treatment plan just suitable for you. Our goal is to maximize your chance of getting pregnant and having a healthy baby.<br /><br />
      After the first visit, follow-up the instruction given to you and any fertility tests request must be completed before the next visit. Fertility testing results will be communicated between you and the center through our coordinators in order to be discussed with your physician in your next clinic visit.
      `,
    },

    'Out of Town Patients': {
      text: `
        Couples from all over the Kingdom of Saudi Arabia and Gulf Region turn to Bnoon Center for outstanding, personalized In Vitro Fertilization (IVF) treatment and care. Our extraordinary success rates and experienced team of dedicated consultants make us one of the top fertility centers in the Gulf Region.<br /><br />
        We take care to ensure that each of our patients feels well cared for and supported during their journey to growing their family. Infertility treatment coupled with travel and distance can be tiring, so it is particularly important that we do everything we can to ease the journey for our long-distance patients.<br /><br />
        Many delicious foods are high in antioxidants and should be incorporated into your regular diet. Here are some other popular foods that have naturally high antioxidant content:
      `,
      imageName: 'visit-out-of-town',
      bottomText: `Our center is located in an excellent area of the City of Riyadh and walking distance from ‘Granada Center’, one of the largest shopping malls in the city, and Hilton Riyadh hotel where the Metro station is located. Our location is close to the airport making the access from and to the airport via Metro or car is easy and away from heavy traffic. Even for travellers by the car from outside Riyadh, the famous junction between North ring, East ring and Dammam highway makes it easy and accessible to get to Bnoon by avoiding the downtown congestion.<br /><br />
      Do some checks<br /><br />
      Couples residing outside Riyadh are of special consideration in terms of fertility testing and follow-up visits. Some tests can be done in your local area of residence as necessary. However, commencing fertility treatment requires close monitoring and planned dates for visits will be addressed to you. You are not required to stay in Riyadh during the journey of your treatment unless you are instructed by your physician.<br />
     Your commitment to your follow-up gives the expected results and outcome of fertility treatment. Missing or delaying follow-up during treatment may affect the treatment outcome.<br /><br />
     If you face any problem during follow-up, because of missing flight or long way to Riyadh, please address it to your physician or treatment coordinator through telephone call on the numbers given to you in order to instruct you what to do next.
      `,
    },

    'IVF monitoring': {
      text: `
        On the first day of your period (normal flow) you have to call Bnoon Medical Center (011-444-8080) to schedule an appointment on day 2-3 of your period to have ultrasound scan done and necessary blood work. On the same day of ultrasound, your physician will review your case and, depending on the results, you will start ovarian stimulation using daily Gonadotropins injection starting from day 2-3 and may last for 8-12 days depending on ovarian response.<br /><br />
        The daily dose of medications will be decided by your physician tailored to your case. You need to be monitored, during this period, for 3-4 times as required. Example of medications:
      `,
      imageName: 'visit-ivf-monitoring',
      bottomText: ``,
      secondlist: [
        'Gonal F Pen: is given subcutaneously. Gonal F comes in multi-dose Pen (300 – 450 – 900 – 1200 IU).',
        'Menopur: is given subcutaneously. Menopur comes in ampule (75 – 600 – 1200 IU).',
        'Merional: is given intramuscular or subcutaneously. Merional comes in ampule (75 – 150 IU).',
        'Menogon: is given is given intramuscular or subcutaneously. Merional comes in ampule (75 IU).',
      ],
      secondText: `
        MOINTORING<br /><br />
        Additional drugs for example like ‘Cetrotide 0.25 mg’ will be added during the process of ovarian stimulation in order to control the cycle. These medications must be taken according to the date decided by your physician and usually it is started after 4 days from ovarian stimulation.<br />
        Please take all these medications at the same time. Preferably, you propose a time between noon time to sunset but NOT too early in the morning or too late in the evening.<br /><br />
        Some medications are self-injectable ‘under the skin of abdomen or thighs and our nursing staff will teach on how to do that by yourself or your husband. Some other medications are given as intramuscular injection; therefore, a nurse has to give the injection. You will receive detailed written instructions for each medication alone.<br /><br />
        Once reasonable numbers of mature follicles are developed, you will be given HCG injection to promote final egg maturation. Around 36 hours after HCG injection, your will be scheduled for the procedure of egg collection. This injection is vital and essential for egg collection and MUST be taken on the correct date and time.<br /><br />
        Your husband is required to have abstinence 2-4 days before the day egg collection.<br />
        Please be aware that the goal of close monitoring is to control the treatment cycle and produce mature eggs. In case of, either over response or under response, your physician may cancel the cycle and adjust the treatment plan for the future cycle.
      `,
    },
    'Egg Collection': {
      text: `
      <strong>Before Egg Collection:</strong><br /><br />
      You will need to fill out various forms including your IVF treatment and surgical consents. Please ensure both of you, as couple, read and signed all forms before the day of egg collection. Incomplete consent forms may end up by cancellation of your treatment.<br />
      Please ask your physician if you are unsure what medications you should continue to take.<br />
      You will be required to refrain from eating and drinking from midnight the night before the day of egg collection.
      `,
      imageName: 'visit-egg-collection',
      bottomText: `<strong>Day of egg collection:</strong><br /><br />
      You will be asked to arrive at 07:30 AM prior to your procedure to meet with a pre-op nurse and your anesthesia physician. It is very important that you come at the correct time in order to ensure that your case is not delayed. You should contact our center immediately if you are running late.<br />
      Please DON’T FORGET to bring your original, valid identifications with you and present them to our staff upon arrival.<br />
      For Saudi: National ID cards for both husband and wife + family card.<br />
      For Non-Saudi: Iqama Cards for both husband and wife + marriage certificate<br />
      Please do not wear lotion, makeup, perfume or jewellery.<br />
      You will need someone to drive you home from the center after the egg collection due to the IV sedation, please avoid public transportation. We recommend that a responsible adult or caregiver remain with you at home for the rest of the day following the egg collection.<br /><br />
      <strong>MOINTORING</strong><br /><br />
      After egg collection, it is common to feel sleepy and possibly experience mild pain, nausea, and slight dizziness. It is important to not schedule any business or social activity directly following your procedure to give yourself time to rest completely that day. Most patients tend to feel fine the day after their procedure and are able to go back to work.<br /><br />
      Keep in mind that the ovaries will often be enlarged and intercourse may be somewhat uncomfortable. We therefore recommend that you avoid sexual intercourse following the procedure till after embryo transfer to reduce the chance of pain. Otherwise, sexual intercourse is not harmful after that period of time.<br /><br />
      It is normal to have mild vaginal bleeding after egg collection. It, often, comes from the vaginal wall ‘the area of needle penetration’. Usually, it lasts for 3 days but if you feel that the bleeding is heavier than a period and you change your pad more frequently, every less than 30 minutes, in the next 4 hours after the procedure then you have to contact your physician or treatment coordinator at the center.<br />
      Egg collection is one day procedure and it is recommended to stay in the town over night to ensure everything is going well with you. You can travel outside town by next day if you are OK.<br /><br />
      On the same day of egg collection, you have to follow the instructions of starting vaginal and oral Progesterone at night, then twice from next day till the day embryo transfer and through the day of pregnancy test, as Bnoon’s protocol.<br /><br />
      Any additional adjuvant treatment prescribed by your physician should be started on the same day of egg collection at night. Example: Antibiotics, Aspirin, Clexane, Injectable Progesterone, etc.<br /><br />
      Some of these medications are for short term and others are for longer term of period, therefore take them as exactly instructed by our team.
      On next day after egg collection, you will be contacted by our canter through treatment coordinator to check on you and make sure all are well and you will be informed about your eggs and fertilization outcome as well as the expected day of embryo transfer. If any new information appears during this period till the day of embryo transfer you will be contacted and informed.
      `,
    },
    'Embryo Transfer/Replacement': {
      text: `
      The embryo transfer will be done 3-5 days after the egg collection. It is a simple procedure where a soft catheter will be loaded with the best formed embryos and then introduced inside the cavity of the uterus to place the embryos. Embryo implantation will take place in the next coming few days and pregnancy test will be apparent after 14 days from the day of embryo transfer.<br /><br />
      <strong>Before performing the procedure</strong><br /><br />
      You will be asked to have full bladder before performing the procedure to facilitate introduction of the soft catheter into the uterus. You DON’T need to be fasting.
      `,
      imageName: 'visit-embryo-transfer',
      bottomText: `<strong>MOINTORING</strong><br /><br />
      After embryo transfer you will remain for 30 minutes in the recovery room, however, you can go to the toilet any time if you need to. You can go home that day and you are NOT prohibited from your normal activity but avoid exertion like; heavy exercise, lifting or pushing heavy objects.<br />
      You can avoid sexual intercourse 2-3 days from this day BUT it is not harmful after that period.<br /><br />
      You can travel by car or airplane next day, if you need to, since there is no evidence this will be harmful. If you are working, you can resume your work from next day following embryo transfer.<br /><br />
      You are required to continue on the same medication as before embryo transfer and as instructed by your physician. It is normal to have brownish vaginal discharge because of progesterone hormone used for luteal support.<br /><br />
      This brownish vaginal discharge is not considered bleeding and you don’t need to do anything about it.<br /><br />
      In case of bright red spotting or bleeding red from the vagina you need to contact the center and consult your physician for further instruction.
      Usually, you will be instructed to either increase the dose of progesterone already using or adding other form of progesterone to the current ones.<br /><br />
      Please follow the instruction of your physician since each case is a unique.<br /><br />
      If your quantitative pregnancy test is positive, then you need to repeat it, at least, after 48 hours to ensure it is progressing normally. If all are well, continue all medications until you see your physician.<br /><br />
      You will be scheduled 2-3 weeks later to have pregnancy ultrasound to ensure pregnancy location and viability.<br /><br />
      We understand that the waiting period of 2 weeks before pregnancy test is stressful for both couples. However, staying faithful, optimistic and going back to your normal usual activities and avoiding bedridden life helps a lot in minimizing stress and promotes your self-confidence.
`,
    },
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
                  <h2>Your Journey to Parenthood with Bnoon</h2>
                </div>
              </div>
            </div>
            <p>
              At Bnoon, we’re committed to making your journey with us as smooth, reassuring, and
              supportive as possible. Whether it’s your first visit or a follow-up appointment, our
              team is here to guide you every step of the way — from understanding your treatment
              options to ensuring a comfortable experience at our centers. This page outlines
              everything you need to know before your visit, so you can feel informed, confident,
              and fully prepared.
            </p>
          </div>
        </div>
      </div>
      <div className="container tabs-container">
        {/* Tabs buttons */}
        <div className="tabs-row-container mb-4 d-flex flex-wrap justify-content-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tabs-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                const hash = tabToHash(tab);
                history.replaceState(null, '', `#${hash}`);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .tabs-row-container {
              flex-wrap: nowrap !important; /* ek line me rakhe */
              overflow-x: auto; /* scroll allow kare */
              justify-content: flex-start !important; /* scroll start se */
              -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
              font-size: 14px;
            }

            .tabs-row-container .tabs-btn {
              flex: 0 0 auto; /* button shrink na ho */
              margin-right: 10px; /* buttons ke beech gap */
            }
            .image-col {
              order: -1; /* image ko top pe le aao */
              width: 100%; /* full width */
              margin-bottom: 15px;
            }
            .treatment-text {
              font-size: 14px !important;
            }
            .tabs-container {
              border: 1px solid #0000003d;
              padding: 10px 10px !important;
              /* margin: 0px 0px; */
              width: 350px;
            }
          }
        `}</style>
        {/* Tabs Content */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-lg-8 col-md-6">
            <div
              className="left mx-lg-5 treatment-text"
              dangerouslySetInnerHTML={{ __html: currentContent.text }}
            />
          </div>

          <div className="col-lg-4 col-md-6 image-col">
            {tabs.map((tab) => (
              <div key={tab} style={{ display: activeTab === tab ? '' : 'none' }}>
                <OptimizedImage
                  imageName={tabContents[tab].imageName}
                  alt={tab}
                  className="img-fluid fertilitytabs-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text + lists */}
        <div className="row mt-3">
          <div className="col-lg-11 mx-lg-5 treatment-text">
            <div dangerouslySetInnerHTML={{ __html: currentContent.bottomText }} />

            <CustomList items={currentContent.bottomTextList} />

            {currentContent.extraText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.extraText }}
              />
            )}

            <CustomList items={currentContent.secondlist} />

            {currentContent.secondText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.secondText }}
              />
            )}

            <CustomList items={currentContent.extraList} />
            {currentContent.thirdText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.thirdText }}
              />
            )}
            <CustomList items={currentContent.thirdList} />
            {currentContent.fourText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.fourText }}
              />
            )}
            <CustomList items={currentContent.fourList} />
            {currentContent.fiveText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.fiveText }}
              />
            )}
            <CustomList items={currentContent.fiveList} />
            {currentContent.sixText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.sixText }}
              />
            )}
            <CustomList items={currentContent.sixList} />
            {currentContent.sevenText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.sevenText }}
              />
            )}
            <CustomList items={currentContent.sevenList} />
            {currentContent.eightText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.eightText }}
              />
            )}
            <CustomList items={currentContent.eightList} />
            {currentContent.nineText && (
              <div
                className="mt-3 treatment-text"
                dangerouslySetInnerHTML={{ __html: currentContent.nineText }}
              />
            )}
            <CustomList items={currentContent.nineList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitTabs;
