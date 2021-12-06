/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, createContext } from 'react';

export const ArticlesContext: any = createContext({});

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  return <ArticlesContext.Provider value={{ articles, setArticles }}>{children}</ArticlesContext.Provider>;
}

export default ArticlesProvider;