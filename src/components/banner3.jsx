import React, { useState, useEffect, useRef } from "react";
import "./banner3.css";

function Banner3() {
  const [accuracy, setAccuracy] = useState(0);
  const [rate, setRate] = useState(0);
  const [countries, setCountries] = useState(0);
  const [days, setDays] = useState(0);
  const sectionRef = useRef(null);

  const duration = 2000; // 2 seconds total
  const steps = 20; // 20 steps for smooth animation
  const intervalTime = duration / steps; // Time per step

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let stepAccuracy = 99.9 / steps;
          let stepRate = 100 / steps;
          let stepCountries = 1; // Increase by 1 per step
          let stepDays = 19; // Increase by 5 per step

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;

            setAccuracy((prev) => Math.min(prev + stepAccuracy, 99.9));
            setRate((prev) => Math.min(prev + stepRate, 100));
            setCountries((prev) => Math.min(prev + stepCountries, 20));
            setDays((prev) => Math.min(prev + stepDays, 365));

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="banner3" ref={sectionRef}>
      <div className="layer-light">
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{accuracy.toFixed(1)}</h1>
            <p className="number-text">Accuracy</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{rate}%</h1>
            <p className="number-text">100% Happy Centre</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{countries}</h1>
            <p className="number-text">Countries</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{days}</h1>
            <p className="number-text">Support 24/7, 365 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
