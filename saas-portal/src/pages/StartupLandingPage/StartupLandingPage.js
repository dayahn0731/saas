import React from "react";

// components
import StartupLandingNavbar from "../../components/LandingNavbar/StartupLandingNavbar";
import InternFAQs from "../../components/InternFAQs/InternFAQs";
import Footer from "../../components/Footer/Footer";
import StartupHero from "../../components/Hero/StartupHero";

function StartupLandingPage() {
    return (
        <>  
            <StartupLandingNavbar/>
            <StartupHero />
            <InternFAQs />
            <Footer />
        </>
    );
}

export default StartupLandingPage;