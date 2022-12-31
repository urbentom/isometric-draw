import { useContext } from 'react';

import { MetaplexContext } from '../contexts/MetaplexContext';

export function useMetaplex() {
	return useContext(MetaplexContext);
}
