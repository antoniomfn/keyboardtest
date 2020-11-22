import Head from 'next/head';
import React from 'react';

function Home() {
  function responsiveMenu() {
    const respMenu = document.querySelector('.responsive-menu');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('responsive');
    respMenu.classList.toggle('open');
  }

  return (
    <div className="layout">
      <Head >
        <title>Test your Keyboard | KeyboardTest.net</title>
      </Head>
      <header>
        <div id="logo">keyboardtest.net</div>
        <div className="menu">
          <a href="mailto:contact@keyboardtest.net">Contact</a>
        </div>
        <div className="responsive-menu" onClick={responsiveMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <button onClick={() => { window.open(`${window.location.origin}/keyboard/`, 'pagename', 'width=1100, height=600') }} >Let's go to the test!</button>
          <div className="main-content">
            <h1>Keyboard test 24/7 For free</h1>
            <p>Nobody likes it when the keyboard works, do they? The keyboard was the first method of entering a computer. Through it we can type messages, write codes, search for a topic that interests us.</p><br />
            <p>One of the most visually identifiable parts of a computer, as well as the most important, is the keyboard. While its sister device, the mouse, allows for quick and easy navigation and interaction, the keyboard goes beyond simple "point and click", allowing for more complicated manipulation. Without the keyboard, many actions and programs would become impossible to use, requiring alternative solutions or alternative methods of entry.</p><br />
            <p>The most common computer keyboard has 101 keys, including the entire alphabet, the numeric keys 0 through 9, and the arrow keys. Other styles of keyboards are available, including ergonomic versions that allow for more natural side placement while typing and keyboards specifically for players, with additional keys to manipulate game controls. Keyboards are available with wired or wireless connections, roll-up and laser styles and even with a braille overlay for the visually impaired.</p><br />
            <p>Through this website, you will have the experience of using, testing and having total control of your keys in a pleasant interface.</p>
          </div>
          <div className="layout-keyboard-content">
            <h2>Keyboards layouts available</h2>
            <img src="/images/layout_ptbr.png" alt="layout-ptbr" />
          </div>
        </div>
        <div className="suggest-container">
          <h4>Keyboard suggestions</h4>
          <div className="ads-content">
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtes0b-20&marketplace=amazon&region=US&placement=B079JLY5M5&asins=B079JLY5M5&linkId=eea1972c2f74f6c73e03a7efff4d606e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtes0b-20&marketplace=amazon&region=US&placement=B00NLZUM36&asins=B00NLZUM36&linkId=f50c5e6bb0b6dc22bd18cf3c367b00d8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtes0b-20&marketplace=amazon&region=US&placement=B01ALLT2W4&asins=B01ALLT2W4&linkId=69ebe1a0067bca1b21df9b96eeb9a953&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtes0b-20&marketplace=amazon&region=US&placement=B07DHNZ676&asins=B07DHNZ676&linkId=dbf8cde1389d0af81893710ab14f22f1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtest-20&marketplace=amazon&region=BR&placement=B075JPHGX3&asins=B075JPHGX3&linkId=6c0757f577ff6cc5c098cbae94e5417a&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtest-20&marketplace=amazon&region=BR&placement=B07TV9B7Z3&asins=B07TV9B7Z3&linkId=b8dce2824badb81531b5ffd7ea3fca28&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtest-20&marketplace=amazon&region=BR&placement=B0776XT8X3&asins=B0776XT8X3&linkId=ed1390da151d00c2d483e261dc6b9096&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <iframe scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=keyboardtest-20&marketplace=amazon&region=BR&placement=B07G2PY7KH&asins=B07G2PY7KH&linkId=b98ec4cc147e354cacda85202427a6b6&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
          </div>
        </div>
      </main>
      <footer>
        <p>© Keyboardtest.net. All rights reserved.</p>
      </footer>
    </div >
  )
}

export default Home;
