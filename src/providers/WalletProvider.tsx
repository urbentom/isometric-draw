import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
	ConnectionProvider,
	WalletProvider as WalletProviderBase,
	WalletProviderProps as WalletProviderBaseProps,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
	GlowWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, useMemo } from 'react';

export type WalletProviderProps = Partial<WalletProviderBaseProps>;

const network = 'devnet' as WalletAdapterNetwork;
const endpoint = clusterApiUrl(network);

export const WalletProvider: FC<WalletProviderProps> = ({
	onError,
	children,
	...props
}) => {
	const wallets = useMemo(
		() => [
			new SolflareWalletAdapter({ network }),
			new PhantomWalletAdapter(),
			new SlopeWalletAdapter(),
			new GlowWalletAdapter(),
		],
		[]
	);

	return (
		<ConnectionProvider endpoint={endpoint ?? clusterApiUrl(network)}>
			<WalletProviderBase wallets={wallets} {...props} autoConnect={true}>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProviderBase>
		</ConnectionProvider>
	);
};
