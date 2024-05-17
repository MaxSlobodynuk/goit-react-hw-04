import { useState } from "react";
import { fetchPicturesWithTopic } from "../../pictures-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async (value) => {
    try {
      setData([]);
      setError(false);
      setLoading(true);
      const { data } = await fetchPicturesWithTopic(value);
      setData(data.results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {data.length > 0 && <ImageGallery pictures={data} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {data.length > 0 && <LoadMoreBtn />}
    </div>
  );
};

export default App;
