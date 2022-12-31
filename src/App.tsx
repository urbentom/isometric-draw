import React from 'react';

import GridScreen from './screens/GridScreen';
import AnalyticsPopupLayout from './layouts/AnalyticsPopupLayout';
import { WalletProvider } from './providers/WalletProvider';
import { MetaplexProvider } from './contexts/MetaplexContext';


function App() {
  

  return (
		<WalletProvider>
			<MetaplexProvider>
				<GridScreen />
				<AnalyticsPopupLayout />
			</MetaplexProvider>
		</WalletProvider>
	);
}



export default App;
