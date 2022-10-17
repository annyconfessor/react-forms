import { useMemo } from 'react'

const useLocalStorage = (key: string, defaultValue: string) => {

  const localStoredValue = window.localStorage.getItem(key)


  const storedValue = useMemo(() => {

    return localStoredValue ? JSON.parse(localStoredValue) : defaultValue

  }, [localStoredValue, defaultValue])


  const setValue = (value: string) => {

    window.localStorage.setItem(key, JSON.stringify(value))

  }

  return [storedValue, setValue]

}


export default useLocalStorage