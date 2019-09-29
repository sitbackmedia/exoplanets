import {
  PlanetsAPI
} from 'api'

// Main Action Types

const LOAD_ERROR = 'planets/finding/LOAD_ERROR'
const LOAD_START = 'planets/finding/LOAD_START'
const LOAD_SUCCESS = 'planets/finding/LOAD_SUCCESS'

/**
 * Initial values for the Store
 * @type {Object}
 */

const initialState = {
  isLoading: false,

  all: []
}

export default function reducer (state = initialState, action) {
  // For manipulatiing data
  // without affecting the store
  const stateCopy = {
    ...state
  }

  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        isLoading: true
      }

    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        all: action.payload
      }

    case LOAD_ERROR:
      return {
        ...state,
        isLoading: false
      }

    default:
      return stateCopy
  }
}

// Main Events

export function loadStart () {
  return {
    type: LOAD_START
  }
}

export function loadSuccess (results) {
  return {
    type: LOAD_SUCCESS,
    payload: results
  }
}

export function loadError () {
  return {
    type: LOAD_ERROR
  }
}

/**
 * Load the main list of planets
 *
 */
export function load () {
  return async dispatch => {
    dispatch(loadStart())

    try {
      const response = await PlanetsAPI.load()
      await handleErrors(response)
      const planets = await response.json()
      dispatch(loadSuccess(planets))
    } catch (error) {
      dispatch(loadError)
      throw error
    }
  }
}

// Selectors

export const getPlanets = state => state.planets.all

/**
 * Fetch doesn't handle errors so this
 * will bundle response from fetch into an error
 * that we can use to give feedback to the user
 *
 * @param {object} response
 */

function handleErrors (response) {
  if (!response.ok) {
    throw response.statusText || response.status
  }
  return response
}
