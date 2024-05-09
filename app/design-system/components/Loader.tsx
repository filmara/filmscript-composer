import { motion } from "framer-motion"

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = () => {

    return (
        <div className="flex justify-center items-center">
            <motion.div animate={{ x: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                Loading ...
            </motion.div>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            />
        </div>
    );
};

export { Loader };