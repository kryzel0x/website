import Image from 'next/image'
import circle from "../../../../public/images/globe-circle.png";
import logo from "../../../../public/images/globe-logo.png"
import React from 'react'
import { Container } from 'react-bootstrap'

const Globe = () => {
    return (
        <section className="globe_design">
            <Container>
                <h2 className="sec_heading">Kryzel</h2>
                <div className="globe_in">
                    <div className="globe_logo">
                        <Image src={logo} alt="logo" className='logo' />
                        <Image src={circle} alt="circle" className='circle' />
                    </div>
                    <div className="globe_lists">
                        <div className="globe_item bookmarkers">
                            <h3>Bookmakers</h3>
                            <ul>
                                <li>
                                    <p>Launch a sportsbook with no code or risk management expertise</p>
                                </li>
                                <li>
                                    <p>Enjoy minimal capital requirements and hassle-free operations</p>
                                </li>
                            </ul>
                        </div>
                        <div className="globe_item community">
                            <h3>Community</h3>
                            <ul>
                                <li>
                                    <p>Contribute to Kryzel’s Liquidity Pool and earn revenue shares</p>
                                </li>
                                <li>
                                    <p>Participate in governance and grow with a global sportsbook ecosystem</p>
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
