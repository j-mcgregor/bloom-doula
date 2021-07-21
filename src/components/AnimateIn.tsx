import { useInView } from "react-intersection-observer";

export const AnimateIn = ({ threshold = 0.15, triggerOnce = false, transition = 800, ...remainingProps }) => {
    const [ref, inView] = useInView({ threshold, triggerOnce });

    return (
        <div
            ref={ref}
            style={{
                // adjust these as desired
                transition: `opacity ${transition}ms, transform ${transition}ms`,
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 100}px)`,
            }}
            {...remainingProps}
        />
    );
};
