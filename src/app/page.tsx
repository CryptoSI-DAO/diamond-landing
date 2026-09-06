export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b bg-gray-900/90 py-8">
        <div class="container max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Diamond Hands Protocol</h1>
          <p className="text-gray-400 text-lg">
            Permissionless vault factory on Base Network
          </p>
        </div>
      </header>

      <section className="py-12">
        <div class="container max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What is Diamond Hands Protocol?</h2>
          <p className="text-gray-400 text-lg">
            A permissionless vault factory on Base Network. Any community can deploy a
            Diamond Hands Vault for their token — where every deposit and withdrawal
            pays a tax that flows to holders as dividends and burns tokens forever.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h4 className="font-bold">How It Works</h3>
                <ol className="list-decimal space-y-2">
                  <li>Users deposit tokens into the vault</li>
                  <li>A tax is applied on every deposit/withdrawal</li>
                  <li>Tax splits: dividends to holders, 0.5% protocol fee, remainder burned</li>
                  <li>Users can claim accumulated dividends anytime</li>
                </ol>
            </div>
            <div>
              <h3 className="font-bold">Key Features</h3>
                <ul className="list-disc space-y-2">
                  <li>Permissionless — anyone can deploy a vault</li>
                  <li>Dividend distribution to all holders</li>
                  <li>0.5% protocol fee to treasury</li>
                  <li>Burn mechanism for deflationary pressure</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800">
        <div class="container max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4>Base Sepolia</h4>
              <p>✅ Deployed</p>
            </div>
            <div>
              <h4>Base Mainnet</h4>
              <p>Post-audit</p>
            </div>
            <div>
              <h4>BNB Chain</h4>
              <p>Planned</p>
            </div>
            <div>
              <h4>Ethereum Mainnet</h4>
              <p>Post-audit</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
