import heroImg from '../assets/images/hero.jpg';
import cardioImg from '../assets/images/cardio.jpg';
import functionalImg from '../assets/images/functional.jpg';
import weightsImg from '../assets/images/weights.jpg';
import coachingImg from '../assets/images/coaching.jpg';

export const brandInfo = {
  name: "A to Z Fitness",
  tagline: "Your Complete Athletic Journey from Start to Finish",
  wordmark: {
    prefix: "A to Z",
    suffix: "FITNESS"
  },
  establishedNotice: "Official gym details, official launch dates, and verified facilities will be updated as provided by management.",
  previewNotice: "Client Preview Build: Business information, class timetables, and pricing are placeholders awaiting client verification.",
  
  // Verified client information
  contactPlaceholders: {
    address: "Hinjawadi Phase 2 Rd, Hinjawadi Phase II, Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    addressNote: "Rajiv Gandhi Infotech Park, Hinjawadi Phase II, Pune",
    phone: "+91 8989898989",
    phoneRaw: "+918989898989",
    phoneNote: "Tap to call directly from your device",
    whatsapp: "+91 8989898989",
    whatsappRaw: "918989898989",
    whatsappNote: "Tap to initiate an instant WhatsApp chat",
    whatsappDefaultMessage: "Hi A to Z Fitness, I would like to enquire about your gym programs and membership.",
    email: "[Official Email to be provided by A to Z Fitness]",
    emailNote: "Dedicated enquiries inbox",
    hoursWeekday: "[Opening Hours: To be confirmed by management]",
    hoursWeekend: "[Weekend Hours: To be confirmed by management]",
    social: {
      instagram: "#placeholder-instagram",
      facebook: "#placeholder-facebook",
      youtube: "#placeholder-youtube"
    }
  }
};

export const proposedPrograms = [
  {
    id: "strength-training",
    name: "Strength Training",
    category: "Strength",
    tagline: "Build foundational power and progressive resistance.",
    description: "A structured workout discipline focused on compound barbell lifts, progressive overload, and functional muscle development under safe movement standards.",
    focusAreas: ["Compound Movements", "Muscular Endurance", "Proper Lifting Form"],
    image: heroImg,
    isProposed: true,
    intensity: "Intermediate to High",
    equipmentFocus: "Power Racks, Olympic Barbells, Plate Loading"
  },
  {
    id: "cardio-conditioning",
    name: "Cardio Conditioning",
    category: "Cardio",
    tagline: "Elevate stamina, cardiovascular capacity, and agility.",
    description: "Heart-rate elevating sessions utilizing treadmills, rowing ergs, assault bikes, and interval training designed to optimize aerobic capacity and endurance.",
    focusAreas: ["Aerobic Capacity", "Interval Training", "Metabolic Stamina"],
    image: cardioImg,
    isProposed: true,
    intensity: "All Fitness Levels",
    equipmentFocus: "Treadmills, Concept2 Rowers, Stationary Bikes"
  },
  {
    id: "weight-training",
    name: "Weight Training",
    category: "Strength",
    tagline: "Targeted resistance exercises with free weights and cables.",
    description: "Comprehensive resistance routines emphasizing dumbbell isolation, cable hypertrophy, and guided machine work for balanced physique development.",
    focusAreas: ["Hypertrophy", "Posture Correction", "Free Weight Mastery"],
    image: weightsImg,
    isProposed: true,
    intensity: "All Fitness Levels",
    equipmentFocus: "Dumbbells (1-50kg+), Cable Towers, Ergonomic Benches"
  },
  {
    id: "functional-fitness",
    name: "Functional Fitness",
    category: "Functional",
    tagline: "Athletic agility, core stability, and dynamic movement.",
    description: "Dynamic full-body conditioning incorporating kettlebells, medicine balls, battle ropes, and turf drills to build athletic strength for daily physical performance.",
    focusAreas: ["Core Stability", "Mobility & Agility", "Rotational Power"],
    image: functionalImg,
    isProposed: true,
    intensity: "Moderate to High",
    equipmentFocus: "Turf Track, Kettlebells, Battle Ropes, Plyo Boxes"
  },
  {
    id: "personal-training",
    name: "Personal Training",
    category: "Personal Training",
    tagline: "Customized one-on-one coaching and progressive guidance.",
    description: "Direct guidance tailored to individual fitness objectives, focusing on technique calibration, progressive goal setting, and safe exercise execution.",
    focusAreas: ["Technique Coaching", "Custom Routines", "Individual Progression"],
    image: coachingImg,
    isProposed: true,
    intensity: "Tailored to Individual",
    equipmentFocus: "Full Gym Access & Private Coaching Zone"
  }
];

export const facilityShowcase = [
  {
    id: "strength-power-zone",
    title: "Strength & Power Zone",
    subtitle: "Heavy Lifting & Resistance",
    description: "Designed for barbell work and compound movements, featuring heavy-duty power racks, Olympic lifting platforms, and dedicated weight storage.",
    features: ["Heavy Power Racks", "Olympic Standard Barbells", "Bumper Plates & Deadlift Platforms"],
    image: heroImg,
    isIllustrative: true
  },
  {
    id: "cardio-arena",
    title: "Cardio Arena",
    subtitle: "Stamina & Endurance",
    description: "Modern endurance zone equipped with connected running decks, rowing machines, and cross-trainers optimized for both steady-state and HIIT workouts.",
    features: ["Interactive Running Decks", "Concept2 Ergometers", "Assault Bikes & Ellipticals"],
    image: cardioImg,
    isIllustrative: true
  },
  {
    id: "free-weights-floor",
    title: "Free Weights Section",
    subtitle: "Precision Dumbbell Training",
    description: "Spacious training floor with an extensive dumbbell range, multi-angle incline/flat benches, and cable cross stations for targeted movement.",
    features: ["Full Dumbbell Rack Array", "Multi-Angle Adjustable Benches", "Cable Crossover Stations"],
    image: weightsImg,
    isIllustrative: true
  },
  {
    id: "functional-turf-area",
    title: "Functional Turf Track",
    subtitle: "Athletic Movement & Agility",
    description: "High-density synthetic turf lane suitable for sled pushes, kettlebell conditioning, battle ropes, and athletic agility drills.",
    features: ["Sled Push Sprint Turf", "Kettlebell & Sandbag Station", "Battle Ropes & Plyometric Boxes"],
    image: functionalImg,
    isIllustrative: true
  },
  {
    id: "coaching-studio",
    title: "Coaching & Assessment Studio",
    subtitle: "One-on-One Guidance",
    description: "Dedicated space for movement screening, individual warm-ups, personal coaching consultations, and fitness progression tracking.",
    features: ["Movement Analysis Mirrors", "Mobility & Stretch Area", "Private Coaching Environment"],
    image: coachingImg,
    isIllustrative: true
  }
];

export const membershipPlaceholderNotice = {
  headline: "Membership Details Coming Soon",
  subheading: "A to Z Fitness is finalizing tailored membership tiers and access options.",
  description: "Official membership packages, durations, inclusions, and transparent pricing will be published once officially confirmed by management. In the meantime, you can reach out through our contact page with any initial enquiries.",
  statusBadge: "Pending Management Confirmation",
  enquiryNotice: "Would you like early updates when memberships open? Feel free to send a message via our Contact page."
};

export const bmiDisclaimers = {
  title: "Important Health & Screening Notice",
  points: [
    "Body Mass Index (BMI) is a screening metric based on height and weight. It does not measure body fat directly.",
    "BMI does not distinguish between lean muscle mass and fat tissue. Athletic individuals with high muscle density may score in higher categories without having excess body fat.",
    "This calculator is provided for educational and general screening purposes only and does not constitute medical advice or a formal health diagnosis.",
    "Always consult a qualified healthcare or certified fitness professional before beginning an intensive workout or dietary regimen."
  ]
};

export const commonFaqs = [
  {
    id: "faq-1",
    question: "When will the official opening hours and location be announced?",
    answer: "Official operating hours and the confirmed gym address for A to Z Fitness are currently being prepared by management and will be announced as soon as final facility preparations are complete."
  },
  {
    id: "faq-2",
    question: "How can I register for a membership once packages are live?",
    answer: "Membership packages, terms, and onboarding instructions will be published directly on this website once confirmed. You will be able to review all tier options and visit the facility."
  },
  {
    id: "faq-3",
    question: "Are beginner-friendly training programs available?",
    answer: "Yes, our proposed workout programs include foundational strength, cardio conditioning, and personal training options structured to welcome both beginners and experienced fitness enthusiasts."
  },
  {
    id: "faq-4",
    question: "Does the gym offer one-on-one personal coaching?",
    answer: "Personal training is one of our planned core services. Full coach profiles, credentials, and booking availability will be released upon official launch."
  }
];
