import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build on DHP — your frontend earns 2%",
  description:
    "DHP is permissionless. Build your own frontend on the same verified Base mainnet contracts the official app uses — and route 2% of every tax event your users generate to your own wallet.",
};

const bp = process.env.BASE_PATH || "";
// Canonical home for cross-subdomain links. On the build.dhp.cryptosidao.org
// Vercel deployment this is set to the main landing origin, so "home" doesn't
// rewrite back into the build page. Relative everywhere else (GitHub Pages).
const HOME = process.env.NEXT_PUBLIC_HOME_URL || `${bp}/`;

const preStyle: React.CSSProperties = {
  background: "var(--bg-elevated, #131c30)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "1.25rem 1.5rem",
  overflowX: "auto",
  fontSize: "0.8rem",
  lineHeight: 1.6,
  fontFamily: "'JetBrains Mono', monospace",
  margin: "1rem 0 0.5rem",
};

function Code({ children }: { children: string }) {
  return (
    <pre style={preStyle}>
      <code>{children}</code>
    </pre>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {sub ? <p style={{ maxWidth: "640px", margin: "0 auto" }}>{sub}</p> : null}
    </div>
  );
}

export default function BuildPage() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container nav-inner">
          <a href={HOME} className="logo" aria-label="Diamond Hands Protocol home">
            <div className="logo-mark">
              <img src={`${bp}/logo-full.png`} alt="" width={64} height={38} />
            </div>
            <span>Diamond Hands</span>
          </a>
          <div className="nav-links" id="navLinks">
            <a href={`${bp}/#how`}>How it works</a>
            <a href={`${bp}/#economics`}>Economics</a>
            <a href={`${bp}/#contracts`}>Contracts</a>
            <a href={`${bp}/build/`}>Build</a>
            <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol" target="_blank" rel="noopener">GitHub</a>
          </div>
          <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" className="btn btn-primary nav-cta">
            Open App
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-content" style={{ maxWidth: "760px" }}>
            <div className="hero-status">
              <span className="status-dot"></span>
              <span>For developers · Base Mainnet</span>
            </div>
            <h1>
              Build your own <span className="gradient-text">DHP frontend</span>.
            </h1>
            <p className="hero-sub">
              No API keys. No allowlist. No permission slip. The contracts are public, verified, and immutable —
              your users interact with the exact same bytecode the official app uses.
            </p>
            <p className="hero-sub" style={{ color: "var(--accent)" }}>
              And here's the part nobody else offers: pass your own address as the{" "}
              <code>usagePlatform</code> and your frontend earns <strong>2% of every tax event</strong> your
              users generate. Forever.
            </p>
            <div className="hero-ctas">
              <a href="https://github.com/CryptoSI-DAO/diamond-app" target="_blank" rel="noopener" className="btn btn-primary">
                Fork the official app
              </a>
              <a href="https://base.blockscout.com/address/0x64be13ce698684846ae0642c1c63bb5ede8f6929" target="_blank" rel="noopener" className="btn btn-secondary">
                Read the contracts
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* THE HOOK */}
      <section className="section" id="why">
        <div className="container">
          <SectionHeader
            eyebrow="Why build on DHP"
            title="The rails pay their own builders"
            sub="Every tax event splits six ways. One of those ways is reserved for whatever platform the user arrived through — and the user chooses that platform by choosing a frontend. That's you."
          />
          <div className="economics-grid">
            <div className="econ-card">
              <div className="econ-label">Your revenue share</div>
              <div className="econ-value">2%</div>
              <div className="econ-desc">
                Of every entry and exit tax your users generate, routed on-chain by the FeeCollector. No invoices, no payout schedules — it accrues to your wallet and you claim it whenever you want.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Integration cost</div>
              <div className="econ-value">0</div>
              <div className="econ-desc">
                No SDK license, no partnership call, no keys to leak. If you can call a contract, you're integrated.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Vault economics you must honor</div>
              <div className="econ-value">80/10</div>
              <div className="econ-desc">
                80% of every tax goes to holders as dividends, 10% burns. Your 2% comes out of the remaining 20% — you never compete with holder yield, and neither does anyone else.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRACTS */}
      <section className="section contracts-section" id="surface">
        <div className="container">
          <SectionHeader
            eyebrow="The surface"
            title="Three contracts. That's the whole stack."
            sub="Source-verified on Blockscout, ABIs derivable with forge, registry discoverable on-chain. Machine-readable addresses live in deployments.json in the protocol repo."
          />
          <div className="contract-cards">
            <div className="contract-card">
              <h3>DHPFactory</h3>
              <div className="contract-address addr-text">0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929</div>
              <div style={{ marginTop: "0.75rem" }}>
                <button className="copy-btn" data-copy="0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929" aria-label="Copy factory address">Copy</button>
              </div>
              <p style={{ marginTop: "0.75rem" }}>
                Entry point. Maps token → vault (registry), enforces the hard-coded tax canon, emits{" "}
                <code>VaultCreated</code>. Creation fee: 0.004 ETH.
              </p>
            </div>
            <div className="contract-card">
              <h3>DHPImplementation</h3>
              <div className="contract-address addr-text">0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94</div>
              <div style={{ marginTop: "0.75rem" }}>
                <button className="copy-btn" data-copy="0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94" aria-label="Copy implementation address">Copy</button>
              </div>
              <p style={{ marginTop: "0.75rem" }}>
                The vault itself — ERC-4626 plus dividends: deposits, redemptions, claims, previews, and the{" "}
                <code>*WithPlatform</code> variants that route your 2%.
              </p>
            </div>
            <div className="contract-card">
              <h3>DHPFeeCollector</h3>
              <div className="contract-address addr-text">0x0D48743923D8fcE041325F98B5Ce884a323f5499</div>
              <div style={{ marginTop: "0.75rem" }}>
                <button className="copy-btn" data-copy="0x0D48743923D8fcE041325F98B5Ce884a323f5499" aria-label="Copy collector address">Copy</button>
              </div>
              <p style={{ marginTop: "0.75rem" }}>
                Splits every tax 80/10/4/2/2/2 and holds each party's balance until they pull. Read-only for you — split logic is immutable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READ PATH */}
      <section className="section" id="read">
        <div className="container">
          <SectionHeader
            eyebrow="Step 1 · Read-only"
            title="Ship a dashboard touching zero write functions"
            sub="Everything a portfolio tracker needs is a public view. This is the fastest way to learn the protocol — and a shippable product in an afternoon."
          />
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p style={{ lineHeight: 1.8 }}>
              Per vault: <code>asset()</code> (the underlying token), <code>totalAssets()</code>,{" "}
              <code>entryTaxBps()</code> / <code>exitTaxBps()</code> / <code>dividendShareBps()</code> (always
              500 / 1000 / 8000 — read them anyway, never hard-code), and{" "}
              <code>factory()</code> to self-verify you're talking to a real DHP vault. Unclaimed dividends for
              a user: <code>rewards(account)</code>. Exact post-tax math: <code>previewDeposit</code>,{" "}
              <code>previewWithdraw</code>, <code>previewRedeem</code>.
            </p>
            <Code>{`import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const client = createPublicClient({ chain: base, transport: http() });

// live unclaimed dividend balance for a user
const unclaimed = await client.readContract({
  address: VAULT_ADDRESS,      // from the factory registry
  abi: dhpVaultAbi,            // forge inspect or Blockscout
  functionName: "rewards",
  args: [userAddress],
});

// exact shares a user gets after the 5% entry tax
const shares = await client.readContract({
  address: VAULT_ADDRESS,
  abi: dhpVaultAbi,
  functionName: "previewDeposit",
  args: [amount],              // in token base units
});`}</Code>
            <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              Discovering vaults: call the factory registry mapping, or index{" "}
              <code>VaultCreated(token, vault, creator, …)</code> logs from block 51,343,897 onward.
            </p>
          </div>
        </div>
      </section>

      {/* WRITE PATH */}
      <section className="section" id="write">
        <div className="container">
          <SectionHeader
            eyebrow="Step 2 · Write path"
            title="Deposits — and how your 2% gets routed"
            sub="Standard ERC-4626 flow: approve the vault, then deposit/mint/withdraw/redeem. The WithPlatform variants are identical except they credit a usage platform — pass your address and the collector owes you 2% of that tax, forever."
          />
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <Code>{`import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";

const { writeContract } = useWriteContract();

// user deposits 100 tokens; YOUR frontend is the usage platform
writeContract({
  address: VAULT_ADDRESS,
  abi: dhpVaultAbi,
  functionName: "depositWithPlatform",
  args: [
    parseUnits("100", tokenDecimals),  // gross amount, tax on top comes out of it
    userAddress,                       // receiver of shares
    YOUR_PLATFORM_ADDRESS,             // ← your 2% lands here
  ],
});`}</Code>
            <p style={{ lineHeight: 1.8 }}>
              The same pattern exists for all four operations:{" "}
              <code>depositWithPlatform</code>, <code>mintWithPlatform</code>,{" "}
              <code>withdrawWithPlatform</code>, <code>redeemWithPlatform</code>. If a user arrives at your UI
              without a platform referrer, the plain variants still work — the 2% simply stays with the
              collector instead of you. Previews are <strong>tax-inclusive</strong>: show users the preview
              number and the number that lands is the same number.
            </p>
          </div>
        </div>
      </section>

      {/* CLAIMS */}
      <section className="section" id="claims">
        <div className="container">
          <SectionHeader
            eyebrow="Step 3 · Dividends"
            title="Pull payments — and the sandwich guard"
            sub="Dividends accrue to holders automatically and are claimed, never pushed. Your UI should show the live unclaimed balance and make claiming one click."
          />
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <Code>{`// protected claim — revert if the walk-away value dips below minAmountOut
writeContract({
  address: VAULT_ADDRESS,
  abi: dhpVaultAbi,
  functionName: "claimDividend",
  args: [minAmountOut],   // quote the token first; 0n = accept MEV risk
});

// unclaimed balance for the button label
const pending = await client.readContract({
  address: VAULT_ADDRESS, abi: dhpVaultAbi,
  functionName: "rewards", args: [userAddress],
});`}</Code>
            <p style={{ lineHeight: 1.8 }}>
              The <code>minAmountOut</code> overload exists because a public claim is a sandwichable
              transaction. Quote the underlying token (your price feed or a DEX quote), set a sane floor, and
              surface it as a "slippage protection" toggle in your UI. The official app defaults it on —
              copy that.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGINATE */}
      <section className="section" id="originate">
        <div className="container">
          <SectionHeader
            eyebrow="Step 4 · Originate"
            title="Launch vaults from your product — and own their platform share"
            sub="Frontends aren't limited to existing vaults. createVault is permissionless: any token, any community, and the creation platform slot is yours permanently."
          />
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <Code>{`writeContract({
  address: FACTORY_ADDRESS,
  abi: dhpFactoryAbi,
  functionName: "createVault",
  args: [
    tokenAddress,            // any ERC-20 the community wants to hold
    creatorWallet,           // receives the vault-creator 2%
    YOUR_PLATFORM_ADDRESS,   // receives your 2% on every future tax event
  ],
  value: parseEther("0.004"), // creation fee, anti-griefing
});`}</Code>
            <p style={{ lineHeight: 1.8 }}>
              That 0.004 ETH is the only cost, ever. The vault that pops out is fully formed, immutable, and
              indexed in the factory registry. If you operate a community tool, this is the difference between
              integrating DHP and <em>being</em> a DHP deployment channel.
            </p>
          </div>
        </div>
      </section>

      {/* FORK */}
      <section className="section" id="fork">
        <div className="container">
          <SectionHeader
            eyebrow="Shortcut"
            title="Fork the official app"
            sub="The official frontend is public, MIT-licensed, and already speaks fluent DHP — v1.4.0 registry, wallet flows, tax-inclusive previews, protected claims. Start from working code instead of a blank repo."
          />
          <div style={{ maxWidth: "760px", margin: "0 auto", lineHeight: 1.9 }}>
            <p>
              <strong>1.</strong> Clone{" "}
              <a href="https://github.com/CryptoSI-DAO/diamond-app" target="_blank" rel="noopener">
                CryptoSI-DAO/diamond-app
              </a>{" "}
              — Next.js App Router, wagmi v2 + viem, Tailwind v4.
            </p>
            <p>
              <strong>2.</strong> Point it at your own usage-platform address in the config — that flips the
              2% revenue routing to you.
            </p>
            <p>
              <strong>3.</strong> Rebrand, redeploy (it's a static-friendly Next build — Vercel, Pages, IPFS
              all work), ship.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
              <a href="https://github.com/CryptoSI-DAO/diamond-app/fork" target="_blank" rel="noopener" className="btn btn-primary">
                Fork on GitHub
              </a>
              <a href="https://diamond-app-chi.vercel.app" target="_blank" rel="noopener" className="btn btn-secondary">
                See it running
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="section" id="rules">
        <div className="container">
          <SectionHeader
            eyebrow="Rules of the road"
            title="Build safe. Your users will thank you."
          />
          <div className="economics-grid">
            <div className="econ-card">
              <div className="econ-label">Always show gross → net</div>
              <div className="econ-desc">
                Previews are tax-inclusive — display both the input amount and the post-tax result. A UI that
                hides the 5% / 10% is a UI that gets accused of stealing.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Never promise configurability</div>
              <div className="econ-desc">
                Taxes and split are hard-coded and immutable. Any UI copy implying "custom vault settings" is
                false and will break trust the moment someone reads the contract.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Respect token decimals</div>
              <div className="econ-desc">
                Read <code>decimals()</code> from the underlying token per vault — parse with the right base
                units. Shares are 18-decimal, assets are whatever the token is.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Know the tax-token edge</div>
              <div className="econ-desc">
                If the underlying token taxes transfers, check{" "}
                <code>acceptFeesFromTransfer</code> semantics before doing balance math — deltas may not match
                amounts.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">First-deposit behavior</div>
              <div className="econ-desc">
                Dividend accounting starts once shares exist. Deposit-before-first-share edge cases are
                documented in ERC4626_COMPATIBILITY.md — read it before you build share-price displays.
              </div>
            </div>
            <div className="econ-card">
              <div className="econ-label">Mainnet is the only live network</div>
              <div className="econ-desc">
                Base (8453) hosts v1.4.0. Rehearse with dust amounts, not testnet habits — and never ship a
                UI that hides the network a user is about to sign on.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Straight answers" />
          <div style={{ maxWidth: "760px", margin: "0 auto", lineHeight: 1.9 }}>
            <p><strong>Do I need permission or an API key?</strong><br />
            No. The contracts are permissionless and public. That's the whole point.</p>
            <p><strong>Can I charge my users extra fees on top?</strong><br />
            Your 2% usage-platform share is yours to keep or pass on. What you can't do is alter vault
            economics — those are immutable for everyone, including us.</p>
            <p><strong>Is there a testnet?</strong><br />
            v1.3.0 vaults still live on Base Sepolia for the curious; v1.4.0 is mainnet-only. Deployments per
            network: <a href={`${bp}/#networks`}>see the networks table</a>.</p>
            <p><strong>Where are the ABIs?</strong><br />
            Derive with <code>forge inspect DHPImplementation abi</code> in the protocol repo, pull from
            Blockscout, or copy from <code>deployments.json</code>'s verified artifacts.</p>
            <p><strong>Who pays for claims and platform payouts?</strong><br />
            Gas on claims is paid by the claimer. Platform share accrual is free — the collector books it on
            every tax event automatically.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 CryptoSI DAO · MIT licensed</div>
            <div>
              <a href={HOME}>Home</a> ·{" "}
              <a href="https://github.com/CryptoSI-DAO/diamond-hands-protocol" target="_blank" rel="noopener">Protocol</a>
              {" "}·{" "}
              <a href="https://github.com/CryptoSI-DAO/diamond-app" target="_blank" rel="noopener">App</a>
              {" "}· Paper hands fund diamond hands. 💎
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
