const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#overview" aria-label="RIPK1 necrosome study home">
          <span className="brand-mark" aria-hidden="true" />
          <span>STRUCTURAL CELL DEATH BIOLOGY</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#architecture">Architecture</a>
        </nav>
      </header>

      <section className="hero" id="overview">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetPath("/ripk1-hero-poster.jpg")}
          aria-label="Time-lapse microscopy of RIPK1 necrosome dynamics"
        >
          <source src={assetPath("/ripk1-hero.mp4")} type="video/mp4" />
        </video>
        <div className="hero-image" style={{ backgroundImage: `url(${assetPath("/ripk1-hero-poster.jpg")})` }} aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">RIPK1 · NECROSOME ARCHITECTURE</p>
          <h1>Kinase activity<br />reshapes the necrosome.</h1>
          <p className="hero-copy">
            From ordered amyloid rods to branched, disordered assemblies—revealing how
            a nanoscale structural transition determines RIPK3–MLKL signal output.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#finding">Read the central finding <span>→</span></a>
          </div>
        </div>

        <div className="hero-rail" aria-label="Study methods and sections">
          <div className="method-lockup">
            <span className="localization-icon" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <p><strong>SMLM</strong><span>ExM</span><span>qSMLM</span></p>
          </div>
          <a href="#architecture"><b>01</b><span>In situ<br />architecture</span></a>
        </div>

        <div className="scale-bar" aria-hidden="true"><span /></div>
      </section>

      <section className="finding" id="finding">
        <div>
          <p className="section-index">THE CENTRAL FINDING / 01</p>
          <h2>Assembly is preserved.<br />Signaling competence is not.</h2>
        </div>
        <p>
          Loss of RIPK1 kinase activity still permits RHIM-mediated amyloidogenesis,
          but relaxes the radial organization of RIPK1. The resulting assemblies lose
          the dense RIPK3–MLKL hotspots required for productive necroptotic execution.
        </p>
      </section>

      <section className="question-grid">
        <article>
          <span>01 / THE GAP</span>
          <h3>No definitive substrate</h3>
          <p>RIPK1 kinase activity is essential for necroptosis, yet a downstream substrate that explains this function remains undefined.</p>
        </article>
        <article>
          <span>02 / THE STRUCTURAL ANSWER</span>
          <h3>An allosteric checkpoint</h3>
          <p>Kinase activity maintains a compact supramolecular state of RIPK1 independently of conventional substrate phosphorylation.</p>
        </article>
        <article>
          <span>03 / THE CONSEQUENCE</span>
          <h3>Architecture licenses output</h3>
          <p>Radial compaction concentrates RIPK3 and MLKL into high-density functional hotspots that enable necroptotic execution.</p>
        </article>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-heading">
          <p className="section-index">IN SITU ARCHITECTURE / 02</p>
          <h2>AmyloMap resolves full-length RIPK1 at sub-molecular scale.</h2>
          <p>Low-linkage-error SMLM defines radial domain positioning; ExM resolves ordered axial periodicity directly in cells.</p>
        </div>
        <div className="architecture-layout">
          <figure className="paper-figure">
            <img src={assetPath("/figure-1-dark.webp")} width="1800" height="2044" loading="lazy" decoding="async" alt="Figure 1 showing AmyloMap analysis of full-length RIPK1 amyloid architecture" />
            <figcaption><span>FIGURE 1</span> RHIM-centered core with radially distributed death and kinase domains.</figcaption>
          </figure>
          <div className="metric-stack">
            <div><strong>50.20 ± 1.70 nm</strong><span>N-terminal apparent diameter of RIPK1-FL</span></div>
            <div><strong>23.31 ± 1.10 nm</strong><span>C-terminal apparent diameter of RIPK1-FL</span></div>
            <div><strong>36.56 ± 0.96 nm</strong><span>Axial pitch of full-length RIPK1 assemblies</span></div>
            <div className="domain-order">
              <p>RADIAL ORGANIZATION</p>
              <ol><li><i className="rh-core" />RHIM core</li><li><i className="dd-layer" />Death domain</li><li><i className="kd-layer" />Kinase domain</li></ol>
            </div>
          </div>
        </div>
      </section>

      <section className="evidence-section evidence-kinase" id="kinase-inhibition">
        <div className="section-heading">
          <p className="section-index">KINASE-DEPENDENT STATE / 03</p>
          <h2>Kinase inhibition redirects assembly toward inactive disorder.</h2>
          <p>Pharmacological and genetic perturbations converge on the same architectural phenotype.</p>
        </div>
        <div className="evidence-layout">
          <figure className="paper-figure">
            <img src={assetPath("/figure-2-dark.webp")} width="1800" height="2390" loading="lazy" decoding="async" alt="Figure 2 showing how RIPK1 kinase inhibition converts active amyloids into disordered assemblies" />
            <figcaption><span>FIGURE 2</span> Kinase-dead RIPK1 retains assembly capacity but forms signaling-incompetent, disordered necrosomes.</figcaption>
          </figure>
          <div className="evidence-points">
            <article><b>PHARMACOLOGY</b><h3>Nec-1 enlarges and disorders WT assemblies.</h3><p>TSZ-induced small-dot necrosomes resolve as ordered rods, whereas Nec-1 treatment produces large dots that resolve as disordered structures by SMLM.</p></article>
            <article><b>GENETICS</b><h3>K45A and D138N phenocopy inhibition.</h3><p>Kinase-dead mutants predominantly form disordered assemblies under TSZ alone, and Nec-1 produces no further architectural shift.</p></article>
            <article><b>CONFORMATION</b><h3>S161 phosphomimetics bypass Nec-1.</h3><p>S161E-containing variants preserve ordered rods and necroptotic output, placing conformational activation upstream of autophosphorylation.</p></article>
          </div>
        </div>
      </section>

      <section className="methods-section">
        <div className="section-heading compact">
          <p className="section-index">AMYLOMAP / 09</p>
          <h2>One framework. Three spatial scales.</h2>
        </div>
        <div className="method-cards">
          <article><b>01</b><h3>SMLM</h3><p>Low-linkage-error molecular labeling resolves cross-sectional diameter and relative domain position.</p><span>RADIAL ARCHITECTURE</span></article>
          <article><b>02</b><h3>Expansion microscopy</h3><p>Approximately 10× physical expansion reveals ordered periodic features along the assembly axis.</p><span>AXIAL PERIODICITY</span></article>
          <article><b>03</b><h3>Quantitative SMLM</h3><p>Automated secondary clustering measures signaling-molecule abundance, number, volume, and local density.</p><span>FUNCTIONAL HOTSPOTS</span></article>
        </div>
        <div className="validation-block" id="validation">
          <figure className="paper-figure validation-figure">
            <img src={assetPath("/figure-s2-dark.webp")} width="1800" height="1390" loading="lazy" decoding="async" alt="Figure S2 validating reduced linkage error with SNAP-tag labeling" />
            <figcaption><span>FIGURE S2</span> SNAP-tag labeling reduces linkage error and validates nanoscale width measurements.</figcaption>
          </figure>
          <div className="validation-copy">
            <p className="section-index">MEASUREMENT VALIDATION</p>
            <h3>Smaller labels reveal the native scale.</h3>
            <p>Antibody recognition broadens the apparent necrosome width. SNAP-based labeling brings the measurement into close agreement with electron microscopy and a microtubule reference of known geometry.</p>
            <div className="validation-metrics">
              <div><b>101.27 nm</b><span>Antibody-labeled RIPK3 FWHM</span></div>
              <div><b>56.45 nm</b><span>SNAP-labeled RIPK3 FWHM</span></div>
              <div><b>37.01 ± 1.36 nm</b><span>SNAP–MAP7 apparent microtubule diameter</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div><span className="brand-mark" aria-hidden="true" /><p>RIPK1 KINASE ACTIVITY DRIVES RADIAL COMPACTION OF NECROSOME TO LICENSE NECROPTOSIS</p></div>
        <p>Interactive research summary · Manuscript v5.7</p>
        <p>Lin J. et al. · Xiamen University</p>
      </footer>
    </main>
  );
}
