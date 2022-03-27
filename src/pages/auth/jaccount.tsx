import { Center, Spinner } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import * as React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { StringParam, useQueryParam } from 'use-query-params'
import { LoginSource, OAuthLoginChannel } from '../../services/auth_pb'
import rpc from '../../services/rpc'
import { OAuthLoginRequest } from '../../services/treehole_pb'
import { getWebSource } from '../../utils/env'

const JAAuthPage = () => {
  const [code, _] = useQueryParam('code', StringParam)

  useEffect(() => {
    if (window.opener) window.opener.postMessage(code, '*')
    else {
      rpc.client
        .oAuthLogin(
          new OAuthLoginRequest()
            .setChannel(OAuthLoginChannel.LOGINWITHJACCOUNT)
            .setSource(LoginSource.LOGINSOURCEWEB)
            .setWebSource(getWebSource())
            .setCode(code!),
          {}
        )
        .then((res) => {
          Cookies.set('treehole_session', res.getToken())
        })
        .finally(() => (window.location.href = '/'))
    }
  }, [])

  return (
    <Center h='100vh' w='100%'>
      <Helmet>
        <title>使用 jAccount 登录</title>
      </Helmet>
      <Spinner />
    </Center>
  )
}

export default JAAuthPage
