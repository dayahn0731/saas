import React from "react";

// components
import StartupLandingNavbar from "../../components/LandingNavbar/StartupLandingNavbar";
import InternFAQs from "../../components/InternFAQs/InternFAQs";
import Footer from "../../components/Footer/Footer";
import StartupHero from "../../components/Hero/StartupHero";
import StartupPricing from "../../components/Pricing/StartupPricing";
import StartupCTA from "../../components/CTA/StartupCTA";
import StartupTestimonials from "../../components/Testimonials/StartupTestimonials";
import StartupHowItWorks from "../../components/HowItWorks/StartupHowItWorks";

function StartupLandingPage() {
    return (
        <>  
            <StartupLandingNavbar/>
            <StartupHero />
            <StartupCTA />
            <StartupHowItWorks />
            <StartupTestimonials />
            <StartupPricing />
            <InternFAQs />
            <Footer />
        </>
    );
}

export default StartupLandingPage;