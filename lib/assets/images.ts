// Figma asset URLs - these are served from the Figma localhost server during development
// In production, these should be replaced with actual hosted assets

const isProd = typeof process !== 'undefined' && process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/marketing-site' : '';

export const assets = {
  // Hero section
  heroPhoneInHand: `${basePath}/assets/heroPhoneInHand.png`,
  heroWithWaves: `${basePath}/assets/hero_with_waves.png`,
  heroSmall: `${basePath}/assets/hero.png`,
  heroPurpleWave1: `${basePath}/assets/heroPurpleWave1.svg`,
  heroPurpleWave2: `${basePath}/assets/heroPurpleWave2.svg`,
  heroPurpleWave3: `${basePath}/assets/heroPurpleWave3.svg`,
  
  // Recovery section images
  recoveryWateringPlant: `${basePath}/assets/recoveryWateringPlant.png`,
  recoveryPlantGrowth: `${basePath}/assets/recoveryPlantGrowth.png`,
  
  // Workflow section images
  workflowLaptop: `${basePath}/assets/laptop.png`,
  workflowTwoPhones: `${basePath}/assets/two_phones.png`,
  workflowPhoneAndLaptop: `${basePath}/assets/phone_and_laptop.png`,
  
  // Logo assets
  logoText: `${basePath}/assets/logoText.svg`,
  logoTextPurple: `${basePath}/assets/logoTextPurple.svg`,
  logoIcon: `${basePath}/assets/logoIcon.svg`,
  logoIconPurple: `${basePath}/assets/tenzr_circle_logo.svg`,
  
  // UI icons
  arrowRight: `${basePath}/assets/arrowRight.svg`,
  
  // Feature icons
  iconWorkflow: `${basePath}/assets/iconWorkflow.svg`,
  iconDataInsights: `${basePath}/assets/iconDataInsights.svg`,
  iconReimbursement: `${basePath}/assets/iconReimbursement.svg`,
  
  // Decorative elements
  rocketWithPath: `${basePath}/assets/rocket_triangle.svg`,
  celebrationIcon: `${basePath}/assets/celebrationIcon.svg`,
};

