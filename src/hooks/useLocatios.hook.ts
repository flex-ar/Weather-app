import { useEffect, useState } from 'react';
import { Location } from '../models';
import { getLocations } from '../services';

export const useLocations = (query: string) => {

  const [locations, setLocations] = useState({} as Location[]);

  useEffect(() => {
    getLocations(query)
      .then(_locations => setLocations(_locations))
      .catch( console.error );
  }, []);

  return { locations }

};