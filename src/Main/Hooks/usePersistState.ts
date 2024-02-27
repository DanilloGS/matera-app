import { useEffect, useMemo, useState } from 'react';

export const usePersistState = <T>(
	value: T,
	id: string
): [T, (value: T) => void] => {
	const storageId = 'state:' + id;

	const initialValue = useMemo(() => {
		const localStorageValue = localStorage.getItem(storageId);
		if (localStorageValue && localStorageValue !== 'undefined') {
			return JSON.parse(localStorageValue);
		}
		return value;
	}, []);

	const [state, setState] = useState(initialValue);

	useEffect(() => {
		const stateString = state ? JSON.stringify(state) : state;
		localStorage.setItem(storageId, stateString);
	}, [state]);

	return [state, setState];
};
