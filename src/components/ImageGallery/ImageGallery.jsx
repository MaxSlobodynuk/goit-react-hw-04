import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={css.container}>
      {pictures.map(({ id, urls, alt_description }) => (
        <li
          key={id}
          className={css.item}
          onClick={() => openModal(urls.regular)}
        >
          <ImageCard url={urls.small} description={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
