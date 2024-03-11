'use client'
import { FC, useEffect } from 'react'
import { Button, Stack, Text } from '@mantine/core'

import { ErrorProps } from '@/common'

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Stack align="center" justify="center" gap="xs" h="99vh">
      <Text fz={48} fw={700} c="gray">
        Что-то пошло не так!
      </Text>
      <Button onClick={() => reset()}>Перезагрузить страницу</Button>
    </Stack>
  )
}

export default Error
