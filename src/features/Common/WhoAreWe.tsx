import React from "react";
import Image from "next/image";
import { motion, Easing, easeOut } from "framer-motion";
const WhoAreWe = () => {
  const staticImage = "/images/about/who-we-are.avif";
// ⭐ Animation variant
  const slideInRight = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeOut },
    },
  };
  return (
    <div className="service-overview-area mb-5">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>من نحن</h2>
              <p>
                تأ سيس أسرة أو مواصلة بنائها هو أحد أعمق وأجمل القرارات التي يتخذها الإنسان، لكنه قد يكون من أكثرها حساسية وتعقيداً. ومع ارتفاع معدلات العقم وتغيّر أنماط الحياة، باتت خدمات الخصوبة حاجة ملحّة للعديد من الأزواج والأفراد في الشرق الأوسط — سواء لأسباب طبية، أو لاختيارات شخصية كحفظ الخصوبة، أو للجوء إلى التقنيات المساعدة للإخصاب لبناء أسرة صحية ومتوازنة۔

              </p>

              <p>


                من هنا وُلدت "بنون - "اسم يحمل في طيّاته جوهر رسالتنا۔
                <br />
                كلمة "بنون" مستمدّة من اللغة العربية الفصحى، وتعني "الأبناء" — في تعبير شعري يجسّد رؤيتنا التي تتمحور حول العائلة والامتداد، والحياة الجديدة۔
                <br />
                تُقدم "بنون" تجربة مختلفة في عالم طب الخصوبة؛ حيث تلتقي الخبرة العلمية بالتفهّم الإنساني. يضم فريقنا نخبة من الاستشاريين المتخصصين في الخصوبة والوراثة الإنجابية، ممن جمعوا بين التدريب والخبرة العالمية والرؤية للاحتياجات المحلية۔


              </p>
              <p>

                ورغم تعدد المراكز في المنطقة، تسعى "بنون" إلى إحداث فارق حقيقي — من خلال التركيز على الجودة والابتكار وتحقيق أفضل النتائج الممكنة، لا مجرد تقديم العلاج۔
                <br />
                نحن نؤمن بأن الزوجين هما المحور، وأن كل رحلة نحو الأبوّة والأمومة تستحق رعاية متميزة، قائمة على العلم، مدعومة بأحدث التقنيات، ومبنية على شراكات مع مؤسسات وخبراء  عالميين۔
              </p>
              <p>
                بنون هي جزء من شبكة جلوبال فيرتيليتي، وتضم حالياً مركزين متقدمين في الرياض وجدة، كما أن مركزها الرائد في شمال الرياض على طريق الملك سلمان قيد الإنشاء، والمقرر افتتاحه

                نهاية عام 2025. توسَع الشبكة يشمل أيضاً مراكز جديدة في أبها والخبر، ومدن أخرى ضمن

                رؤية شاملة لتقديم علاجات الإخصاب عالية المستوى في مختلف أنحاء المملكة۔

              </p>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
              <motion.div
              initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.3 }}
                                  variants={slideInRight}
              className="service-overview-image"
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src={staticImage}
                alt="Service overview"
                width={580}
                height={450}
              />
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
