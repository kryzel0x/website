import { useState, useEffect } from "react";

type Position = {
    x: number;
    y: number;
};

const useMousePosition = (ref: React.RefObject<HTMLElement>): Position => {
    const [position, setPosition] = useState<Position>({ x: ref.current ? ref.current.offsetWidth / 2 : 0, y: ref.current ? ref.current.offsetHeight / 2 : 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const x = event.clientX - rect.left; // X position relative to the element
            const y = event.clientY - rect.top;  // Y position relative to the element

            setPosition({ x, y });
        };

        const element = ref.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (element) {
                element.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [ref]);

    return position;
};

export default useMousePosition;
