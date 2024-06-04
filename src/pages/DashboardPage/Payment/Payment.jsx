import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Todo: Add a Publishable Key
const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to buy"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <h2 className='text-4xl'>Payment Gateway Page</h2>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;