/**
 * Utility functions for frontend-only BMI calculation
 * Formula: BMI = weight (kg) / [height (m)]^2
 */

export const calculateBMI = (heightCm, weightKg) => {
  const h = parseFloat(heightCm);
  const w = parseFloat(weightKg);

  if (isNaN(h) || isNaN(w)) {
    return { error: "Please enter valid numeric values for height and weight." };
  }

  if (h < 80 || h > 260) {
    return { error: "Please enter a realistic height between 80 cm and 260 cm." };
  }

  if (w < 25 || w > 350) {
    return { error: "Please enter a realistic weight between 25 kg and 350 kg." };
  }

  const heightInMeters = h / 100;
  const bmiValue = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));

  let category = "";
  let color = "";
  let description = "";
  let healthyWeightRange = {
    min: (18.5 * heightInMeters * heightInMeters).toFixed(1),
    max: (24.9 * heightInMeters * heightInMeters).toFixed(1)
  };

  if (bmiValue < 18.5) {
    category = "Underweight";
    color = "#3b82f6"; // Blue
    description = "Your BMI suggests you may be below the standard recommended weight range for your height.";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category = "Normal Weight";
    color = "#ccff00"; // Volt Green
    description = "Your BMI falls within the standard healthy weight category for adults.";
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    category = "Overweight";
    color = "#f59e0b"; // Amber
    description = "Your BMI indicates you may be slightly above the standard weight range for your height.";
  } else {
    category = "Obesity";
    color = "#ef4444"; // Red
    description = "Your BMI is in the obesity category. Consider discussing health and conditioning goals with a certified specialist.";
  }

  // Percentage for visual meter (clamped between 10 and 40 BMI for scale display)
  const minScale = 12;
  const maxScale = 42;
  const clampedBmi = Math.max(minScale, Math.min(bmiValue, maxScale));
  const meterPercentage = Math.round(((clampedBmi - minScale) / (maxScale - minScale)) * 100);

  return {
    success: true,
    bmi: bmiValue,
    category,
    color,
    description,
    healthyWeightRange,
    meterPercentage
  };
};

export const bmiCategories = [
  { label: "Underweight", range: "< 18.5", color: "#3b82f6" },
  { label: "Normal Weight", range: "18.5 – 24.9", color: "#ccff00" },
  { label: "Overweight", range: "25.0 – 29.9", color: "#f59e0b" },
  { label: "Obese", range: "≥ 30.0", color: "#ef4444" }
];
