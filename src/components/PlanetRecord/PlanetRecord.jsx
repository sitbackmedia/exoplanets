import React from 'react'

import PropTypes from 'prop-types'

import {
  Row,
  Col,
  Badge
} from 'reactstrap'

class PlanetRecord extends React.Component {
  /**
  * Available Props for the Class
  *
  * @type {Object}
  */
  static propTypes = {
    planet: PropTypes.object,
    size: PropTypes.string
  }

  /**
   * Default Prop Values
   *
   * @type {Object}
   */
  static defaultProps = {
    planet: {},
    size: null
  }

  render () {
    const {
      planet,
      size
    } = this.props

    return (
      <Row
        className={'bg-white shadow-sm px-2 py-3'}>

        {/* year discovered */}

        <Col
          sm="2">
          {planet.DiscoveryYear || '----'}
        </Col>

        {/* planet size */}

        <Col
          sm="2">
          <Badge
            color={'light'}>
            {size}
          </Badge>
        </Col>

        {/* identifier and if orphan */}

        <Col>
          {planet.PlanetIdentifier}

          {/* For orphan planets */}

          {(planet.TypeFlag === 3) && (

            <Badge
              color="warning"
              className={'ml-2'}
              pill>
              orphan
            </Badge>

          )}
        </Col>

        {/* hosting star tempurature */}

        <Col
          className={'text-right'}>
          {planet.HostStarTempK || '----'}
        </Col>

      </Row>
    )
  }
}

export default PlanetRecord
