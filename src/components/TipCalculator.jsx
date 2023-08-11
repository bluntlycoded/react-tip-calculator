import React, { useState } from 'react';

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
      <div className="container">
        <div className="row">
            <br />
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">BILL AMOUNT</p>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">PERCENTAGE TIP</p>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" value={percentageTip} onChange={(e) => setPercentageTip(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TIP AMOUNT</p>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" value={tipAmount} readOnly />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TOTAL</p>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" value={totalAmount} readOnly />
          </div>
          <div className="col-12 text-center mt-4">
            <button className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6" onClick={calculate}>CALCULATE</button>
            <p className="error-message text-center">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
