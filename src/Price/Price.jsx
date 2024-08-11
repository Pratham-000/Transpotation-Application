import React from 'react';
import './Price.css';

const Price = () => {
    const pricingPlans = [
        {
            title: 'Basic',
            price: '$20',
            features: [
                'One-way trip',
                'Up to 10 miles',
                'Standard vehicle',
                'Basic support'
            ],
        },
        {
            title: 'Standard',
            price: '$35',
            features: [
                'Round trip',
                'Up to 20 miles',
                'Comfort vehicle',
                'Priority support'
            ],
        },
        {
            title: 'Premium',
            price: '$50',
            features: [
                'Round trip',
                'Up to 50 miles',
                'Luxury vehicle',
                '24/7 support'
            ],
        },
    ];

    return (
        <div className="pricing-container">
            <h2>Our Pricing Plans</h2>
            <div className="pricing-cards">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="pricing-card">
                        <h3>{plan.title}</h3>
                        <p className="price">{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
