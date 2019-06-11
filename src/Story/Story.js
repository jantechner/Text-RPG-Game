import React from 'react'
import Actions from './../Actions/Actions.js'
import './Story.css'
import { Card, CardContent, Typography, Grid, Divider, CardHeader } from '@material-ui/core';
import Progress from './../Progress/Progress'


class Story extends React.Component {

    constructor(props) {
        super(props)

        this.story = this.props.story

        this.state = {
            currentStep: 0,
            progress: []
        }

        this.handleStepChange = this.handleStepChange.bind(this)
        this.handleProgressChange = this.handleProgressChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFetched) {
            this.story = nextProps.story
            this.setState({
                progress: [this.story[0]]
            })
        }
    }

    handleStepChange(step) {
        const newProgress = this.state.progress
        newProgress.push(this.findStepById(step))
        this.setState({
            currentStep: step,
            progress: newProgress
        })

    }

    handleProgressChange(stepId) {
        this.setState({
            currentStep: stepId,
            progress: this.state.progress.filter(item => item.id <= stepId)
        })
    }

    findStepById(stepId) {
        console.log(this.story.find(item => item.id === stepId))
        return this.story.find(item => item.id === stepId)
    }

    render() {
        const step = this.findStepById(this.state.currentStep)
        if (this.props.isFetched) {
            return (
                <Grid container spacing={4} >
                    <Grid item xs={9}>
                        <Card raised={true}>
                            <CardHeader title={step.title}/>
                            <Divider variant='middle'/>
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    {step.text}
                                </Typography>
                            </CardContent>
                            <Actions actions={step.actions} handleStepChange={this.handleStepChange} />
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Progress progress={this.state.progress} progressChange={this.handleProgressChange} />
                    </Grid>
                </Grid>
            )
        }
        return <div></div>
    }

}

export default Story