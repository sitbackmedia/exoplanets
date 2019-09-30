import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as PlanetActions from './planets'

import {
  API_URL
} from 'config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const LOAD_ERROR = 'planets/finding/LOAD_ERROR'
const LOAD_START = 'planets/finding/LOAD_START'
const LOAD_SUCCESS = 'planets/finding/LOAD_SUCCESS'

describe('loadStart', () => {
  it('Should set the type to LOAD_START', () => {
    const expectedAction = {
      type: LOAD_START
    }
    expect(PlanetActions.loadStart()).toEqual(expectedAction)
  })
})

describe('loadSuccess', () => {
  it('Should set the type to LOAD_SUCCESS', (results = {}) => {
    const expectedAction = {
      type: LOAD_SUCCESS,
      payload: results
    }
    expect(PlanetActions.loadSuccess(results = {})).toEqual(expectedAction)
  })
})

describe('loadError', () => {
  it('Should set the type to LOAD_ERROR', () => {
    const expectedAction = {
      type: LOAD_ERROR
    }
    expect(PlanetActions.loadError()).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('Loads the planets', () => {
    fetchMock.getOnce(API_URL, {
      body: {
        planets: [{}]
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: LOAD_START },
      { type: LOAD_SUCCESS, payload: { planets: [{}] } }
    ]
    const store = mockStore({
      isLoading: false,

      all: []
    })

    return store.dispatch(PlanetActions.load()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
