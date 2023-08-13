import React, { createContext, useContext, useState } from 'react';

import { PageType } from '../types/PageType';

type PageContext =
  | {
      page?: PageType;
      setPage?: React.Dispatch<React.SetStateAction<PageType>>;
      changePage(pageName: PageType): void;
    }
  | undefined;

export const PageContext = createContext<PageContext>(undefined);
