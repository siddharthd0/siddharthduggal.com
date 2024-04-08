import { motion } from "framer-motion";



const CardHoverEffect = ({ className, children }) => {
    return (
      <motion.div
        whileHover={{ scale: 0.95, rotate: "-2deg" }}
        className={`group relative overflow-hidden rounded-2xl bg-[#f5e2cc] px-8 py-8 p-4 ${className}`}
      >
        {children}
      </motion.div>
    );
  }

export default CardHoverEffect;