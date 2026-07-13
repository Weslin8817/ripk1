import FigurePlaceholder from "./FigurePlaceholder";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#overview" aria-label="RIPK1 necrosome study home">
          <span className="brand-mark" aria-hidden="true" />
          <span>STRUCTURAL CELL BIOLOGY</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#architecture">Question</a>
          <a href="#radial-measurement">Radial</a>
          <a href="#axial-measurement">Axial</a>
          <a href="#reconstruction">Reconstruction</a>
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
          <p className="eyebrow">RESULT 1 · IN SITU RIPK1 ARCHITECTURE</p>
          <h1>Full-length RIPK1<br />resolved in situ.</h1>
          <p className="hero-copy">
            AmyloMap combines SNAP-SMLM, mBaojin-assisted expansion microscopy,
            and structure simulation to resolve radial domain organization and axial
            periodicity directly in cells.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#finding">Explore Result 1 <span>→</span></a>
          </div>
        </div>

        <div className="hero-rail" aria-label="Study methods and sections">
          <div className="method-lockup">
            <span className="localization-icon" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <p><strong>SMLM</strong><span>ExM</span><span>Simulation</span></p>
          </div>
          <a href="#architecture"><b>01</b><span>Scientific<br />question</span></a>
          <a href="#radial-measurement"><b>02</b><span>Radial<br />measurement</span></a>
          <a href="#axial-measurement"><b>03</b><span>Axial<br />periodicity</span></a>
          <a href="#reconstruction"><b>04</b><span>Structure<br />reconstruction</span></a>
        </div>

        <div className="scale-bar" aria-hidden="true"><span /></div>
      </section>

      <section className="result-intro" id="finding">
        <div className="result-intro-copy">
          <p className="section-index">RESULT 1 / IN SITU ARCHITECTURE</p>
          <h2>AmyloMap resolves the architecture of full-length RIPK1 amyloids in cells.</h2>
          <p>
            The analysis moves from a structural question to two orthogonal measurements:
            SNAP-SMLM defines radial domain position, while mBaojin-assisted expansion
            microscopy resolves axial periodicity. These constraints are then integrated
            into an experimentally grounded full-length assembly model.
          </p>
        </div>
        <div className="result-route" aria-label="Result 1 sections">
          <a href="#architecture"><b>01</b><span>Scientific<br />question</span></a>
          <a href="#radial-measurement"><b>02</b><span>Radial<br />measurement</span></a>
          <a href="#axial-measurement"><b>03</b><span>Axial<br />periodicity</span></a>
          <a href="#reconstruction"><b>04</b><span>Simulation &amp;<br />reconstruction</span></a>
        </div>
      </section>

      <section className="result-section question-section" id="architecture">
        <div className="part-heading">
          <div className="part-number"><span>PART</span><b>01</b></div>
          <div>
            <p className="section-index">SCIENTIFIC QUESTION / FIGURE 1A-1B</p>
            <h2>How is full-length RIPK1 organized inside an amyloid assembly?</h2>
          </div>
          <p className="part-summary">
            Structures exist for isolated RIPK1 domains and minimal RHIM amyloid cores,
            but the in situ organization of the full-length, conformationally flexible
            protein remained unresolved.
          </p>
        </div>

        <div className="question-layout">
          <div className="question-copy">
            <div className="question-prompt">
              <span>THE STRUCTURAL GAP</span>
              <p>Can the radial and axial organization of an intact RIPK1 amyloid be measured directly in cells?</p>
            </div>
            <div className="evidence-list">
              <article><b>DOMAIN CONTEXT</b><h3>KD - ID - RHIM - DD</h3><p>Figure 1A-1B establishes the domain map and the full-length and truncated constructs used to locate individual domains.</p></article>
              <article><b>ASSEMBLY RULE</b><h3>The RHIM is required.</h3><p>Only constructs retaining the RHIM form discrete puncta, rods, or aggregates; RHIM-deficient constructs remain diffuse.</p></article>
              <article><b>REFERENCE STATE</b><h3>Rod-like amyloids anchor the analysis.</h3><p>Confocal dots and rods resolve by SMLM into rod-like architectures, which become the reference framework for subsequent measurements.</p></article>
            </div>
          </div>
          <div className="figure-stack">
            <FigurePlaceholder
              src={assetPath("/figure-1ab.webp")}
              label="FIGURE 1A-1B"
              title="Domain organization and construct design"
              description="Reserve for the RIPK1 domain schematic, available structures, full-length prediction, and truncation map."
              className="placeholder-primary placeholder-1ab"
            />
          </div>
        </div>
      </section>

      <section className="result-section radial-section" id="radial-measurement">
        <div className="part-heading">
          <div className="part-number"><span>PART</span><b>02</b></div>
          <div>
            <p className="section-index">SNAP-MEDIATED RADIAL MEASUREMENT</p>
            <h2>Small labels turn radial position into a measurable coordinate.</h2>
          </div>
          <p className="part-summary">
            Low-linkage-error SNAP labeling reduces positional uncertainty before SMLM,
            allowing N- and C-terminal signals to report the radial distributions of the
            kinase and death domains.
          </p>
        </div>

        <div className="method-line" aria-label="SNAP-SMLM radial measurement workflow">
          <span><b>01</b>SNAP fusion</span><i />
          <span><b>02</b>BG-AF647</span><i />
          <span><b>03</b>SMLM</span><i />
          <span><b>04</b>FWHM + fusion</span>
        </div>

        <div className="radial-validation">
          <FigurePlaceholder
            src={assetPath("/figure-s2.webp")}
            label="FIGURE S2"
            title="Linkage-error calibration"
            description="Reserve for antibody-versus-SNAP comparison and SNAP-MAP7 microtubule calibration."
            className="placeholder-wide placeholder-s2"
          />
          <div className="metric-panel">
            <p className="section-index">MEASUREMENT VALIDATION</p>
            <div><strong>101.27 nm</strong><span>Antibody-labeled RIPK3 apparent width</span></div>
            <div><strong>56.45 nm</strong><span>SNAP-labeled RIPK3 apparent width</span></div>
            <div><strong>37.01 ± 1.36 nm</strong><span>SNAP-MAP7 microtubule diameter, mean ± SEM</span></div>
          </div>
        </div>

        <div className="radial-result">
          <div className="radial-copy">
            <p className="section-index">THE RADIAL RESULT</p>
            <h3>The kinase domain occupies a broader envelope than the death domain.</h3>
            <p>
              N-terminally labeled assemblies are consistently wider than C-terminally
              labeled assemblies. Truncation-based spatial proxies reproduce the same
              dimensions with an estimated deviation of approximately 1 nm, supporting
              direct interpretation of the SNAP positions.
            </p>
            <div className="comparison-metrics">
              <div><b>50.20 ± 1.70 nm</b><span>N-terminal RIPK1-FL</span></div>
              <div><b>23.31 ± 1.10 nm</b><span>C-terminal RIPK1-FL</span></div>
            </div>
            <p className="result-note">Particle fusion and 3D SMLM show a continuous kinase-domain distribution extending from the core toward the assembly exterior, rather than a narrow peripheral shell.</p>
          </div>
          <div className="figure-stack">
            <FigurePlaceholder
              src={assetPath("/figure-1cde.webp")}
              label="FIGURE 1C-1E"
              title="Radial imaging, FWHM analysis, and particle fusion"
              description="Reserve for the principal SMLM measurements that define kinase- and death-domain distributions."
              className="placeholder-primary"
            />
          </div>
        </div>
      </section>

      <section className="result-section axial-section" id="axial-measurement">
        <div className="part-heading">
          <div className="part-number"><span>PART</span><b>03</b></div>
          <div>
            <p className="section-index">mBAOJIN + ExM AXIAL MEASUREMENT</p>
            <h2>Physical expansion exposes the axial repeat of full-length RIPK1.</h2>
          </div>
          <p className="part-summary">
            Dense, photostable fluorescent-protein labeling is preserved through physical
            expansion, enabling Airyscan2 imaging and algorithmic pitch extraction along
            the assembly axis.
          </p>
        </div>

        <div className="axial-layout">
          <div className="figure-stack">
            <FigurePlaceholder
              src={assetPath("/figure-s4.webp")}
              label="FIGURE S4"
              title="Expansion microscopy workflow"
              description="Reserve for fixation, anchoring, gelation, homogenization, expansion, and expansion-factor quantification."
              className="placeholder-support"
            />
          </div>
          <FigurePlaceholder
            src={assetPath("/figure-1fg.webp")}
            label="FIGURE 1F-1G"
            title="Axial periodicity and pitch extraction"
            description="Reserve for expanded RIPK1/RIPK3 assemblies and the feature-recognition workflow used to calculate helical pitch."
            className="placeholder-primary placeholder-tall"
          />
        </div>

        <div className="axial-summary">
          <div className="expansion-badge"><b>9.76×</b><span>measured expansion factor</span></div>
          <div className="pitch-comparison">
            <p className="section-index">AXIAL PITCH / FIGURE 1H</p>
            <div><strong>36.56 ± 0.96 nm</strong><span>Full-length RIPK1 / mean ± SEM / n=81</span></div>
            <div><strong>33.29 ± 0.45 nm</strong><span>RIPK3-CD (388-518) / mean ± SEM / n=152</span></div>
          </div>
          <p className="axial-takeaway">Full-length RIPK1 retains a well-defined axial periodicity in situ, providing the second spatial constraint required for reconstruction.</p>
        </div>
      </section>

      <section className="result-section reconstruction-section" id="reconstruction">
        <div className="part-heading">
          <div className="part-number"><span>PART</span><b>04</b></div>
          <div>
            <p className="section-index">STRUCTURE SIMULATION &amp; RECONSTRUCTION</p>
            <h2>Measured radial and axial constraints rebuild full-length RIPK1.</h2>
          </div>
          <p className="part-summary">
            Experimentally measured domain ranges and axial pitch are integrated with
            available atomic structures to generate an in situ model of the intact assembly.
          </p>
        </div>

        <div className="simulation-flow" aria-label="RIPK1 structure simulation workflow">
          <article><b>01</b><span>EXPERIMENTAL INPUTS</span><h3>Radial ranges + axial pitch</h3></article>
          <i aria-hidden="true" />
          <article><b>02</b><span>AXIAL SCAFFOLD</span><h3>Single-stranded helical RHIM core</h3></article>
          <i aria-hidden="true" />
          <article><b>03</b><span>DOMAIN PLACEMENT</span><h3>Stochastic positioning without steric clashes</h3></article>
          <i aria-hidden="true" />
          <article><b>04</b><span>LINKER MODELING</span><h3>Constrained random walks maintain connectivity</h3></article>
        </div>

        <div className="reconstruction-figures">
          <FigurePlaceholder
            src={assetPath("/figure-s5.webp")}
            label="FIGURE S5"
            title="Structure simulation workflow"
            description="Reserve for atomic inputs, spatial constraints, linker modeling, and representative top and side views."
            className="placeholder-wide"
          />
          <FigurePlaceholder
            src={assetPath("/figure-1i.webp")}
            label="FIGURE 1I"
            title="In situ full-length RIPK1 reconstruction"
            description="Reserve for the final model integrating measured radial distributions and axial pitch."
            className="placeholder-primary"
          />
        </div>

        <div className="model-conclusion">
          <p className="section-index">RESULT 1 / STRUCTURAL MODEL</p>
          <h3>A compact RHIM core supports a stratified, continuous radial architecture.</h3>
          <div className="domain-scale" aria-label="Radial domain organization">
            <span className="domain-rhim"><i />RHIM core</span>
            <span className="domain-dd"><i />Death domain / intermediate range</span>
            <span className="domain-kd"><i />Kinase domain / broad outer range</span>
          </div>
          <p>The death domain occupies an intermediate radial range, while the kinase domain extends continuously from inner to outer regions. Together with the measured axial repeat, this defines the ordered in situ architecture of full-length RIPK1 amyloids.</p>
        </div>
      </section>

      <footer>
        <div><span className="brand-mark" aria-hidden="true" /><p>AMYLOMAP REVEALS THE IN SITU ARCHITECTURE OF FULL-LENGTH RIPK1 AMYLOIDS</p></div>
        <p>Result 1 / Figure 1 + Figures S2, S4, S5</p>
        <p>Interactive research summary / Manuscript v5.7</p>
      </footer>

      <a className="back-to-top" href="#overview" aria-label="Return to top">
        <span aria-hidden="true">↑</span>
        <b>TOP</b>
      </a>
    </main>
  );
}
