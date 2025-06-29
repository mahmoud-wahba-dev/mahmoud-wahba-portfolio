import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <a
        href="https://wa.me/201207075722" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        {/* WhatsApp Button */}
        <motion.div
          className="bg-green-500 p-4 rounded-full shadow-lg relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaWhatsapp size={24} className="text-white" />

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500 opacity-0"
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      </a>
    </div>
  );
}