import * as _ from 'lodash'
import def from './default'
import { Config } from './index'

const config = {
  stage: 'development',
}

export default _.defaultsDeep(config, def) as Config
