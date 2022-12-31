import {
	guestIdentity,
	Metaplex,
	walletAdapterIdentity,
	bundlrStorage,
} from '@metaplex-foundation/js';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useMemo, createContext } from 'react';

interface MetaplexProviderProps {
	children: React.ReactNode;
}

interface MetaplexContextProps {
	metaplex: Metaplex | null;
}

const defaultState = {
	metaplex: null,
};

export const MetaplexContext =
	createContext<MetaplexContextProps>(defaultState);

export const MetaplexProvider: React.FC<MetaplexProviderProps> = ({
	children,
}) => {
	const { connection } = useConnection();
	const { wallet } = useWallet();

	const metaplex = useMemo(() => {
		return (
			(connection &&
				Metaplex?.make(connection)
					?.use(
						wallet ? walletAdapterIdentity(wallet.adapter) : guestIdentity()
					)
					?.use(bundlrStorage())) ??
			null
		);
	}, [wallet]);

	return (
		<MetaplexContext.Provider value={{ metaplex }}>
			{children}
		</MetaplexContext.Provider>
	);
};
