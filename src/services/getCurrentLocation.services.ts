import { URLs } from './URLs.services';
import { Location, EndpointLocation } from '../models';

export const getCurrentLocation = async(): Promise<Location> => {
  try {
    // import module
    const { getCurrentPosition } = await import('../helpers');
    const { latitude, longitude } = await getCurrentPosition();

    // get data
    const response = await fetch(`${URLs.LATTLONG}${latitude},${longitude}`);
    const closestLocations: EndpointLocation[] = await response.json();

    // return adapted location
    return {
      location_name: closestLocations[0].title,
      location_id: closestLocations[0].woeid
    };

  } catch (error) {
    console.error(error);
    throw Error('Error al obtener el WOEID de la posicion actual');
  };
};
