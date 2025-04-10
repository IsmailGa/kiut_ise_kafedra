import React from "react";
import bg_two from "@/public/assets/section_five/bg_two.png";
import bg_three from "@/public/assets/section_five/bg_three.png";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowRotated } from "@/public/icons";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { useTranslations } from "next-intl";


const Courses = () => {
  const t = useTranslations("courses");

  return (
    <>
      <Navbar />
      <div
        className="w-full flex flex-col 2xl:mt-[120px] mt-[95px] py-[10px]"
        id="courses"
      >
        <Container>
          <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px] items-center">
            <h1 className="2xl:text-[56px] xl:text-[40px] text-[32px] font-semibold leading-[100%]">
              {t("title")}
            </h1>
            <p className="2xl:max-w-[667px] max-w-[580px] xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[120%] text-center">
              {t("description")}
            </p>
          </div>
          {/* CARDS */}
          <div className="grid md:grid-cols-2 grid-cols-1 items-center flex-col gap-[30px] 2xl:mb-[65px] mb-[45px]">
            {/* CARD ONE */}
            <Link href="/courses/bachelors">
              <div className="xl:h-[310px] h-[280px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                <div className="flex items-start justify-between w-full ">
                  <h1 className="xl:text-[32px] text-[24px] font-semibold leading-[135%]">
                    {t("cards.one.title")}
                  </h1>
                </div>
                <div className="flex gap-[10px] items-center max-xl:flex-col">
                  <p className="text-[14px] font-semibold py-[10px] z-[1] px-[15px] bg-white rounded-[10px] self-start">
                    {t("cards.one.descriptionOne")}
                  </p>
                  <p className="text-[14px] font-semibold py-[10px] z-[1] px-[15px] bg-primary text-white rounded-[10px] self-start">
                    {t("cards.one.descriptionTwo")}
                  </p>
                </div>
                <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
                  <ArrowRotated style="fill-inherit max-xl:w-[22px] max-xl:h-[22px]" />
                </div>
                <div className="absolute xl:w-[310px] z-[0] w-[250px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
                  <Image
                    src={bg_two}
                    alt="section_five_bg 1"
                    className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"
                  />
                  <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#85C8ED] to-[#CBA2E4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
                </div>
              </div>
            </Link>
            {/* CARD TWO */}
            <Link href="/courses/masters">
              <div className="xl:h-[310px] h-[280px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                <div className="flex items-start justify-between w-full ">
                  <h1 className="xl:text-[32px] text-[24px] font-semibold leading-[135%]">
                    {t("cards.two.title")}
                  </h1>
                </div>
                <div className="flex gap-[10px] items-center max-xl:flex-col">
                  <p className="text-[14px] font-semibold z-[1] py-[10px] px-[15px] bg-white rounded-[10px] self-start">
                    {t("cards.two.descriptionOne")}
                  </p>
                  <p className="text-[14px] font-semibold z-[1] py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
                    {t("cards.two.descriptionTwo")}
                  </p>
                </div>
                <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
                  <ArrowRotated style="fill-inherit max-xl:w-[22px] max-xl:h-[22px]" />
                </div>
                <div className="absolute xl:w-[310px] z-[0] w-[250px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
                  <Image
                    src={bg_three}
                    alt="section_five_bg 2"
                    className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"
                  />
                  <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#8EA9EC] via-[#E5CA6A] to-[#F5F5F4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
            <h1 className="2xl:text-[42px] lg:text-[32px] text-[28px] font-semibold leading-[120%]">
              {"Introduction"}
            </h1>
            <p className="xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[145%]">
              Department of Software invites students to the master’s and Ph.D. programs. We invited Professor Won Kim, a world-renowned scholar in the field of database and information management, to establish the undergraduate program in 2010. In 2014, the same year when the Class of 2014 became the first graduating class of our department, we established the graduate program focusing on information management and IoT (Internet of Things).
              Currently, software has become the core element of computers and mobile devices, and information management technology plays a pivotal role. Information management involves the storage, search, transfer and visualization of various and vast information, as well as the structure that can efficiently process these functions in a distributed environment. Big data and cloud computing, both of which are receiving a lot of attention, are part of information management technology.
              With the curriculum and research directions designed personally by Professor Kim, we are taking steps to augment our top-tier undergraduate education with top-tier research capabilities. Class and research schedule will accommodate the work schedule of working professionals who are interested in learning cutting-edge information management technology. Moreover, scholarships and research grants will be awarded to graduate students based on their research contribution.
            </p>
          </div>
          <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
            <h1 className="2xl:text-[42px] lg:text-[32px] text-[28px] font-semibold leading-[120%]">
              {"Admission"}
            </h1>
            <p className="xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[145%]">
              To apply to our graduate program, please refer to the information below. For more details, please visit the Gachon University Graduate School website.
              <ul className="flex flex-col gap-2 list-disc pt-[8px] pl-[20px]">
                <li>Eligibility : Applicants should have a bachelor’s degree in software-related major from a four-year university in Korea or overseas. Eligible applicants also include graduation candidates and working professionals.</li>
                <li>How to apply : Apply online (http://www.jinhakapply.com) and submit documents to the Graduate School Administrative Office.</li>
                <li>Other inquiries : Graduate School (☎ 031-750-5021~4), Department of Software (e-mail swdm@gachon.ac.kr, ☎ 031-750-8659)</li>            
              </ul>
            </p>
          </div>
          <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
            <h1 className="2xl:text-[42px] lg:text-[32px] text-[28px] font-semibold leading-[120%]">
              {"Benefits"}
            </h1>
            <p className="xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[145%]">
              <ul className="flex flex-col gap-2 list-decimal pl-[20px]">
                <li>
                  Full scholarship
                  <ul className="flex flex-col list-disc pl-[20px]">
                    <li>
                      Gachon University Scholarship : 75%+ of the tuition
                      <ul className="flex flex-col list-none pl-[20px]">
                        <li>- Gachon University Alumni: A minimum undergraduate GPA of 4.25 (100%) or 4.0 (75%)</li>
                        <li>- Research Promotion Scholarship: Awarded to students who publish their work in a KCI journal before graduation (75%)</li>
                      </ul>
                    </li>
                    <li>
                      Department of Software Scholarship:
                      <ul className="flex flex-col gap-2 list-none pl-[20px]">
                        <li>- 25% of the tuition + living expenses</li>
                        <li>- Graduate School TA scholarship: Awarded for each subject</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Undergraduate researchers selected at the start of each semester
                  <ul className="flex flex-col gap-2 list-disc pl-[20px]">
                    <li>Objective: To expand the scope of learning and promote research participation by providing opportunities to outstanding juniors and seniors to assist and participate in their advisors’ research</li>
                    <li>Benefits: National Software Program Scholarship and an assigned desk in the Graduate Students’ Office</li>
                    <li>Priority is given to students who enroll in the graduate program or in the Combined Bachelor’s and Master’s Program</li>
                  </ul>
                </li>
                <li>
                  Overseas training and internship
                  <ul className="flex flex-col gap-2 list-disc pl-[20px]">
                    <li>Winter 2015: UC Irvine, Monash University and La Trobe University (three current graduate students and one prospective graduate student)</li>
                    <li>Summer 2015-2017: UC Irvine, Monash University, La Trobe University, University of Waterloo, University of Minnesota, Purdue University and University of Arizona (all graduate students)</li>
                    <li>Graduate students are guaranteed to be given top priority for overseas training and internship opportunities</li>
                    <li>Priority is given to undergraduates who are expected to enroll in the Combined Bachelor’s and Master’s Program or graduate school</li>
                  </ul>
                </li>            
              </ul>
            </p>
          </div>
          <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
            <h1 className="2xl:text-[42px] lg:text-[32px] text-[28px] font-semibold leading-[120%]">
              {"Combined Bachelor’s and Master’s Program"}
            </h1>
            <p className="xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[145%]">
              <ul className="flex flex-col gap-2 list-decimal pl-[20px]">
                <li>
                  This is an accelerated master’s degree program. It allows students to receive a Bachelor of Science degree and a Master of Science degree in 5 to 5.5 years, rather than 6 years.
                </li>
                <li>
                  Eligibility by program
                  <ul className="flex flex-col gap-2 list-disc pl-[20px]">
                    <li>3.5 years (undergrad)+1.5 years (grad) : Students who have completed 5 semesters and earned at least 85 credits (graduation requirement: 120 credits) with a minimum GPA of 3.75. A letter of recommendation from the advising professor is required.</li>
                    <li>4 years (undergrad)+1.5 years (grad) : Students who are currently in their 5th to 7th semester with a minimum GPA of 3.5. A letter of recommendation from the advising professor is required. (Students enrolled in their 8th semester are not eligible)</li>
                  </ul>
                </li>
                <li>
                  Procedure and Required Documents
                  <ul className="flex flex-col gap-2 list-disc pl-[20px]">
                    <li>Fill out and submit the application form to the department</li>
                    <li>Additional documents : A transcript and letter of recommendation from advisor</li>
                  </ul>
                </li>            
              </ul>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Courses;
