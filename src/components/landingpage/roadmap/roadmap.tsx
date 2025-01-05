import { clsx } from '@/utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
gsap.registerPlugin(ScrollTrigger)
const Roadmap = () => {
    const [loaded, setLoaded] = useState(false);
    const content = [
        {
            title: "Q2 2024",
            list: [
                "Architecture Planning and Designing",
                "Team Building",
            ],
        },
        {
            title: "Q3 2024",
            list: [
                "Smart  Contract Development",
                "Front-end Development",
            ],
        },
        {
            title: "Q4 2024",
            list: [
                "Testnet Deployment",
                "Kryzel Web Application Launch",
                "AMM Module Development",
            ],
        },
        {
            title: "Q1 2025",
            list: [
                "Mainnet Deployment",
                "Offchain Ai implementaion for bet creation and risk management",
                "Diversifying betting ranges - Parlays, spot bettings",
            ],
            className: "lg_items"
        },
        {
            title: "Q2 2025",
            list: [
                "Onchain Ai implementaion",
                "User order book mechanism",
                "Bespoke bet generation",
                "Local currency betting",
            ],
        },
    ]
    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaded(true)
        }
    }, [])
    useGSAP(() => {
        if (loaded && typeof window !== "undefined" && typeof document !== "undefined" && document.body.clientWidth > 767) {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".roadmap",
                        start: "top 50%",
                        scrub: true,
                        end: "bottom 40%",
                    }
                })
                .from(".roadmap_box", {
                    width: "0rem",
                    stagger: 0.5,
                })
                .from(".dot", {
                    display: "none",
                    stagger: 0.5,
                }, "0")
        }
    }, { dependencies: [loaded] })
    return loaded ?
        (
            <section className="roadmap">
                <Container>
                    <div className="roadmap_in">
                        <h2 className="sec_heading">Roadmap</h2>
                        <p className="desc_txt">From Concept to Reality: Product Delivery Roadmap</p>
                        <div className="roadmap_map">
                            <ul>
                                {
                                    content.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="dot"></span>
                                                <div className={clsx("roadmap_box", item.className)}>
                                                    <h3>{item.title}</h3>
                                                    <ul className={clsx(item.className)}>
                                                        {
                                                            item.list.map((item, index) => {
                                                                return (
                                                                    <li key={index}>
                                                                        {item}
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        )
        : null;
}

export default Roadmap
