import { URLs } from './URLs.services';
import { Location, EndpointLocation } from './interfaces.services';

export const getCurrentLocation = async(): Promise<Location> => {
  try {
    // import module
    const { getCurrentPosition } = await import('../helpers/getCurrentPosition');
  
    // get data
    const { latitude, longitude } = await getCurrentPosition();
    const response = await fetch(`${URLs.LATTLONG}${latitude},${longitude}`);
    const closestLocations: EndpointLocation[] = await response.json();

    // return adapted location
    return {
      location_name: closestLocations[0].title,
      location_id: closestLocations[0].woeid
    };

  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el WOEID de la posicion actual');
  };
};
