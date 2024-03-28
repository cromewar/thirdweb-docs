import type { Chain } from "../../../../chains/types.js";
import type { ThirdwebClient } from "../../../../client/client.js";
import type { Wallet } from "../../../../wallets/interfaces/wallet.js";
import type { SmartWalletOptions } from "../../../../wallets/smart/types.js";
import type { AppMetadata } from "../../../../wallets/types.js";
import type { Theme } from "../design-system/index.js";
import type { LocaleId } from "../types.js";
import type { NetworkSelectorProps } from "./NetworkSelector.js";
import type { SupportedTokens } from "./defaultTokens.js";
import type { WelcomeScreen } from "./screens/types.js";

/**
 * Options for configuring the `ConnectButton`'s Connect Button
 * @connectWallet
 */
export type ConnectButton_connectButtonOptions = {
  /**
   * Set a custom label for the button. The default is `"Connect"`
   * @example
   * ```tsx
   * <ConnectButton button={{
   *    label: "Sign in"
   * }} />
   * ```
   */
  label?: string;

  /**
   * CSS class to apply to the button element
   *
   * For some CSS properties, you may need to use the `!important` to override the default styles
   *
   * ```tsx
   * <ConnectButton button={{
   *  className="my-custom-class"
   * }} />
   * ```
   */
  className?: string;

  /**
   * CSS styles to apply to the connectButton element
   */
  style?: React.CSSProperties;
};

/**
 * Options for configuring the `ConnectButton`'s Details Modal
 * @connectWallet
 */
export type ConnectButton_detailsModalOptions = {
  /**
   * Show a "Request Testnet funds" link in `ConnectButton` Details Modal when user is connected to a testnet.
   *
   * By default it is `false`, If you want to show the "Request Testnet funds" link when user is connected to a testnet, set this prop to `true`
   * @example
   * ```tsx
   * <ConnectButton showTestnetFaucet={true} />
   * ```
   */
  showTestnetFaucet?: boolean;

  /**
   * customize the Network selector shown in the `ConnectButton` Details Modal
   */
  networkSelector?: NetworkSelectorProps;

  /**
   * Hide the "Switch to Personal wallet" option in the Connect Wallet details modal which is shown when wallet is connected to either Smart Wallet or Safe.
   *
   * By default it is `false`
   * @example
   * ```tsx
   * <ConnectButton detailsModal={{
   *    hideSwitchToPersonalWallet: true
   *  }}
   * />
   * ```
   */
  hideSwitchToPersonalWallet?: boolean;

  /**
   * Hide the "Disconnect Wallet" button in the `ConnectButton` Details Modal.
   *
   * By default it is `false`
   * @example
   * ```tsx
   * <ConnectButton detailsModal={{
   *  hideDisconnect: true
   * }} />
   * ```
   */
  hideDisconnect?: boolean;

  /**
   * Render custom UI at the bottom of the `ConnectButton` Details Modal
   * @param props - props passed to the footer component which includes a function to close the modal
   * @example
   * ```tsx
   * <ConnectButton
   *  detailsModal={{
   *    footer(props) {
   *      const { close } = props;
   *      return <div> ... </div>
   *    }
   *  }}
   * />
   * ```
   */
  footer?: (props: { close: () => void }) => JSX.Element;
};

/**
 * Options for configuring the `ConnectButton`'s Details Button
 * @connectWallet
 */
export type ConnectButton_detailsButtonOptions = {
  /**
   * CSS class to apply to the details button element
   */
  className?: string;

  /**
   * CSS styles to apply to the details button element
   */
  style?: React.CSSProperties;

  /**
   * Render a custom button to display connected wallet details instead of the default one
   *
   * ```tsx
   * <ConnectButton
   *  detailsButton={{
   *    render() {
   *      return <button> .... </button>
   *    }
   *  }}
   * />
   * ```
   */
  render?: () => JSX.Element;

  /**
   * Display the balance of a token instead of the native token in `ConnectButton` details button.
   * @example
   * ```tsx
   * <ConnectButton detailsButton={{
   *    balanceToken:{
   *      // show USDC balance when connected to Ethereum mainnet
   *      1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
   *    }
   *  })
   * />
   * ```
   */
  displayBalanceToken?: Record<number, string>;
};

/**
 * Options for configuring the `ConnectButton`'s Connect Modal
 * @connectWallet
 */
export type ConnectButton_connectModalOptions = {
  /**
   * Title to show in `ConnectButton`'s Modal
   *
   * The default is `"Connect"`
   */
  title?: string;

  /**
   * Replace the default thirdweb icon next to Modal title with your own icon
   *
   * Set to empty string (`""`) to hide the icon
   * @example
   * ```tsx
   * <ConnectButton modal={{
   *  titleIconUrl: "https://your-icon-url.png"
   * }} />
   * ```
   */
  titleIcon?: string;

  /**
   * Set the size of the connect modal on desktop - `"compact"` or `"wide"`
   *
   * Modal size is always `compact` on mobile
   *
   * By default it is `"wide"` for desktop.
   */
  size?: "compact" | "wide";

  /**
   * URL of the "terms of service" page
   *
   * If provided, Modal will show a Terms of Service message at the bottom with below link
   * @example
   * ```tsx
   * <ConnectButton connectModal={{
   *   termsOfServiceUrl: "https://your-terms-of-service-url.com"
   * }} />
   * ```
   */
  termsOfServiceUrl?: string;

  /**
   * URL of the "privacy policy" page
   *
   * If provided, Modal will show a Privacy Policy message at the bottom with below link
   * @example
   * ```tsx
   * <ConnectButton connectModal={{
   *  privacyPolicyUrl="https://your-privacy-policy-url.com"
   * }} />
   * ```
   */
  privacyPolicyUrl?: string;

  /**
   * Customize the welcome screen. This prop is only applicable when modalSize prop is set to "wide". On "wide" Modal size, a welcome screen is shown on the right side of the modal.
   *
   * This screen can be customized in two ways
   *
   * #### 1. Customize Metadata and Image
   * ```tsx
   * const welcomeScreen = {
   *  title: "your title",
   *  subtitle: "your subtitle",
   *  img: {
   *   src: "https://your-image-url.png",
   *   width: 300,
   *   height: 50,
   *  },
   * }
   *
   * <ConnectButton connectModal={{
   *  welcomeScreen: welcomeScreen,
   * }} />
   * ```
   *
   * #### 2. Render Custom Component
   *
   * ```tsx
   * <ConnectButton
   *  connectModal={{
   *    welcomeScreen: () => <YourCustomComponent />
   *  }}
   * />
   * ```
   */
  welcomeScreen?: WelcomeScreen;

  /**
   * By default `ConnectButton`'s Modal shows "Powered by Thirdweb" branding at the bottom of the Modal.
   *
   * If you want to hide the branding, set this prop to `false`
   * @example
   * ```tsx
   * <ConnectButton connectModal={{
   *  showThirdwebBranding: false
   * }} />
   *```
   */
  showThirdwebBranding?: boolean;
};

/**
 * Props for the [`ConnectButton`](https://portal.thirdweb.com/references/typescript/v5/ConnectButton) component
 * @connectWallet
 */
export type ConnectButtonProps = {
  /**
   * A client is the entry point to the thirdweb SDK.
   * It is required for all other actions.
   * You can create a client using the `createThirdwebClient` function. Refer to the [Creating a Client](https://portal.thirdweb.com/typescript/v5/client) documentation for more information.
   *
   * You must provide a `clientId` or `secretKey` in order to initialize a client. Pass `clientId` if you want for client-side usage and `secretKey` for server-side usage.
   *
   * ```tsx
   * import { createThirdwebClient } from "thirdweb";
   *
   * const client = createThirdwebClient({
   *  clientId: "<your_client_id>",
   * })
   * ```
   */
  client: ThirdwebClient;

  /**
   * By default - ConnectButton UI uses the `en-US` locale for english language users.
   *
   * You can customize the language used in the ConnectButton UI by setting the `locale` prop.
   *
   * Refer to the [`LocaleId`](https://portal.thirdweb.com/references/typescript/v5/LocaleId) type for supported locales.
   */
  locale?: LocaleId;

  /**
   * Array of supported wallets. If not provided, default wallets will be used.
   * @example
   * ```tsx
   * import { createWallet, embeddedWallet } from "thirdweb/react";
   *
   * const wallets = [
   *   embeddedWallet(),
   *   createWallet("io.metamask"),
   *   createWallet("com.coinbase.wallet"),
   *   createWallet("me.rainbow"),
   * ];
   *
   * function Example() {
   *  return (
   *    <ConnectButton
   *      client={client}
   *      wallets={wallets}
   *    />
   *  )
   * }
   * ```
   *
   * If no wallets are specified. The component will show any EIP-6963 compliant wallet installed, as well as these default wallets:
   *
   * - [Embedded Wallet](https://portal.thirdweb.com/references/typescript/v5/embeddedWalletConfig)
   * - [MataMask Wallet](https://portal.thirdweb.com/references/typescript/v5/metamaskConfig)
   * - [Coinbase Wallet](https://portal.thirdweb.com/references/typescript/v5/coinbaseConfig)
   * - [WalletConnect](https://portal.thirdweb.com/references/typescript/v5/walletConnectConfig)
   * - [rainbowConfig](https://portal.thirdweb.com/references/typescript/v5/rainbowConfig)
   * - [zerionConfig](https://portal.thirdweb.com/references/typescript/v5/zerionConfig)
   */
  wallets?: Wallet[];

  /**
   * When the user has connected their wallet to your site, this configuration determines whether or not you want to automatically connect to the last connected wallet when user visits your site again in the future.
   *
   * By default it is set to `{ timeout: 15000 }` meaning that autoConnect is enabled and if the autoConnection does not succeed within 15 seconds, it will be cancelled.
   *
   * If you want to disable autoConnect, set this prop to `false`.
   *
   * If you want to customize the timeout, you can assign an object with a `timeout` key to this prop.
   * ```tsx
   * <ConnectButton client={client} autoConnect={{ timeout: 10000 }} />
   * ```
   */
  autoConnect?:
    | {
        timeout: number;
      }
    | boolean;

  /**
   * Metadata of the app that will be passed to connected wallet.
   *
   * Some wallets display this information to the user when they connect to your app.
   * @example
   * ```ts
   * {
   *   name: "thirdweb powered dApp",
   *   url: "https://thirdweb.com",
   *   description: "thirdweb powered dApp",
   *   logoUrl: "https://thirdweb.com/favicon.ico",
   * };
   * ```
   */
  appMetadata?: AppMetadata;

  /**
   * The [`Chain`](https://portal.thirdweb.com/references/typescript/v5/Chain) object of the blockchain you want the wallet to connect to
   *
   * If a `chain` is not specified, Wallet will be connected to whatever is the default set in the wallet.
   *
   * If a `chain` is specified, Wallet will be prompted to switch to given chain after connection if it is not already connected to it.
   * This ensures that the wallet is connected to the correct blockchain before interacting with your app.
   *
   * The `ConnectButton` also shows a "Switch Network" button until the wallet is connected to the specified chain. Clicking on the "Switch Network" button triggers the wallet to switch to the specified chain.
   *
   * You can create a `Chain` object using the [`defineChain`](https://portal.thirdweb.com/references/typescript/v5/defineChain) function.
   * At minimum, you need to pass the `id` of the blockchain to `defineChain` function to create a `Chain` object.
   * @example
   * ```tsx
   * import { polygon } from "thirdweb/wallets";
   *
   * function Example() {
   *  return <div> <ConnectButton chain={polygon} /> </div>
   * }
   * ```
   */
  chain?: Chain;

  /**
   * Array of chains that your app supports.
   *
   * This is only relevant if your app is a multi-chain app and works across multiple blockchains.
   * If your app only works on a single blockchain, you should only specify the `chain` prop.
   *
   * Given list of chains will used in various ways:
   * - They will be displayed in the network selector in the `ConnectButton`'s details modal post connection
   * - They will be sent to wallet at the time of connection if the wallet supports requesting multiple chains ( example: WalletConnect ) so that users can switch between the chains post connection easily
   *
   * ```tsx
   * <ConnectButton chains={[ethereum, polygon, optimism]} />
   * ```
   *
   * You can create a `Chain` object using the [`defineChain`](https://portal.thirdweb.com/references/typescript/v5/defineChain) function.
   * At minimum, you need to pass the `id` of the blockchain to `defineChain` function to create a `Chain` object.
   *
   * ```tsx
   * import { defineChain } from "thirdweb/react";
   *
   * const polygon = defineChain({
   *   id: 137,
   * });
   * ```
   */
  chains?: Chain[];

  /**
   * Set the theme for the `ConnectButton` component. By default it is set to `"dark"`
   *
   * theme can be set to either `"dark"`, `"light"` or a custom theme object.
   * You can also import [`lightTheme`](https://portal.thirdweb.com/references/typescript/v5/lightTheme)
   * or [`darkTheme`](https://portal.thirdweb.com/references/typescript/v5/darkTheme)
   * functions from `thirdweb/react` to use the default themes as base and overrides parts of it.
   * @example
   * ```ts
   * import { lightTheme } from "thirdweb/react";
   *
   * const customTheme = lightTheme({
   *  colors: {
   *    modalBg: 'red'
   *  }
   * })
   *
   * function Example() {
   *  return <ConnectButton theme={customTheme} />
   * }
   * ```
   */
  theme?: "dark" | "light" | Theme;

  /**
   * Configurations for the button element that is shown when wallet is not connected
   * @example
   * ```tsx
   * <ConnectButton
   *   connectButton={{
   *     connectButton: {
   *       label: "Connect",
   *       className: "my-custom-class",
   *       style: {
   *         borderRadius: "10px",
   *       },
   *     },
   *   }}
   * />;
   * ```
   */
  connectButton?: ConnectButton_connectButtonOptions;

  /**
   * Configuration for the "Switch Network" button.
   * This button is rendered when the wallet is connected, but it is not connected to the `chain` prop provided in `ConnectButton` component
   * @example
   * ```tsx
   * <ConnectButton
   *   switchButton={{
   *     label: "Wrong Network",
   *     className: "my-custom-class",
   *     style: {
   *       backgroundColor: "red",
   *     },
   *   }}
   * />;
   * ```
   */
  switchButton?: {
    /**
     * Set a custom label for the "Switch Network" button
     */
    label?: string;

    /**
     * CSS styles to apply to the switch button element
     */
    style?: React.CSSProperties;

    /**
     * CSS class to apply to the switch button element
     */
    className?: string;
  };

  /**
   * Configurations for the `ConnectButton`'s Modal that is shown for connecting a wallet
   * Refer to the [`ConnectButton_connectModalOptions`](https://portal.thirdweb.com/references/typescript/v5/ConnectButton_connectModalOptions) type for more details
   * @example
   * ```tsx
   * <ConnectButton connectModal={{ size: "compact" }} />
   */
  connectModal?: ConnectButton_connectModalOptions;

  /**
   * Configurations for the Details Button that is shown when wallet is connected
   * Refer to the [`ConnectButton_detailsButtonOptions`](https://portal.thirdweb.com/references/typescript/v5/ConnectButton_detailsButtonOptions) type for more details
   * @example
   * ```tsx
   * <ConnectButton
   *   detailsButton={{
   *     className: "my-custom-class",
   *     style: { borderRadius: "10px" },
   *   }}
   * />;
   * ```
   */
  detailsButton?: ConnectButton_detailsButtonOptions;

  /**
   * Configurations for the Details Modal that is shown when wallet is connected and user clicks on the details button to see the connected wallet details
   * Refer to the [`ConnectButton_detailsModalOptions`](https://portal.thirdweb.com/references/typescript/v5/ConnectButton_detailsModalOptions) type for more details
   */
  detailsModal?: ConnectButton_detailsModalOptions;

  /**
   * Customize the tokens shown in the "Send Funds" screen in Details Modal for various networks.
   *
   * By default, The "Send Funds" screen shows a few popular tokens for default chains and the native token. For other chains it only shows the native token.
   * @example
   *
   * supportedTokens prop allows you to customize this list as shown below which shows  "Dai Stablecoin" when users wallet is connected to the "Base" mainnet.
   *
   * ```tsx
   * import { ConnectButton } from 'thirdweb/react';
   *
   * function Example() {
   *   return (
   * 		<ConnectButton
   * 			supportedTokens={{
   *        // when connected to "Base" mainnet - show balance of DAI stablecoin
   * 				84532: [
   * 					{
   * 						address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // token contract address
   * 						name: 'Dai Stablecoin',
   * 						symbol: 'DAI',
   * 						icon: 'https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508',
   * 					},
   * 				],
   * 			}}
   * 		/>
   * 	);
   * }
   * ```
   */
  supportedTokens?: SupportedTokens;

  /**
   * Callback to be called on successful connection of wallet. The callback is called with the connected account
   *
   * ```tsx
   * <ConnectButton
   *  onConnect={(account) => {
   *    console.log("connected to", account)
   *  }}
   * />
   * ```
   *
   * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` prop instead
   *
   * ```tsx
   * <ConnectButton
   *  auth={{
   *   onLogin: () => {
   *     console.log("wallet connected and signed in")
   *   }
   *  }}
   * />
   * ```
   *
   */
  onConnect?: (wallet: Wallet) => void;

  /**
   * Configure options for WalletConnect
   *
   * By default WalletConnect uses the thirdweb's default project id.
   * Setting your own project id is recommended.
   *
   * You can create a project id by signing up on [walletconnect.com](https://walletconnect.com/)
   */
  walletConnect?: {
    projectId?: string;
  };

  /**
   * Enable Account abstraction for all wallets. This will connect to the users's smart account based on the connected personal wallet and the given options.
   *
   * This allows to sponsor gas fees for your user's transaction using the thirdweb account abstraction infrastructure.
   *
   * ```tsx
   * <ConnectButton
   *   accountAbstraction={{
   *    factoryAddress: "0x123...",
   *    chain: sepolia,
   *    gasless: true;
   *   }}
   * />
   */
  accountAbstraction?: SmartWalletOptions;

  /**
   * Wallets to show as recommended in the `ConnectButton`'s Modal
   */
  recommendedWallets?: Wallet[];

  /**
   * By default, ConnectButton modal shows a "All Wallets" button that shows a list of 350+ wallets.
   *
   * You can disable this button by setting `showAllWallets` prop to `false`
   */
  showAllWallets?: boolean;
};
