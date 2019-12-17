import { Config } from './index'
import * as pkg from '../../package.json'

const config: Config = {
  stage: 'unknown',
  app: {
    host: '0.0.0.0',
    port: 9088,
    name: pkg.name,
    debug: false,
  },
}

export default config
