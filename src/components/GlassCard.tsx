// src/components/GlassCard.tsx
import { motion } from 'framer-motion';
import styles from './styles/GlassCard.module.css';

interface GlassCardProps {
    title: string;
    children: React.ReactNode;
  }
  
  export const GlassCard: React.FC<GlassCardProps> = ({ title, children }) => (
    <motion.div
      className={styles.glassCard}
      whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 180 }}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
