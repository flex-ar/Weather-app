import { useState } from 'react';
import { Location } from '../models';
import { getLocations } from '../services';

export const useLocations = () => {

  const [locations, setLocations] = useState([] as Location[]);
  const [isSearching, setIsSearching] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const startSearchLocations = (query: string) => {
    setIsSearching(true);

    getLocations(query)
      .then(_locations => {
        setIsSearching(false);
        if (_locations.length === 0) return setIsEmpty(true);
        setLocations(_locations);
        setIsEmpty(false);
      })
      .catch( console.error );
  };

  return { isEmpty, isSearching, locations, startSearchLocations };

};