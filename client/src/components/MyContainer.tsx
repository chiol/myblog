import React from 'react'
import PropTypes from 'prop-types'

const MyContainer: React.FC<IMyContainer> = props => {
    1920 / props.height 
    return (
        <></>
    )
}

interface IMyContainer {
    width? :number,
    height: number
}

MyContainer.propTypes = {
    width :PropTypes.number,
    height :PropTypes.number.isRequired
}

export default MyContainer