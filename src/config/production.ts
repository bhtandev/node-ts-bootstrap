import def from './default'
import * as _ from 'lodash'
import { Config } from './index'
import * as pkg from '../../package.json'

const config = {
  stage: 'production',
  app: {
    host: '0.0.0.0',
    port: 80,
    name: pkg.name,
    debug: false,
  },
}

export default _.defaultsDeep(config, def) as Config
