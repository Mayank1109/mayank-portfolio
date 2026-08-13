import ScrambleText from "./ScrambleText";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="eyebrow">// HELLO, I&apos;M</div>
        <h1 className="h1">
          <span className="l1">
            <ScrambleText text="MAYANK" delay={250} />
          </span>
          <span className="l2">
            <ScrambleText text="CHAUHAN" delay={550} />
          </span>
        </h1>
        <p className="tagline">
          FRONTEND DEVELOPER &amp; SYSTEMS ENGINEER.
          <br />
          BUILDING SCALABLE, AI-POWERED WEB EXPERIENCES.
        </p>
        <div className="cta-row">
          <a href="#projects" className="btn">
            EXPLORE MY WORK
          </a>
          <span className="arrow">→</span>
        </div>
      </div>
      <div className="hero-foot">
        <div className="status">
          <span className="pulse"></span> // BASED IN DELHI, INDIA
        </div>
        <div>OPEN TO OPPORTUNITIES</div>
        <div>SCROLL TO EXPLORE ↓</div>
      </div>
    </section>
  );
}
