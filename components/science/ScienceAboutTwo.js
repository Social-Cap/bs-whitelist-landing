const ScienceAboutTwo = () =>{
    return(
        <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
        <div className="uk-container">
            <div className="uk-panel">
                <div className="uk-grid uk-grid-medium uk-grid-2xlarge@m uk-child-width-1-2@m uk-flex-middle" data-uk-grid="">
                <div>
                        <div className="uk-panel">
                            <h3 className="uk-h3 uk-h3@s uk-heading-d2@m uk-text-uppercase">PEPTIDES AS AGENTS FOR <br/><span className="uk-text-gradient">RELATED DISEASES</span></h3>
                            <p className="uk-text-large">Inflammation is a physiological mechanism used by organisms to defend themselves against infection, restoring homeostasis in damaged tissues. It represents the starting point of several chronic diseases such as asthma, skin disorders, cancer, cardiovascular syndrome, arthritis, and neurological diseases.</p>
                            <p className="uk-text-large"><a href="https://pubmed.ncbi.nlm.nih.gov/30208640/">Read More</a></p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-panel uk-radius-large uk-overflow-hidden">
                            <canvas width="560" height="560"></canvas>
                            <img src="https://i.ibb.co/NjCMwRp/image-02-removebg-preview.png" alt="Artwork" className="uk-cover" data-uk-cover />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ScienceAboutTwo