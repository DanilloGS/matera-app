import React from 'react';
import { ProductContext } from '../Providers/ProductProvider';

export const useProduct = () => React.useContext(ProductContext);
