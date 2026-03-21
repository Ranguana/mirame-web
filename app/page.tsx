export default function Home() {
  return (
    <>
      {/* ---- TOP BAR ---- */}
      <div className="top-bar">
        Coming Soon &mdash; Join the Waitlist
      </div>

      {/* ---- MASTHEAD ---- */}
      <header className="masthead">
        <p className="masthead-date">Issue No. 001 &bull; Launch Edition &bull; 2026</p>
        <h1 className="masthead-title">MIRAME</h1>
        <p className="masthead-tagline">Every Shade Is the Shade</p>
        <nav className="masthead-nav">
          <a href="#about">The Story</a>
          <a href="#pillars">Your Profile</a>
          <a href="#how">How It Works</a>
          <a href="#runway">The Runway</a>
          <a href="#waitlist">Join</a>
        </nav>
      </header>

      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-kicker">Exclusive First Look</p>
          <h2 className="hero-headline">
            Beauty in <em>every frequency.</em>
          </h2>
          <p className="hero-deck">
            Every shade, every texture, every tone &mdash; the full spectrum is
            the standard. MiraMe connects you with real people who share your
            skin tone, hair texture, and beauty profile, because the best
            recommendations come from those who truly get yours.
          </p>
          <a href="#waitlist" className="cta-btn">
            Get Early Access
          </a>
        </div>
        <div className="hero-right">
          <span className="hero-star" aria-hidden="true">&#10038;</span>
          <span className="hero-star" aria-hidden="true">&#10038;</span>
          <div className="hero-features">
            <p className="hero-features-label">Inside This Issue</p>
            <div className="hero-feature-list">
              <div className="hero-feature-item">
                Every Tone Celebrated
                <span>Monk Scale Skin Tone Matching</span>
              </div>
              <div className="hero-feature-item">
                Every Texture Honored
                <span>Hair Type 1A through 4C</span>
              </div>
              <div className="hero-feature-item">
                Every Routine Shared
                <span>Shoppable Community Feed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- DIVIDER ---- */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-star">&#10038;</span>
        <div className="divider-line" />
      </div>

      {/* ---- CONCEPT ---- */}
      <section className="concept" id="about">
        <div className="concept-left">
          <div className="concept-quote">
            <span className="concept-quote-mark">&ldquo;</span>
            We don&rsquo;t come in one shade. We come in all of them &mdash;
            and every single one is beautiful.
          </div>
          <p className="concept-attribution">
            &mdash; The MiraMe community
          </p>
        </div>
        <div className="concept-right">
          <p className="section-label">The Mirame Manifesto</p>
          <h2 className="section-heading">
            A celebration of every shade, every texture, every you.
          </h2>
          <p className="section-body">
            Beauty has never been one-size-fits-all &mdash; so why should beauty advice be?
            MiraMe is a community that celebrates the <strong>full, glorious spectrum</strong> of
            skin tones, hair textures, and makeup styles. We match you with people
            who share your KIT, SKIN, and CROWN profile, so recommendations come from
            those who live in the same beautiful frequency you do.
            <br /><br />
            No follower counts. No sponsorship deals. Just <strong>real people
            celebrating real beauty &mdash; in every color it comes in.</strong>
          </p>
        </div>
      </section>

      {/* ---- THREE PILLARS ---- */}
      <section className="pillars" id="pillars">
        <div className="pillars-header">
          <p className="section-label">Your Beauty Profile</p>
          <h2 className="section-heading">Three Dimensions. One You.</h2>
        </div>
        <div className="pillars-grid">
          {/* KIT */}
          <div className="pillar">
            <div className="pillar-number">01</div>
            <div className="pillar-icon pillar-icon--kit">K</div>
            <h3 className="pillar-name">KIT</h3>
            <p className="pillar-subtitle">Your Makeup Profile</p>
            <p className="pillar-desc">
              Your face, your zones, your rules. KIT maps your makeup routine
              by coverage, finish, and style &mdash; so you discover products
              from people with the same preferences and complexion.
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
            <div className="pillar-number">02</div>
            <div className="pillar-icon pillar-icon--skin">S</div>
            <h3 className="pillar-name">SKIN</h3>
            <p className="pillar-subtitle">Your Skincare Profile</p>
            <p className="pillar-desc">
              Powered by the Monk Scale, your SKIN profile captures your tone,
              type, undertone, and concerns. Finally &mdash; skincare recs from
              someone whose skin actually behaves like yours.
            </p>
            <div className="pillar-tags">
              <span className="pillar-tag">Monk Scale</span>
              <span className="pillar-tag">Skin Type</span>
              <span className="pillar-tag">Concerns</span>
              <span className="pillar-tag">Undertone</span>
            </div>
          </div>

          {/* CROWN */}
          <div className="pillar">
            <div className="pillar-number">03</div>
            <div className="pillar-icon pillar-icon--crown">C</div>
            <h3 className="pillar-name">CROWN</h3>
            <p className="pillar-subtitle">Your Hair Profile</p>
            <p className="pillar-desc">
              From 1A to 4C, your CROWN profile knows your hair. Type, texture,
              porosity, density &mdash; matched with others who understand exactly
              what your hair needs.
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
        <div style={{ textAlign: "center" }}>
          <p className="section-label">The Process</p>
          <h2 className="section-heading">From Quiz to Community in 4 Steps</h2>
        </div>
        <div className="how-grid">
          <div className="how-step">
            <div className="how-step-num">I</div>
            <h3 className="how-step-title">Take the Quiz</h3>
            <p className="how-step-desc">
              A visual, guided quiz captures your skin tone, hair type,
              and makeup preferences. Takes two minutes.
            </p>
          </div>
          <div className="how-step">
            <div className="how-step-num">II</div>
            <h3 className="how-step-title">Build Your Profile</h3>
            <p className="how-step-desc">
              Your answers create KIT, SKIN, and CROWN profiles &mdash;
              three dimensions that make you uniquely you.
            </p>
          </div>
          <div className="how-step">
            <div className="how-step-num">III</div>
            <h3 className="how-step-title">Find Your Mirror</h3>
            <p className="how-step-desc">
              Our matching algorithm connects you with people who share
              your profile. Your mirror, verified.
            </p>
          </div>
          <div className="how-step">
            <div className="how-step-num">IV</div>
            <h3 className="how-step-title">Shop &amp; Share</h3>
            <p className="how-step-desc">
              Discover products that work for people like you. Share your
              own routines on the Runway feed.
            </p>
          </div>
        </div>
      </section>

      {/* ---- RUNWAY PREVIEW ---- */}
      <section className="runway-preview" id="runway">
        <div className="runway-left">
          <p className="section-label">The Social Feed</p>
          <h2 className="section-heading">
            Welcome to the Runway.
          </h2>
          <p className="section-body" style={{ marginBottom: 32 }}>
            The Runway is where your community comes alive. Post your
            routines, tag your products, and shop directly from people
            who match your profile. Every post is shoppable. Every
            recommendation is real.
          </p>
          <a href="#waitlist" className="cta-btn cta-btn--outline">
            Be First on the Runway
          </a>
        </div>
        <div className="runway-right">
          {/* Phone mockup */}
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
        <div className="waitlist-inner">
          <p className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>
            Launch Edition
          </p>
          <h2 className="waitlist-heading">
            Join the spectrum.<br />
            <em>Every shade welcome.</em>
          </h2>
          <p className="waitlist-sub">
            MiraMe is launching soon. Be among the first to build your beauty
            profile, find your people, and celebrate what makes you, you.
          </p>
          <form
            className="waitlist-form"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <input
              type="email"
              name="email"
              className="waitlist-input"
              placeholder="Your email address"
              required
              aria-label="Email address"
            />
            <button type="submit" className="waitlist-submit">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">MIRAME</div>
            <div className="footer-tagline">Every Shade Is the Shade</div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#about">Our Story</a>
              <a href="#waitlist">Waitlist</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="#pillars">Your Profile</a>
              <a href="#how">How It Works</a>
              <a href="#runway">The Runway</a>
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
            &copy; 2026 MiraMe. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social">Instagram</a>
            <a href="#" className="footer-social">TikTok</a>
            <a href="#" className="footer-social">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}
