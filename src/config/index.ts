import development from './development'
import production from './production'

export interface Config {
  stage: string
  app: ConfigApp
}

interface ConfigMap {
  [key: string]: Config
}

export interface ConfigApp {
  host: string
  name: string
  port: number
  debug: boolean
}

const configs: ConfigMap = {
  production,
  development,
}

export function getConfig(preferred?: string): Config {
  const env = preferred || (process.env.NODE_ENV || '').toLowerCase()
  return configs[env] || configs.development
}

export default getConfig()
