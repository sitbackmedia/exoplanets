import React from 'react'

import noPlanets from 'assets/img/no-planets.png'

import {
  Row,
  Col
} from 'reactstrap'

class PlaceholderNoPlanets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Row
        className={'mt-5'}>

        <Col
          sm={{ size: 4, offset: 4 }}
          className={'shadow-sm bg-white p-4 text-center'}>

          <img
            src={noPlanets}
            alt="No planets found"
            className={'img-fluid'} />
          <h5
            className={'mt-2'}>
            Sorry, no planets were found.
          </h5>

        </Col>

      </Row>

    )
  }
}

export default PlaceholderNoPlanets
