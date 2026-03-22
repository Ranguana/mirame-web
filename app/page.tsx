import WaitlistForm from "./WaitlistForm";

export default function Home() {
  return (
    <>
      {/* ---- SWATCH CARD WRAPPER ---- */}
      <div className="swatch-card">
        {/* ---- MASTHEAD ---- */}
        <header className="masthead">
          <span className="swatch-label swatch-label--light">FUCHSIA · #D6336C</span>
          <h1 className="masthead-title">MiraMe</h1>
          <nav className="masthead-nav">
            <a href="#runway">The Feed</a>
            <a href="#pillars">Your Profile</a>
            <a href="#how">How It Works</a>
            <a href="#waitlist">Join</a>
          </nav>
        </header>

        {/* ---- HERO ---- */}
        <section className="hero">
          <div className="hero-left">
            <span className="swatch-label">CREAM · #FBF7F3</span>
            <p className="hero-kicker">A new kind of beauty app</p>
            <h2 className="hero-headline">
              Post it. Tag it. <em>Shop it.</em>
            </h2>
            <p className="hero-deck">
              MiraMe is a beauty social network where your feed is powered by
              people who actually share your skin tone, hair texture, and style.
              Every post is shoppable. Every recommendation is real.
            </p>
            <a href="#waitlist" className="cta-btn">
              Join the Waitlist
            </a>
          </div>
          <div className="hero-right">
            <div className="hero-stripe hero-stripe--gold">
              <span className="hero-right-tagline">Mira. That&rsquo;s You.</span>
            </div>
            <div className="hero-stripe hero-stripe--orange"></div>
          </div>
        </section>

        {/* ---- MONK SCALE STRIP ---- */}
        <section className="monk-strip">
          <div className="monk-strip-blocks">
            <div style={{ backgroundColor: "#F6EDE4" }} />
            <div style={{ backgroundColor: "#F3E7DB" }} />
            <div style={{ backgroundColor: "#F7CDA2" }} />
            <div style={{ backgroundColor: "#EAAC7F" }} />
            <div style={{ backgroundColor: "#D08B5B" }} />
            <div style={{ backgroundColor: "#AE6B3B" }} />
            <div style={{ backgroundColor: "#8D4A26" }} />
            <div style={{ backgroundColor: "#5C3317" }} />
            <div style={{ backgroundColor: "#3B200F" }} />
            <div style={{ backgroundColor: "#1C0D07" }} />
          </div>
          <p className="monk-strip-label">Mira. That&rsquo;s You.</p>
        </section>

        {/* ---- FUCHSIA COLOR BANNER ---- */}
        <section className="color-banner color-banner--fuchsia">
          <span className="swatch-label swatch-label--light">FUCHSIA · #D6336C</span>
          <p className="color-banner-text">
            Your feed. Your people. Your products.
          </p>
        </section>

        {/* ---- THREE PILLARS ---- */}
        <section className="pillars" id="pillars">
          <div className="pillars-header">
            <span className="swatch-label">HONEY · #F7CDA2</span>
            <h2 className="section-heading">Your profile powers your feed.</h2>
          </div>
          <div className="pillars-grid">
            {/* KIT */}
            <div className="pillar">
              <div className="pillar-icon pillar-icon--kit">K</div>
              <h3 className="pillar-name">KIT</h3>
              <p className="pillar-subtitle">Your Makeup Profile</p>
              <p className="pillar-desc">
                Your makeup preferences shape what you see and who sees you.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Coverage</span>
                <span className="pillar-tag">Finish</span>
                <span className="pillar-tag">Style</span>
                <span className="pillar-tag">Skin Tone</span>
              </div>
            </div>

            {/* SKIN */}
            <div className="pillar">
              <div className="pillar-icon pillar-icon--skin">S</div>
              <h3 className="pillar-name">SKIN</h3>
              <p className="pillar-subtitle">Your Skincare Profile</p>
              <p className="pillar-desc">
                Monk Scale skin tone matching means recommendations from people
                who actually look like you.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Monk Scale</span>
                <span className="pillar-tag">Skin Type</span>
                <span className="pillar-tag">Concerns</span>
                <span className="pillar-tag">Undertone</span>
              </div>
            </div>

            {/* CROWN */}
            <div className="pillar pillar--crown">
              <div className="pillar-icon pillar-icon--crown">C</div>
              <h3 className="pillar-name">CROWN</h3>
              <p className="pillar-subtitle">Your Hair Profile</p>
              <p className="pillar-desc">
                Hair type 1A through 4C &mdash; matched so your feed speaks
                your texture.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Hair Type</span>
                <span className="pillar-tag">Texture</span>
                <span className="pillar-tag">Porosity</span>
                <span className="pillar-tag">Density</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- HOW IT WORKS ---- */}
        <section className="how-it-works" id="how">
          <span className="swatch-label">SAND · #EDE8E4</span>
          <div style={{ textAlign: "center" }}>
            <h2 className="section-heading">How It Works</h2>
          </div>
          <div className="how-grid">
            <div className="how-step">
              <div className="how-step-num">01</div>
              <h3 className="how-step-title">Take the Quiz</h3>
              <p className="how-step-desc">
                Two minutes to build your beauty profile.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">02</div>
              <h3 className="how-step-title">Get Your Feed</h3>
              <p className="how-step-desc">
                Matched content from people who share your profile.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">03</div>
              <h3 className="how-step-title">Post Your Routine</h3>
              <p className="how-step-desc">
                Share what works. Tag your products.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">04</div>
              <h3 className="how-step-title">Shop in One Tap</h3>
              <p className="how-step-desc">
                Buy directly from any post on your feed.
              </p>
            </div>
          </div>
        </section>

        {/* ---- DEEP ROSE COLOR BANNER ---- */}
        <section className="color-banner color-banner--rose">
          <span className="swatch-label">DEEP ROSE · #7A1F1F</span>
          <p className="color-banner-text">
            Real people. Real routines. Real results.
          </p>
        </section>

        {/* ---- RUNWAY PREVIEW ---- */}
        <section className="runway-preview" id="runway">
          <div className="runway-left">
            <h2 className="section-heading">The Runway</h2>
            <p className="section-body" style={{ marginBottom: 32 }}>
              A shoppable feed of real beauty routines from people who match
              your profile. See what works for someone with your exact skin
              tone and hair type &mdash; then shop it in one tap.
            </p>
            <a href="#waitlist" className="cta-btn cta-btn--outline">
              Join the Waitlist
            </a>
          </div>
          <div className="runway-right">
            <span className="swatch-label">WARM · #EAAC7F</span>
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-content">
                <div className="phone-post">
                  <div className="phone-post-header">
                    <div className="phone-avatar" />
                    <div>
                      <div className="phone-username">@maya.glow</div>
                      <div className="phone-match">94% match</div>
                    </div>
                  </div>
                  <div className="phone-image">RUNWAY</div>
                  <div className="phone-actions">
                    <span className="phone-action">Love</span>
                    <span className="phone-action phone-action--shop">Shop</span>
                  </div>
                  <div className="phone-tags">
                    <span className="phone-tag">Fenty Gloss Bomb</span>
                    <span className="phone-tag">Monk 7</span>
                    <span className="phone-tag">3B Hair</span>
                  </div>
                </div>
                <div className="phone-post">
                  <div className="phone-post-header">
                    <div className="phone-avatar" style={{ backgroundColor: "#e8590c" }} />
                    <div>
                      <div className="phone-username">@skinrit.ual</div>
                      <div className="phone-match">91% match</div>
                    </div>
                  </div>
                  <div className="phone-image">ROUTINE</div>
                  <div className="phone-actions">
                    <span className="phone-action">Love</span>
                    <span className="phone-action phone-action--shop">Shop</span>
                  </div>
                  <div className="phone-tags">
                    <span className="phone-tag">CeraVe PM</span>
                    <span className="phone-tag">Oily Skin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- WAITLIST ---- */}
        <section className="waitlist" id="waitlist">
          <span className="swatch-label">OXBLOOD · #2D0A0A</span>
          <div className="waitlist-inner" style={{ position: "relative" }}>
            <h2 className="waitlist-heading">
              Get on <em>the feed.</em>
            </h2>
            <p className="waitlist-sub">
              MiraMe is launching soon. Join the waitlist to be first on the
              Runway.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* ---- FOOTER ---- */}
        <footer className="footer">
          <div className="footer-top">
            <div>
              <div className="footer-brand">MiraMe</div>
              <div className="footer-tagline">Mira. That&rsquo;s You.</div>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                <a href="#about">About</a>
                <a href="#waitlist">Waitlist</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Product</div>
                <a href="#runway">The Feed</a>
                <a href="#pillars">Your Profile</a>
                <a href="#how">How It Works</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Legal</div>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; 2026 MiraMe All rights reserved.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social">Instagram</a>
              <a href="#" className="footer-social">TikTok</a>
              <a href="#" className="footer-social">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
