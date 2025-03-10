import { Col, Container, Row } from 'react-bootstrap';
// import video from "../../../../public/videos/video.webm"
import revenue from "../../../../public/icons/features/revenue.png"
import revenueColored from "../../../../public/icons/features/revenue-colored.png"
import revenueBg from "../../../../public/icons/features/revenue-icon-bg.png"

import risk from "../../../../public/icons/features/risk.png"
import riskColored from "../../../../public/icons/features/risk-colored.png"
import riskBg from "../../../../public/icons/features/risk-icon-bg.png"

import providing from "../../../../public/icons/features/providing.png"
import providingColored from "../../../../public/icons/features/providing-colored.png"
import providingBg from "../../../../public/icons/features/providing-icon-bg.png"

import ai from "../../../../public/icons/features/ai.png"
import aiColored from "../../../../public/icons/features/ai-colored.png"
import aiBg from "../../../../public/icons/features/ai-icon-bg.png"

import seamless from "../../../../public/icons/features/seamless.png"
import seamlessColored from "../../../../public/icons/features/seamless-colored.png"
import seamlessBg from "../../../../public/icons/features/seamless-icon-bg.png"

import decentralized from "../../../../public/icons/features/decentralized.png"
import decentralizedColored from "../../../../public/icons/features/decentralized-colored.png"
import decentralizedBg from "../../../../public/icons/features/decentralized-icon-bg.png"
import FeatureCard from './feature-card';
const video = '/videos/video.webm';

const Features = () => {
    const features = [
        { icon: revenue, hover: revenueColored, bg: revenueBg, title: "Revenue Sharing with Liquidity Providers" },
        { icon: risk, hover: riskColored, bg: riskBg, title: "Risk Pooling Ensures Stability & Scalability" },
        { icon: providing, hover: providingColored, bg: providingBg, title: "Capital Leverage Option for Sportsbooks" },
        { icon: ai, hover: aiColored, bg: aiBg, title: "AI-Driven Risk Management and Trade Creation" },
        { icon: seamless, hover: seamlessColored, bg: seamlessBg, title: "Seamless Onboarding of Web2 Users with Aptos Keyless Wallets" },
        { icon: decentralized, hover: decentralizedColored, bg: decentralizedBg, title: "Community Ownership/Governance via Kryzel DAO" },
    ]
    return (
        <>
            <section className="video_sec">
                <Container>
                    <div className="video_sec_in">
                        <video loop autoPlay muted playsInline>
                            <source src={video} />
                        </video>
                    </div>
                </Container>
            </section>
            <section className="features">
                <Container>
                    <div className="features_in">
                        <h2 className="sec_heading">Key Features</h2>
                        <Row>
                            {
                                features.map((feature, index) => (
                                    <Col key={index} xl={4} sm={6}>
                                        <FeatureCard
                                            {...feature}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Features
