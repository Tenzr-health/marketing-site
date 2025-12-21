import Link from "next/link";

// Figma asset URLs
const assets = {
  // Logo
  logoText:
    "http://localhost:3845/assets/2535ea38715df5d0e104eecb689a6f8a5041dd53.svg",
  logoIcon:
    "http://localhost:3845/assets/fc861e75480436f6ec8b93137ac604a273c03692.svg",
  logoText2:
    "http://localhost:3845/assets/90ba09ce24036d798c1514567c2851de77419d85.svg",
  logoIcon2:
    "http://localhost:3845/assets/2e538b19440c8271d3108c95a7cd95fbe44d5cff.svg",

  // Arrow icon
  arrowIcon:
    "http://localhost:3845/assets/b6bacf3088c39aae1f33a37e5e7c980b1df26124.svg",

  // Hero section images
  heroPerson:
    "http://localhost:3845/assets/5671ed4f5c36543a9e61c6d477f51838ea3b0c17.png",
  heroOverlay3:
    "http://localhost:3845/assets/cefd4853004e336e3886005e8d23f601e1f05ef2.svg",
  heroOverlay4:
    "http://localhost:3845/assets/ab60ed3d68739cc08a66b6bfd03a5d9dbd0c9b04.svg",
  heroOverlay5:
    "http://localhost:3845/assets/bf5784f61dacdb91002cda6641e71da39bf709cc.svg",

  // Recovery section
  personWateringPlant:
    "http://localhost:3845/assets/55f173c4131a62ab353ff992a728b6fbca27b4cb.png",
  plantBackground:
    "http://localhost:3845/assets/aa1f875108d70f6a7e14357d2efc30f01a07ac52.png",
  plantImage:
    "http://localhost:3845/assets/e1b64b6a5ab157a1f83a3140fa6fad630fb047bb.png",
  subtract:
    "http://localhost:3845/assets/ca43f3fbd4573ceb6bf53fa4ad6f4776fedba3eb.svg",
  subtract1:
    "http://localhost:3845/assets/cbbd224e71c462df832bcbe2548d39ae3a5b6d28.svg",
  subtract2:
    "http://localhost:3845/assets/5e65677cb3bc39f5cb1cde8414b24eb02fc9bd32.svg",
  subtract3:
    "http://localhost:3845/assets/6db5429419d8fa5b7853473aa06ec1aa050431aa.svg",

  // Feature icons
  featureIcon1:
    "http://localhost:3845/assets/bb3d6995411dccf27d1e48c4216780f4e5e8c2c4.svg",
  featureIcon2:
    "http://localhost:3845/assets/3b5c49227f539715e3847589637256ff39f9243e.svg",
  featureIcon3:
    "http://localhost:3845/assets/5227fca9cfd62c24ed213a02d277edc6cdf770bb.svg",
  workoutIcon:
    "http://localhost:3845/assets/319a2692800d1afc9535decc42f3e9edb3e898d3.svg",

  // Workflow devices
  shadow:
    "http://localhost:3845/assets/51775b675e58c8a3fb88bda9a82762f28e80af88.png",
  zenBookDuo14:
    "http://localhost:3845/assets/72b920f9272ec3398495319aa0a9c200aa3ef655.png",
  zenBookDuo15:
    "http://localhost:3845/assets/e4071a8129af78a2de2654a1fa218bff38de6fb3.png",
  changeThis:
    "http://localhost:3845/assets/e808162de2d2538038234bc047edf273dda882df.svg",
  changeThis1:
    "http://localhost:3845/assets/24083339388c849a0d075bc10de35d902e0cdbb8.png",
  iPhone16Pro:
    "http://localhost:3845/assets/f874480ecdd85fd96e7b879cca22c4b14387560e.png",
  iPhone16Pro1:
    "http://localhost:3845/assets/61088286e1a245884b87f056285e669c4acc0825.png",
  mask: "http://localhost:3845/assets/26e32f971ccac37ea09aca31b14f9c0cfbe9362a.svg",
  mask1:
    "http://localhost:3845/assets/5a52d6182ff980cbcbd14cc1ca22487e922a3036.svg",
  mask2:
    "http://localhost:3845/assets/c924fe84dd83dd0879e07c16b943562d5290b198.svg",
  changeThis2:
    "http://localhost:3845/assets/af12e5b526a44604d760cb7be96877520d0b403f.svg",
  changeThis3:
    "http://localhost:3845/assets/9aff7b92d92801a8cd440cda567f1e8eed80ad10.png",
  changeThis4:
    "http://localhost:3845/assets/a1eadf694c8cec8f2e9d9a9c540da92028fe7d9c.svg",
  changeThis5:
    "http://localhost:3845/assets/87c6911f0d717e88b5c8b3d23a37e84a5d5b0572.png",
  changeThis6:
    "http://localhost:3845/assets/9af8423167db80a058fcb913f29202d9894bfb46.svg",
  changeThis7:
    "http://localhost:3845/assets/67f1a448ccc1aa3a7af9f70053d391bb76bbd931.png",

  // Testimonials
  jumping:
    "http://localhost:3845/assets/1ff7324de419424f7fa05f4c67c4499015e3703b.svg",
};

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

          {/* Feature Cards - Stack on mobile, grid on tablet+ */}
          <div className="flex flex-col gap-4 items-start w-full">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 items-start w-full">
              {/* Card 1 */}
              <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] w-full md:w-auto">
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
              <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] w-full md:w-auto">
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

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4 items-start w-full">
              {/* Card 3 */}
              <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] w-full md:w-auto">
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
              <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col gap-4 items-center justify-center p-[34px] rounded-[16px] w-full md:w-auto">
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

        {/* Workflow Cards - Stack on mobile/tablet, side-by-side on desktop */}
        <div className="flex flex-col gap-2 md:gap-4 items-center px-4 md:px-12 w-full">
          {/* Card 1 - Deliver Personalized Programs */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col lg:flex-row gap-4 items-start justify-center px-4 md:px-[18px] py-[34px] rounded-[24px] w-full">
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
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center px-4 md:px-[18px] py-[34px] rounded-[24px] w-full">
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <p className="text-[20px] font-medium text-[#212529] leading-normal">
                  Patients Actively Engage in Their Recovery
                </p>
                <ul className="text-[16px] text-[#495057] leading-[1.4] w-[512px] list-disc pl-6">
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
            <div className="flex gap-4">
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
          <div className="bg-white border-2 border-[#cdbee6] flex gap-4 items-center justify-center px-[18px] py-[34px] rounded-[24px] w-full">
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-start w-full">
                <p className="text-[20px] font-medium text-[#212529] leading-normal">
                  Clinicians Review & Adjust with Ease
                </p>
                <ul className="text-[16px] text-[#495057] leading-[1.4] w-[512px] list-disc pl-6">
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
            <div className="h-[253px] w-[268px] relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start w-full">
            {/* Patient Card 1 */}
            <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] w-full md:w-auto">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;Since physical therapy is mostly at home, some people
                (like me) just need a kick in the butt to do their exercises,
                which is what Tenzr does.&quot;
              </p>
              <div>
                <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                  Michael L.
                </p>
                <p className="text-[14px] text-[#495057] leading-[17.84px]">
                  Patient
                </p>
              </div>
            </div>

            {/* Patient Card 2 */}
            <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] w-full md:w-auto">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;You never know if you&apos;re doing the right thing or not
                when exercising. That&apos;s why this is such an amazing tool,
                especially because in-person appointments can be few and far
                between.&quot;
              </p>
              <div>
                <p className="text-[16px] font-semibold text-[#212529] leading-normal">
                  Sarah D.
                </p>
                <p className="text-[14px] text-[#495057] leading-[17.84px]">
                  Patient
                </p>
              </div>
            </div>

            {/* Patient Card 3 - Hidden on md and up */}
            <div className="flex-1 bg-white border-2 border-[#cdbee6] flex flex-col items-start justify-between p-[34px] rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[280px] w-full md:w-auto hidden md:flex">
              <p className="text-[21px] md:text-[16px] text-[#495057] leading-[1.4]">
                &quot;Overall, the Tenzr app has made me more committed to my
                physical therapy program, and I&apos;m seeing the results.&quot;
              </p>
              <div>
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
