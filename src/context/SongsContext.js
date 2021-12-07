import React, { createContext } from 'react';

export const SongsContext = createContext();

export const SongsProvider = ({ children }) => {
  const miObjeto = {
    tituloHeader: 'Song Lyrics',
    log() {
      console.log('algo');
    },
  };
  return (
    <SongsContext.Provider value={miObjeto}>{children}</SongsContext.Provider>
  );
};
