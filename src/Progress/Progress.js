import React from 'react'
import { Stepper, Step, StepButton } from '@material-ui/core';


class Progress extends React.Component {

    handler(stepId) {
        console.log("StepID", stepId)
        this.props.progressChange(stepId)
    }

    render() {
        return (
            <Stepper nonLinear orientation="vertical" activeStep={this.props.progress.length - 1}>
                {this.props.progress.map((item, index) => (
                    <Step key={index}>
                        <StepButton onClick={this.handler.bind(this, item.id)}>{item.progress_title}</StepButton>
                    </Step>
                ))}
            </Stepper>
        )
    }

}

export default Progress