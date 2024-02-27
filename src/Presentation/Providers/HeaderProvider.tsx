import React, { useState } from 'react';
import { ButtonProps } from '../Components/Button';

interface HeaderContextProps {
	setButtons: (buttons: ButtonProps[]) => void;
	buttons: ButtonProps[];
}

interface HeaderProviderProps {
	children: React.ReactNode;
}

export const HeaderContext = React.createContext({} as HeaderContextProps);

const HeaderProvider = ({ children }: HeaderProviderProps) => {
	const [buttons, setButtons] = useState<ButtonProps[]>([]);

	return (
		<HeaderContext.Provider value={{ setButtons, buttons }}>
			{children}
		</HeaderContext.Provider>
	);
};

export default HeaderProvider;
