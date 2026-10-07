# 💎 Diamond Hands Protocol (DHP)

**Paper hands fund diamond hands. On-chain. Forever.**

A permissionless vault factory, live on five chains. Deploy a vault with hard-coded, immutable tokenomics in a single transaction — no admin keys, no config to get wrong, no way to change the rules after launch.

🌍 **Website:** [https://dhp.cryptosidao.org](https://dhp.cryptosidao.org)
📱 **App:** [https://app.dhp.cryptosidao.org](https://app.dhp.cryptosidao.org)

---

## The split is the point

Every tax event fires the same immutable split:

| Share | Destination |
|---|---|
| **80%** | Dividends to existing holders |
| **10%** | Burned forever |
| **4%** | DAO treasury |
| **2%** | Vault creator |
| **2%** | Creation platform |
| **2%** | Usage platform |

All pull payments. Untouchable by admins — there are none.

## How it works

1. **Deploy** — anyone calls the factory; the vault is cloned via EIP-1167 in one transaction. Taxes are hard-coded. 0.004 ETH creation fee.
2. **Deposit** — users deposit the underlying token; a tax is taken; shares are minted pro-rata to the net amount.
3. **Accrue** — every tax event fires the 80/10/4/2/2/2 split above.
4. **Claim & exit** — claim dividends anytime; exit via redeem (exit tax applies, dividends accrue, tokens burn).

## Live on five chains

Identical deterministic addresses on every network (nonce-0 deploys, independently verified per chain):

| Network | Status | DHPFactory | DHPImplementation | DHPFeeCollector |
|---|---|---|---|---|
| Base | ● LIVE | [`0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929`](https://basescan.org/address/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929) | [`0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94`](https://basescan.org/address/0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94) | [`0x0D48743923D8fcE041325F98B5Ce884a323f5499`](https://basescan.org/address/0x0D48743923D8fcE041325F98B5Ce884a323f5499) |
| Ethereum | ● LIVE | [`0x64BE…F6929`](https://etherscan.io/address/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929) | [`0x75a7…61D94`](https://etherscan.io/address/0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94) | [`0x0D48…f5499`](https://etherscan.io/address/0x0D48743923D8fcE041325F98B5Ce884a323f5499) |
| BNB Chain | ● LIVE | [`0x64BE…F6929`](https://bscscan.com/address/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929) | [`0x75a7…61D94`](https://bscscan.com/address/0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94) | [`0x0D48…f5499`](https://bscscan.com/address/0x0D48743923D8fcE041325F98B5Ce884a323f5499) |
| Robinhood Chain | ● LIVE | [`0x64BE…F6929`](https://robinhoodchain.blockscout.com/address/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929) | [`0x75a7…61D94`](https://robinhoodchain.blockscout.com/address/0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94) | [`0x0D48…f5499`](https://robinhoodchain.blockscout.com/address/0x0D48743923D8fcE041325F98B5Ce884a323f5499) |
| Arc | ● LIVE | [`0x64BE…F6929`](https://explorer.arc.io/address/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929) | [`0x75a7…61D94`](https://explorer.arc.io/address/0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94) | [`0x0D48…f5499`](https://explorer.arc.io/address/0x0D48743923D8fcE041325F98B5Ce884a323f5499) |

Default treasury: [`0x0B172a4E265AcF4c2E0aB238F63A44bf29Bd158`](https://basescan.org/address/0x0B172a4E265AcF4c2E0aB238F63A44bf29Bd158)

## Build your own frontend. Earn 2%.

The protocol is MIT licensed and frontend-agnostic. Integrate the factory directly and hold the creation-platform slot (2%) permanently for any vault you originate.

- **App (fork it):** [CryptoSI-DAO/diamond-app](https://github.com/CryptoSI-DAO/diamond-app)
- **Official site (this repo):** [dhp.cryptosidao.org](https://dhp.cryptosidao.org)

## Security

- Self-audit complete — [read the report](https://dhp.cryptosidao.org/#security)
- External audit RFP out (Spearbit / Sherlock / ChainSec)
- Taxes hard-coded at the bytecode level; EIP-1167 clones verified per chain

## Community

- Telegram: [t.me/cryptosi](https://t.me/cryptosi)
- X / Twitter: [@cryptosidao](https://x.com/cryptosidao)

---

© 2026 CryptoSI DAO · MIT licensed
