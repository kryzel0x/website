import { clsx } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../../../public/logo/logo.png";
import Button from "../button/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx("header", scrolled && "scrolled")}>
      <Container>
        <div className="header_in">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src={logo} alt="logo" />
          </Link>

          <Button
            onClick={() => window.open("https://app.kryzel.io/", "_blank")}
          >
            My App
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
