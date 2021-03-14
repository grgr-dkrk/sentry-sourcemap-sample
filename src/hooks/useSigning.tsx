/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { sleep } from '../libs/sleep'

type State = {
  isLoading: boolean
  isSigned: boolean
}

export const useSigning = (): State => {
  const [isLoading, setLoading] = useState(true)
  const [isSigned, setSigned] = useState(false)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await sleep(1000)
      throw new Error('failed to fetch')
    }
    fetchData()
  }, [])

  return { isLoading, isSigned }
}
