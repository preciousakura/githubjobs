import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer'


export default function HowItWorks() {
    return(
        <div className="page">
        <Navbar />

  <div class="inner">

    <h3>
      How GitHub Jobs Works
<p>
      GitHub Jobs is a great place attract the best technical talent for your
      company's open software development positions. Here's how:</p>
    </h3>

    <div class="component">
    <div className="screen">
        <img src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg" alt="Listing editor" width="300" height="227"/>
				<h3>Create &amp; preview your listing</h3>
				<p>
					See exactly how your listing will look before you publish live. Before
					creating a listing, you must login with your GitHub account and verify your email
					address.
				</p>
        </div>
      <div className="cartao">
				<div class="image">
					<strong class="cost">
            <small class="dollarsign">$ </small>450.00
					</strong>
					<p>per listing</p>
					<ul class="cards">
						<li><span class="visa">Visa</span></li>
						<li><span class="master">Mastercard</span></li>
						<li><span class="american_express">American Express</span></li>
						<li><span class="discover">Discover</span></li>
						<li><span class="jcb">JCB</span></li>
						<li><span class="diners_club">Diners Club</span></li>
					</ul>
				</div>
				<h3>Pay with a major credit card</h3>
				<p>Invoicing available on request for bulk orders. Email <a href="mailto:jobs@github.com">jobs@github.com</a> for more info. Sorry, no recruitment agencies.</p>
      </div>
        <div className="post">
				<img src="https://jobs.github.com/images/modules/faq/screenshot-listing.jpg" alt="Sample listing" width="300" height="227"/>
				<h3>Your listing goes live immediately</h3>
				<p>Listings are live for 30 days.  We’ll send you a receipt and a link to change the listing.</p>
        </div>
    </div>

				<center><p >Invoicing available on request for bulk orders. Email <a href="mailto:jobs@github.com">jobs@github.com</a> for more info. Sorry, no recruitment agencies.</p></center>


  </div>

  <p class="bignote">
			Questions?
			Submit a request via our <a href="https://support.github.com/contact?tags=jobs-support">contact form</a> and let's talk.
		</p>
        <Footer />
        </div>
    )
}