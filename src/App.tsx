import React, { useState } from "react";
import BidCalculator from "./components/BidCalculator";

const App: React.FC = () => {
  const [result, setResult] = useState<{
    jobTime: number;
    estimatedCost: number;
    totalBidAmount: number } | null>(null);

  // const handleCalculate = (calculationResult: {
  //   jobTime: number;
  //   estimatedCost: number;
  //   totalBidAmount: number }) => {
  //   setResult(calculationResult);
  // };

  return (
    <div>
      <h1>Job Bid Calculator App</h1>
      <BidCalculator />
      {result && (
        <div>
          <h2>Calculation Results</h2>
          <p>Job Time (minutes): {result.jobTime}</p>
          <p>Estimated Cost: ${result.estimatedCost.toFixed(2)}</p>
          <p>Total Bid Amount: ${result.totalBidAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
