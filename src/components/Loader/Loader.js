import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#FF8C00"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
