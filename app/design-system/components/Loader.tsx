import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react";

interface LoaderProps {

}

const colors = ["#488CB2", "#397FA7", "#2B729B", "#1F668F", "#145B83"];

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const dotVariants = {
    initial: {},
    animate: {
        height: [20, 60, 20],
        transition: {
            repeat: Infinity
        }
    }
};

const Loader: React.FC<LoaderProps> = () => {
    const count = 5
    return (
        <div className="flex justify-center items-center">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{
                    display: "flex",
                    gap: 16,
                    height: 60,
                    alignItems: "center"
                }}
            >
                {Array(count)
                    .fill(null)
                    .map((_, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={dotVariants}
                                style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: colors[index % colors.length],
                                    borderRadius: 20
                                }}
                            />
                        );
                    })}
            </motion.div>
        </div>
    );
};

export { Loader };