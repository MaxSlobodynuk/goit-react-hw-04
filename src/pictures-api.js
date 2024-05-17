import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPicturesWithTopic = async (name) => {
  const response = await axios.get(
    `search/photos?page=1&query=${name}&client_id=DcWznAG55_-DefiHU7KIlsyubpkYu6MUPr081Xlzzd8`
  );
  return response;
};

