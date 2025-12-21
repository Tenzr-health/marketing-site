import Link from "next/link";
import { assets } from "@/public/assets/images";

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-4 md:gap-8 items-start pb-4 md:pb-8 w-full">
      {/* Header Section */}
      <div className="flex flex-col items-start w-full">
        {/* Navigation */}
        <header className="bg-white border-b-2 border-[#cdbee6] flex items-center justify-between pb-[18px] pt-10 px-4 md:px-6 lg:px-12 w-full">
          <div className="flex-1">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="h-6 md:h-9 relative w-32 md:w-[234px]">
                <div className="absolute inset-[22.19%_0_14.2%_18.64%]">
                  <img
                    alt="Tenzr"
                    className="block w-full h-full"
                    src={assets.logoText}
                  />
                </div>
                <div className="absolute inset-[0_84.7%_0_0]">
                  <img
                    alt=""
                    className="block w-full h-full"
                    src={assets.logoIcon}
                  />
                </div>
              </div>

              {/* Navigation Links - Hidden on mobile, shown on tablet+ */}
              <nav className="hidden md:flex gap-6 items-center justify-end flex-1 p-2">
                <Link
                  href="#about"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  About
                </Link>
                <Link
                  href="#features"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-end pl-0 lg:pl-12 w-full">
          <div className="flex-1 flex items-center justify-between">
            {/* Hero Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-8 items-start px-4 md:px-12 lg:px-0">
              <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
                <h1 className="text-[40px] font-bold text-[#212529] leading-none w-full">
                  <span className="block">Connected Care,</span>
                  <span className="block">Continuous Recovery</span>
                </h1>
                <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] w-full md:w-[448px]">
                  Provide guidance, education, and exercises while receiving
                  data, recovery signals, and insights to monitor progress and
                  flag risks
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-[#845ec0] flex gap-2 items-center px-8 py-4 rounded-full"
              >
                <span className="text-[21px] md:text-[16px] text-white leading-[1.4]">
                  Book a Demo
                </span>
                <img src={assets.arrowIcon} alt="" className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero Image - Hidden on mobile, shown on lg */}
            <div className="hidden lg:block h-[449px] overflow-clip relative w-[431px] flex-shrink-0">
              <div className="absolute h-[514px] left-[99px] top-[-55.8px] w-[343px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-full left-[-51.94%] max-w-none top-[-3.17%] w-[225.15%]"
                    src={assets.heroPerson}
                  />
                </div>
              </div>
              <div className="absolute h-[625px] left-[59px] mix-blend-hard-light top-[-135.8px] w-[414px]">
                <div className="absolute inset-[4.7%_2.67%_0.25%_0.12%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={assets.heroOverlay3}
                  />
                </div>
              </div>
              <div className="absolute h-[636px] left-[39px] mix-blend-hard-light top-[-135.8px] w-[434px]">
                <div className="absolute inset-[4.62%_2.58%_0.2%_0.12%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={assets.heroOverlay4}
                  />
                </div>
              </div>
              <div className="absolute h-[639px] left-[15px] top-[-115.8px] w-[445px]">
                <div className="absolute inset-[4.73%_1.13%_0.17%_0.13%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={assets.heroOverlay5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Section */}
      <section
        id="about"
        className="bg-[#f7f4fb] flex flex-col gap-4 md:gap-8 items-center pb-4 md:pb-8 pt-2 md:pt-4 px-4 md:px-12 w-full"
      >
        {/* Recovery Happens in Daily Life */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center w-full">
          <div className="flex flex-col gap-2 md:gap-4 items-start w-full lg:w-[512px]">
            <h2 className="text-[32px] font-bold text-[#212529] leading-normal w-full">
              Recovery Happens in Daily Life
            </h2>
            <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] w-full">
              Most recovery takes place while patients are living their lives —
              working, caring for family, or doing chores.
              <span className="text-[#845ec0]">
                {" "}
                The time between clinic visits is when patients can feel unsure,
                preventable setbacks can occur, and outcomes can suffer.
              </span>
            </p>
          </div>
          <div className="hidden md:flex bg-transparent h-[300px] md:h-[378px] overflow-hidden relative rounded-[16px] shadow-[0px_16.87px_33.741px_-8.098px_rgba(0,0,0,0.25)] w-full md:w-[263px] flex-shrink-0">
            <img
              alt="Person watering plant"
              className="absolute inset-0 w-full h-full object-cover"
              src={assets.personWateringPlant}
            />
            <img
              alt=""
              className="absolute inset-0 w-full h-full mix-blend-hard-light"
              src={assets.subtract}
              style={{ filter: "opacity(0.5)" }}
            />
            <img
              alt=""
              className="absolute inset-0 w-full h-full mix-blend-hard-light"
              src={assets.subtract1}
              style={{ filter: "opacity(0.5)" }}
            />
          </div>
        </div>

        {/* Bridging the Gap */}
        <div className="flex gap-8 items-center">
          <div className="bg-transparent h-[381px] overflow-hidden relative rounded-[16px] shadow-[0px_16.981px_33.963px_-8.151px_rgba(0,0,0,0.25)] w-[265px]">
            <img
              alt="Plants representing growth"
              className="absolute inset-0 w-full h-full object-cover"
              src={assets.plantImage}
            />
            <img
              alt=""
              className="absolute inset-0 w-full h-full mix-blend-hard-light"
              src={assets.subtract2}
              style={{ filter: "opacity(0.5)" }}
            />
            <img
              alt=""
              className="absolute inset-0 w-full h-full mix-blend-hard-light"
              src={assets.subtract3}
              style={{ filter: "opacity(0.5)" }}
            />
          </div>
          <div className="flex flex-col gap-4 items-start w-[512px]">
            <h2 className="text-[32px] font-bold text-[#212529] leading-normal w-full">
              Bridging the Gap Between Visits
            </h2>
            <div className="text-[16px] text-[#495057] leading-[1.4] w-full">
              <p className="mb-0">
                Tenzr extends the clinician&apos;s care beyond the clinic —
                ensuring every patient is{" "}
                <span className="text-[#845ec0]">
                  guided, supported, and set up for success.
                </span>
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                It keeps patients moving with continuous guidance while
                preserving clinician time; if risk emerges, it offers clear,
                actionable prompts clinicians want to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section
        id="features"
        className="flex flex-col gap-4 items-center justify-center px-12 py-4 w-full"
      >
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex flex-col md:flex-row items-center w-full">
              <h2 className="text-[32px] font-bold text-[#212529] leading-normal">
                Platform Features
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <p className="flex-1 text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                Everything you need to deliver exceptional care and improve
                patient outcomes.
              </p>
            </div>
          </div>

          {/* Feature Cards - Horizontal scroll on mobile, grid on tablet+ */}
          <div className="flex flex-row md:flex-col gap-4 items-stretch w-full overflow-x-auto pb-6 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {/* Row 1 (Desktop) / Cards (Mobile) */}
            <div className="flex flex-row md:flex-row gap-4 items-stretch w-full">
              {/* Card 1 */}
              <div className="flex-shrink-0 w-[80vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] snap-center">
                <div className="w-[92px] h-[92px]">
                  <img
                    src={assets.workoutIcon}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] text-center">
                  Tailored to your workflows and patient population
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-[80vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] snap-center">
                <div className="w-[92px] h-[92px]">
                  <img
                    src={assets.featureIcon1}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] text-center">
                  Maximize the value of each appointment with recovery data
                  since the last visit
                </p>
              </div>
            </div>

            {/* Row 2 (Desktop) / Cards (Mobile) */}
            <div className="flex flex-row md:flex-row gap-4 items-stretch w-full">
              {/* Card 3 */}
              <div className="flex-shrink-0 w-[80vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] snap-center">
                <div className="w-[92px] h-[92px]">
                  <img
                    src={assets.featureIcon2}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] text-center">
                  Extend clinical capacity by addressing provider shortages and
                  expanding access to care
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex-shrink-0 w-[80vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] snap-center">
                <div className="w-[92px] h-[92px]">
                  <img
                    src={assets.featureIcon3}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] text-center">
                  Unlock reimbursement opportunities through RTM, RPM, CCM, and
                  Value-Based Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Workflow Section */}
      <section className="bg-[#e9e2f4] flex flex-col gap-2 md:gap-4 items-center justify-center pb-2 md:pb-4 w-full">
        {/* Header */}
        <div className="bg-[#f7f4fb] flex flex-col lg:flex-row gap-[10px] items-center lg:items-start justify-center lg:justify-start overflow-hidden pb-2 md:pb-4 pt-8 md:pt-14 px-4 md:px-12 w-full">
          <div className="flex-1 flex flex-col gap-2 md:gap-4 items-start md:items-center lg:items-start justify-center w-full">
            <div className="flex items-center overflow-hidden w-full">
              <div className="flex-1 text-[32px] font-bold text-[#212529] leading-normal">
                <p className="mb-0">A Seamless Workflow</p>
                <p>for Connected Recovery</p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <p className="flex-1 text-[21px] md:text-[16px] text-[#495057] leading-[1.4] text-center md:text-left">
                Built Around Your Practice, Not the Other Way Around
              </p>
            </div>
          </div>
        </div>

        {/* Workflow Cards - Horizontal scroll on mobile, stack on desktop */}
        <div className="flex flex-row lg:flex-col gap-4 items-stretch overflow-x-auto pb-6 px-4 md:px-12 w-full snap-x snap-mandatory scrollbar-hide">
          {/* Card 1 - Deliver Personalized Programs */}
          <div className="flex-shrink-0 w-[85vw] lg:w-full bg-white border-2 border-[#cdbee6] flex flex-col lg:flex-row gap-4 items-start justify-center px-4 md:px-[18px] py-[34px] rounded-[24px] snap-center">
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-start w-full">
                <p className="text-[22px] md:text-[20px] font-medium text-[#212529] leading-normal">
                  Deliver Personalized Programs From Day One
                </p>
                <ul className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] list-disc pl-6">
                  <li>
                    Clinicians assess each patient&apos;s needs and goals as
                    usual during the first.
                  </li>
                  <li>
                    ​With Tenzr, that plan is extended into a digital format —
                    giving patients guided.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block relative flex-shrink-0">
              <div className="relative">
                <img
                  src={assets.shadow}
                  alt=""
                  className="absolute left-0 bottom-0 w-[311px] h-[2px] mix-blend-multiply"
                />
                <img
                  src={assets.zenBookDuo14}
                  alt="Laptop showing dashboard"
                  className="w-[295px] h-[156px]"
                />
                <img
                  src={assets.changeThis1}
                  alt=""
                  className="absolute top-[7px] left-[44px] w-[222px] h-[125px]"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Patients Actively Engage */}
          <div className="flex-shrink-0 w-[85vw] lg:w-full bg-white border-2 border-[#cdbee6] flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center px-4 md:px-[18px] py-[34px] rounded-[24px] snap-center">
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <p className="text-[20px] font-medium text-[#212529] leading-normal">
                  Patients Actively Engage in Their Recovery
                </p>
                <ul className="text-[16px] text-[#495057] leading-[1.4] w-full lg:w-[512px] list-disc pl-6">
                  <li>
                    Clinicians assess each patient&apos;s needs and goals as
                    usual during the first.
                  </li>
                  <li>
                    ​With Tenzr, that plan is extended into a digital format —
                    giving patients guided.
                  </li>
                  <li>
                    ​With Tenzr, that plan is extended into a digital format —
                    giving patients guided.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0">
              {/* Phone 1 */}
              <div className="relative">
                <img
                  src={assets.iPhone16Pro}
                  alt="iPhone showing app"
                  className="w-[123px] h-[292px]"
                />
                <img
                  src={assets.changeThis3}
                  alt=""
                  className="absolute top-[4px] left-[3px] w-[109px] h-[285px] rounded-[20px]"
                />
              </div>
              {/* Phone 2 */}
              <div className="relative">
                <img
                  src={assets.iPhone16Pro1}
                  alt="iPhone showing app"
                  className="w-[123px] h-[292px]"
                />
                <img
                  src={assets.changeThis5}
                  alt=""
                  className="absolute top-[4px] left-[11px] w-[109px] h-[285px] rounded-[20px]"
                />
              </div>
            </div>
          </div>

          {/* Card 3 - Clinicians Review & Adjust */}
          <div className="flex-shrink-0 w-[85vw] lg:w-full bg-white border-2 border-[#cdbee6] flex flex-col lg:flex-row gap-4 items-center justify-center px-[18px] py-[34px] rounded-[24px] snap-center">
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-start w-full">
                <p className="text-[20px] font-medium text-[#212529] leading-normal">
                  Clinicians Review & Adjust with Ease
                </p>
                <ul className="text-[16px] text-[#495057] leading-[1.4] w-full lg:w-[512px] list-disc pl-6">
                  <li>
                    Clinicians assess each patient&apos;s needs and goals as
                    usual during the first.
                  </li>
                  <li>
                    ​With Tenzr, that plan is extended into a digital format —
                    giving patients guided.
                  </li>
                  <li>
                    ​With Tenzr, that plan is extended into a digital format —
                    giving patients guided.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[253px] w-[268px] relative overflow-hidden mt-4 lg:mt-0">
              <img
                src={assets.zenBookDuo15}
                alt="Laptop"
                className="absolute top-0 left-[25px] w-[420px] h-[238px]"
              />
              <div className="absolute top-[26px] left-[18px] w-[86px] h-[204px]">
                <img
                  src={assets.iPhone16Pro}
                  alt="iPhone"
                  className="w-full h-full"
                />
                <img
                  src={assets.changeThis7}
                  alt=""
                  className="absolute top-[3px] left-[5px] w-[76px] h-[199px] rounded-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="flex flex-col gap-2 md:gap-4 items-start px-4 md:px-12 w-full"
      >
        <div className="flex flex-col gap-2 md:gap-4 items-center justify-center w-full">
          <div className="h-[113px] w-[143px]">
            <img
              src={assets.jumping}
              alt="Tenzr mascot"
              className="w-full h-full"
            />
          </div>
          <h2 className="text-[32px] font-bold text-[#212529] leading-normal text-center">
            Testimonials
          </h2>
        </div>

        {/* Therapist Testimonials */}
        <div className="flex flex-col gap-2 md:gap-4 items-center w-full">
          <p className="text-[22px] md:text-[20px] font-medium text-[#212529] leading-normal text-center w-full px-4">
            Hear from our Therapists
          </p>
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-8 items-start justify-center p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] w-full">
            <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
              &quot;Ensuring patients stay engaged and committed to their
              rehabilitation once they leave the clinic can be a challenge. With
              Tenzr, we can monitor their progress in real-time, helping to
              provide timely adjustments to their treatment plans. We&apos;re
              seeing firsthand how it boosts patient engagement and empowers
              them in their recovery. It&apos;s a support system that extends
              beyond the walls of the clinic.&quot;
            </p>
            <div>
              <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                Natalie Thornley
              </p>
              <p className="text-[14px] text-[#495057] leading-[17.84px]">
                Occupational Therapist and Interprofessional Clinical Leader
              </p>
            </div>
          </div>
        </div>

        {/* Patient Testimonials */}
        <div className="flex flex-col gap-2 md:gap-4 items-center w-full">
          <p className="text-[22px] md:text-[20px] font-medium text-[#212529] leading-normal text-center w-full px-4">
            Hear from our Patients
          </p>
          <div className="flex flex-row md:flex-row gap-4 items-stretch w-full overflow-x-auto pb-6 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {/* Patient Card 1 */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] snap-center">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;Since physical therapy is mostly at home, some people
                (like me) just need a kick in the butt to do their exercises,
                which is what Tenzr does.&quot;
              </p>
              <div className="mt-4">
                <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                  Michael L.
                </p>
                <p className="text-[14px] text-[#495057] leading-[17.84px]">
                  Patient
                </p>
              </div>
            </div>

            {/* Patient Card 2 */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] snap-center">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;You never know if you&apos;re doing the right thing or not
                when exercising. That&apos;s why this is such an amazing tool,
                especially because in-person appointments can be few and far
                between.&quot;
              </p>
              <div className="mt-4">
                <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                  Sarah D.
                </p>
                <p className="text-[14px] text-[#495057] leading-[17.84px]">
                  Patient
                </p>
              </div>
            </div>

            {/* Patient Card 3 */}
            <div className="flex-shrink-0 w-[85vw] md:w-auto md:flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] snap-center">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;Overall, the Tenzr app has made me more committed to my
                physical therapy program, and I&apos;m seeing the results.&quot;
              </p>
              <div className="mt-4">
                <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                  Lydia G.
                </p>
                <p className="text-[14px] text-[#495057] leading-[17.84px]">
                  Patient
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="flex flex-col items-center overflow-hidden px-4 md:px-12 py-2 md:py-4 w-full">
        <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
          <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
            Learn more about Tenzr and receive the latest insights in
            physical/occupational therapy
          </p>
          <Link
            href="/contact"
            className="bg-[#845ec0] flex gap-2 items-center px-8 py-4 rounded-full"
          >
            <span className="text-[21px] md:text-[16px] text-white leading-[1.4]">
              Sign up for newsletter
            </span>
            <img src={assets.arrowIcon} alt="" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f4fb] flex flex-col items-center overflow-hidden px-4 md:px-12 py-2 md:py-4 w-full">
        <div className="flex flex-col md:flex-row h-auto md:h-[194px] items-start justify-between w-full gap-4 md:gap-0">
          <div className="flex flex-col gap-2 md:gap-4 items-start w-full md:w-[296px]">
            <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
              Get in touch with us!
            </p>
            {/* Logo */}
            <div className="h-8 md:h-10 relative w-48 md:w-[257px]">
              <div className="absolute inset-[22.19%_0_14.2%_18.64%]">
                <img
                  alt="Tenzr"
                  className="block w-full h-full"
                  src={assets.logoText2}
                />
              </div>
              <div className="absolute inset-[0_84.7%_0_0]">
                <img
                  alt=""
                  className="block w-full h-full"
                  src={assets.logoIcon2}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-auto gap-4 md:gap-8">
            <div className="flex flex-col gap-2 md:gap-4 items-start text-[21px] md:text-[16px] text-[#495057] leading-[1.4] underline">
              <a
                href="mailto:hello@tenzrhealth.com?subject=Tenzr%20inquiry"
                className="hover:text-[#845ec0]"
              >
                hello@tenzrhealth.com
              </a>
              <a href="tel:1-833-888-3697" className="hover:text-[#845ec0]">
                1.833.888.3697
              </a>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 items-start">
              <Link
                href="/contact"
                className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] hover:text-[#845ec0]"
              >
                Contact us
              </Link>
              <a
                href="https://linkedin.com/company/tenzr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4] hover:text-[#845ec0]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
