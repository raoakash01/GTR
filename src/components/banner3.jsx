import React, { useState, useEffect, useRef } from "react";
import "./banner3.css";

function Banner3() {
  const [accuracy, setAccuracy] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [read, setRead] = useState(0);
  const [imgread, setImgread] = useState(0);
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
          let stepRead = 0.2; // Increase by 5 per step
          let stepYear = 1;
          let stepImgRead = 1;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;

            setAccuracy((prev) => Math.min(parseFloat((prev + stepAccuracy).toFixed(2)), 99.9));
            setRate((prev) => Math.min(parseFloat((prev + stepRate).toFixed(2)), 100));
            setRead((prev) => Math.min(parseFloat((prev + stepRead).toFixed(2)), 1.2));
            setYears((prev) => Math.min(parseFloat((prev + stepYear).toFixed(2)), 10));
            setImgread((prev) => Math.min(parseFloat((prev + stepImgRead).toFixed(2)), 10));

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
            <h1 className="icon-numbers">+{years}</h1>
            <p className="number-text">Years of Experience</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{read}</h1>
            <p className="number-text">Million Reports</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">0%</h1>
            <p className="number-text">TAT Deviation</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{accuracy.toFixed(1)}</h1>
            <p className="number-text">Industry Best Quality</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="numbers">
            <h1 className="icon-numbers">{rate}%</h1>
            <p className="number-text">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
