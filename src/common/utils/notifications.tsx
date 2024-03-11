'use client'
import { notifications } from '@mantine/notifications'
import { rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

import { INotificationProps } from '../models'

const checkIcon = () => {
  return <IconCheck style={{ width: rem(20), height: rem(20) }} />
}

export const notificationSuccess = ({ message, title, loading }: INotificationProps) =>
  notifications.show({
    withCloseButton: false,
    autoClose: 5000,
    title: title,
    message: message,
    color: 'teal',
    icon: checkIcon(),
    radius: '10px',
    loading: loading
  })

export const notificationError = ({ title, message, loading }: INotificationProps) =>
  notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: title,
    message: message,
    color: 'black',
    style: { backgroundColor: 'red' },
    loading: loading
  })

export const notificationInfo = ({ title, message, loading }: INotificationProps) =>
  notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: title,
    message: message,
    color: 'black',
    style: { backgroundColor: 'yellow' },
    loading: loading
  })
