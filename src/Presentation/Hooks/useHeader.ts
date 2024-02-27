import React from 'react';
import { HeaderContext } from '../Providers/HeaderProvider';

export const useHeader = () => React.useContext(HeaderContext);
