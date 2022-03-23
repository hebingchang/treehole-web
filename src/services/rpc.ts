import Cookies from 'js-cookie'
import { TreeHoleClient } from './TreeholeServiceClientPb'

class RPC {
  client: TreeHoleClient
  host = 'https://treehole-proxy.boar.workers.dev'

  constructor() {
    const unaryInterceptor = {
      intercept: (request: any, invoker: any) => {
        const meta = request.getMetadata()
        meta.authorization = Cookies.get('treehole_session')

        return invoker(request).then((response: any) => {
          return response
        })
      },
    }

    const interceptedStream = (stream: any) => ({
      on: (eventType: any, callback: any) => {
        stream.on(eventType, callback)
        return { stream }
      },
      cancel: () => {
        stream.cancel()
      },
    })

    const streamInterceptor = {
      intercept: (request: any, invoker: any) => {
        const meta = request.getMetadata()
        meta.authorization = Cookies.get('treehole_session')

        return interceptedStream(invoker(request))
      },
    }

    this.client = new TreeHoleClient(this.host, null, {
      unaryInterceptors: [unaryInterceptor],
      streamInterceptors: [streamInterceptor],
    })
    // this.client.ping(new EmptyRequest(), {})
  }
}

const rpc = new RPC()
export default rpc
