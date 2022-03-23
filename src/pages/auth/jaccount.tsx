import * as React from 'react'
import { useEffect } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'

const JAAuthPage = () => {
  const [code, _] = useQueryParam('code', StringParam)

  useEffect(() => {
    if (window.opener) window.opener.postMessage(code, '*')
    else window.close()
  }, [])

  return (
    <main>
      <title>使用 jAccount 登录</title>
    </main>
  )
}

export default JAAuthPage
