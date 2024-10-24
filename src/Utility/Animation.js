export const FadeLeft = (delay) => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: delay,
        },
    },
});
export const FadeLeftAdv = (delay) => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5, // Increase or decrease based on preference
            ease: [0.25, 0.1, 0.25, 1], // Custom easing function for smoothness
            delay: delay,
        },
    },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }, // Exit animation
});
