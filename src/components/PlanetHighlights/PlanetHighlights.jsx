import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import * as PlanetActions from 'redux/modules/planets'

import {
  Row,
  Col
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
  orphanPlanets: PlanetActions.getOrphanPlanets(state),
  planetWithHottestStar: PlanetActions.getPlanetWithHottestStar(state)
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

})

class PlanetHighlights extends React.Component {
  /**
   * Available Props for the Class
   *
   * @type {Object}
   */
  static propTypes = {
    orphanPlanets: PropTypes.array,
    planetWithHottestStar: PropTypes.object
  }

  /**
   * Default Prop Values
   *
   * @type {Object}
   */
  static defaultProps = {
    orphanPlanets: [],
    planetWithHottestStar: {}
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {
      orphanPlanets,
      planetWithHottestStar
    } = this.props

    return (

      <Row
        className={'mb-2 bg-white shadow-sm'}>

        {/* Orphan Planets */}

        <Col
          className={'border-right p-5'}>

          <p
            className={'text-muted mb-0'}>
            Number of Orphan Planets
          </p>

          <h3>
            {orphanPlanets.length}
          </h3>

        </Col>

        <Col
          className={'p-5'}>

          <p
            className={'text-muted mb-0'}>
            Planet Orbiting the Hottest Star
          </p>

          <h3>
            {planetWithHottestStar.PlanetIdentifier}
          </h3>

        </Col>

      </Row>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetHighlights)
