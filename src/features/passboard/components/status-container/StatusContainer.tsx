'use client'

import { StatusContainerContextProvider } from './context'
import { useState } from 'react'
import type { UserStatus } from '../../types/status'
import { motion, AnimatePresence } from 'framer-motion'
import * as styles from './style.css'
import { StatusForm } from './components/StatusForm'
import { ResultCard } from './components/RerultCard'
import './subset-font.css'
import { If } from '@/shared/components/If'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
export const StatusContainer = () => {
  const [status, setStatus] = useState<UserStatus | null>(null)
  const [name, setName] = useState<string>('')

  return (
    <StatusContainerContextProvider
      status={status}
      setStatus={setStatus}
      name={name}
      setName={setName}>
      <If condition={status === 'waitlisted' || status === 'accepted'}>
        <DotLottieReact
          src='/assets/lottie/firecracker.lottie'
          autoplay
          loop
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000
          }}
        />
      </If>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}>
        <AnimatePresence mode='wait'>
          <StatusForm
            isClosed={status !== null}
            key='form'
          />
          <If condition={status !== null}>
            <ResultCard
              key='result'
              status={status as UserStatus}
              name={name}
            />
          </If>
        </AnimatePresence>
      </motion.div>
    </StatusContainerContextProvider>
  )
}
