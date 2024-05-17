import css from "./ImageCard.module.css";

const ImageCard = ({ url, description }) => {
  return (
    <div className={css.photoContainer}>
      <img src={url} alt={description} className={css.photo} />
    </div>
  );
};

export default ImageCard;
