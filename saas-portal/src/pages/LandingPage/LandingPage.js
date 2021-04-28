import React from "react";

// components
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar"
import Hero from "../../components/Hero/Hero"
import InternCTA from "../../components/CTA/InternCTA";
import InternHowItWorks from "../../components/InternHowItWorks/InternHowItWorks";
import Stat from "../../components/Stat/Stat";
import InternFAQs from "../../components/InternFAQs/InternFAQs";
import InternTestimonials from "../../components/InternTestimonials/InternTestimonials";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
    return (
        <>  
            <LandingNavbar/>
            <Hero />
            <InternHowItWorks />
            <Stat />
            <InternCTA />
            {/* <InternPrograms /> */}
            <InternTestimonials />
            <InternFAQs />
            <Footer />
        </>
    );
}

export default LandingPage;