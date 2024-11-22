import { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_VALUE':
			return action.payload;
		default:
			return state;
	}
};

export const useToggle = (arr) => {
	const [value, dispatch] = useReducer(reducer, arr[0]);

	const setExactValue = (val) => {
		return dispatch({
			type: 'SET_VALUE',
			payload: val,
		});
	};

	const toggle = (val) => {
		if (arr.includes(val)) {
			setExactValue(val);
		} else if (!val) {
			const currentValueIndex = arr.indexOf(value);

			if (currentValueIndex !== arr.length - 1) {
				setExactValue(arr[currentValueIndex + 1]);
			} else {
				setExactValue(arr[0]);
			}
		}
	};

	return [value, toggle];
};
