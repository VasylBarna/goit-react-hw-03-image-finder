import { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </Container>
    );
  }
}
