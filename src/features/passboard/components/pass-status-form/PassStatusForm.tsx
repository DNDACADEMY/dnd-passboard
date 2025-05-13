import { Inputfield } from '@/shared/components/Inputfield'
import * as styles from './style.css'
import { motion } from 'framer-motion'
import { Button } from '@/shared/components/Button'
import { Flex } from '@/shared/components/Flex'

export const PassStatusForm = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
      <Flex
        direction='column'
        gap={32}>
        <Inputfield
          placeholder='이름을 입력해주세요.'
          topAddon={<Inputfield.Label required>이름</Inputfield.Label>}
        />
        <Inputfield
          placeholder='이메일을 입력해주세요.'
          topAddon={<Inputfield.Label required>이메일</Inputfield.Label>}
        />
        <Button size='xlarge'>결과 확인하기</Button>
      </Flex>
    </motion.div>
  )
}
