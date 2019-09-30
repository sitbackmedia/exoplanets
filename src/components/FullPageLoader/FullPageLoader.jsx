import React from 'react'

import Proptypes from 'prop-types'

import {
  Fade,
  Spinner
} from 'reactstrap'

import './FullPageLoader.scss'

class FullPageLoader extends React.Component {
  /**
   * Available Props for the Class
   *
   * @type {Object}
   */
  static propTypes = {
    isLoading: Proptypes.bool
  }

  /**
   * Default Prop Values
   *
   * @type {Object}
   */
  static defaultProps = {
    isLoading: false
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {
      isLoading
    } = this.props

    return (
      <Fade
        className={'FullPageLoader'}
        in={isLoading}
        enter={false}>

        <div>
          <Spinner color="primary" />
        </div>

        <div
          className={'font-italic mt-3'}>
          <p>Loading planets...</p>
        </div>

      </Fade>
    )
  }
}

export default FullPageLoader
