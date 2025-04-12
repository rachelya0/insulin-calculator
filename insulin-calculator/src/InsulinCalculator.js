import React, { useState } from 'react';
import './InsulinCalculator.css';

export default function InsulinCalculator() {
  const [carbs, setCarbs] = useState('');
  const [ratio, setRatio] = useState('');
  const [currentBG, setCurrentBG] = useState('');
  const [targetBG, setTargetBG] = useState('');
  const [sensitivity, setSensitivity] = useState('');
  const [result, setResult] = useState(null);

  const calculateDosage = () => {
    const c = parseFloat(carbs);
    const r = parseFloat(ratio);
    const cbg = parseFloat(currentBG);
    const tbg = parseFloat(targetBG);
    const s = parseFloat(sensitivity);

    if (isNaN(c) || isNaN(r) || isNaN(cbg) || isNaN(tbg) || isNaN(s)) {
      alert("Please fill in all fields with valid numbers.");
      return;
    }

    const insulinForCarbs = c / r;
    const correctionInsulin = (cbg - tbg) / s;
    const totalInsulin = insulinForCarbs + correctionInsulin;

    setResult({
      insulinForCarbs: insulinForCarbs.toFixed(2),
      correctionInsulin: correctionInsulin.toFixed(2),
      total: totalInsulin.toFixed(2)
    });
  };

  return (
    <div className="calculator-container">
      <h2>Insulin Dosage Calculator</h2>

      <div className="input-group">
        <label>Carbohydrates (grams):</label>
        <input type="number" value={carbs} onChange={e => setCarbs(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Insulin-to-Carb Ratio:</label>
        <input type="number" value={ratio} onChange={e => setRatio(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Current Blood Glucose (mg/dL):</label>
        <input type="number" value={currentBG} onChange={e => setCurrentBG(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Target Blood Glucose (mg/dL):</label>
        <input type="number" value={targetBG} onChange={e => setTargetBG(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Insulin Sensitivity Factor:</label>
        <input type="number" value={sensitivity} onChange={e => setSensitivity(e.target.value)} />
      </div>

      <button onClick={calculateDosage} className="calculate-button">
        Calculate Dosage
      </button>

      {result && (
        <div className="result-box">
          <h3>Results</h3>
          <p>Insulin for Carbs: {result.insulinForCarbs} units</p>
          <p>Correction Insulin: {result.correctionInsulin} units</p>
          <hr />
          <strong>Total Dosage: {result.total} units</strong>
        </div>
      )}
    </div>
  );
}
