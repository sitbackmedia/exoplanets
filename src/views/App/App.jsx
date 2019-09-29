import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import * as PlanetActions from 'redux/modules/planets'

import './App.css'

import {
  Button
} from 'reactstrap'

/**
 * Connects the Redux State to this
 * components props.
 * @param  {object} state The Redux Store's State
 * @return {object}
 * @example
 * propName: state.namespace.property
 */
const mapStateToProps = (state) => ({
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
    return (

      <div
        className="container mt-5">

        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        <Button color="primary" type="button">
          Button
        </Button>
        <Button className="btn-icon btn-3" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-bag-17" />
          </span>
          <span className="btn-inner--text">With icon</span>
        </Button>
        <Button className="btn-icon btn-2" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-atom" />
          </span>
        </Button>

      </div>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
