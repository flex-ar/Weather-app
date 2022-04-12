export const getCurrentPosition = () => new Promise<GeolocationCoordinates>((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      resolve(coords);
    },
    (error) => {
      console.log(error);
      reject(error.message);
    }
  );
});
