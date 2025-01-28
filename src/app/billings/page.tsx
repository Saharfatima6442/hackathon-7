import Navbar from '@/components/Navbar';
import Billing from '@/components/Billing';
import PaymentMethod from '@/components/PaymentMethod';
import Footer from '@/components/Footer';
import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
        <div className="w-full">
          <Billing />
        
        <div className="w-full flex justify-start ml-5">
          <PaymentMethod />
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
