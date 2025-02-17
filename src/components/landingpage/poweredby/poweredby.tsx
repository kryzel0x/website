import Image from 'next/image'
import aptos from "../../../../public/icons/aptos.png";
import { Container } from 'react-bootstrap'
// import quillaudits from "../../../../public/icons/quill-audits.png"
// import nivapay from "../../../../public/icons/Nivapay-LogoWordmark.png"
// import coinband from "../../../../public/icons/coinband.png"

const Poweredby = () => {
    return (
        <section className='powered_by'>
            <Container>
                <h3>Powered By</h3>
                <Image className='aptos' src={aptos} alt="aptos" />
                {/* <h4>Partners</h4>
                <div className="partners">
                    <div><Image src={quillaudits} alt="quillaudits" /></div>
                    <div><Image src={nivapay} alt="nivapay" /></div>
                    <div><Image src={coinband} alt="coinband" /></div>
                </div> */}
            </Container>
        </section>
    )
}

export default Poweredby
