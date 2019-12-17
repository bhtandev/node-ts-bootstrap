import initDI, { DIContainer } from './di'
import config from './config'
import Server from './server'

initDI(config).then((dic: DIContainer): void => {
  const app = Server(dic)

  app.run()
})
