import Link from "next/link";

const HomeTwoAbout = () =>{
    return(
        <>
             <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid>
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h3 uk-h1@m uk-font-display uk-text-uppercase">About <span className="uk-text-gradient">the plaform</span></h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <div className="uk-grid uk-grid-2xlarge uk-grid-3xlarge@m uk-child-width-1-1" data-uk-grid="">
                            <div>
                                <div className="uk-panel">
                                    <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
                                        <div>
                                            <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m">
                                                <img src="images/bitcoin-hero.png" alt="Create your own NFT" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-panel">
                                                <span className="uk-text-overline uk-text-gradient">Mint and Save</span>
                                                <h3 className="uk-h3 uk-h1@m uk-font-display uk-text-uppercase">Mint your <span className="uk-text-gradient">own Memership</span></h3>
                                                <p className="uk-text-large@m">Unlock exclusive benefits and become part of a privileged community with our limited edition Founder's Passes, just for you.</p>
                                                <Link href="/mint" className="uk-button uk-button-medium uk-button-large@m uk-button-primary uk-button-outline uk-margin-small-top uk-margin-medium-top@m">
                                                    <span>Mint now</span>
                                                    <i className="uk-icon uk-text-bold unicon-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel">
                                    <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
                                        <div>
                                            <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m">
                                                <img src="images/join-community.png" alt="Create your own NFT" />
                                            </div>
                                        </div>
                                        <div className="uk-flex-first@m">
                                            <div className="uk-panel">
                                                <span className="uk-text-overline uk-text-gradient">Be one of our members</span>
                                                <h3 className="uk-h3 uk-h1@m uk-font-display uk-text-uppercase">Join our <span className="uk-text-gradient">Community</span></h3>
                                                <p className="uk-text-large@m">Join our vibrant community today and unlock a world of discovery, investment, and management for your Passes.</p>
                                                <Link href="#join_discrod" className="uk-button uk-button-medium uk-button-large@m uk-button-primary uk-button-outline uk-margin-small-top uk-margin-medium-top@m">
                                                    <i className="uk-icon uk-text-bold unicon-logo-discord"></i>
                                                    <span>Join Discord</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeTwoAbout;