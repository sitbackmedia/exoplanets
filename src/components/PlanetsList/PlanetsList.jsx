import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import * as PlanetActions from 'redux/modules/planets'

import PlanetRecord from '../PlanetRecord/PlanetRecord.jsx'

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
  planetsGroupedByYearAndSize: PlanetActions.getPlanetsGroupedByYearAndSize(state)
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

class PlanetsList extends React.Component {
  /**
   * Available Props for the Class
   *
   * @type {Object}
   */
  static propTypes = {
    planetsGroupedByYearAndSize: PropTypes.object
  }

  /**
   * Default Prop Values
   *
   * @type {Object}
   */
  static defaultProps = {
    planets: []
  }

  render () {
    const {
      planetsGroupedByYearAndSize
    } = this.props

    return (
      <div>

        {(Object.keys(planetsGroupedByYearAndSize).length > 0) &&
          Object.keys(planetsGroupedByYearAndSize).reverse().map((year) => (

            <div
              className={'my-3'}
              key={year}>

              {/* Each Year will be its own container */}

              {/* Heading */}

              <Row
                className={'bg-white shadow-sm'}>
                <Col
                  className={'py-2'}>
                  <h5
                    className={'mb-0'}>
                    {`Year: ${year || 'Unknown'}`}
                  </h5>
                </Col>
              </Row>

              {/* This is the first grouping by planet Size */}

              {Object.keys(planetsGroupedByYearAndSize[year]).map(size => (

                <div
                  key={size}>

                  <Row
                    className={'bg-secondary py-1 shadow-sm py-2'}>
                    <Col
                      className={'text-capitalize'}>
                      {`${size} Planets`}
                    </Col>

                    <Col
                      className={'text-right'}>
                      {`total: ${planetsGroupedByYearAndSize[year][size].length.toLocaleString()}`}
                    </Col>
                  </Row>

                  {/* Table Heading for Each Planet Record */}

                  <Row
                    className={'bg-white shadow-sm px-2 py-3 font-weight-bold border-bottom'}>

                    <Col
                      sm="2">
                      Discovered
                    </Col>

                    <Col
                      sm="2">
                      Size
                    </Col>

                    <Col>
                      Planet Identifier
                    </Col>

                    <Col
                      className={'text-right'}>
                      Host Star Temp (K)
                    </Col>

                  </Row>

                  {/* Planet records */}

                  {(planetsGroupedByYearAndSize[year][size]).map(planet => (

                    <PlanetRecord
                      planet={planet}
                      size={size}
                      key={planet.PlanetIdentifier} />

                  ))}

                </div>

              ))}

            </div>

          ))}

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList)
