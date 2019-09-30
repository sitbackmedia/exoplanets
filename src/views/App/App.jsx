import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import * as PlanetActions from 'redux/modules/planets'

import './App.css'

import {
  Container
} from 'reactstrap'

import {
  FullPageLoader,
  PlaceholderNoPlanets,
  PlanetHighlights,
  PlanetsList
} from 'components'

/**
 * Connects the Redux State to this
 * components props.
 * @param  {object} state The Redux Store's State
 * @return {object}
 * @example
 * propName: state.namespace.property
 */
const mapStateToProps = (state) => ({
  isPlanetsLoading: PlanetActions.isPlanetsLoading(state),
  orphanPlanets: PlanetActions.getOrphanPlanets(state),
  planets: PlanetActions.getPlanets(state)
})

/**
 * Connects the Redux actions to this
 * components props
 * @param  {function} dispatch the Redux dispatch
 * @return {object}
 * @example
 * toggleCheck: (check) => dispatch(toggleCheck(check))
 */
const mapDispatchToProps = (dispatch) => ({
  loadPlanets: () => dispatch(PlanetActions.load())
})

class App extends React.Component {
  /**
   * Available Props for the Class
   *
   * @type {Object}
   */
  static propTypes = {
    isPlanetsLoading: PropTypes.bool,
    orphanPlanets: PropTypes.array,
    planets: PropTypes.array
  }

  /**
   * Default Prop Values
   *
   * @type {Object}
   */
  static defaultProps = {
    planets: []
  }

  /**
   * Starts the class
   * @param  {Object} props
   * @return {null}
   */
  constructor (props) {
    super(props)

    /**
     * Local properties
     * @type {Object}
     */
    this.state = {}
  }

  async componentDidMount () {
    try {
      await this.props.loadPlanets()
    } catch (error) {
      console.log('loadPlanets Error: ', error)
    }
  }

  /**
   * Visual output
   * @return {JSX}
   */
  render () {
    const {
      isPlanetsLoading,
      planets
    } = this.props

    return (

      <Container
        className="mt-5">

        {/* For loading the planets */}

        <FullPageLoader
          isLoading={isPlanetsLoading} />

        {/* Render the list of planets */}

        {(planets.length > 0 && !isPlanetsLoading) && (

          <div>

            <PlanetHighlights />

            <PlanetsList />

          </div>

        )}

        {/* For no results found */}

        {(planets.length === 0 && !isPlanetsLoading) && (

          <PlaceholderNoPlanets />

        )}

      </Container>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
