export default function Page() {
  return (
<>


<nav className="nav" id="nav">
<div className="container nav-inner">
  <a href="./" className="logo" aria-label="Diamond Hands Protocol home">
    <div className="logo-mark">
        <img src="logo-full.png" alt="" width={64} height={38} />
      </div>
      <span>Diamond Hands</span>
  </a>
  <div className="nav-links" id="navLinks">
    <a href="#how">How it works</a>
    <a href="#economics">Economics</a>
    <a href="#contracts">Contracts</a>
    <a href="./build/">Build</a>
    <a href="#roadmap">Roadmap</a>
  </div>
  <div className="nav-actions">
    <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme">
      <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
    </button>
    <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" className="nav-cta">Testnet App →</a>
    <button className="nav-menu-btn" id="navMenuBtn" aria-label="Open menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
</div>
<div className="mobile-menu" id="mobileMenu">
  <a href="#how">How it works</a>
  <a href="#economics">Economics</a>
  <a href="#security">Security</a>
  <a href="#contracts">Contracts</a>
  <a href="#roadmap">Roadmap</a>
  <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" style={{ color: "var(--accent)", fontWeight: "600" }}>Testnet App →</a>
</div>
</nav>


<header className="hero">
<div className="container">
  <div className="hero-grid">
    <div className="hero-content">
      <div className="hero-brand">
        <img src="logo-full.png" alt="Two hands framing a diamond — the Diamond Hands Protocol mark" className="hero-logo" />
      </div>
      <div className="hero-status">
        <span className="status-dot"></span>
        <span>Live on Base Mainnet</span>
      </div>
      <h1>Paper hands fund <span className="gradient-text">diamond hands</span>.</h1>
      <p className="hero-tagline">On-chain. Forever.</p>
      <p className="hero-sub">A permissionless vault factory on Base. Every tax event pays holders as dividends and burns tokens. The longer you hold, the more you earn from those who don't.</p>

      <div className="hero-ctas">
        <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" className="btn btn-primary">
          Launch App
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol" target="_blank" rel="noopener" className="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          View Source
        </a>
      </div>

      <div className="hero-stats">
        <div>
          <div className="stat-num" data-target="101">0</div>
          <div className="stat-label">Tests passing</div>
        </div>
        <div>
          <div className="stat-num" data-target="3">0</div>
          <div className="stat-label">Chains planned</div>
        </div>
        <div>
          <div className="stat-num" data-target="0" data-suffix="%">0%</div>
          <div className="stat-label">Admin keys</div>
        </div>
      </div>
    </div>

    <div className="hero-visual">
      <div className="flow-title">Default Tax Split · 1,000 SPX deposit</div>
      <div className="flow-diagram">
        <div className="flow-row">
          <div className="flow-icon deposit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">User deposit</div>
            <div className="flow-row-desc">1,000 SPX in</div>
          </div>
          <div className="flow-row-value">1,000</div>
        </div>
        <div className="flow-divider">5% tax applied</div>
        <div className="flow-row">
          <div className="flow-icon dividend">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">Dividends to holders</div>
            <div className="flow-row-desc">Pro-rata, claim anytime</div>
          </div>
          <div className="flow-row-value" style={{ color: "var(--accent)" }}>+40</div>
        </div>
        <div className="flow-row">
          <div className="flow-icon fee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">Burned forever</div>
            <div className="flow-row-desc">10% of every tax, locked out of the share price</div>
          </div>
          <div className="flow-row-value" style={{ color: "var(--danger)" }}>−5</div>
        </div>
        <div className="flow-row">
          <div className="flow-icon fee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">DAO treasury (4%)</div>
            <div className="flow-row-desc">→ DAO-controlled collector</div>
          </div>
          <div className="flow-row-value" style={{ color: "#d9a441" }}>+2</div>
        </div>
        <div className="flow-row">
          <div className="flow-icon fee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">Creator & platforms (2% × 3)</div>
            <div className="flow-row-desc">Pull payments, claimable anytime</div>
          </div>
          <div className="flow-row-value" style={{ color: "#d9a441" }}>+3</div>
        </div>
        <div className="flow-divider">net to user</div>
        <div className="flow-row highlight">
          <div className="flow-icon final">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div className="flow-row-text">
            <div className="flow-row-label">User receives shares</div>
            <div className="flow-row-desc">Backed by net + div pool</div>
          </div>
          <div className="flow-row-value" style={{ color: "var(--accent)" }}>950</div>
        </div>
      </div>
    </div>
  </div>

  <div className="live-banner">
    <div className="live-banner-left">
      <h4>🟢 Base Mainnet — LIVE</h4>
      <p>3 contracts live, Blockscout-verified, deployment smoke-tested on rehearsal. Deposit, claim dividends, watch the burn.</p>
    </div>
    <div className="live-banner-stats">
      <div className="live-stat">Chain<strong>Base</strong></div>
      <div className="live-stat">Verified<strong style={{ color: "var(--accent)" }}>✓</strong></div>
      <div className="live-stat">Tests<strong>101/101</strong></div>
    </div>
  </div>
</div>
</header>


<section className="section video-section">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Watch</div>
    <h2>See it in action</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>A 2-minute walkthrough of how the protocol works, why diamond hands get paid, and what makes the design permissionless.</p>
  </div>

  <div className="video-wrapper" id="videoEmbed" role="button" tabIndex={0} aria-label="Play explainer video">
    <div className="video-placeholder">
      <div className="video-icon-large">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <h3>Explainer video</h3>
      <p>Click to play — replace with your YouTube/Vimeo embed</p>
    </div>
  </div>
  <p className="video-note">To embed: replace the <code style={{ background: "var(--code-bg)", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>onclick</code> in the HTML with your YouTube/Vimeo URL.</p>
</div>
</section>


<section className="section" id="how">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">How it works</div>
    <h2>Four steps. No admin keys.</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>A vault is a self-contained contract. Anyone can deploy one. Once deployed, no one — not the team, not the DAO — can change its rules.</p>
  </div>

  <div className="steps">
    <div className="step">
      <div className="step-num">1</div>
      <h3>Deploy</h3>
      <p>Anyone calls the factory with a token plus creator and platform wallets. A new vault is cloned via EIP-1167 in a single transaction — taxes are hard-coded, no config to get wrong. 0.004 ETH creation fee.</p>
    </div>
    <div className="step">
      <div className="step-num">2</div>
      <h3>Deposit</h3>
      <p>Users deposit the underlying token. A tax is taken. Shares are minted pro-rata to the net amount.</p>
    </div>
    <div className="step">
      <div className="step-num">3</div>
      <h3>Accrue</h3>
      <p>Every tax event fires the same immutable split: 80% dividends to existing holders, 10% burned forever, 4% to the DAO treasury, and 2% each to the vault creator, creation platform, and usage platform — all pull payments, untouchable by admins.</p>
    </div>
    <div className="step">
      <div className="step-num">4</div>
      <h3>Claim & exit</h3>
      <p>Claim dividends anytime. Exit with redeem — exit tax applies, more dividends accrue, more tokens burn.</p>
    </div>
  </div>
</div>
</section>


<section className="section economics-section" id="economics">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Token economics</div>
    <h2>The split is the point</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>Every tax event fires the same hard-coded split, written into the factory itself. Not configurable, not governance-mutable — a vault's economics are fixed for life. Here's the canon:</p>
  </div>

  <div className="economics-grid">
    <div className="econ-card">
      <div className="econ-label">Entry tax</div>
      <div className="econ-value">5%</div>
      <div className="econ-desc">Applied on every deposit. Hard-coded by the factory — identical for every vault.</div>
    </div>
    <div className="econ-card">
      <div className="econ-label">Exit tax</div>
      <div className="econ-value">10%</div>
      <div className="econ-desc">Applied on every withdraw. Hard-coded by the factory — identical for every vault.</div>
    </div>
    <div className="econ-card">
      <div className="econ-label">Dividend share</div>
      <div className="econ-value">80%</div>
      <div className="econ-desc">Of every tax flows to existing holders pro-rata — claim anytime, no lockups.</div>
    </div>
  </div>

  <div className="econ-bar">
    <div className="econ-bar-seg dividend" style={{ width: "80%" }}><span>80% Holders</span></div>
    <div className="econ-bar-seg burn" style={{ width: "10%" }}><span>10%</span></div>
    <div className="econ-bar-seg fee" style={{ width: "4%" }}><span>4%</span></div>
    <div className="econ-bar-seg fee" style={{ width: "2%", opacity: 0.65 }} title="Creator"></div>
    <div className="econ-bar-seg fee" style={{ width: "2%", opacity: 0.5 }} title="Creation platform"></div>
    <div className="econ-bar-seg fee" style={{ width: "2%", opacity: 0.35 }} title="Usage platform"></div>
  </div>
  <div className="econ-legend">
    <div className="econ-legend-item"><span className="econ-legend-dot dividend"></span> 80% Dividends to holders</div>
    <div className="econ-legend-item"><span className="econ-legend-dot burn"></span> 10% Burned forever</div>
    <div className="econ-legend-item"><span className="econ-legend-dot fee"></span> 4% DAO treasury</div>
    <div className="econ-legend-item"><span className="econ-legend-dot fee" style={{ opacity: 0.65 }}></span> 2% Vault creator</div>
    <div className="econ-legend-item"><span className="econ-legend-dot fee" style={{ opacity: 0.5 }}></span> 2% Creation platform</div>
    <div className="econ-legend-item"><span className="econ-legend-dot fee" style={{ opacity: 0.35 }}></span> 2% Usage platform</div>
  </div>
</div>
</section>


<section className="section contracts-section" id="build">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Builders</div>
    <h2>Build your own frontend. Earn 2%.</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>The contracts are permissionless — so is the frontend layer. Pass your wallet as the usage platform and DHP routes 2% of every tax event your users generate, on-chain, forever. Fork the official app or integrate with four snippets.</p>
  </div>

  <div className="contract-cards">
    <div className="contract-card">
      <h3>Fork the official app</h3>
      <p>Next.js + wagmi v2 + viem, MIT-licensed, already speaks fluent DHP. Point the platform address at yourself, rebrand, ship.</p>
      <div style={{ marginTop: "1rem" }}>
        <a href="https://github.com/CryptoSI-DAO/diamond-app" target="_blank" rel="noopener" className="copy-btn" style={{ textDecoration: "none" }}>diamond-app ↗</a>
      </div>
    </div>
    <div className="contract-card">
      <h3>Integrate from scratch</h3>
      <p>Read path, deposits, dividend claims, vault origination — copy-paste wagmi/viem snippets for each step, straight from the verified ABIs.</p>
      <div style={{ marginTop: "1rem" }}>
        <a href="./build/" className="copy-btn" style={{ textDecoration: "none" }}>Open the build guide →</a>
      </div>
    </div>
    <div className="contract-card">
      <h3>Originate vaults</h3>
      <p>createVault is permissionless: launch a vault for any community at 0.004 ETH and hold its creation-platform slot permanently.</p>
      <div style={{ marginTop: "1rem" }}>
        <a href="./build/#originate" className="copy-btn" style={{ textDecoration: "none" }}>See the snippet →</a>
      </div>
    </div>
  </div>
</div>
</section>

<section className="section" id="security">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Security</div>
    <h2>Built to be left alone</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>No admin keys survive deployment. No pause function. No upgrade path. The contract is finished the moment it's live.</p>
  </div>

  <div className="security-grid">
    <div className="security-card">
      <div className="security-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
      </div>
      <div className="security-num" data-target="101">0</div>
      <div className="security-label">Tests passing</div>
    </div>
    <div className="security-card">
      <div className="security-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 12-4 8 4 12 4M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"/></svg>
      </div>
      <div className="security-num" data-target="3">0</div>
      <div className="security-label">Sourcify verified</div>
    </div>
    <div className="security-card">
      <div className="security-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 8l6-1z"/></svg>
      </div>
      <div className="security-num">OZ v5.1</div>
      <div className="security-label">Battle-tested primitives</div>
    </div>
    <div className="security-card">
      <div className="security-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z"/></svg>
      </div>
      <div className="security-num" data-target="0">0</div>
      <div className="security-label">Admin keys (renounced)</div>
    </div>
  </div>

  <div className="audit-banner">
    <div className="audit-banner-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    </div>
    <div className="audit-banner-content">
      <h3>Self-audit complete · External audit RFP out</h3>
      <p>2 critical, 4 high, 7 medium findings documented. $15–30K tier-2 audit RFP sent. No mainnet until audit clears.</p>
    </div>
    <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/feat/v1-core-contracts/SELF_AUDIT.md" target="_blank" rel="noopener" className="btn btn-secondary">
      Read report
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</div>
</section>


<section className="section contracts-section" id="contracts">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Contracts</div>
    <h2>Live on Base Mainnet</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>v1.4.0 — all three contracts deployed (September 2026, block 51,343,897) and Blockscout-verified. Free-market creation, six-way partner revenue split, pull payments.</p>
  </div>

  <div className="contracts-grid">
    <div className="contract-card">
      <div className="contract-header">
        <h3>DHPImplementation</h3>
        <span className="contract-badge">✓ Verified</span>
      </div>
      <p>The vault logic: ERC-20 share math, dividend distribution, the 80/10/4/2/2/2 tax split, anti-FOT guard.</p>
      <div className="contract-address" data-address="0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94">
        <span className="addr-text">0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94</span>
        <button className="copy-btn" data-copy="0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94" aria-label="Copy address">Copy</button>
      </div>
    </div>
    <div className="contract-card">
      <div className="contract-header">
        <h3>DHPFactory</h3>
        <span className="contract-badge">✓ Verified</span>
      </div>
      <p>Permissionless deployment of vaults via EIP-1167 clones. Registry of all vaults. 0.004 ETH creation fee.</p>
      <div className="contract-address" data-address="0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929">
        <span className="addr-text">0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929</span>
        <button className="copy-btn" data-copy="0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929" aria-label="Copy address">Copy</button>
      </div>
    </div>
    <div className="contract-card">
      <div className="contract-header">
        <h3>DHPFeeCollector</h3>
        <span className="contract-badge">✓ Verified</span>
      </div>
      <p>Accumulates the DAO's 4% + 2% usage share of every vault tax. DAO-controlled sweep destinations.</p>
      <div className="contract-address" data-address="0x0D48743923D8fcE041325F98B5Ce884a323f5499">
        <span className="addr-text">0x0D48743923D8fcE041325F98B5Ce884a323f5499</span>
        <button className="copy-btn" data-copy="0x0D48743923D8fcE041325F98B5Ce884a323f5499" aria-label="Copy address">Copy</button>
      </div>
    </div>
  </div>
  <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", opacity: 0.55 }}>
    Testnet lineage (Base Sepolia): v1.3.0 factory{" "}
    <a href="https://base-sepolia.blockscout.com/address/0x85d6436aabcba27888bc673a7f7cf6be3d2e4b9d" target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>0x85d6436aabcba27888bc673a7f7cf6be3d2e4b9d</a>
    {" "}· legacy v1.2.2 factory{" "}
    <a href="https://base-sepolia.blockscout.com/address/0xf98a8db0b6a2be70e259992be11c252dbeccaa4d" target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>0xf98a8db0b6a2be70e259992be11c252dbeccaa4d</a>
  </p>
</div>
</section>


<section className="section" id="networks">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Networks</div>
    <h2>One protocol. Every chain.</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>Same bytecode, fresh chains. v1.4.0 is live on Base; the same contracts roll out across the wider EVM ecosystem.</p>
  </div>

  <div style={{ overflowX: "auto", marginTop: "2rem" }}>
    <table style={{ width: "100%", maxWidth: "980px", margin: "0 auto", borderCollapse: "collapse", fontSize: "0.82rem" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #e7f900" }}>
          <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#e7f900", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}>Network</th>
          <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#e7f900", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}>Status</th>
          <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#e7f900", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}>DHPFactory</th>
          <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#e7f900", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}>DHPImplementation</th>
          <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#e7f900", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}>DHPFeeCollector</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <td style={{ padding: "1rem", fontWeight: 700, whiteSpace: "nowrap" }}>Base</td>
          <td style={{ padding: "1rem" }}><span className="contract-badge">● LIVE</span></td>
          <td style={{ padding: "1rem" }}><a href="https://base.blockscout.com/address/0x64be13ce698684846ae0642c1c63bb5ede8f6929" target="_blank" rel="noopener" className="addr-text" style={{ textDecoration: "underline" }}>0x64BE13cE…e8F6929</a></td>
          <td style={{ padding: "1rem" }}><a href="https://base.blockscout.com/address/0x75a7fee6e8c17f6a7c39136c69a869fe99961d94" target="_blank" rel="noopener" className="addr-text" style={{ textDecoration: "underline" }}>0x75a7Fee6…99961D94</a></td>
          <td style={{ padding: "1rem" }}><a href="https://base.blockscout.com/address/0x0d48743923d8fce041325f98b5ce884a323f5499" target="_blank" rel="noopener" className="addr-text" style={{ textDecoration: "underline" }}>0x0D487439…23f5499</a></td>
        </tr>
        <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <td style={{ padding: "1rem", fontWeight: 700, whiteSpace: "nowrap" }}>Ethereum</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
        </tr>
        <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <td style={{ padding: "1rem", fontWeight: 700, whiteSpace: "nowrap" }}>BNB Chain</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
        </tr>
        <tr>
          <td style={{ padding: "1rem", fontWeight: 700, whiteSpace: "nowrap" }}>Robinhood Chain</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
          <td style={{ padding: "1rem", opacity: 0.55 }}>Coming soon</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.78rem", opacity: 0.55 }}>
    Addresses abbreviated for display — click any to open the explorer. Multichain deployments will use identical, independently verified source code.
  </p>
</div>
</section>

<section className="section" id="roadmap">
<div className="container">
  <div className="section-header">
    <div className="eyebrow">Roadmap</div>
    <h2>From testnet to wherever you are</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>The protocol is chain-agnostic. Same addresses, same logic, wherever you want to hold.</p>
  </div>

  <div className="roadmap-timeline">
    <div className="roadmap-item">
      <div className="roadmap-dot done"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag done">Shipped</span>
        <h3>Base Sepolia testnet</h3>
        <p>3 contracts deployed, 101/101 tests passing across 10 suites, Blockscout-verified, smoke-tested with real deposits + dividend claims. September 2026.</p>
      </div>
    </div>
    <div className="roadmap-item">
      <div className="roadmap-dot active"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag active">In progress</span>
        <h3>External audit (Spearbit / Sherlock / ChainSec)</h3>
        <p>RFP sent. $15–30K engagement, 2–4 week turnaround. Self-audit fixes landing in parallel.</p>
      </div>
    </div>
    <div className="roadmap-item">
      <div className="roadmap-dot done"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag done">Shipped</span>
        <h3>Base mainnet — LIVE</h3>
        <p>Deployed September 2026 (block 51,343,897). Free-market creation, 6-way partner revenue split (80/10/4/2/2/2), pull payments, same 5% / 10% / 80% economics. First community vault (SPX6900) next.</p>
      </div>
    </div>
    <div className="roadmap-item">
      <div className="roadmap-dot active"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag active">In progress</span>
        <h3>First community vault (SPX6900)</h3>
        <p>Create the first vault on live mainnet with the 0.004 ETH creation fee, then onboard holders through the app.</p>
      </div>
    </div>
    <div className="roadmap-item">
      <div className="roadmap-dot"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag upcoming">Q1 2027</span>
        <h3>BNB Chain + Ethereum L1</h3>
        <p>Same addresses, same bytecode, fresh chains. SPX6900 + curated partner communities. The Graph subgraph for indexing.</p>
      </div>
    </div>
    <div className="roadmap-item">
      <div className="roadmap-dot"></div>
      <div className="roadmap-content">
        <span className="roadmap-tag upcoming">Later</span>
        <h3>Robinhood Chain + more</h3>
        <p>Arbitrum Orbit deployments for chains that want a sovereign L2 with DHP as canonical infrastructure.</p>
      </div>
    </div>
  </div>
</div>
</section>


<section className="section cta-section">
<div className="container">
  <div className="cta-content">
    <h2>Try it. Break it. Tell us.</h2>
    <p>The testnet is live. Deposit fake SPX, claim real dividends, watch the burn. Found a bug? Open an issue.</p>
    <div className="cta-buttons">
      <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" className="btn btn-primary">
        Open testnet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol" target="_blank" rel="noopener" className="btn btn-secondary">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        Read the code
      </a>
    </div>
  </div>
</div>
</section>


<footer className="footer">
<div className="container">
  <div className="footer-grid">
    <div className="footer-brand">
      <div className="logo">
        <div className="logo-mark footer-logo-mark">
          <img src="logo-full.png" alt="" width={64} height={38} />
        </div>
        <span>Diamond Hands</span>
      </div>
      <p>Permissionless vault factory. Paper hands fund diamond hands. On-chain. Forever.</p>
    </div>
    <div className="footer-col">
      <h4>Protocol</h4>
      <ul>
        <li><a href="#how">How it works</a></li>
        <li><a href="#economics">Economics</a></li>
        <li><a href="#security">Security</a></li>
        <li><a href="#contracts">Contracts</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Build</h4>
      <ul>
        <li><a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/SELF_AUDIT_V1.4.0.md" target="_blank" rel="noopener">Audit report</a></li>
        <li><a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/RFP_AUDIT.md" target="_blank" rel="noopener">RFP</a></li>
        <li><a href="https://base.blockscout.com/address/0x64be13ce698684846ae0642c1c63bb5ede8f6929" target="_blank" rel="noopener">Factory on Base Mainnet</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Community</h4>
      <ul>
        <li><a href="https://t.me/cryptosi" target="_blank" rel="noopener">Telegram</a></li>
        <li><a href="https://x.com/cryptosidao" target="_blank" rel="noopener">Twitter / X</a></li>
        <li><a href="https://github.com/CryptoSI-DAO" target="_blank" rel="noopener">GitHub org</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div>© 2026 CryptoSI DAO · MIT licensed</div>
    <div>
      <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/SECURITY.md" target="_blank" rel="noopener">Security</a>
      · Built with care. Renounced at launch.
    </div>
  </div>
</div>
</footer>

</>
  );
}
