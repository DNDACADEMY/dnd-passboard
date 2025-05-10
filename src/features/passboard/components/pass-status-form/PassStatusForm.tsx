import * as styles from './style.css'
import { motion } from 'framer-motion'

export const PassStatusForm = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
      PassStatusForm
    </motion.div>
  )
}
