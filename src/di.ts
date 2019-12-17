import { Config } from './config'

export interface DIContainer {
  config: Config
}

export default async function initDI(config: Config): Promise<DIContainer> {
  const dic = {}

  return {
    ...dic,
    config,
  }
}
