import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useDidUpdateEffect = (
  fn: EffectCallback,
  inputs?: DependencyList
) => {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      return fn()
    }
    didMountRef.current = true
  }, inputs)
}
