import Button from '@/components/button/button';
import logo from "../../../../public/logo/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Yup } from '@/utils/utils';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Image from 'next/image';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import { API } from '@/utils/constants';

type APIResponse = {
    message: string,
    error: boolean,
    statusCode: HttpStatusCode,
    result: {
        email: string,
        requestStatus: string,
        id: number,
        status: boolean,
        createdAt: string,
        updatedAt: string
    }
}
const Banner = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email address is required'),
        }),
        onSubmit: async ({ email }) => {
            setLoading(true);
            try {
                const response = await axios.post<APIResponse>(API.JOIN_WAITLIST, { email });
                if (response.data.statusCode === 200) {
                    setTimeout(() => {
                        setShow(true);
                        setLoading(false);
                        formik.resetForm();
                        // setSubmitted(true);
                    }, 1000);
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    if (error.response) {
                        if (error.response.data.message.includes("already")) {
                            toast.error("You've already joined the waitlist");
                        } else {
                            toast.error(error.response.data.message);
                        }
                    } else {
                        toast.error(error.message);
                    }
                } else {
                    toast.error("An unknown error occurred");
                }
                setLoading(false);
            }
        },
    })
    const textList = ["Decentralized", "Trustless", "Permissionless", "Non-Custodial"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev === textList.length - 1 ? 0 : prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [textList.length]);

    return (
        <section className="banner">
            <Container>
                <div className="banner_in">
                    <h1>
                        AI-Powered{" "}
                        <div>
                            {/* <span>Decentralized</span> */}
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={current} // Unique key for each text
                                    initial={{ opacity: 0, y: '100%' }} // Start slightly below
                                    animate={{ opacity: 1, y: '0%' }} // Animate to visible position
                                    exit={{ opacity: 0, y: '-100%' }} // Exit slightly above
                                >
                                    {textList[current]}
                                </motion.div>
                            </AnimatePresence>

                        </div> <br />
                        {" "}
                        Sports Prediction Layer
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="email_input">
                            <input type="email" placeholder='Enter your email' name="email" value={formik.values.email} onChange={formik.handleChange} />
                            {formik.errors.email && <span className='error_msg'>{formik.errors.email}</span>}
                        </div>
                        <Button
                            // disabled={submitted} 
                            loading={loading} type="submit">Join Our Waitlist</Button>
                    </form>
                </div>
            </Container>
            <Modal
                show={show}
                centered
                className='success_modal'
                onHide={() => { setShow(false); }}
            >
                <button onClick={() => { setShow(false); }} className="btn-close"></button>
                <Image src={logo} alt="logo" className='logo' />
                <h2>Congratulations, You&apos;re on the list! 🎉</h2>
                <p>Thank you for joining our waitlist. We&apos;ll keep you updated with the latest news and let you know when it&apos;s your turn!</p>
                {/* <Button onClick={() => { setShow(false); }} >Okay</Button> */}
            </Modal>
        </section>
    )
}

export default Banner
