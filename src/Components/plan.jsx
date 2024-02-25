import React from "react";
import { Link } from "react-router-dom";
import "./plan.css";

const PlanCard = ({ title, price, features }) => (
  <div className="plan-card">
    <h3 className="plan-title">{title}</h3>
    <p className="plan-price">₹{price} per month</p>
    <ul className="plan-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <Link to={`/categories/infogrid/Checkout`} className="plan-button">
      Select Plan
    </Link>
  </div>
);

const PlanCards = () => {
  const plans = [
    {
      title: "Basic",
      price: 1000,
      features: ["Simple Static website", "No hosting", "Unlimited skips"],
    },
    {
      title: "Intermediate",
      price: 5000,
      features: [
        "Up to 6 accounts",
        "Family Mix playlist",
        "Parental controls",
      ],
    },
    {
      title: "Advanced",
      price: 10000,
      features: ["2 Premium accounts", "Duo Mix playlist", "Ad-free listening"],
    },
  ];

  return (
    <div className="plan-cards">
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default PlanCards;
