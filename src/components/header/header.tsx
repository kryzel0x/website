import { clsx } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from "../../../public/logo/logo.png"

const Header = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <header className={clsx("header", scrolled && "scrolled")}>
            <Container>
                <div className="header_in">
                    <Link href="/" className='logo'><Image src={logo} alt="logo" /></Link>
                </div>
            </Container>
        </header>

    )
}

export default Header
