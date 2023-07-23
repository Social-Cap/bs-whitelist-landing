const ScienceAboutOne = () =>{
    return(
        <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
        <div className="uk-container">
            <div className="uk-panel">
                <div className="uk-grid uk-grid-medium uk-grid-2xlarge@m uk-child-width-1-2@m uk-flex-middle" data-uk-grid="">
                    <div>
                        <div className="uk-panel uk-radius-large uk-overflow-hidden">
                            <canvas width="560" height="560"></canvas>
                            <img src="https://i.ibb.co/gZk9s6H/image-01-removebg-preview.png" alt="Artwork" className="uk-cover" data-uk-cover />
                        </div>
                    </div>
                    <div>
                        <div className="uk-panel">
                            <h3 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">What are <span className="uk-text-gradient">Peptides</span></h3>
                            <p className="uk-text-large">Peptides are short chains of amino acids linked together by peptide bonds. They are the building blocks of proteins, which are long chains of amino acids. In the human body, peptides play important roles in various physiological processes, including hormone signaling, cellular communication, immune function, and metabolism.</p>
                            <p className="uk-text-large">Some examples of well-known peptides in the human body include insulin, which regulates glucose levels, and growth hormone, which stimulates growth and cell division. Additionally, peptides can also be used as therapeutic agents, such as in the treatment of various diseases and conditions.</p>
                            <div className="uk-panel uk-margin-large-top">
                                <div className="uk-grid uk-grid-2xsmall uk-grid-small@m uk-child-width-1-2 uk-child-width-1-3@s uk-flex-middle uk-flex-center" data-uk-grid="">
                                    <div>
                                        <div className="uk-panel uk-card uk-card-xsmall uk-padding-medium-bottom@s uk-padding-medium-top@s uk-radius-medium uk-border uk-box-shadow-xsmall dark:uk-background-white-5 uk-text-center">
                                            <h5 className="uk-h4 uk-h2@m uk-margin-xsmall uk-text-gradient">93%</h5>
                                            <span>Sync & track</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-panel uk-card uk-card-xsmall uk-padding-medium-bottom@s uk-padding-medium-top@s uk-radius-medium uk-border uk-box-shadow-xsmall dark:uk-background-white-5 uk-text-center">
                                            <h5 className="uk-h4 uk-h2@m uk-margin-xsmall uk-text-gradient">2.5X</h5>
                                            <span>Up value.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-panel uk-card uk-card-xsmall uk-padding-medium-bottom@s uk-padding-medium-top@s uk-radius-medium uk-border uk-box-shadow-xsmall dark:uk-background-white-5 uk-text-center">
                                            <h5 className="uk-h4 uk-h2@m uk-margin-xsmall uk-text-gradient">50K+</h5>
                                            <span>Of members.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ScienceAboutOne