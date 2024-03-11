'use client'
import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay = 1000): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [delay, value])

  return debounced
}
