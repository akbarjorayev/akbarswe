import { useEffect, useState } from 'react'
import { getFileUrlFromDB } from '../database/file/getFileUrl'

export function useGetUrlFromDB(path, bucketName) {
  const [data, setData] = useState('loading')

  useEffect(() => {
    async function load() {
      const dbData = await getFileUrlFromDB(path, bucketName)
      setData(dbData)
    }
    load()
  }, [])

  return [data]
}
