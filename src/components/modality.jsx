import React from "react";
import './modality.css'

function Modality(){
    return(
        <div className="modality">
            <h1 className="modality-h">OUR MODALITIES</h1>
            <div className="cards-container">
                <div className="card card1">
                    <h1 className="card-h">Magnetic Resonance Imaging</h1>
                    <h1 className="card-l">(MRI)</h1>
                </div>
                <div className="card">
                <h1 className="card-h1">Computed Tomography</h1>
                <h1 className="card-l1">(CT)</h1>
                </div>
                <div className="card">
                <h1 className="card-h1">CBCT</h1>
                </div>
                <div className="card">
                <h1 className="card-vertical-text">MAMMOGRAM</h1>
                </div>
                <div className="card-set">
                    <div className="card-set-1">
                    
                    </div>
                    <div className="card-set-2 card1">
                    <h1 className="card-h card-x">X-RAY</h1>
                    </div>
                </div>
                <div className="card card1">
                <h1 className="card-h">ULTRASOUND</h1>
                </div>
            </div>
        </div>
    )
}

export default Modality;