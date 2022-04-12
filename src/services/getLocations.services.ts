import { EndpointLocation, Location } from '../models';

export const getLocations = async(query: string): Promise<Location[]> => {
  try {
    // import module
    const { URLs } = await import('./URLs.services');

    // get data
    const response = await fetch(`${URLs.QUERY}${query}`);
    const locations: EndpointLocation[] = await response.json();

    // return adapted location
    return locations.map(location => ({
      location_name: location.title,
      location_id: location.woeid
    }));

  } catch (error) {
    console.error(error);
    throw new Error('Error en getLocations');
  };
};
