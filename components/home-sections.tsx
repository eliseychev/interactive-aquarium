import Link from "next/link";
import { AquariumScene } from "@/components/aquarium-scene";
import { FishDemo } from "@/components/fish-demo";
import { FishArt, BrandMark } from "@/components/fish-art";
import { TrackOnView, TrackedLink } from "@/components/tracked-link";
import { productConfig } from "@/config/product";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <AquariumScene />
      <div className="hero-content page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> A little art. A whole lot of magic.</div>
          <h1>Draw a fish.<br />Watch it <span>come alive.</span></h1>
          <p className="hero-description">Turn your TV into a magical aquarium filled with fish created by your kids. Draw digitally or color on paper — then watch every fish swim.</p>
          <div className="hero-actions">
            <TrackedLink className="button button-lime button-large" event="hero_cta_click" href="/signup">Start your aquarium <span aria-hidden="true">↗</span></TrackedLink>
            <TrackedLink className="button button-ghost button-large" event="how_it_works_view" href="#how-it-works"><span className="play-icon">▶</span> See how it works</TrackedLink>
          </div>
          <div className="hero-trust"><span className="free-fish-icons"><i>✦</i><i>✦</i><i>✦</i></span><span>Your first {productConfig.freeFishCount} fish are free <b>·</b> No credit card needed</span></div>
        </div>
        <div className="hero-bottom-note"><span>SCROLL TO DIVE IN</span><i aria-hidden="true">↓</i></div>
        <div className="hero-side-note"><span className="vertical-line" /> A shared world, made by little hands.</div>
      </div>
    </section>
  );
}

export function MagicSection() {
  return (
    <section className="magic-section section-pad" id="magic">
      <div className="page-width magic-layout">
        <div className="section-copy">
          <span className="section-kicker"><span>01</span> THE MAGIC MOMENT</span>
          <h2>From their hands<br />to the <em>big screen.</em></h2>
          <p>That fish they just colored? In a few seconds, it’s swimming around the living room TV. Their art, their aquarium, their little moment of magic.</p>
          <Link className="inline-link" href="/#create">See how to make one <span>↗</span></Link>
          <div className="magic-note"><span className="sparkle">✦</span><span>Every fish has its own personality.<br /><small>No two aquariums are ever the same.</small></span></div>
        </div>
        <div className="magic-visual">
          <div className="paper-card">
            <div className="paper-tape" />
            <span className="paper-label">A LITTLE MASTERPIECE</span>
            <FishArt className="paper-fish" variant={1} />
            <span className="scribble scribble-one">♡</span><span className="scribble scribble-two">✳</span>
            <div className="paper-signature">made with love <span>♥</span></div>
          </div>
          <div className="magic-trail"><span /><span /><span /><span /><span /></div>
          <div className="magic-arrow">→</div>
          <div className="tv-frame">
            <div className="tv-screen">
              <div className="tv-glow" />
              <FishArt className="tv-fish tv-fish-one" variant={1} />
              <FishArt className="tv-fish tv-fish-two" color="#a78bfa" accent="#f6b8d1" variant={2} />
              <span className="tv-bubble tv-bubble-one" /><span className="tv-bubble tv-bubble-two" />
              <span className="tv-grass grass-left" /><span className="tv-grass grass-right" />
              <div className="tv-screen-label"><span className="status-dot" /> DRAWARIUM AQUARIUM</div>
            </div>
            <div className="tv-chin"><span>{productConfig.brand}</span><i /></div>
            <div className="tv-stand" />
          </div>
          <div className="magic-sticker"><BrandMark /><span>And then<br /><b>they swim!</b></span></div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { number: "01", title: "Create", text: "Draw digitally or grab a printable fish template.", icon: "✎", tone: "peach" },
  { number: "02", title: "Color", text: "Markers, pencils, crayons or a touchscreen — anything goes.", icon: "◉", tone: "yellow" },
  { number: "03", title: "Watch it swim", text: "Send your fish to the aquarium and see it appear on the big screen.", icon: "↗", tone: "mint" },
];

export function HowItWorksSection() {
  return (
    <section className="how-section section-pad" id="how-it-works">
      <TrackOnView event="how_it_works_view" targetId="how-it-works" />
      <div className="page-width">
        <div className="section-heading centered-heading">
          <span className="section-kicker"><span>02</span> EASY AS ONE, TWO, SEA</span>
          <h2>Little steps.<br /><em>Big-time magic.</em></h2>
          <p>From the first scribble to a whole aquarium full of personality.</p>
        </div>
        <div className="steps-row">
          {steps.map((step, index) => (
            <div className="step-wrap" key={step.number}>
              <article className={`step-card step-${step.tone}`}>
                <div className="step-visual">
                  <span className="step-number">{step.number}</span>
                  <div className="step-illustration">
                    {index === 0 && <><div className="mini-tablet"><span /><FishArt variant={0} /></div><span className="pencil">✎</span></>}
                    {index === 1 && <><FishArt className="step-fish-color" variant={2} /><span className="color-dab dab-one" /><span className="color-dab dab-two" /><span className="color-dab dab-three" /></>}
                    {index === 2 && <div className="step-tv"><FishArt variant={1} /><span className="step-tv-star">✦</span></div>}
                  </div>
                </div>
                <div className="step-text"><span className="step-label">STEP {step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
              {index < steps.length - 1 && <span className="step-connector" aria-hidden="true">······→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CreationSection() {
  return (
    <section className="creation-section section-pad" id="create">
      <div className="page-width">
        <div className="section-heading split-heading">
          <div><span className="section-kicker"><span>03</span> TWO WAYS TO CREATE</span><h2>However they<br /><em>like to make.</em></h2></div>
          <p>Some little artists love a screen. Others love a fresh sheet of paper. There’s room for both in this aquarium.</p>
        </div>
        <div className="creation-cards">
          <article className="creation-card digital-card">
            <div className="creation-card-copy"><span className="card-index">01 / DIGITAL</span><h3>Create it<br />digitally.</h3><p>A super-simple drawing tool, ready on your phone, tablet or computer.</p>            <TrackedLink className="inline-link" event="try_drawing_click" href="#fish-demo">Try drawing <span>↗</span></TrackedLink></div>
            <div className="creation-art digital-art">
              <div className="phone-mockup"><div className="phone-speaker" /><div className="phone-screen"><span className="phone-topline">My new fish</span><FishArt variant={1} /><div className="phone-colors"><i /><i /><i /><i /><i /></div></div></div>
              <span className="art-sparkle digital-sparkle">✦</span>
              <div className="floating-label">Made by me!</div>
            </div>
          </article>
          <article className="creation-card paper-card-large">
            <div className="creation-card-copy"><span className="card-index">02 / ON PAPER</span><h3>Print. Color.<br />Bring to life.</h3><p>Print a template, pass around the crayons, and watch every creation join the fun.</p><Link className="inline-link" href="/templates">Get free templates <span>↗</span></Link></div>
            <div className="creation-art paper-art">
              <div className="template-sheet"><span>FINFOLK FISH No. 01</span><FishArt color="none" accent="none" className="outline-fish" /><FishArt color="none" accent="none" className="outline-fish small-outline" variant={1} /><span className="template-caption">Color me, then send me swimming!</span></div>
              <span className="crayon crayon-orange" /><span className="crayon crayon-blue" />
              <div className="paper-step-label"><span>PDF</span><i>→</i><span>YOUR ART</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function DemoSection() {
  return (
    <section className="demo-section section-pad" id="fish-demo">
      <div className="page-width">
        <div className="section-heading demo-heading centered-heading">
          <span className="section-kicker"><span>04</span> YOUR TURN, LITTLE ARTIST</span>
          <h2>Make one. <em>Make it swim.</em></h2>
          <p>A tiny taste of the fun. No account, no saving — just play.</p>
        </div>
        <FishDemo />
      </div>
    </section>
  );
}

export function PartySection() {
  return (
    <section className="party-section section-pad">
      <div className="page-width party-layout">
        <div className="party-copy">
          <span className="section-kicker light-kicker"><span>05</span> MADE FOR MAKING MEMORIES</span>
          <h2>One aquarium.<br />A whole room of<br /><em>happy little artists.</em></h2>
          <p>Give every kid something creative to make — then watch them build one amazing aquarium together.</p>
          <div className="party-tags"><span>Birthdays</span><span>Playdates</span><span>Family time</span></div>
          <Link className="button button-lime button-large" href="/signup">Start your aquarium <span>↗</span></Link>
        </div>
        <div className="party-visual">
          <div className="party-room-glow" />
          <div className="party-tv">
            <div className="party-screen">
              <span className="party-screen-heading">OUR OCEAN</span>
              <FishArt className="party-fish pf-one" />
              <FishArt className="party-fish pf-two" color="#a78bfa" accent="#f6b8d1" variant={2} />
              <FishArt className="party-fish pf-three" color="#38bdf8" accent="#ffd166" variant={0} />
              <FishArt className="party-fish pf-four" color="#2dd4bf" accent="#b9f7e8" variant={1} />
              <span className="party-seaweed" />
            </div>
          </div>
          <div className="party-kid kid-one"><span className="kid-head">●</span><i /><b /></div>
          <div className="party-kid kid-two"><span className="kid-head">●</span><i /><b /></div>
          <div className="party-kid kid-three"><span className="kid-head">●</span><i /><b /></div>
          <div className="party-drawing"><FishArt variant={1} /><span>mine!</span></div>
          <div className="party-note"><span>✳</span> A little wonder,<br />made together.</div>
        </div>
      </div>
      <div className="party-bottom page-width"><span>CREATIVE</span><i /><span>COLLABORATIVE</span><i /><span>INSTANT</span><i /><span>EASY TO SET UP</span></div>
    </section>
  );
}

export function ParentSection() {
  return (
    <section className="parent-section section-pad">
      <div className="page-width parent-layout">
        <div className="parent-art">
          <div className="parent-orbit orbit-one" /><div className="parent-orbit orbit-two" />
          <div className="parent-big-fish"><FishArt className="parent-fish" variant={0} /></div>
          <span className="parent-star star-a">✦</span><span className="parent-star star-b">✧</span>
          <div className="parent-note note-one"><b>3</b><span>free fish<br />to get started</span></div>
          <div className="parent-note note-two"><span className="parent-note-star">✦</span><span>No monthly<br />subscription</span></div>
        </div>
        <div className="parent-copy">
          <span className="section-kicker"><span>06</span> A LITTLE PEACE OF MIND</span>
          <h2>They create.<br /><em>You enjoy<br />the moment.</em></h2>
          <p>No complicated setup. No boxes of expensive toys. Just a screen, a little creativity, and an aquarium that keeps growing.</p>
          <div className="parent-checks"><span><i>✓</i> Easy to start</span><span><i>✓</i> Made together</span><span><i>✓</i> Play it again</span></div>
          <Link className="inline-link" href="/#pricing">See simple pricing <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <TrackOnView event="pricing_view" targetId="pricing" />
      <div className="page-width">
        <div className="section-heading centered-heading pricing-heading">
          <span className="section-kicker"><span>07</span> MORE ROOM IN THE OCEAN</span>
          <h2>Your first fish are <em>on us.</em></h2>
          <p>Your first {productConfig.freeFishCount} fish are free. Add more whenever your aquarium needs new friends.</p>
        </div>
        <div className="pricing-grid">
          {productConfig.packages.map((item) => (
            <article className={`price-card${"recommended" in item && item.recommended ? " price-featured" : ""}`} key={item.id}>
              {"badge" in item && <span className={`price-badge${"recommended" in item && item.recommended ? " badge-popular" : ""}`}>{item.badge}</span>}
              <div className="price-card-top"><span className="price-fish-icon"><FishArt color={item.id === "single" ? "#ff9b73" : item.id === "party" ? "#2dd4bf" : "#a78bfa"} accent="#ffd166" /></span><span className="price-count">{item.fishCount} {item.fishCount === 1 ? "fish" : "fish"}</span></div>
              <h3>{item.name}</h3>
              <div className="price-amount"><span>$</span>{item.price.toFixed(2)}<small> once</small></div>
              {"perFish" in item && <p className="price-per-fish">${item.perFish.toFixed(2)} per fish</p>}
              <div className="price-divider" />
              <p className="price-detail">A little more room for the imagination.</p>
              <TrackedLink className={`button ${"recommended" in item && item.recommended ? "button-lime" : "button-outline"} price-button`} event="pricing_package_click" href={`/signup?package=${item.id}`} properties={{ package_id: item.id, fish_count: item.fishCount, price: item.price, currency: "USD" }}>Add {item.fishCount} {item.fishCount === 1 ? "fish" : "fish"} <span>↗</span></TrackedLink>
              <span className="price-one-time">ONE-TIME PURCHASE · NO SUBSCRIPTION</span>
            </article>
          ))}
        </div>
        <div className="pricing-footnote"><span>✦</span> No subscription. Buy more only when you need them. <Link href="/faq">Questions? We’ve got you. ↗</Link></div>
        <p className="demo-mode-note">Purchases aren’t enabled in this preview. Your card will never be charged here.</p>
      </div>
    </section>
  );
}

export function DownloadSection() {
  return (
    <section className="download-section section-pad" id="download">
      <div className="download-glow" />
      <div className="page-width download-layout">
        <div className="download-copy">
          <span className="section-kicker light-kicker"><span>08</span> THE BIG-SCREEN MOMENT</span>
          <h2>Bring your aquarium<br />to the <em>big screen.</em></h2>
          <p>Set it up once, then let the fish keep swimming whenever your little artists come back.</p>
          <Link className="button button-lime button-large" href="/download">Find your app <span>↗</span></Link>
          <span className="download-smallprint">First {productConfig.freeFishCount} fish are free · No subscription</span>
        </div>
        <div className="download-visual">
          <div className="download-halo" />
          <div className="download-tv">
            <div className="download-tv-screen">
              <span className="download-light-beam" />
              <FishArt className="download-fish df-one" />
              <FishArt className="download-fish df-two" color="#38bdf8" accent="#ffd166" variant={1} />
              <FishArt className="download-fish df-three" color="#2dd4bf" accent="#b9f7e8" variant={2} />
              <span className="download-screen-grass" />
            </div>
            <span className="download-tv-logo">{productConfig.brand}</span>
            <span className="download-tv-dot" />
            <i className="download-stand" />
          </div>
          <div className="download-float-card"><span className="download-float-icon">⌁</span><span><b>Your little world.</b><small>Growing one fish at a time.</small></span><i>✦</i></div>
        </div>
      </div>
    </section>
  );
}

export function BottomCta() {
  return (
    <section className="bottom-cta">
      <div className="page-width bottom-cta-inner">
        <div className="bottom-cta-copy"><span className="section-kicker"><span>✦</span> READY WHEN YOU ARE</span><h2>Let’s make a little<br /><em>ocean of their own.</em></h2></div>
        <div className="bottom-cta-action"><Link className="button button-dark button-large" href="/signup">Start your aquarium <span>↗</span></Link><span>Your first {productConfig.freeFishCount} fish are free. No card needed.</span></div>
      </div>
    </section>
  );
}
