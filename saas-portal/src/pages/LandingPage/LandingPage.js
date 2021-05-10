import React from "react";

// components
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar"
import Hero from "../../components/Hero/Hero"
import InternCTA from "../../components/CTA/InternCTA";
import InternHowItWorks from "../../components/HowItWorks/InternHowItWorks";
import Stat from "../../components/Stat/Stat";
import InternTestimonials from "../../components/Testimonials/InternTestimonials";
import Footer from "../../components/Footer/Footer";
import InternFAQs from "../../components/FAQs/InternFAQs";

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