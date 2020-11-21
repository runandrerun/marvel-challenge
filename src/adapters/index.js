const API_KEY = process.env.GIPHY_API_KEY

export const searchGiphy = (query) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${URL}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
  fetch(URL)
  .then(data => {
    console.log(data);
  });
};

export const fetchTrending = () => {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${URL}&limit=25&rating=g`;
  fetch(URL)
  .then(data => {
    console.log(data);
  });
};
