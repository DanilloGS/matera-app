import { useEffect, useMemo, useState } from 'react';

export const usePersistState = <T>(
	value: T,
	id: string
): [T, (value: T) => void] => {
	const storageId = 'state:' + id;

	const initialValue = useMemo(() => {
		const localStorageValue = localStorage.getItem(storageId);
		if (localStorageValue && value) {
			return JSON.parse(localStorageValue);
		}
		return value;
	}, []);

	const [state, setState] = useState(initialValue);

	useEffect(() => {
		if (value) {
			const stateString = JSON.stringify(state);
			localStorage.setItem(storageId, stateString);
		}
	}, [state]);

	return [state, setState];
};
