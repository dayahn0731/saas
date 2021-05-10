import React from "react";

// components
import StartupLandingNavbar from "../../components/LandingNavbar/StartupLandingNavbar";
import Footer from "../../components/Footer/Footer";
import StartupHero from "../../components/Hero/StartupHero";
import StartupCTA from "../../components/CTA/StartupCTA";
import StartupTestimonials from "../../components/Testimonials/StartupTestimonials";
import StartupFAQs from "../../components/FAQs/StartupFAQs";
import StartupCTA2 from "../../components/CTA/StartupCTA2";

function StartupLandingPage() {
    return (
        <>  
            <StartupLandingNavbar/>
            <StartupHero />
            <StartupCTA />
            {/* <StartupHowItWorks /> */}
            <StartupTestimonials />
            <StartupCTA2 />
            {/* <StartupPricing /> */}
            <StartupFAQs />
            <Footer />
        </>
    );
}

export default StartupLandingPage;