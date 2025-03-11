import React, { useState } from 'react';

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    if (loanAmount && interestRate && loanTenure) {
      const principal = parseFloat(loanAmount);
      const rateOfInterest = parseFloat(interestRate) / 12 / 100; 
      const tenureInMonths = parseFloat(loanTenure); 

      const emi =
        (principal * rateOfInterest * Math.pow(1 + rateOfInterest, tenureInMonths)) /
        (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);

      setEmi(emi);
    }
  };

  return (
    <div className='cal'>
      <h1>EMI Calculator</h1>
      <hr/>
      <div className='loan'>
        <label>Loan Amount:</label>
        <input id='amt'
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className='loan'>
        <label>Interest Rate (% per annum):</label>
        <input
        id='amt'
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className='loan'>
        <label>Loan Tenure (months):</label>
        <input
        id='amt'
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />
      </div>
      <button id='but' className='btn btn-info' onClick={calculateEmi}>Calculate EMI</button><br/>
      <hr/>
      {emi > 0 && <h1>EMI: {emi.toFixed(2)}</h1>}
      <hr/>
    </div>
  );
}

export default EmiCalculator;
