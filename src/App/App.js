import React from 'react';
import './App.css';
import Story from '../Story/Story'
import Container from '@material-ui/core/Container';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.story = []
    this.state = {
      isFetched: false
    }
  }

  componentDidMount() {
    this.loadStory();
  }

  loadStory() {
    var data = require('./story.json')

    this.story = data.map(element => ({
      id: element.id,
      title: element.title,
      text: element.text,
      actions: element.actions,
      progress_title: element.progress_title
    }))

    this.setState({
      isFetched: true,
    })
  }

  render() {
    return (
      <Container maxWidth="lg" className='container'>
        <Story story={this.story} isFetched={this.state.isFetched} />
      </Container>
    )
  }
}

export default App
