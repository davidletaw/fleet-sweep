import React, { useState } from 'react';
import ResultsTable from './ResultsTable';
import CalculatorInputForm from "./CalculatorInputForm";
import {BidFormValues} from "../types/types";
import {getBaseTimePerAcre, getFrequencyMultiplier} from "../utils/calculateBid";

const BidCalculator: React.FC = () => {
  const [calculatedResults, setCalculatedResults] = useState<any[]>([]);

  const handleCalculate = (values: BidFormValues) => {
    const {
      frequency,
      sizeOfArea,
      stateOfLot,
      congestionFactor,
      discount,
    } = values;

    const frequencyMultiplier = getFrequencyMultiplier(frequency);
    const baseTimePerAcre = getBaseTimePerAcre(sizeOfArea);
    const congestionAdjustment = congestionFactor === 2 ? 1.15 : congestionFactor === 3 ? 1.25 : 1;
    const stateAdjustment = stateOfLot === 2 ? 1.10 : stateOfLot === 3 ? 1.20 : 1;
    const estimatedJobTime = baseTimePerAcre * sizeOfArea * frequencyMultiplier * congestionAdjustment * stateAdjustment;
    const baseHourlyRate = 250; // minimum base rate
    const rateAdjustment = sizeOfArea > 1 ? Math.max(210, baseHourlyRate - (sizeOfArea - 1) * 5) : baseHourlyRate;
    const hourlyRate = rateAdjustment * congestionAdjustment * stateAdjustment;
    const estimatedCost = (estimatedJobTime / 60) * hourlyRate;
    const totalBidAmountPerService = estimatedCost;
    const totalBidAmountWithDiscount = totalBidAmountPerService * (1 - discount / 100);
    const totalBidAmountPerMonth = totalBidAmountWithDiscount * frequencyMultiplier;

    const result = {
      estimatedJobTime,
      hourlyRate,
      estimatedCost,
      totalBidAmountPerService,
      totalBidAmountWithDiscount,
      totalBidAmountPerMonth,
    };
    setCalculatedResults([...calculatedResults, result]);
  };

  return (
    <div>
      <CalculatorInputForm onCalculate={handleCalculate} />
      <ResultsTable results={calculatedResults} />
    </div>
  );
};

export default BidCalculator;
