'use client'
import { FC } from 'react'

import { Button, Group, useMantineColorScheme, Text } from '@mantine/core'
import { nprogress } from '@mantine/nprogress'

import { notificationSuccess } from '@/common'

export const Example: FC = () => {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <Group justify="center" mt="xl">
      <Button color="lime" fz={24} onClick={() => setColorScheme('light')}>
        Light
      </Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={() => nprogress.start()}>Start</Button>
      <Button onClick={() => notificationSuccess({ message: 'Ура', title: 'Загоовок' })}>
        Show notification
      </Button>
      <Text>dfgbdfgb</Text>
    </Group>
  )
}
