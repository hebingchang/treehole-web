import { WebSource } from '../services/auth_pb'

export const getWebSource = () => {
  switch (process.env.GATSBY_TREEHOLE_ENV) {
    case 'localhost':
      return WebSource.WEBSOURCELOCALHOST
    case 'dev':
      return WebSource.WEBSOURCEDEVSERVER
    case 'prod':
      return WebSource.WEBSOURCEPRODSERVER
    default:
      return WebSource.WEBSOURCELOCALHOST
  }
}
