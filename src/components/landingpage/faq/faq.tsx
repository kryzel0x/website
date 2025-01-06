import { Accordion, Container } from 'react-bootstrap'

const Faqs = () => {
    const data = [
        {
            name: "What is Kryzel?",
            description: "Kryzel is a decentralized sports prediction layer, powered by AI & blockchain to unlock unparalleled opportunities for both bookmakers and community members.",
        },
        {
            name: "What makes Kryzel unique?",
            description: "Kryzel revolutionizes sports prediction with below given USPs:",
            list: [
                { name: "Liquidity & Risk Management", desc: "A community-owned Liquidity Pool ensures financial stability and fairness.", },
                { name: "Revenue Sharing", desc: "LP stakers share in platform profits, aligning interests.", },
                { name: "AI-Driven Predictions", desc: "Dynamic, user-focused markets driven by AI and community input.", },
                { name: "Seamless Integration", desc: "Effortless Web2-to-Web3 transition for Bookmakers with transparency and security.", },
                { name: "Decentralized Ownership", desc: "Kryzel DAO empowers users to shape the platform’s future.", },
            ]
        },
        {
            name: "How can community members participate in Kryzel?",
            description: "Community members can contribute to the Liquidity Pool, earn a share from platform revenues, and actively participate in governance decisions through the Kryzel DAO.",
        },
        {
            name: "What is the Kryzel DAO?",
            description: "The Kryzel DAO empowers the community to govern the platform by voting on important decisions, proposing changes, and shaping the platform’s future.",
        },
        {
            name: "How does the Liquidity Pool work?",
            description: "The Liquidity Pool is community-owned and supports Kryzel’s ecosystem by ensuring liquidity for SBPs and fair trading. Contributors earn rewards based on platform revenue.",
        },
        {
            name: "What measures ensure Kryzel’s security?",
            description: "Kryzel prioritizes security through:",
            list: [
                { name: "Security Audits", desc: "Regular audits are conducted to identify and resolve vulnerabilities.", },
                { name: "Code Reviews", desc: "Thorough peer reviews ensure the platform’s code meets the highest security standards.", },
                { name: "Test Cases", desc: "Extensive test cases are implemented to simulate various scenarios, ensuring reliability and robustness.", },
            ]
        },
    ]
    return (
        <section className='faq_design'>
            <Container>
                <h2 className="sec_heading">Frequently <br />
                    Asked Questions</h2>
                <Accordion>
                    {
                        data.map((item, index) => {
                            return (
                                <Accordion.Item eventKey={`${index}`} key={index}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <p>{item.description}</p>
                                        {
                                            item.list &&
                                            <ul>
                                                {
                                                    item.list.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <p><b>{item.name}: </b>{item.desc}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </Container>
        </section>
    )
}

export default Faqs
