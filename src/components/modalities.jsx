import React from "react";
import "./modalities.css";
import Mri from "../assets/mri.png"
import Ct from "../assets/ct.png"
import Cbc from "../assets/cbc.png"
import Mamm from "../assets/mamm.png"
import Pet from "../assets/pet.png"
import Ut from "../assets/ut.png"
import Xray from "../assets/xray.png"
import Xray2 from "../assets/xray2.png"

function Modalities() {
    return(
        <div className="modalities">
            <h1 className="modalities-heading">Modalities Covered</h1>
            <div className="modalities-line"></div>
            <p className="modalities-text">We have our footprints across India and various Offshore locations. Our large team of senior and experienced radiologists are competent to report on all modalities across all sub-specialties.  </p>
            <p className="modalities-text">We stand out in the healthcare
                 market for our accuracy in reporting and service quality.</p>
            <div className="modalities-grid-container">
                <div className="modalities-grid">
                    <div className="modalities-grid-left">
                    <div className="modalities-grid-item">
                    <img src={Mri} alt="mri" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">MAGNETIC RESONANCE IMAGING (MRI)</h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Ct} alt="CT" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">COMPUTED TOMOGRAPHY (CT)</h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Pet} alt="Pet" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">POSITRON EMISSION TOMOGRAPHY (PET) </h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Cbc} alt="Cbs" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">CONE-BEAM COMPUTED TOMOGRAPHY (CBCT)</h1>
                    </div>
                    </div>
                    <div className="modalities-grid-right">
                    <div className="modalities-grid-item">
                    <img src={Mamm} alt="mamm" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">MAMMOGRAM</h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Ut} alt="ut" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">ULTRASOUND</h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Xray} alt="xray" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">X-RAY</h1>
                    </div>
                    <div className="modalities-grid-item">
                    <img src={Xray2} alt="xray2" className="modalities-grid-img" />
                    <h1 className="modalities-grid-text">X-RAY SPECIAL STUDIES</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalities