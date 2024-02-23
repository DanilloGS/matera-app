import React from 'react';
import { UserContext } from '../Providers/UserProvider';

export const useUser = () => React.useContext(UserContext);
