import Footer2 from '../components/layouts/Footer2';
import Header3 from '../components/layouts/Header3';
import ConnectWallet from '../components/layouts/ConnectWallet';
import Link from 'next/link';
import BannerThreeSlider from '../components/banners/BannerThreeSlider';
import { createStyles, Image, Button, Menu, Group, ActionIcon, rem, Modal, SimpleGrid, Container, Stack } from '@mantine/core';
import { IconTrash, IconBookmark, IconCalendar, IconWallet, IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import MetaMaskSDK from '@metamask/sdk';

import { useWeb3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
 
// WalletConnect Start

const chains = [arbitrum, mainnet, polygon]
const projectId = '1febce5ec4de2b1ff1579933a20bb2e3'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

// WalletConnect End

// Metamask Start
const options1 = {
    injectProvider: false,
    dappMetadata: {name: "My Dapp", url: "https://mydapp.com"},
  };

const MMSDK = new MetaMaskSDK(options1);



function RequestAccounts(){
    const ethereum = MMSDK.getProvider(); 

    ethereum?.request({ method: 'eth_requestAccounts', params: [] })
    .then((result) => {
        console.log(result)
      });
}

// Metamask End
const useStyles = createStyles((theme) => ({
    button: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  
    menuControl: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      border: 0,
      borderLeft: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  }));


export default function MintPage() {    
  const { open, close } = useWeb3Modal()


  return (
    
        <>		
        <WagmiConfig config={wagmiConfig}>
      
        <Header3/>
		<div class="uni-sign-up uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">

                <div class="uk-margin-top uk-margin-large-top@m">
                <div className="uk-panel uk-position-z-index uk-text-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                        <img className="uk-position-top-left" width="44" src="images/objects/ethereum-01.png" alt="object" style={{top: "-10%", left: "50%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                        <img className="uk-position-left" width="16" src="images/objects/circle-01.png" alt="object" style={{top: "16%", left: "-4%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" />
                                        <img className="uk-position-bottom-left" width="24" src="images/objects/circle-03.png" alt="object" style={{bottom: "-16%", left: "16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;" />
                                        <h2 className="uk-h2 uk-heading-d2@m uk-font-display uk-text-uppercase uk-margin-remove-top uk-margin-large-bottom@m">
                                            Mint <br />
                                           Your Membership 
                                        </h2>
                                        <div className="uk-panel uk-width-medium uk-margin-auto swiper-match">
                                            <BannerThreeSlider />
                                        </div>
                                        <div className="uk-grid uk-grid-small uk-grid-medium@m uk-flex-center uk-flex-between@m uk-child-width-1-3 uk-margin-medium-top uk-margin-large-top@m" data-uk-grid="">
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">500</h4>
                                                    <span className="uk-text-small uk-text-muted">Founder's Passes</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">1</h4>
                                                    <span className="uk-text-small uk-text-muted">Floor price (eth)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">2.5x</h4>
                                                    <span className="uk-text-small uk-text-muted">Estimated value</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                <div className="uk-panel uk-text-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                    <Container style={{marginTop: '5%'}}>
                        <Stack align="center" h={300}>
                            <h3>Select quantity and connect <br/> your wallet to Mint</h3> 
                            <div><input value='1' type="number" name="quantity" min="1" max="5"  class="uk-input uk-form-medium uk-radius-large" required/></div>
                            
                            <Button onClick={open} style={{marginTop: '1%'}} href="#" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient" leftIcon={<Image maw={30} mx="auto" radius="md" src="https://i.ibb.co/0FH3xsb/walletconnect-logo.png" />}>
                                <span>WalletConnect</span>
                            </Button>
                            <Button onClick={RequestAccounts} style={{marginTop: '1%'}} href="#" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient" leftIcon={<Image maw={30} mx="auto" radius="md" src="https://i.ibb.co/rxt40mv/metamask-logo.png" />}>
                                <span>Metamask</span>
                            </Button>
                        </Stack>
                    </Container>
                </div>
                </div>
            </div>
        <Footer2/>
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeVariables={{ '--w3m-z-index': '999' }} />
        </>
        
  	);
}
