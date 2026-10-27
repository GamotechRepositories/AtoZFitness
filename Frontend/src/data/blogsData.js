import blogStrengthImg from '../assets/images/blog_strength.jpg';
import blogRecoveryImg from '../assets/images/blog_recovery.jpg';
import blogCardioImg from '../assets/images/blog_cardio.jpg';

export const gymBlogs = [
  {
    id: "progressive-overload",
    title: "Mastering Progressive Overload: The True Engine of Strength",
    category: "Strength Training",
    readTime: "4 min read",
    date: "Fitness Insights",
    image: blogStrengthImg,
    excerpt: "Lifting the same weights without progressive resistance stalls your gains. Learn the exact scientific protocols to trigger continuous muscle adaptations.",
    paragraphs: [
      "Progressive overload is the fundamental physiological principle underpinning all successful resistance training. Without progressively challenging your neuromuscular system, your body has no biological stimulus to synthesize new muscle tissue or build denser bone structure.",
      "Many gym-goers make the mistake of assuming progressive overload only means adding more weight to the barbell. In reality, progressive overload can be achieved through multiple variables: increasing repetitions with strict form, adding an extra set, slowing down the eccentric (lowering) tempo, or decreasing rest intervals between working sets.",
      "To maximize progress at A to Z Fitness, keep an accurate training log of your compound lifts (squats, bench press, deadlifts, and overhead presses). When you can comfortably complete all prescribed sets at the top of your target rep range with immaculate form, increase the load by 2.5% to 5%."
    ],
    takeaways: [
      "Focus on flawless technique before adding heavier loads.",
      "Progress through weight, reps, sets, or improved control.",
      "Log your lifts every session to track progressive trends."
    ]
  },
  {
    id: "science-of-recovery",
    title: "The Science of Recovery: Fueling Growth Beyond the Gym Floor",
    category: "Nutrition & Recovery",
    readTime: "5 min read",
    date: "Nutrition & Rest",
    image: blogRecoveryImg,
    excerpt: "Workouts break muscle fibers down; rest and targeted nutrition build them back stronger. Understand the vital triad of protein, hydration, and sleep.",
    paragraphs: [
      "Your intense workouts inside the gym are purely catabolic—they create microscopic tears in muscle fibers and deplete intra-muscular glycogen stores. The actual anabolic phase, where muscles repair, adapt, and grow thicker, occurs entirely during your recovery window.",
      "Nutrition plays a paramount role. Consuming adequate protein (roughly 1.6 to 2.2 grams per kilogram of bodyweight daily) distributed across 3 to 5 balanced meals provides the amino acids needed for muscle protein synthesis. Equally critical is intra-cellular hydration; muscle tissue is approximately 75% water, and even a 2% drop in hydration significantly impairs strength and joint lubrication.",
      "Above all, prioritize 7 to 9 hours of uninterrupted sleep. During deep stage-3 non-REM sleep, your pituitary gland releases the majority of its daily human growth hormone (HGH), repairing tissue micro-trauma and restoring central nervous system firing efficiency."
    ],
    takeaways: [
      "Distribute protein evenly throughout the day.",
      "Drink sufficient water and electrolytes before and after sessions.",
      "Aim for 7-9 hours of consistent, high-quality sleep."
    ]
  },
  {
    id: "hybrid-cardio-conditioning",
    title: "Hybrid Conditioning: Why Lifters Need Cardiovascular Endurance",
    category: "Conditioning",
    readTime: "4 min read",
    date: "Athletic Performance",
    image: blogCardioImg,
    excerpt: "Debunking the outdated myth that cardio destroys muscle gains. Learn how aerobic conditioning improves inter-set recovery and work capacity.",
    paragraphs: [
      "For decades, an outdated gym myth claimed that cardiovascular training would 'burn away' hard-earned muscle tissue. Modern sports science has thoroughly debunked this misconception: intelligent cardiovascular conditioning actually enhances your lifting capacity.",
      "A well-developed aerobic system directly powers your recovery between heavy working sets. When you finish a grinding set of heavy squats or deadlifts, your body relies on oxidative phosphorylation (aerobic metabolism) to replenish ATP and clear metabolic waste. A lifter with superior aerobic stamina recovers resting heart rate faster, allowing for higher training density.",
      "Incorporate low-impact Zone 2 cardio (such as steady-state cycling, incline treadmill walks, or rowing) for 20 to 30 minutes 2 to 3 times per week, or short HIIT bursts on assault bikes at the end of sessions. Keep cardio separate or after heavy lifting to preserve maximum neuromuscular force."
    ],
    takeaways: [
      "Aerobic stamina accelerates heart rate recovery between sets.",
      "Zone 2 cardio builds mitochondrial density without joint impact.",
      "Perform high-intensity intervals or conditioning after lifting sessions."
    ]
  }
];
