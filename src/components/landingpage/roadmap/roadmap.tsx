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
            title: "Q4 2024",
            list: [
                "Architecture Planning and Designing",
                "Team Building",
            ],
        },
        {
            title: "Q1 2025",
            list: [
                "Testnet Deployment",
                "Kryzel Web Application Launch",
                "Backend Development",
            ],
        },
        {
            title: "Q2 2025",
            list: [
                "Mainnet Deployment",
                "Payment Integration",
                "Partnership with Bookmakers",
                "Start with 5 Sports and S.E. Asia",
            ],
        },
        {
            title: "Q3 2025",
            list: [
                "KRZ Token Launch",
                "Governance Token Launch",
                "Shopify Front-end for Bookmakers",
                "AI-powered Market Creation",
            ],
            className: "lg_items"
        },
        // {
        //     title: "Q2 2025",
        //     list: [
        //         "Onchain Ai implementaion",
        //         "User order book mechanism",
        //         "Bespoke bet generation",
        //         "Local currency betting",
        //     ],
        // },
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
                        onprogress: (event) => {
                            console.log({ event })
                        },
                        onUpdate: ({ progress }) => {
                            gsap.to(".filled", { height: `${100 - (progress * 100)}%` })
                        },
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
                                <li className="line">
                                    <div className="filled"></div>
                                </li>
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
