"use client";
import Header from "@/components/header/header";
import Banner from "@/components/landingpage/banner/banner";
import Faqs from "@/components/landingpage/faq/faq";
import "./landing-page.scss";
import Features from "@/components/landingpage/features/features";
import Roadmap from "@/components/landingpage/roadmap/roadmap";
import Poweredby from "@/components/landingpage/poweredby/poweredby";
import Footer from "@/components/footer/footer";
import Globe from "@/components/landingpage/globe/globe";

function LandingPage() {
    return (
        <>
            <main className="landing_page">
                <Header />
                <Banner />
                <Globe />
                <Features />
                <Roadmap />
                <Faqs />
                <Poweredby />
                <Footer />
            </main>
        </>
    )
}

export default LandingPage
