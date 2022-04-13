import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { WeatherApp } from './WeatherApp';

const container = document.getElementById('root') ?? new Element;
const root = createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider>
      <WeatherApp />
    </ChakraProvider>
  </StrictMode>
);
