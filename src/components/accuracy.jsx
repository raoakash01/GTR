import React from "react";
import "./accuracy.css";

function Accuracy() {
    return(
        <div className="accuracy-container">
            <div className="accuracy-upper">
                <div className="accuracy-hbox">
                    <h1 className="accuracy-h">Accuracy for Cure</h1>
                    <h1 className="accuracy-h">We Serve Better</h1>
                </div>
            </div>
            <div className="accuracy-lower">
                <h1 className="accuracy-l">DEDICATED QUALITY PANEL</h1>
                <div className="underline-half-acc"></div>
                <p className="accuracy-p">In order to provide highest quality and accuracy in our reports, all Radiologists in Global TeleRadiology panel are expected to comply with quality standards set by Global TeleRadiology. </p>
                <p className="accuracy-p">We have a dedicated quality team headed by Senior Radiologists comprising the quality panel B2B.  </p>
                <p className="accuracy-p top-2">In addition to Self Check, we have 3 tiers of check-ins build into tae system. </p>
                <div className="acc-box">
                    <div className="acc-box1">
                        <h1 className="accuracy-p white">Peer to Peer Reviews</h1>
                    </div>
                    <div className="acc-box1">
                        <h1 className="accuracy-p white">Checks by Quality Panel</h1>
                    </div>
                    <div className="acc-box1">
                    <h1 className="accuracy-p white">Quality by HoD</h1>
                    </div>
                </div>
                <div className="peer-review-container">
                    <div className="peer-review-header">Peer to Peer Reviews</div>
                    <div className="peer-review-content">
                        <p>
                            Peer to reviews are done for New Radiologists and new centers if the HoD is not available or 20 cases are done by HoD.
                        </p>
                        <p>
                            Peer to peer reviews are done in case there is any review from the center and the reporting radiologist is not available.
                        </p>
                        <ul>
                            <li>Changes are done in the name of reporting Radiologist only.</li>
                            <li>If changes are major then the case is re-reported by any other available Radiologist.</li>
                        </ul>
                    </div>
                </div>
                <div className="peer-review-container">
                    <div className="peer-review-header">Checks by Quality Panel</div>
                    <div className="peer-review-content">
                        <p>
                        Besides HoD and peer to peer reviews, quality panel also perform random checks on reports. Quality panel performs following types of checks: 
                        </p>
                        <ul>
                            <li>Plain/ Contrast</li>
                            <li>Male/ Female</li>
                            <li>Approx. 60 cases of Red alert center, Red alert Radiologist, new center and new Radiologist.</li>
                        </ul>
                    </div>
                </div>
                <div className="peer-review-container">
                    <div className="peer-review-header">Quality by HoD</div>
                    <div className="peer-review-content">
                        <p>
                        All the initial 10-15 cases of any New Radiologist and new centers before getting are being 100% checked by the HoD – Dr. Ankur Gadodia, followed by random checks after enpanelled for first month.
                        </p>
                    </div>
                </div>
            </div>
            <div className="report-review">
                <h1 className="accuracy-r">REPORTING REVIEWS:</h1>
                <ul className="report-review-list">
                    <li className="report-review-list-item">Findings are reported back to the Radiologist with the image & possible review</li>
                    <li className="report-review-list-item">If the finding is significant then it is edited in the report and center is asked to take the second report. (It happens in mostly recently reported cases)</li>
                    <li className="report-review-list-item">Monthly review data is shared with the Radiologists with error percentage</li>
                </ul>
            </div>
        </div>
    )
}

export default Accuracy