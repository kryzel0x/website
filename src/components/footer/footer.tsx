import Image from "next/image"
import logo from "../../../public/logo/logo.png";
import Link from "next/link"
import { Container } from "react-bootstrap"
import { SOCIAL_MEDIA } from "@/utils/constants";
import telegram from "../../../public/icons/telegram.svg"
import twitter from "../../../public/icons/twitter.svg"
import linkedin from "../../../public/icons/linkedin.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer_in">
                    <Link href="/" className="logo"><Image src={logo} alt="logo" /></Link>
                    {/* <Link href="/" className="terms">Terms & Conditions </Link> */}
                    <div className="footer_right">
                        <h3>Follow us on</h3>
                        <Link href={SOCIAL_MEDIA.TELEGRAM} target="_blank"><Image src={telegram} alt="telegram" /></Link>
                        <Link href={SOCIAL_MEDIA.TWITTER} target="_blank"><Image src={twitter} alt="twitter" /></Link>
                        <Link href={SOCIAL_MEDIA.LINKEDIN} target="_blank"><Image src={linkedin} alt="linkedin" /></Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
