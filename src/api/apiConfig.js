const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "5417255ab6a0e9d02ee2f21be836ab64",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
