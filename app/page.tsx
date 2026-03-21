import WaitlistForm from "./WaitlistForm";

export default function Home() {
  return (
    <>
      {/* ---- TOP BAR ---- */}
      <div className="top-bar">Coming Soon</div>

      {/* ---- SWATCH CARD WRAPPER ---- */}
      <div className="swatch-card">
        {/* ---- MASTHEAD ---- */}
        <header className="masthead">
          <span className="swatch-label">PAPER · #FFFFFF</span>
          <h1 className="masthead-title">MiraMe</h1>
          <p className="masthead-tagline">Mira. That&rsquo;s You.</p>
          <nav className="masthead-nav">
            <a href="#about">About</a>
            <a href="#pillars">Profiles</a>
            <a href="#how">How It Works</a>
            <a href="#runway">Runway</a>
            <a href="#waitlist">Join</a>
          </nav>
        </header>

        {/* ---- HERO ---- */}
        <section className="hero">
          <div className="hero-left">
            <span className="swatch-label">CREAM · #FBF7F3</span>
            <h2 className="hero-headline">
              Beauty in <em>every frequency.</em>
            </h2>
            <p className="hero-deck">
              MiraMe matches you with real people who share your skin tone, hair
              texture, and beauty profile. The best recommendations come from
              those who truly get yours.
            </p>
            <a href="#waitlist" className="cta-btn">
              Get Early Access
            </a>
          </div>
          <div className="hero-right">
            <span className="swatch-label">EMBER · #C4714A</span>
            <div className="hero-features">
              <div className="hero-feature-list">
                <div className="hero-feature-item">Every Tone Celebrated</div>
                <div className="hero-feature-item">Every Texture Honored</div>
                <div className="hero-feature-item">Every Routine Shared</div>
              </div>
            </div>
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

        {/* ---- CONCEPT ---- */}
        <section className="concept" id="about">
          <div className="concept-left">
            <span className="swatch-label">OXBLOOD · #2D0A0A</span>
            <div className="concept-quote">
              We don&rsquo;t come in one shade. We come in all of them.
            </div>
          </div>
          <div className="concept-right">
            <span className="swatch-label">BONE · #F5EDE4</span>
            <p className="section-body">
              Beauty has never been one-size-fits-all. MiraMe is a community that
              celebrates the <strong>full spectrum</strong> of skin tones, hair
              textures, and styles &mdash; connecting you with people who live in
              the same beautiful frequency you do.
            </p>
          </div>
        </section>

        {/* ---- THREE PILLARS ---- */}
        <section className="pillars" id="pillars">
          <div className="pillars-header">
            <span className="swatch-label">HONEY · #F7CDA2</span>
            <h2 className="section-heading">Three Dimensions. One You.</h2>
          </div>
          <div className="pillars-grid">
            {/* KIT */}
            <div className="pillar">
              <div className="pillar-icon pillar-icon--kit">K</div>
              <h3 className="pillar-name">KIT</h3>
              <p className="pillar-subtitle">Your Makeup Profile</p>
              <p className="pillar-desc">
                KIT maps your makeup routine by coverage, finish, and style.
                Discover products from people with the same preferences and
                complexion.
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
                Powered by the Monk Scale, SKIN captures your tone, type,
                undertone, and concerns. Skincare recs from someone whose skin
                actually behaves like yours.
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
                From 1A to 4C, CROWN knows your hair. Type, texture, porosity,
                density &mdash; matched with others who understand exactly what
                your hair needs.
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

        {/* ---- EMBER COLOR BANNER ---- */}
        <section className="color-banner">
          <span className="swatch-label">EMBER · #C4714A</span>
          <p className="color-banner-text">
            Your beauty. Your community. Your mirror.
          </p>
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
                A visual, guided quiz captures your skin tone, hair type, and
                makeup preferences. Two minutes.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">02</div>
              <h3 className="how-step-title">Build Your Profile</h3>
              <p className="how-step-desc">
                Your answers create KIT, SKIN, and CROWN profiles &mdash; three
                dimensions that make you uniquely you.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">03</div>
              <h3 className="how-step-title">Find Your Mirror</h3>
              <p className="how-step-desc">
                Our matching algorithm connects you with people who share your
                profile. Your mirror, verified.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">04</div>
              <h3 className="how-step-title">Shop &amp; Share</h3>
              <p className="how-step-desc">
                Discover products that work for people like you. Share your own
                routines on the Runway.
              </p>
            </div>
          </div>
        </section>

        {/* ---- DEEP ROSE COLOR BANNER ---- */}
        <section className="color-banner color-banner--rose">
          <span className="swatch-label">DEEP ROSE · #7A1F1F</span>
          <p className="color-banner-text">
            Real recommendations from real people.
          </p>
        </section>

        {/* ---- RUNWAY PREVIEW ---- */}
        <section className="runway-preview" id="runway">
          <div className="runway-left">
            <h2 className="section-heading">The Runway.</h2>
            <p className="section-body" style={{ marginBottom: 32 }}>
              Post your routines, tag your products, shop directly from people
              who match your profile. Every post is shoppable. Every
              recommendation is real.
            </p>
            <a href="#waitlist" className="cta-btn cta-btn--outline">
              Be First on the Runway
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
              Join the spectrum.<br />
              <em>Every shade welcome.</em>
            </h2>
            <p className="waitlist-sub">
              Be among the first to build your beauty profile, find your people,
              and celebrate what makes you, you.
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
                <a href="#pillars">Profiles</a>
                <a href="#how">How It Works</a>
                <a href="#runway">Runway</a>
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
