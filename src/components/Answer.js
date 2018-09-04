import React from 'react'
import PropTypes from 'prop-types'

const currentTime = (time) => {
  let calculatedTime, mins, hrs
  if (!time) {
    calculatedTime = new Date(Date.now())
    mins = parseInt(calculatedTime.getMinutes(), 10)
    hrs = parseInt(calculatedTime.getHours(), 10)
  } else {
    const timesplit = time.split(':')
    hrs = parseInt(timesplit[0], 10)
    mins = parseInt(timesplit[1], 10)
  }
  return [hrs, mins]
}

export const Answer = (props) => {
  const { timeGuess } = props
  if (timeGuess === '') return null
  let isEqual
  const guessTime = currentTime(timeGuess)
  const time = currentTime(false)

  isEqual = time[0] === guessTime[0] && time[1] === guessTime[1]

  return isEqual ? <h1>Yup thats the time</h1> : <h1>That is not the time</h1>
}

Answer.propTypes = {
  timeGuess: PropTypes.string.isRequired
}
