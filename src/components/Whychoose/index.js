import React from "react";
import { CheckCircle } from "lucide-react";
import "./index.css";

const features = [
  {
    title: "Farm-Fresh Delivery",
    desc: "Mangoes delivered within 24 hours of harvest — straight from the orchard to your doorstep.",
  },
  {
    title: "Naturally Ripened",
    desc: "Zero carbide, zero chemicals. Just sunshine, soil, and patience.",
  },
  {
    title: "Premium Handpicked Varieties",
    desc: "We select only the top 1% based on size, ripeness, and sweetness.",
  },
  {
    title: "Eco-Friendly Packaging",
    desc: "Plastic-free boxes that preserve freshness and protect the planet.",
  },
  {
    title: "Pan-India Fast Delivery",
    desc: "From orchard to your plate in 1–2 days — wherever you are in India.",
  },
  {
    title: "100% Replacement Guarantee",
    desc: "If it’s not perfect, we replace it. No questions asked.",
  },
];

const Whychoose = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <CheckCircle className="icon" />
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychoose;
