import React, { useState, useEffect } from "react";
import "./home.css";
import Whatsapp from "../assets/Whatsapp.png";

function Home() {
    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imageUrls = [
            import("../assets/1.webp"),
            import("../assets/2.webp"),
            import("../assets/4.webp"),
            import("../assets/8.webp"),
        ];

        const loadImages = async () => {
            try {
                const loadedImages = await Promise.all(
                    imageUrls.map(url => url.then(image => image.default))
                );
                setImages(loadedImages);
                setLoading(false);
            } catch (error) {
                console.error("Error loading images", error);
            }
        };

        loadImages();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setImageIndex((imageIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [images, imageIndex]);

    return (
        <div
            className="home"
            id="home"
            style={{
                backgroundImage: loading ? "linear-gradient(to right, rgba(9, 50, 83, 0.479), transparent), url(../assets/1.webp)" : `linear-gradient(to right, rgba(9, 50, 83, 0.479), transparent), url(${images[imageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out"
            }}
        >
            <div className="home-content">
                <div className="Tag-line">
                    <h1 className="tag-line-text">Accuracy for Cure</h1>
                    <p className="tag-line-text-2">
                        Global TeleRadiology is India’s Leading Radiology Service
                        <br /> Partner for Hospitals and Diagnostic Centres.
                    </p>
                </div>
            </div>
            <div className="home-content-2">
                <div className="home-content-2-left">
                    <div className="red-text-bg">
                        <h1 className="red-text-h1">
                        We Help Reduce Your Radiology Cost upto 50% 
                        </h1>
                    </div>
                    <div className="home-content-2-text">
                        <div className="content-2-text">
                            <div className="email-input">
                                <button onClick={() => window.location.href = "#contactus"} className="get-started">For Free Trial</button>
                            </div>
                            <a className="whatsapp-icon" href="https://api.whatsapp.com/send?phone=+919319380444&text=Hi%20I%20am%20interested%20in%20knowing%20more%20about%20Global%20Teleradiology" target="_blank" rel="noopener noreferrer">
                                <img src={Whatsapp} alt="whatsapp" className="whatsapp-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home-content-2-right">
                    <a href="https://drive.google.com/file/d/1xi_KzsNLUhkHQz2Xr5QujdwtrK3-AQH9/view" target="_blank" rel="noopener noreferrer">
                        <button className="download-brochure">Download Brochure</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;

