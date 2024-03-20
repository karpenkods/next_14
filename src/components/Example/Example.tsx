'use client'
import { FC } from 'react'

import { Button, Group, useMantineColorScheme, Text, Grid, GridCol } from '@mantine/core'
import { nprogress } from '@mantine/nprogress'

import { notificationSuccess } from '@/common'

export const Example: FC = () => {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <Grid>
      <GridCol span={{ base: 12, md: 6, xl: 4 }}>
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
      </GridCol>
      <GridCol span={{ base: 12, md: 6, xl: 4 }}>
        <Text>Second col</Text>
      </GridCol>
    </Grid>
  )
}
