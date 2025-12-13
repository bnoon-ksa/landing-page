"use client";

import React, { useState, useEffect } from "react";
import CustomList from "@/components/Common/CustomList";

interface TabContent {
  text: string;
  image: string;
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
const tabToHash = (tab: string) =>
  tab
    .toLowerCase()
    .replace(/[’']/g, "")   // apostrophe remove
    .replace(/\s+/g, "-");  // spaces → dash

const FertilityTabs: React.FC = () => {
  const tabs = [
    "Helpful Tips for Fertility",
    "Foods that Boost Fertility",
    "Causes of Male Infertility",
    "Causes of Female Infertility",
    "Woman’s Biologic Clock",
    "Ovulatory Dysfunction",
    "Endometriosis",
    "Ovarian Cysts",
    "Uterine Fibroids & Infertility",
    "Recurrent Miscarriage",
    "Recurrent IVF Failure",
  ];

  const tabContents: Record<string, TabContent> = {
    "Helpful Tips for Fertility": {
      text: `
        It should come as no surprise that the lifestyle you lead directly affects your fertility. From making healthy lifestyle choices to supplementing your intake of important nutrients, there are many things you can do outside of the clinic to improve and maintain your chances of becoming pregnant.
        Whether you are in the beginning stages of family planning or are currently seeking assistance from a fertility clinic, simple lifestyle adjustments and extra daily supplements can promote fertility.
        There are several important changes you and your partner can make before and during fertility treatments to increase the chance of successful conception. We recommend making these lifestyle modifications if you are considering becoming pregnant.
      `,
      image: "/images/fertility-guide/Helpful-Tips-for-Fertility.avif",
      bottomText: `
        <strong>​ALCOHOL</strong><br />Avoid alcohol use. Alcohol has been shown to cause birth defects in fetuses. In addition, patients who drink have a decrease in fertility rates, particularly with IVF and miscarriage rates have been shown to double compared to those who don’t drink alcohol. This has also similar effect on your husband.<br /><br />
        <strong>SMOKING</strong><br />Stop smoking and stay away from anyone who is smoking. Smoking has been implicated in infertility and earlier menopause. Smoking reduces success with IVF by about 50% and passive smoking has similar effects. This has also similar effect on your husband.<br /><br />
        <strong>DRUGS AND MEDICATIONS</strong> <br />Stop recreational drugs and unnecessary medications. Please stop all medically unnecessary drugs prior to attempting pregnancy. If you are taking medications prescribed by another physician, please let us know so we can determine if the medications are safe to take when trying to conceive and during pregnancy. This goes for your partner as well.<br /><br />
        <strong>PHYSICAL ACTIVITY AND WEIGHT LOSS</strong> <br />Increase physical activity and lose weight if necessary. If you are overweight, it is a good idea to lose weight before trying to conceive. We encourage you to be physically active and to get your body into the best shape you can. In one study, obese women who exercised regularly had a three times higher chance of success with IVF. Women who are not obese should avoid strenuous exercise. Any level appears to be helpful for obese women.<br /><br />
        <strong>Exercise for Enhancing Fertility</strong> <br />A healthy lifestyle where exercise is routine aids in successful conception in both men and women. Choose a moderate and consistent exercise routine that you can stick with. Since strenuous exercise can have a negative impact on achieving a successful pregnancy for the female. Moderate aerobic activities are advisable. Exercise enough to raise your heart rate, which decreases oxidative stress and increases blood flow without fully taxing your body.
      `,
      secondlist: [
        "Walking – Brisk, 30-minute walks 5-6 times per week burn calories and increase blood flow without stressing the body too harshly.",
        "Swimming – This whole-body workout strengthens your core without placing too much stress on your joints. Keep an eye on your pace; your goal is to maintain a comfortable rhythm for at least 20 minutes that leaves you feeling invigorated, not gasping for breath.",
        "Other Light Cardio – Light elliptical workouts, easy bicycling, or slow jogging are all great ways to get your heart pumping. But keep your resistance and speed moderate; a good pace is when you can still hold a full conversation during your workout."
      ],
    },

    "Foods that Boost Fertility": {
      text: `
        Changing your diet can increase your fertility and can positively affect your chances of becoming pregnant. There are several foods you can add or remove from your diet that can impact your overall chances of becoming pregnant.<br /><br />
        <strong>THINGS TO EAT AND THINGS TO AVOID</strong><br />
        We recommend reducing red meat intake, eliminating Trans fats (such as donuts, pastries and all fried foods), and ensuring that at least 50% of every meal is composed of fruits and vegetables. Use olive oil for bread, dressings and cooking. It’s high in monounsaturated fat, which may be beneficial for women undergoing IVF treatment, and is good for general health. Reducing sugar intake is always a good idea.<br />
        Overcooking foods should be avoided.<br />
        Many delicious foods are high in antioxidants and should be incorporated into your regular diet. Here are some other popular foods that have naturally high antioxidant content:
      `,
      image: "/images/fertility-guide/Foods-that-Boost-Fertility.avif",
      bottomText: ``,
      secondlist: [
        "Blackberries",
        "Blueberries",
        "Strawberries",
        "Pomegranates",
        "Cranberries",
        "Raspberries",
        "Dark chocolate (low sugar)",
        "Artichokes (cooked)",
        "Spices (ex. ginger, oregano, turmeric, cumin)"
      ],
      secondText: `<strong>GREEN </strong>
      <br />
      Drinking daily green tea also increases antioxidant intake, however we do not recommend over one cup of decaffeinated green tea per day because the caffeine could interfere with fertility. Green tea is minimally processed, which maintains its healthy properties. Though the decaffeination process does reduce the antioxidant content, simply adding 50mg of liquid Vitamin C to each cup of decaffeinated green tea can significantly increase your antioxidant intake.<br /><br />
      <strong>CAFFEINE </strong>
      <br />
      Excessive consumption of caffeinated products by the female, such as coffee, tea, colas, and chocolate may decrease fertility, although studies are conflicting. To be cautious, limit intake to a minimum. A maximum of one cup per day is advised. Caffeine is not harmful for the male partner’s fertility. <br /> <br />
      <strong>SUPPLEMENTS </strong>
      <br />
      Other nutritional supplements have antioxidant properties and increase blood flow, helping to promote healthy conditions for eggs and embryos.
      `,
      extraList: [
        "Prenatal vitamin tablets are good idea to use few months before thinking of infertility treatment.",
        "Omega-3 may improve success in embryo implantation, decrease premature labor and have positive effects on fetal brain development.",
        "Folic acid is found naturally in dark, leafy greens (i.e., spinach, broccoli, avocado, and fortified cereals). Prenatal vitamins usually contain 400-800 micrograms of Folic Acid per day to reduce the risk of a small, but very important, group of fetal abnormalities (Skull, Spines and heart).",
      ]
    },

    "Causes of Male Infertility": {
      text: `
        Similar to female’s contribution to infertility, male infertility factors contribute to approximately 40% of all infertility cases. 
        There are four main causes of infertility in males:<br />
      `,
      image: "/images/fertility-guide/Causes-of-Male-Infertility.avif",
      bottomText: ``,
      secondlist: [
        "Hypothalamic/Pituitary disorders (1-5%)",
        "Gonad disorders (35%)",
        "Sperm transport disorder (15%)",
        "Unknown causes (45%)"
      ],
      secondText: `
        Male infertility usually occurs because of problems in sperm production or sperm transport. 
        Sperm abnormalities include low number, low motility, abnormal shape or short lifespan.<br />
        Sperm abnormalities may be caused by one or more of the following:
      `,
      extraList: [
        "Inflammation of the testes",
        "Swollen veins in the scrotum (varicocele)",
        "Underdeveloped testes",
      ],
      thirdText: `
        Reasons for a low sperm count or lack of sperm include one or more of the followings:
      `,
      thirdList: [
        "A pre-existing genetic condition",
        "Use of alcohol, tobacco or other drugs",
        "Severe mumps infection after puberty",
        "Hernia repairs",
        "Hormonal disorders",
        "Exposure to poisonous chemicals",
        "Exposure to radiation",
        "Blockage caused from a previous infection",
        "Wearing restrictive or tight underwear",
        "Injury to the groin area"
      ],
      fourText: `
      Male infertility can also occur when there are problems with ejaculation. Ejaculation problems may include any of the followings:
      `,
        fourList: [
        "Premature ejaculation",
        "Retrograde ejaculation, which occurs when the semen is forced back into the bladder",
        "Erection dysfunctions",
        "Complications from radiation therapy or surgery"
        ],
         fiveText: `
     Other causes of male infertility can include:
      `,
        fiveList: [
        "History of STD’s",
        "Urinary tract infections",
        "Use of certain types of medications"
        ],
         sixText: `
      Assess the likelihood of infertility:<br /><br />
      Potential male infertility will be assessed as part of a thorough evaluation. The evaluation will include reviewing the medical history regarding potential contributing factors. Your Physician (Andrologist) may use one or more of the following tests to assess fertility:
      `,
        sixList: [
        "Semen analysis to determine the number and quality of sperm",
        "Blood test to check for infections or hormone problems. Hormone levels are just as important in male fertility as they are in female fertility",
        "Making a culture of fluid from the penis to check for infections",
        "Physical examination of the penis, scrotum and prostate"
      ],
           sevenText: `
      When semen analysis is done, your health care provider will be looking for some specific markers to access fertility.
      `,
        sevenList: [
        "Total amount or volume of semen – 2 milliliters is considered normal. A lower amount may indicate an issue with the seminal vesicles, blocked ducts or a prostate gland issue.",
        "Sperm count – 15 million or more per milliliter is considered normal range for sperm counts. Below 10 million is considered “poor.”",
        "Morphology – the size and shape of the sperm affect the sperms’ ability to reach and fertilize an egg. At least 4% of sperms of normal shape in the sample is considered normal.",
        "Motility – movement and number of active sperms. At least 32% of sperms should have forward active movement to be considered normal."
      ],
           eightText: `
      How is male infertility treated?<br /><br />
      Male infertility is most often treated by conventional methods that include one or more of the following:
      `,
        eightList: [
        "Taking medications to help increase sperm production",
        "Taking antibiotics to heal an infection",
        "Taking hormones to improve hormone imbalance",
        "Avoiding taking long hot showers, using hot tubs or saunas",
        "Wearing looser underwear such as boxer shorts versus jockey shorts"
      ],
           nineText: `
      Sperm production may also improve by taking clinically proven supplements. Anything that increases the number of healthy sperm increases the chances of conception.<br /><br />
      Intrauterine insemination is an option if the man’s sperm count or movement is slightly low. In this procedure, sperm is collected through multiple ejaculations. Then after washing and concentrating the samples will be placed in the female’s uterus.<br /><br />
      In vitro fertilization is another and better option that can be used to overcome male infertility factors. In this procedure, the sperm and egg are fertilized in a laboratory after which the fertilized egg (formed embryo) is placed in the female’s uterus.<br /><br />
      There is usually nothing that can be done to prevent male infertility caused by genetic problems or illness. However, there are actions that men can take to decrease the possibility of infertility. These include:
      `,
        nineList: [
        "Avoiding sexually transmitted diseases",
        "Avoiding illicit drugs",
        "Avoiding radiation when possible",
        "Avoiding exposure to chemicals toxic substances",
        "Avoiding use of alcohol",
        "Observing good personal hygiene and health practices",
        "Avoiding long, hot baths, hot tubs or saunas",
        "Wearing loose-fitting underwear"
      ],
    },
    "Causes of Female Infertility": {
      text: `
       A variety of factors can impact fertility in women and men. Generally speaking, it is recommended that a woman under 35 who has been trying to get pregnant for a year, or a woman over 35 who has been trying for six months, consult with a fertility specialist to determine the best course of action. Women who have had more than three recurrent miscarriages should also seek the care of a specialist. Many women who have had miscarriages go on to have healthy pregnancies, but it could signal a fertility problem. Keep in mind that infertility issues are common, one in eight couples have trouble conceiving.<br />
       Female infertility is quite common, which is not surprising given the complex set of the normal events that must occur in order to give birth. Female infertility factors contribute to approximately 40% of all infertility cases. Normally, a woman’s body must:
      `,
      image: "/images/fertility-guide/Causes-of-Female-Infertility.avif",
      bottomText: ``,
      secondlist: [
        "Have a good reserve of healthy eggs",
        "Mature the eggs properly within the ovaries at the right time and pace",
        "Have clear fallopian tubes so that both the egg and sperm can enter and meet",
        "Develop a normal lining in the uterus at the right time to welcome an embryo",
        "Allow proper implantation of the embryo",
        "Fully nourish the fetus throughout its development during pregnancy",
        "Carry it for the full term"
      ],
      secondText: `
        It is a complicated process that does not always go as planned. However, our physicians, along with cutting-edge technology and advanced medical techniques, can help resolve a large number of fertility issues.<br /><br />
        The most common causes of female infertility include problems with ovulation, damage to the fallopian tubes or uterus, or problems with the cervix. Age can contribute to infertility because as a woman ages, her fertility naturally tends to decrease.<br /><br />
        Ovulation problems may be caused by one or more of the following:
      `,
      extraList: [
        "A hormone imbalance",
        "A tumor or cyst in the ovaries",
        "Eating disorders such as anorexia or bulimia",
        "Alcohol or drug use",
        "Thyroid gland problems",
        "Excess weight",
        "Stress",
        "Intense exercise that causes a significant loss of body fat below normal",
        "Extremely brief menstrual cycles",
      ],
      thirdText: `
        Damage to the fallopian tubes or uterus can be caused by one or more of the following:
      `,
      thirdList: [
        "Pelvic inflammatory disease",
        "A previous infection",
        "Polyps in the uterus",
        "Endometriosis or fibroids",
        "Scar tissue or adhesions",
        "Chronic medical illnesses",
        "A previous ectopic (tubal) pregnancy",
        "Congenital anomalies of the genital trac"
      ],
      fourText: `
      Abnormal cervical mucus can also cause infertility. Abnormal cervical mucus can prevent the sperm from reaching the egg or make it more difficult for the sperm to penetrate the egg.
      `,
     
    },
     "Woman’s Biologic Clock": {
      text: `
      We believe that every woman needs the facts about her biological clock. Start here to learn more about fertility age and how time really affects your ability to have a healthy baby.<br /><br />
      Not every egg leads to a baby, no matter how young you are. It’s a common misconception that we have a 100% chance of pregnancy each time we ovulate (i.e., each month). Because a certain percentage of our eggs are abnormal at any age, and because fertilization has to happen within a narrow window after ovulation occurs, even a young, healthy woman trying to get pregnant has only about a 20% chance each month.<br /><br />
      Fertility goes into a sharper decline around age of 35 – over 10 years before reaching menopause.
      `,
      image: "/images/fertility-guide/Womans-Biologic-Clock.avif",
      bottomText: ``,
     
      secondText: `
        As women, our reproductive life begins when we get our first period, usually around age 12 (puberty), and lasts until our last menstrual period, usually around age 52 (menopause). But because egg count (ovarian reserve) and egg quality decline as we age, we don’t remain fertile for the entirety of this timespan.<br /><br />
        Women under the age of 35 have about a 20% chance of getting pregnant naturally each cycle. By the age of 40, the chance of getting pregnant naturally each month is just 5%. After that, natural conception declines faster.<br /><br />
        In fact, statistics from scientific research for women undergoing In Vitro Fertilization (IVF) shows that pregnancy rate also declines with advanced age. IVF pregnancy rate in women below the age of 35 may range from 40-50% and it decreases to 30% by age of 40 and it declines even more after age of 43 to less than 5%.<br /><br />
        As you age, the DNA inside your eggs begins to degrade. Because your eggs have been with you since before you were born, they are exposed to all sorts of damaging, but mostly unavoidable, influences throughout our lives: fevers, infections, stress, toxins, and free radicals. Because eggs are fragile and easily damaged, this exposure can lead to chromosomal abnormalities which affects their abilities to produce normal embryos ready for implantation and occurrence of pregnancy.<br /><br />
        There is no test for egg quality. The only way to know if an egg is chromosomally normal is to attempt to fertilize it outside the body, and, if fertilization is successful, to perform a genetic test on the embryo. But because damage to our DNA happens naturally and inevitably over time, your age can give a fairly accurate picture of what percentage of your eggs are normal.<br /><br />
        This is a fact<br /><br />
        Because age directly correlates with egg quality, and therefore the ability of the egg to fertilize into a healthy pregnancy, it’s the age of the egg that matters most when it comes to fertility. Seeking help for fertility treatment at younger age makes it much more meaningful.<br />
        If you are ready to get proactive about your fertility future, you can schedule a fertility assessment today at Bnoon Medical Center to meet one of our fertility experts.
      `,
    },
         "Ovulatory Dysfunction": {
      text: `
      Ovulation is the release of an egg from the ovary. This must happen in order to achieve pregnancy naturally. If ovulation is irregular, but not completely absent, this is called oligoovulation. Complete absence of ovulation is called anovulation. Ovulatory dysfunction is a common cause of female infertility, occurring in up to 40 percent of infertile women.<br /><br />
       Usually, women with ovulatory dysfunction will have irregular periods. In the worst case, they may not get their cycles at all. If your cycle occurs shorter than 21 days, or longer than 36 days, you may have ovulatory dysfunction. If your cycles fall within the normal range of 21 to 36 days, but the length of your cycles blood flow varies widely from month to month, that may also be a sign of ovulatory dysfunction.
      `,
      image: "/images/fertility-guide/Ovulatory-Dysfunction.avif",
      bottomText: ``,
  
    },
        "Endometriosis": {
      text: `
     Endometriosis occurs when endometrial tissue, which normally lines the uterus, is found elsewhere in the body. The most common sites of endometriosis include ovaries, Fallopian tubes and pelvic cavity. This tissue starts to act just like normal uterine tissue. During menstruation the tissue starts to bleed. As this happens, scar tissue starts to form, usually in the pelvic region. The scar tissue and endometriosis can then lead to potential problems and cause infertility.<br /><br />
     Endometriosis<br /><br />
     Endometriosis is a common condition and associated with increased chance of having trouble with conceiving. Common signs and symptoms of endometriosis may include:
      `,
      image: "/images/fertility-guide/Endometriosis.avif",
      bottomText: ``,
        secondlist: [
        "Painful periods. Pelvic pain and cramping may begin before your period and extend several days during your period. You may also have low back and abdominal pain.",
        "Deep pain in the vagina with deep intercourse.",
        "Pain with bowel movements or urination.",
        "Excessive bleeding during periods.",
        "Infertility. Endometriosis may be first diagnosed in some women who are seeking treatment for infertility.",
        "Other symptoms. You may also experience fatigue, diarrhea, constipation, bloating or nausea, especially during menstrual periods.",
        "Some women with endometriosis don’t have such symptoms."
      ],
      secondText: `
        There are other conditions may have similar symptoms but it is not endometriosis.<br />
        There are other conditions may have similar symptoms but it is not endometriosis. Endometriosis is often confused with these conditions like pelvic inflammatory disease, ovarian cysts and irritable bowel syndrome.<br /><br />
        Endometriosis symptoms usually affect women who have never had children. The disease has a strong genetic link. If one of your relatives has endometriosis, then you are six times more likely to have endometriosis, too. Other factors for endometriosis to occur include:
      `,
      extraList: [
        "Menstrual cycles that occur in less than 28 days",
        "Menstrual bleeding lasting more than 5 days",
        "Congenital abnormality of the uterus",
        "Abnormally tight cervical opening",
      ],
      thirdText: `
        Diagnosis of endometriosis<br /><br />
        Diagnosis of endometriosis is usually made through careful history taking regarding your period by your physician and diagnostic imaging like ultrasound. However, laparoscopy is considered to be the best diagnostic tool to confirm the diagnosis but not always necessary in each woman.<br />
        The main complication of endometriosis is impaired fertility. Endometriosis may obstruct the tube and prevent the egg and sperm to meet. But the condition also affects fertility indirectly like damaging the sperm or egg. The lining of the uterus is also affected indirectly by endometriosis by interfering with embryo implantation.<br /><br />
        Important issues<br /><br />
        Although, many women with mild to moderate endometriosis can still conceive and carry a pregnancy to term, fertility physicians advise women with endometriosis not to delay having children because the condition may worsen with time.
        One important issue for women who are known to have endometriosis and difficulty in conceiving is consult as early as possible a fertility expert to discuss her management plan and treatment options since her ovarian reserve may worsen faster than usual compared to other women without endometriosis.
      `,
    },
      "Ovarian Cysts": {
      text: `
     An ovarian cyst is a fluid-filled sac that develops on a woman’s ovary. They’re very common and don’t usually cause any symptoms. Ovarian cysts may affect both ovaries at the same time, or they may only affect one. Most ovarian cysts occur naturally and disappear in a few months without needing any treatment. Most ovarian cysts develop as a result of your menstrual cycle (functional cysts) and considered to be a normal phenomenon. Other types of cysts are much less common.<br /><br />
     Functional cysts are usually harmless, rarely cause pain, and often disappear on their own within two or three menstrual cycles. There are two types of functional cysts:
      `,
      image: "/images/fertility-guide/Ovarian-Cysts.avif",
      bottomText: ``,
        secondlist: [
        "Follicular cyst which begins when the follicle doesn’t rupture and release the egg.",
        "Corpus luteum cyst which forms after rupture and releasing the egg and, therefore, fluid accumulates inside the follicle, causing the corpus luteum to grow into a cyst."
      ],
      secondText: `
       Other types of cysts include:
      `,
      extraList: [
        "Hemorrhagic cysts are blood-filled cysts that occur when the wall of a cyst ruptures. This rupture can cause bleeding into the cyst resulting in a  hemorrhagic cyst. This is also a normal phenomenon and often disappears by itself.",
        "Dermoid cysts which contain tissue, such as hair, skin or teeth, because they form from embryonic cells. They’re rarely cancerous.",
        "Endometriomas which develop as a result of endometriosis.",
      ],
      thirdText: `
      The vast majority of ovarian cysts are non-cancerous (benign) and a small number are cancerous. Cancerous cysts are more common in women who have been through the menopause.<br /><br />
      Complications associated with ovarian cysts include:
      `,
      thirdList: [
        "Ovarian twisting which occurs as a result of enlarged cyst and cause abrupt onset of severe pelvic pain, nausea and vomiting. Ovarian twisting can interrupt the blood flow going to the ovary and affect its function.",
        "Cyst Rupture which causes severe pain and internal bleeding."
      ],
      fourText: `
     <strong>Treatment of ovarian cysts</strong><br /><br />
     Treatment of ovarian cysts could be by taking medications or by performing surgery. Medical or surgical treatment depends on the type of cyst and its burden on the woman’s health.<br /><br />
     If you have a functional cyst, your physician may prescribe birth control pills to help make it smaller or disappeared. If you get ovarian cyst often, birth control pills decrease the chance of new ones forming.<br /><br />
     If ovarian cyst twisting is suspected, your physician may need to perform surgery on your ovary to restore back and remove the cyst.<br />
     Remember that each kind of cyst is treated differently. Accurate diagnosis leads to proper treatment.
      `,
     
    },
          "Uterine Fibroids & Infertility": {
      text: `
     The uterus is composed of a thick layer called ‘myometrium’ surrounding a thin lining called ‘endometrium’ into which the embryo implants and which serves to protect and nourish a growing pregnancy. It is the endometrium which is shed each month during the menstruation.<br /><br />
     It is very common condition and, approximately, 50% of all reproductive age women will develop benign growths of the myometrium, called fibroid tumors. These tumors are rarely malignant. They can be located in the wall of the uterus, on the outside surface of the uterus or within the uterine cavity.<br /><br />
     Most fibroids start as very small lesions and they can grow to large size.<br />
     Symptoms
      `,
      image: "/images/fertility-guide/Uterine-Fibroids-Infertility.avif",
      bottomText: ``,

      secondText: `
       Fibroids, even large ones, can occur without producing any symptoms at all. However, they can also cause a variety of symptoms depending on their size and location. The most common symptoms are heavy menstrual bleeding accompanied by menstrual pain if fibroid is protruding into the uterine cavity. Some fibroids are large and causing pressure symptoms on the adjacent organs like bladder or colon, pain with deep penetration during sexual intercourse, bladder irritability, rectal pressure, constipation and painful bowel movements.<br /><br />
       Effect of uterine fibroids on fertility<br /><br />
       Most uterine fibroids don’t affect fertility, only those fibroids that protrude into the uterine cavity affect fertility. Exceptions include large intramural fibroids that block the openings of the fallopian tubes into the uterus.<br /><br />
       The diagnosis<br /><br />
       The diagnosis can be easily made by ultrasound examination of the pelvis. However, sometimes it is difficult to tell if the fibroid is affecting the uterine cavity. Therefore, many women seeking fertility treatment need to make sure that the uterine cavity is intact if the ultrasound examination is inconclusive. To make sure that the uterine cavity is intact, a minor procedure called hysteroscopy is recommended.<br /><br />
       Most women are advised to surgically remove the affected fibroid. However, there are other non-surgical treatments that are either not effective or relatively more harmful than surgery.<br />
       If you suffer infertility and fibroid, fertility experts are the best physicians to consult. They, often, discuss informed choices and which surgical intervention works better for your condition.
      `,
    },
      "Recurrent Miscarriage": {
      text: `
     Recurrent miscarriage is defined as the loss of three or more consecutive pregnancies in the first few months of gestation. Generally, the risk of miscarriage in any given pregnancy is about 15-20%. Following three consecutive miscarriages, the risk of further miscarriage is about 40%. Furthermore, women may develop recurrent miscarriage after a successful pregnancy.<br /><br />
     Recurrent miscarriage often leaves patients feeling disheartened and frustrated about their situations and more stressful if it is combined with infertility. Both infertility and recurrent miscarriage may have overlapping causative factors.<br /><br />
     Causes of recurrent miscarriages may include:
      `,
      image: "/images/fertility-guide/Recurrent-Miscarriage.avif",
      bottomText: ``,
        secondlist: [
        "Advanced maternal age",
        "Chromosomal abnormality",
         "Antiphospholipid syndrome",
          "Uterine congenital anomalies",
           "Intrauterine Scar tissue",
            "Multiple intramural and submucosal fibroids",
             "Cervical incompetence",
              "Polycystic ovary syndrome",
               "Uncontrolled diabetes mellitus",
                 "Thyroid Disease",
                "Immunological factors",
                 "Inherited thrombophilia",
                  "Infections"
      ],
      secondText: `
       Accurate history and relevant investigations may identify factors contributing to recurrent miscarriage and help in the treatment plan of future pregnancy. Treatment is suggested according to the cause or possible cause of recurrent miscarriage.<br /><br />
       Losing a pregnancy can make you worry, wondering if you will ever be able to get pregnant again or have a healthy baby. You may even be asking yourself if you did something wrong or could have prevented this somehow. 50% of all miscarriages, the cause is never determined. But on the bright side, most women who experience one or several miscarriages will ultimately go on to have healthy babies.
      `,
    },
      "Recurrent IVF Failure": {
      text: `
     Recurrent IVF failure is defined when a patient undergoes multiple cycles of embryo transfer without resulting pregnancy. This is one of the most frustrating and stressful conditions for both patient and physician.<br /><br />
     Several reasons may explain failed implantation. It could be due to the embryo or endometrium or both. Other co-factors may be involved. However, in many cases we cannot explain the reason for recurrent IVF failure.<br /><br />
     The most known causes of IVF failure are:
      `,
      image: "/images/fertility-guide/Recurrent-IVF-Failure.avif",
      bottomText: ``,
        secondlist: [
        "Advanced maternal age",
        "Slow embryo development in the IVF Lab",
         "Thick shell on the embryo and difficulty in hatching",
          "Intrauterine abnormalities like; polyp, fibroid, scaring or inflammation.",
           "Fluid collection inside Fallopian tubes",
            "Fluid collection inside uterine cavity",
             "Difficult embryo transfer technique",
              "Immunological factors",
               "Chromosomal abnormalities in the embryos",
                 "Maternal medical illnesses",
                "Suboptimal ovarian stimulation during IVF cycle",
                 "Poor sperm quality"
      ],
      secondText: `
       Examinations<br />
       Management of recurrent IVF failure is a challenging process and has financial impact of couples. Several investigations are required in this kind of women to identify possible treatable causes or factors.  <br /><br />
       Common investigations include:
      `,
      thirdList: [
        "Thyroid Function",
        "Thrombophilia screen",
        "Immunological testing",
        "Hysteroscopy",
        "Chromosomal testing",
        "Diabetes Screen",
        "Endometrial Receptivity Array (ERA)"
      ],
      fourText: `
      Usually, the management is directed towards the cause if recognized. However, commencing treatment improves the outcome but it doesn’t always mean the pregnancy will occur. In many circumstances, no cause is identified (unexplained recurrent IVF failure) but your physician may try empiric therapy hoping it may improve the outcome. <br /><br />
      Treatment modalities <br /><br />
      The following treatment modalities are widely used for recurrent IVF failure based on your assessment by your physician:
      `,
        fourList: [
        "Endometrial scratching",
        "Endometrial receptivity array (ERA)",
        "Prednisolone",
        "Intralipid therapy",
        "Freezing all Day 5 embryos in fresh cycle and replacing them in non-stimulated cycle",
        "Proper management of male factor by an andrologist to improve sperm quality before attempting IVF cycle"
        ],
         fiveText: `
     Not all women with recurrent IVF failure are the same. Therefore, planning future IVF cycle with your physician depends on careful review of your condition and the records of your previous cycles.
      `,
    },
  };

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const currentContent = tabContents[activeTab];

  return (
    <div className="ptb-140">
      <div className="container tabs-container">
        {/* Tabs buttons */}
        <div className="tabs-row-container mb-4 d-flex flex-wrap justify-content-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tabs-btn ${activeTab === tab ? "active" : ""}`}
             onClick={() => {
  setActiveTab(tab);
  const hash = tabToHash(tab);
  history.replaceState(null, "", `#${hash}`);
}}

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
              className="left mx-lg-5"
              dangerouslySetInnerHTML={{ __html: currentContent.text }}
            />
          </div>

          <div className="col-lg-4 col-md-6 image-col ">
            <img
              src={currentContent.image}
              alt={activeTab}
              className="img-fluid fertilitytabs-image"
            />
          </div>
        </div>

        {/* Bottom text + lists */}
        <div className="row mt-3">
          <div className="col-lg-11 mx-lg-5">
            <div dangerouslySetInnerHTML={{ __html: currentContent.bottomText }} />

            <CustomList items={currentContent.bottomTextList} />

            {currentContent.extraText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.extraText }}
              />
            )}

            <CustomList items={currentContent.secondlist} />

            {currentContent.secondText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.secondText }}
              />
            )}

            <CustomList items={currentContent.extraList} />
              {currentContent.thirdText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.thirdText }}
              />
            )}
            <CustomList items={currentContent.thirdList} />
             {currentContent.fourText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.fourText }}
              />
            )}
            <CustomList items={currentContent.fourList} />
             {currentContent.fiveText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.fiveText }}
              />
            )}
            <CustomList items={currentContent.fiveList} />
             {currentContent.sixText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.sixText }}
              />
            )}
            <CustomList items={currentContent.sixList} />
             {currentContent.sevenText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.sevenText }}
              />
            )}
            <CustomList items={currentContent.sevenList} />
             {currentContent.eightText && (
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: currentContent.eightText }}
              />
            )}
            <CustomList items={currentContent.eightList} />
             {currentContent.nineText && (
              <div
                className="mt-3"
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

export default FertilityTabs;
