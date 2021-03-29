import { motion } from 'framer-motion'

const PageTransitions: React.FC = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransitions
