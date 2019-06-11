import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Actions.css'

class Actions extends React.Component {

    handler(index) {
        let nextSteps = this.props.actions[index].nextStep

        if (Array.isArray(nextSteps)) {
            var nextStep = nextSteps[Math.floor(Math.random() * nextSteps.length)]
            this.props.handleStepChange(nextStep)
        } else {
            this.props.handleStepChange(nextSteps)
        }
    }

    render() {
        return (
            <Grid container justify="space-evenly" className="grid-container">
                {this.props.actions.map((action, index) => (
                    <Grid key={index} item>
                        <Button variant="outlined" color="primary" className="action" onClick={this.handler.bind(this, index)}>
                            {action.text}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default Actions