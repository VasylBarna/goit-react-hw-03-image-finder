// import { Component } from 'react';
// import ApiService from '../../services/api';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
// import Modal from '../Modal';
// import Button from '../Button';
import styles from './ImageGallery.module.scss';
// import Loader from 'react-loader-spinner';

// const apiService = new ApiService();

// export default class ImageGallery extends Component {
//   static propTypes = {
//     images: PropTypes.array,
//     showModal: PropTypes.bool,
//     largeImage: PropTypes.string,
//     error: PropTypes.string,
//     isLoading: PropTypes.bool,
//   };

//   state = {
//     images: [],
//     showModal: false,
//     largeImage: '',
//     error: null,
//     loading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imageName;
//     const currentName = this.props.imageName;

//     if (prevName !== currentName) {
//       this.setState({ images: [] });
//       apiService.query = currentName;
//       apiService.resetPage();
//       this.getImages();
//     }

//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   }

//   toggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   handleLargeImage = or => {
//     this.setState({ largeImage: or });
//   };

//   handleBtnClick = () => {
//     this.getImages();
//   };

//   getImages = () => {
//     this.setState({ loading: true });

//     apiService
//       .fatchImages()
//       .then(images =>
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images],
//         })),
//       )
//       .catch(error => {
//         this.setState({ error });
//         console.log(error);
//       })
//       .finally(this.setState({ loading: false }));
//   };

//   render() {
//     const { showModal, loading, images, tags, largeImage } = this.state;

//     return (
//       <>
//         {showModal && (
//           <Modal onCloseModal={this.toggleModal}>
//             <img src={largeImage} alt={tags} />
//           </Modal>
//         )}

//         <ul className={styles.imageGallery}>
//           {images.map(({ id, webformatURL, tags, largeImageURL }) => {
//             return (
//               <ImageGalleryItem
//                 id={id}
//                 url={webformatURL}
//                 tags={tags}
//                 largeImage={largeImageURL}
//                 toggleModal={this.toggleModal}
//                 handleLargeImage={this.handleLargeImage}
//               />
//             );
//           })}
//         </ul>

//         {images.length > 0 && !loading && (
//           <Button onClick={this.handleBtnClick} />
//         )}

//         {loading && (
//           <Loader
//             type="Bars"
//             color="#FF8C00"
//             height={300}
//             width={300}
//             timeout={1500}
//           />
//         )}
//       </>
//     );
//   }
// }

const ImageGallery = ({ hits, onOpenModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL }) => {
        const handleImgClick = () => onOpenModal(largeImageURL);
        return (
          <li key={id} className={styles.imageGalleryItem}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              onClick={handleImgClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
