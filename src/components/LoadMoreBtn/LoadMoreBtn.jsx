import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={css.container}>
      <button className={css.button} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
