import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Bars"
        color="#FF8C00"
        height={300}
        width={300}
        timeout={1500}
      />
    );
  }
}
