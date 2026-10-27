import heroImg from '../assets/images/hero.jpg';
import cardioImg from '../assets/images/cardio.jpg';
import functionalImg from '../assets/images/functional.jpg';
import weightsImg from '../assets/images/weights.jpg';
import coachingImg from '../assets/images/coaching.jpg';

// Program Specific AI Generated & High-Resolution Images
import progStrengthImg from '../assets/images/prog_strength.jpg';
import progMuscleImg from '../assets/images/prog_muscle.jpg';
import progWeightlossImg from '../assets/images/prog_weightloss.jpg';
import progCardioImg from '../assets/images/prog_cardio.jpg';
import progPersonalImg from '../assets/images/prog_personal.jpg';
import progCoreImg from '../assets/images/prog_core.jpg';

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
    email: "atozcontactus@gmail.com",
    emailNote: "Official member & general enquiries inbox",
    hoursWeekday: "Monday – Saturday: 6:00 AM – 10:30 PM",
    hoursWeekend: "Sunday: 7:00 AM – 11:00 PM",
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
    category: "Strength Training",
    tagline: "Build foundational power and progressive resistance.",
    description: "A structured workout program focused on building strength through resistance exercises, controlled lifting, and progressive overload. It helps improve overall physical strength, muscular endurance, and movement technique.",
    intensity: "Intermediate to High",
    equipmentFocus: "Barbells, dumbbells, power racks, weight plates",
    focusAreas: [
      "Compound Movements",
      "Muscular Strength",
      "Proper Lifting Form"
    ],
    image: progStrengthImg,
    isProposed: true
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    category: "Muscle Building",
    tagline: "Develop muscle size, definition, and balanced physique.",
    description: "A resistance-training program designed to support muscle growth through targeted exercises and appropriate training volume. It combines controlled repetitions, progressive overload, and consistent training to develop different muscle groups.",
    intensity: "Beginner to High, depending on experience",
    equipmentFocus: "Dumbbells, barbells, cable machines, weight machines",
    focusAreas: [
      "Muscle Hypertrophy",
      "Targeted Muscle Groups",
      "Progressive Overload"
    ],
    image: progMuscleImg,
    isProposed: true
  },
  {
    id: "weight-loss-fat-management",
    name: "Weight Loss & Fat Management",
    category: "Weight Loss",
    tagline: "Support fat loss through movement and consistent training.",
    description: "A workout program combining cardiovascular activity and resistance exercises to increase energy expenditure while maintaining muscle strength. Training can be adjusted to suit different fitness levels and individual goals.",
    intensity: "Low to High, depending on fitness level",
    equipmentFocus: "Treadmills, exercise bikes, dumbbells, resistance machines",
    focusAreas: [
      "Calorie Expenditure",
      "Cardiovascular Fitness",
      "Full-Body Training"
    ],
    image: progWeightlossImg,
    isProposed: true
  },
  {
    id: "cardio-endurance",
    name: "Cardio & Endurance",
    category: "Cardio & Endurance",
    tagline: "Improve stamina, heart health, and workout capacity.",
    description: "This program focuses on sustained physical activity to improve cardiovascular fitness and endurance. Workouts can include steady-paced exercise or intervals, with duration and intensity adjusted to each member's ability.",
    intensity: "Low to High",
    equipmentFocus: "Treadmills, stationary bikes, cross-trainers, rowing machines",
    focusAreas: [
      "Stamina",
      "Heart and Lung Fitness",
      "Workout Endurance"
    ],
    image: progCardioImg,
    isProposed: true
  },
  {
    id: "personal-training",
    name: "Personal Training",
    category: "Personal Training",
    tagline: "Follow a workout plan tailored to your individual goals.",
    description: "An individualized training approach in which workouts are adapted to a member's experience, preferences, and fitness objectives. Sessions may focus on strength, muscle development, general fitness, or improving exercise technique.",
    intensity: "Customized to the individual",
    equipmentFocus: "Depends on the member's workout plan and available gym equipment",
    focusAreas: [
      "Individualized Programming",
      "Exercise Technique",
      "Goal-Based Progress"
    ],
    image: progPersonalImg,
    isProposed: true
  },
  {
    id: "core-abs-training",
    name: "Core & Abs Training",
    category: "Core & Abs",
    tagline: "Strengthen the core for stability and controlled movement.",
    description: "A focused workout program targeting the abdominal and supporting trunk muscles. Exercises develop core strength, stability, and control, supporting good technique during many other gym movements.",
    intensity: "Beginner to High",
    equipmentFocus: "Exercise mats, cable machines, medicine balls, stability balls",
    focusAreas: [
      "Core Stability",
      "Abdominal Strength",
      "Postural Control"
    ],
    image: progCoreImg,
    isProposed: true
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
    id: "stretching-functional-zone",
    title: "Stretching & Core Zone",
    subtitle: "Mobility & Bodyweight Conditioning",
    description: "Dedicated open matted space designed for post-workout stretching, core abdominal training, mobility exercises, and warm-up routines.",
    features: ["Cushioned Stretching Mats", "Kettlebells & Resistance Bands", "Stability Balls & Foam Rollers"],
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
