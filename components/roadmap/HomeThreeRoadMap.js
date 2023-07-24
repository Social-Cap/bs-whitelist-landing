import { Container, Button, Image } from "@mantine/core"
import { Notebook } from 'tabler-icons-react';
import Link from "next/link";

const HomeThreeRoadMap = () => {
    return(
        <div id="uni_roadmap" className="uni-roadmap uk-section uk-section-large@m uk-panel uk-overflow-hidden">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid>
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m uk-font-display uk-text-uppercase">Blue Scorpion's <br/> <span className="uk-text-gradient">Roadmap</span></h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <div className="uk-grid-small uk-grid-medium@m uk-child-width-1-3@m uk-text-muted uk-grid" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: anime.stagger(100);">
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>0</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 01</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">Planning</h3>
                                        <p className="uni-phase-description uk-text-large@m">Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Complete</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>25</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 02</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">Launch</h3>
                                        <p className="uni-phase-description uk-text-large@m">Our most active community members will be able to join the whitelist so they can discover, collect and mint their Founder's Passes.</p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle">
                                                {/* <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> */}
                                                 In Progress
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>50</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 03</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">Origin Mint</h3>
                                        <p className="uni-phase-description uk-text-large@m">After successful completion of our Founders pass sale. An Origin mint of 1000 NFTs will be made available to our community tied to a 12 month subscription of Blue Scorpion Venom. NFT holders can choose to claim their venom or hold delivery to speculate on value. </p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        {/* <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>75</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 04</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">Monthly Tiered Mint</h3>
                                        <p className="uni-phase-description uk-text-large@m">Upon Successful completion of our two inaugural mints, we will begin a more structured monthly mint of NFTs tied to product. With multiple tiers of subscription: 1mo. | 6mo. | 12mo. These NFTs will be given unique properties and community access based on commitment.</p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        {/* <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>99</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 05</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">W3 Marketplace </h3>
                                        <p className="uni-phase-description uk-text-large@m">With the successful implementation of the tiered product offering, we will deploy our hybrid Web2-Web3 marketplace, where Crypto Natives and Web3 Noobs can both Purchase NFT and products 1:1 and participate in community. It is our goal to have an endless product and brand categories on unique ledgers within our system - creating an ecosystem of web3 conscious - crypto oriented goods and services.</p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        {/* <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-card-border uk-box-shadow-xsmall uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>100</span>%</span>
                                    <div className="uk-panel">
                                        <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 06</span>
                                        <h3 className="uni-phase-title uk-h4 uk-h3@m uk-font-display uk-text-uppercase uk-margin-remove-bottom">Authenticity / Supply Chain</h3>
                                        <p className="uni-phase-description uk-text-large@m"> We will perfect our NFT authentication process with Blue Scorpion Venom, and roll it out across all product categories. This Venom is a rare and valuable commodity. Careful Harvesting, Processing, and Refining the product is of the utmost importance.</p>
                                        <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                        {/* <ul className="uk-list uk-text-small uk-text-medium@m">
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                            <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-panel uk-text-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                    <Container style={{marginTop: '5%'}}>
                            <h3>Read or Download <br/> our whitepaper</h3> 
                            <Button style={{marginTop: '1%'}} className="uk-button uk-button-medium uk-button-large@m uk-button-gradient" leftIcon={<Notebook size={30} strokeWidth={2} color={'white'}/>}>
                                <Link href="https://pdfholderwp.s3.us-west-2.amazonaws.com/SCORPIONS.pdf" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient">
                                    <span>Whitepaper</span>
                                </Link>
                            </Button>
                            
                    </Container>
                </div>
                    </div>
                </div>
            </div>
    )
}
export default HomeThreeRoadMap