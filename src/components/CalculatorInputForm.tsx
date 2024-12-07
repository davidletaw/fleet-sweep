import React, { useState } from 'react';
import { BidFormValues } from "../types/types";

interface CalculatorFormProps {
  onCalculate: (inputData: BidFormValues) => void;
}

const CalculatorInputForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<BidFormValues>({
    frequency: 0,
    sizeOfArea: 0,
    stateOfLot: 0,
    congestionFactor: 0,
    discount: 0,
  });

  // Options for dropdowns
  const frequencyOptions = [
    { value: 1, label: 'Weekly' },
    { value: 2, label: 'Bi-Weekly' },
    { value: 3, label: 'Monthly' },
  ];

  const stateOfLotOptions = [
    { value: 1, label: 'Clean' },
    { value: 2, label: 'Moderate Debris' },
    { value: 3, label: 'Heavy Debris' },
  ];

  const congestionFactorOptions = [
    { value: 1, label: 'Low Congestion' },
    { value: 2, label: 'Moderate Congestion' },
    { value: 3, label: 'High Congestion' },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Frequency Dropdown */}
      <label>
        Frequency:
        <select name="frequency" value={formData.frequency} onChange={handleInputChange} required>
          <option value="">Select Frequency</option>
          {frequencyOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      {/* Area Size Input */}
      <label>
        Area Size (Acres):
        <input
          type="number"
          name="sizeOfArea"
          value={formData.sizeOfArea}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* State of Lot Dropdown */}
      <label>
        State of Lot:
        <select name="stateOfLot" value={formData.stateOfLot} onChange={handleInputChange} required>
          <option value="">Select State of Lot</option>
          {stateOfLotOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      {/* Congestion Factor Dropdown */}
      <label>
        Congestion Factor:
        <select name="congestionFactor" value={formData.congestionFactor} onChange={handleInputChange} required>
          <option value="">Select Congestion Factor</option>
          {congestionFactorOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      {/* Discount Input */}
      <label>
        Discount %:
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorInputForm;
