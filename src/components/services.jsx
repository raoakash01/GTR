import React from "react";
import './services.css'

function Services() {
    return (
        <div className="services">
            <div className="services-left">
                <div className="S-card">
                    <div className="S-border-left"></div>
                    <div className="S-border-right"></div>
                    <div className="S-border-top"></div>
                    <div className="S-border-bottom"></div>
                    <div className="S-card-icon"></div>
                    <h1 className="S-card-heading">Preliminary and Final Interpretations</h1>
                    <p className="S-card-text">We provide radiology interpretation through TeleRadiology
                         to our clients, covering them for capacity issues, overflow, subspecialty, second
                          opinions, quality audits and vacation coverage. Throughout the
                           year we are dedicated to meeting your needs and customize solutions accordingly.
                            We also provide high-quality, accurate preliminary reads across the globe.</p>
                <p className="S-card-text">Our complete TeleRadiology coverage provides staffing flexibility
                     and saves money by converting fixed professional costs into variable costs and accurate 
                     reporting for best patient care.</p>
                     <p className="S-card-text">We provide a variety of reports and reading options to meet
                         your daytime coverage requirements including:
                         <ul className="S-card-list">
                            <li className="S-card-list-item">Routine Service: Routine service offers customised turn-around time (TAT) as
                                 per client requirements and is available on all business days</li>
                             <li className="S-card-list-item">Emergency Service: Emergency service is available 24×7 with a quick turn-around time</li>    
                         </ul>
                         </p>
                            
                </div>
                <div className="S-card">
                    <div className="S-border-left"></div>
                    <div className="S-border-right"></div>
                    <div className="S-border-top"></div>
                    <div className="S-border-bottom"></div>
                    <div className="S-card-icon"></div>
                    <h1 className="S-card-heading">Subspecialty and Vacation Coverage</h1>
                    <p className="S-card-text">We have radiologists proficient in all radiological
                         subspecialties to ensure accurate interpretations of most challenging cases.
                    </p>
                <p className="S-card-text">We can provide subspecialty reports in the fields of 
                    Cardiology, Musculoskeletal disorders, Neuro-radiology, Vascular disorders, 
                    Oncology, Chest related disorders, Gastro-Intestinal disorders etc. </p>
                     <p className="S-card-text">We can provide a cover for planned/unplanned outages, whenever you want</p>
                </div>
            </div>
            <div className="services-right">
            <div className="S-card">
                    <div className="S-border-left"></div>
                    <div className="S-border-right"></div>
                    <div className="S-border-top"></div>
                    <div className="S-border-bottom"></div>
                    <div className="S-card-icon"></div>
                    <h1 className="S-card-heading">Emergency Nighthawk</h1>
                    <p className="S-card-text">We provide night coverage
                         flexibility to your Hospital or Imaging Center 
                         and help you mitigate the staffing challenges 
                         for off-hours diagnostic image interpretation. 
                    </p>
                <p className="S-card-text">For critical instances you can
                     indicate the urgency and we will send an initial
                      report followed by the final printable report. </p>
                     <p className="S-card-text">We have a sophisticated
                         web-based system to facilitate two-way communication
                          of all results as well as a dedicated helpline
                           to facilitate communication of critical or
                         urgent results directly to the referring physician.</p>
                </div>
                <div className="S-card">
                    <div className="S-border-left"></div>
                    <div className="S-border-right"></div>
                    <div className="S-border-top"></div>
                    <div className="S-border-bottom"></div>
                    <div className="S-card-icon"></div>
                    <h1 className="S-card-heading">Audit Reporting</h1>
                    <p className="S-card-text">We also offer external 
                        Audit for your existing images in compliance 
                        with statutory requirements mandated by JCI and NABH.
                    </p>
                <p className="S-card-text">At Global TeleRadiology, we have a
                     robust 3-step audit approach that guarantees the
                      identification of all significant variances thereby
                       helping you improve the quality of patient care as
                        well as remain fully compliant with the statutory regulations.</p>
                </div>
                <div className="S-card">
                    <div className="S-border-left"></div>
                    <div className="S-border-right"></div>
                    <div className="S-border-top"></div>
                    <div className="S-border-bottom"></div>
                    <div className="S-card-icon"></div>
                    <h1 className="S-card-heading">Second Opinion reporting</h1>
                    <p className="S-card-text">We provide expert opinion on
                         clinically complex cases. A second opinion on diagnosis
                          is often sought by physicians and patients in deciding
                           the appropriate course of treatment.
                    </p>
                    </div>
            </div>
        </div>
    );
}

export default Services;