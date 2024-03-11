'use client'
import Link from 'next/link'

import { Button, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const NotFound = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <Stack align="center" justify="center" gap="xs" h="99vh">
      <Text fz={64} fw={700} c="gray">
        404
      </Text>
      <Text fz={isMobile ? 24 : 36} fw={500}>
        Страница не найдена
      </Text>
      <Button component={Link} href="/" fz={isMobile ? 14 : 16}>
        Перейти на главную
      </Button>
    </Stack>
  )
}

export default NotFound
