import { describe, it } from 'mocha'
import { expect } from 'chai'
import config, { getConfig } from '../../../src/config'

describe('Unit: Config', (): void => {
  it('should return ENV config when preferred is not set', () => {
    expect(config.stage).to.equal(process.env.NODE_ENV || 'development')
  })
  it('should return preferred env when set', () => {
    expect(getConfig('staging').stage).to.equal('staging')
  })
  it('should return development env when invalid env is set', () => {
    expect(getConfig('invalid').stage).to.equal('development')
  })
})
