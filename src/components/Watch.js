import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Answer } from './Answer'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginRight: '25px',
    width: 200
  }
})

class Watch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeGuess: null
    }
  }

  handleTimeChange(e) {
    this.setState({
      timeGuess: e.target.value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <h1>What Time do you think it is?</h1>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Enter Time"
            type="time"
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }}
            onChange={(e) => this.handleTimeChange(e)}
          />
        </form>
        <Answer timeGuess={this.state.timeGuess || ''} />
      </React.Fragment>
    )
  }
}

Watch.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Watch)
