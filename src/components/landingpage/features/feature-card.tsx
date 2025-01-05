import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
import { motion } from "framer-motion";

type PropTypes = {
    icon: StaticImageData;
    hover: StaticImageData;
    bg: StaticImageData;
    title: string;
};

const FeatureCard = ({ icon, hover, bg, title }: PropTypes) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = event.clientX - centerX;
        const y = event.clientY - centerY;

        const rotateX = (y / rect.height) * 10; // Adjust tilt intensity
        const rotateY = -(x / rect.width) * 10;

        cardRef.current.style.setProperty("--rotateX", `${rotateX}deg`);
        cardRef.current.style.setProperty("--rotateY", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty("--rotateX", `0deg`);
        cardRef.current.style.setProperty("--rotateY", `0deg`);
    };

    const animate =
        typeof document !== "undefined" && document.body.clientWidth < 576
            ? {}
            : {
                  onMouseMove: handleMouseMove,
                  onMouseLeave: handleMouseLeave,
              };

    return (
        <motion.div
            ref={cardRef}
            {...animate}
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
            className="feature_card_out"
        >
            <motion.div className="feature_box">
                <div className="feature_icon">
                    <Image src={icon} alt="feature" className="icon" />
                    <Image src={hover} alt="feature" className="hover" />
                    <Image src={bg} alt="feature" className="icon_bg" />
                </div>
                <h3>{title}</h3>
            </motion.div>
        </motion.div>
    );
};

export default FeatureCard;
