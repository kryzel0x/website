import Image from 'next/image'
import { animate, motion, useMotionValue,  useTransform } from "framer-motion";
import logo from "../../../../public/images/globe-logo.png"
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const Globe = () => {
    // useGSAP(() => {
    //     if (typeof document !== "undefined" && document.body.clientWidth > 992) {
    //         gsap.
    //             timeline({
    //                 scrollTrigger: {
    //                     trigger: ".globe_design",
    //                     start: "top top",
    //                     markers: true,
    //                     scrub: 2,
    //                     // toggleActions: "play reverse play reverse"
    //                     pin: true,
    //                     pinSpacing: true,
    //                     end: () => "+=200%",
    //                     // end: "bottom bottom",
    //                 }
    //             })
    //             .to(".bookmarkers ul", {
    //                 y: -35,
    //                 scale: 0.4,
    //             })
    //             .to(".community ul", {
    //                 y: 100,
    //                 scale: 2.4,
    //             }, "0")
    //     }
    // })
    const motionValue = useMotionValue(0);
    const offset = useTransform(motionValue, [0, 1], ["0%", "100%"]);
    const offsetValue = useTransform(motionValue, [0, 1], [0, 100]);
    const zIndex = useTransform(offsetValue, [0, 49, 99, 100], [0, 2, 2, 0]);
    const inverseZIndex = useTransform(offsetValue, [0, 49, 99, 100], [2, 2, 0, 0]);

    useEffect(() => {
        const loopAnimation = () => {
            animate(motionValue, 1, {
                duration: 10,
                onComplete: () => {
                    motionValue.set(0);
                    loopAnimation();
                },
            });
        };

        loopAnimation();
    }, [motionValue]);
    return (
        <section className="globe_design">
            <Container>
                <h2 className="sec_heading">Kryzel</h2>
                <div className="globe_in">
                    <div className="globe_logo">
                        <div className='globe_orbit'>
                            <Image src={logo} alt="logo" className='logo' />
                            <motion.div
                                className="sphere sphere_1"
                                style={{ offsetDistance: offset, zIndex }}
                            // initial={{ offsetDistance: "0%", zIndex: 1 }}
                            // animate={{ offsetDistance: "100%", }}
                            // transition={{ duration: 10, repeat: Infinity }}
                            ></motion.div>
                            <motion.div
                                className="sphere sphere_2"
                                style={{ offsetDistance: offset, zIndex: inverseZIndex }}
                            ></motion.div>

                            <svg width="724" height="223" viewBox="0 0 724 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M722.418 212.596C728.762 190.229 572.509 126.322 373.417 69.8556C174.325 13.3889 7.53045 -13.5019 1.18681 8.86466C-5.15683 31.2312 150.839 95.891 349.931 152.358C549.022 208.824 715.561 236.468 721.904 214.102" stroke="url(#paint0_linear_6001_1226)" strokeOpacity="0.3" strokeWidth="1.06542" strokeDasharray="18.13 18.13" />
                                <defs>
                                    <linearGradient id="paint0_linear_6001_1226" x1="361.802" y1="-219.859" x2="361.803" y2="221.86" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1FECFF" />
                                        <stop offset="1" stopColor="#009DFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="globe_lists">
                        <div className="globe_item bookmarkers">
                            <h3>Bookmakers</h3>
                            <ul>
                                <li>
                                    <p>Launch Sportsbook with No Code & Minimal Capital</p>
                                </li>
                                <li>
                                    <p>Scale without operational expertise & Payment Challenges</p>
                                </li>
                            </ul>
                        </div>
                        <div className="globe_item community">
                            <h3>Community</h3>
                            <ul>
                                <li>
                                    <p>Earn revenue by contributing to Kryzel’s Liquidity Pools</p>
                                </li>
                                <li>
                                    <p>Govern and shape the future of global decentralized sportsbook</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Globe
