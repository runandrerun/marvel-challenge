const API_KEY = process.env.REACT_APP_API_KEY;

export const searchGiphy = async (query) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=50&offset=0&rating=g&lang=en`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
};

export const fetchTrending = async () => {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50&rating=g`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  console.log(body.data)
  return body.data;
};
