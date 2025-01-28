'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] = useState(false);

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  const handleSubmit = () => {
    if (!isAgreed || !isPrivacyPolicyAgreed) {
      alert('Please agree to all terms before proceeding.');
      return;
    }
    alert('Payment processing...');
    // Integrate Stripe API here
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8">
      <div className="w-[852px] bg-white shadow-md rounded-lg p-6">
        {/* Payment Method Section */}
        <h2 className="w-[852px]text-lg font-semibold mb-2">Payment Method</h2>
        <p className="text-sm text-gray-500 mb-6">Please enter your payment method</p>

        <div className="space-y-4">
          {/* Credit Card */}
          <div
            className={`p-4 border rounded-md ${
              selectedMethod === 'creditCard' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                id="creditCard"
                checked={selectedMethod === 'creditCard'}
                onChange={() => handleMethodChange('creditCard')}
                className="mr-2"
              />
              <label htmlFor="creditCard" className="text-sm font-semibold flex items-center">
                Credit Card
                <img src="/visa.png" alt="Visa" className="ml-2 w-8 h-4" />
                <img src="/mastercard.png" alt="Mastercard" className="ml-1 w-8 h-4" />
              </label>
            </div>
            {selectedMethod === 'creditCard' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Card holder"
                  className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>
            )}
          </div>

          {/* PayPal */}
          <div
            className={`p-4 border rounded-md ${
              selectedMethod === 'paypal' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="paypal"
                checked={selectedMethod === 'paypal'}
                onChange={() => handleMethodChange('paypal')}
                className="mr-2"
              />
              <label htmlFor="paypal" className="text-sm font-semibold flex items-center">
                PayPal
                <img src="/paypal.png" alt="PayPal" className="ml-2 w-16" />
              </label>
            </div>
          </div>

          {/* Bitcoin */}
          <div
            className={`p-4 border rounded-md ${
              selectedMethod === 'bitcoin' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="bitcoin"
                checked={selectedMethod === 'bitcoin'}
                onChange={() => handleMethodChange('bitcoin')}
                className="mr-2"
              />
              <label htmlFor="bitcoin" className="text-sm font-semibold flex items-center">
                Bitcoin
                <img src="/bitcoin.png" alt="Bitcoin" className="ml-2 w-8 h-8" />
              </label>
            </div>
          </div>
        </div>

        {/* Confirmation Section */}
        <h2 className="w-[852px] text-lg font-semibold mt-8 mb-2">Confirmation</h2>
        <p className="text-sm text-gray-500 mb-6">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="marketingConsent"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="mr-2"
            />
            <label htmlFor="marketingConsent" className="text-sm">
              I agree with sending marketing and newsletter emails. No spam, promised!
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacyPolicy"
              checked={isPrivacyPolicyAgreed}
              onChange={() => setIsPrivacyPolicyAgreed(!isPrivacyPolicyAgreed)}
              className="mr-2"
            />
            <label htmlFor="privacyPolicy" className="text-sm">
              I agree with our terms and conditions and privacy policy.
            </label>
          </div>
        </div>

        {/* Rent Now Button */}
        <Link href={'/dashboard'}>
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Rent Now
        </button>
        </Link>

        {/* Security Note */}
        <div className="mt-4 text-sm text-gray-500 flex items-center">
          <span className="mr-2">🔒</span>
          All your data are safe. We use the most advanced security to provide you the best
          experience ever.
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
