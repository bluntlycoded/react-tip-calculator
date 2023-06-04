import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [percentageTip, setPercentageTip] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = () => {
    if (billAmount === '') {
      setErrorMessage('Please Enter a Valid Input');
    } else if (percentageTip === '') {
      setErrorMessage('Please Enter a Valid Input');
    } else {
      const tip = (parseInt(percentageTip) / 100) * parseInt(billAmount);
      const total = parseInt(billAmount) + tip;
      setTipAmount(tip);
      setTotalAmount(total);
      setErrorMessage('');
    }
  };

  return (
    <div className="tip-calculator-container pb-5">
      <img className="tip-calculator-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png" alt="Tip Calculator" />
      <h1 className="tip-calculator-heading text-center mt-4 mb-4">Tip Calculator</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">BILL AMOUNT</p>
            <input type="text" className="user-input" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">PERCENTAGE TIP</p>
            <input type="text" className="user-input" value={percentageTip} onChange={(e) => setPercentageTip(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TIP AMOUNT</p>
            <input type="text" className="user-input" value={tipAmount} readOnly />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TOTAL</p>
            <input type="text" className="user-input" value={totalAmount} readOnly />
          </div>
          <div className="col-12 text-center mt-4">
            <button className="btn btn-info calculate-tip-button" onClick={calculate}>CALCULATE</button>
            <p className="error-message text-center">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
