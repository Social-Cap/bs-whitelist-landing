import Footer2 from '../components/layouts/Footer2';
import Header3 from '../components/layouts/Header3';
export default function NerkoTemplate() {
  return (
    
        <>		
        <Header3/>
		<div class="uni-sign-up uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">

                <header class="uni-page-header">
                    <div class="uk-container">
                        <h1 class="heading uk-h3 uk-h1@m uk-text-uppercase uk-text-center">Whitelist</h1>
                    </div>
                </header>
                <div class="uk-margin-top uk-margin-large-top@m">
                    <div class="uk-container">
                        <div class="uk-flex-column uk-flex-center uk-width-medium@m uk-margin-auto">
                            <form class="uk-form-stacked uk-panel uk-width-1-1" action="?" method="post" data-uk-margin="margin: uk-margin">
                                <div class="uk-first-column">
                                    <label for="fullname-whitelist" class="uk-form-label">Your full name: <span class="uk-text-danger">*</span></label>
                                    <input id="fullname-whitelist" type="text" name="username" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <label for="email-whitelist" class="uk-form-label">Your email: <span class="uk-text-danger">*</span></label>
                                    <input id="email-whitelist" type="email" name="email" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <label for="country-whitelist" class="uk-form-label">Your country: <span class="uk-text-danger">*</span></label>
                                    <input id="country-whitelist" type="text" name="whitelist" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <label for="quantity-whitelist" class="uk-form-label">Membership Quantity: <span class="uk-text-danger">*</span></label>
                                    <input value='1' type="number" name="quantity" min="1" max="5"  class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <button type="submit" class="uk-button uk-button-medium@m uk-button-gradient uk-width-expand">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer2/>
        </>
        
  	);
}
