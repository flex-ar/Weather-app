import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { WeatherApp } from './WeatherApp';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <WeatherApp />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
