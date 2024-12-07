export const getFrequencyMultiplier = (frequency: number): number => {
  const frequencyMap: { [key: string]: number } = {
    "1x/week": 4.33,
    "2x/month": 2,
    "Monthly": 1,
    "Every other week": 2,
    "Weekly (~4.33x/month)": 4.33,
    // Add other frequencies based on your frequency key
  };

  return frequencyMap[frequency] || 1; // Default to 1 if frequency is not found
};

export const getBaseTimePerAcre = (sizeOfArea: number): number => {
  if (sizeOfArea <= 0.5) return 20;
  if (sizeOfArea <= 1) return 17;
  if (sizeOfArea <= 1.5) return 15;
  if (sizeOfArea <= 2) return 15;
  if (sizeOfArea <= 3) return 13;
  if (sizeOfArea <= 5) return 13;
  if (sizeOfArea <= 10) return 10;
  if (sizeOfArea <= 15) return 10;
  return 10; // Default time per acre if greater than 15 acres
};
