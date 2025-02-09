import React from "react";
import "./Overview.css";
import { FaStethoscope, FaRadiation } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="overview-container">
      <h2 className="overview-title">Overview</h2>
      <div className="overview-cards">
        <div className="overview-card">
          <FaStethoscope className="icon" />
          <h3>Evidence based diagnosis on the rise</h3>
          <p>
          Today, improved lifestyles and increased health
           awareness have led to longer lifespans. World
            over senior population percentage is on the rise. 
            </p>
            <p>
            Add to it sedentary lifestyle and rising incidences
             of non-communicable diseases like CVDs and arthritis,
              and you have a clear case for image-based diagnosis. </p>
            <p>It’s hardly surprising then that more and more physicians
               are depending on imaging tests to accurately diagnose
                and prescribe the correct course of treatment</p>
        </div>
        <div className="overview-card">
          <FaRadiation className="icon" />
          <h3>Challenges in radiology</h3>
          <p>In a field where a quick and accurate radiology
             diagnosis can save a life, medical practitioners
              and healthcare facilities are facing similar 
              challenges like delays due to inefficient 
              workflow processes; poor report quality; high 
              turnaround time; shortage of serving/new 
              radiologists; their uneven geographic distribution; 
              and the high costs associated with setting 
              up a complete radiology infrastructure.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;