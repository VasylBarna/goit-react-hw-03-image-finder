import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({
  id,
  url,
  tags,
  largeImage,
  toggleModal,
  handleLargeImage,
}) => {
  const handleOpenModal = () => {
    toggleModal();
    handleLargeImage(largeImage);
  };

  return (
    <li
      className={styles.imageGallery}
      key={id}
      onClick={() => handleOpenModal()}
    >
      <img className={styles.image} src={url} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propeType = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

// export default function ImageGalleryItem({ webformatURL, onClick, tags }) {
//   return (
//     <img
//       src={webformatURL}
//       alt={tags}
//       className={styles.image}
//       onClick={onClick}
//     />
//   );
// }

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   tags: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };
