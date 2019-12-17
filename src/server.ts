import { DIContainer } from './di'

export interface App {
  run: () => void
}

export default function(dic: DIContainer): App {
  return {
    run: () => {
      console.log('Hello World')
    },
  }
}
