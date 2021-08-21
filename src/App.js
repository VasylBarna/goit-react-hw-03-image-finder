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

// import { Component } from 'react';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
// import Loader from './components/Loader';
// import ApiService from './services/api';
// import Modal from './components/Modal';
// import PropTypes from 'prop-types';

// const apiService = new ApiService();
// export default class App extends Component {
//   static propTypes = {
//     hits: PropTypes.array,
//     searchQuery: PropTypes.string,
//     currentPage: PropTypes.number,
//     isLoading: PropTypes.bool,
//     showModal: PropTypes.bool,
//     largeImageURL: PropTypes.string,
//     tags: PropTypes.string,
//     error: PropTypes.string,
//   };
//   state = {
//     hits: [],
//     searchQuery: '',
//     currentPage: 1,
//     isLoading: false,
//     error: null,
//     showModal: false,
//     largeImageURL: '',
//     tags: '',
//   };

//   toogleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   onOpenModal = (largeImageURL = '') => {
//     this.setState({ largeImageURL });
//     this.toogleModal();
//   };

//   handleSearchSubmit = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       hits: [],
//       error: null,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.getImages();
//     }
//     if (
//       this.state.searchQuery !== 2 &&
//       prevState.currentPage !== this.state.currentPage
//     ) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }
// fatchImages = () => {
//   this.setState({ isLoading: true });

//   getImages = () => {
//     this.setState({ loading: true });

//     apiService
//       .fetchImages()
//       .then(hits =>
//         this.setState(prevState => ({
//           hits: [...prevState.hits, ...hits],
//         })),
//       )
//       .catch(error => {
//         this.setState({ error });
//         console.log(error);
//       })
//       .finally(this.setState({ loading: false }));
//   };

//   render() {
//     const { hits, isLoading, showModal, largeImageURL, tags } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearchSubmit} />
//         <ImageGallery hits={hits} onOpenModal={this.onOpenModal} />

//         {isLoading && <Loader />}

//         {hits.length > 11 && !isLoading && <Button onClick={this.getImages} />}

//         {showModal && (
//           <Modal onClose={this.onOpenModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
