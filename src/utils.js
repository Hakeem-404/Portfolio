export const getImageUrl = (path) => {
  // This is the recommended way to handle static assets in Vite
  return `/assets/${path}`;
};