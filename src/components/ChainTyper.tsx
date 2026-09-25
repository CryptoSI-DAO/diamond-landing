"use client";

import { useEffect, useState } from "react";

const CHAINS = [
  { name: "Base", color: "#0052FF" },
  { name: "Robinhood", color: "#00CC00" },
  { name: "Ethereum", color: "#627EEA" },
  { name: "BNB", color: "#F0B90B" },
  { name: "Arc", color: "#2F578C" },
];

const TYPE_MS = 120; // slow, deliberate keystrokes
const HOLD_MS = 2400; // dwell once a name is fully typed
const ERASE_MS = 70; // deliberate backspace
const GAP_MS = 700; // beat between erasing and the next name

export default function ChainTyper() {
  const [text, setText] = useState("");
  const [color, setColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    // useEffect runs only after hydration — the DOM this writes to is
    // React-managed, so there is no server/client mismatch to fight.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText("Base");
      setColor(CHAINS[0].color);
      return;
    }
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;

    const wait = (ms: number) =>
      new Promise<void>((r) => {
        timer = setTimeout(r, ms);
      });

    (async () => {
      let i = 0;
      while (alive) {
        const { name, color } = CHAINS[i % CHAINS.length];
        setColor(color);
        for (let c = 1; c <= name.length && alive; c++) {
          setText(name.slice(0, c));
          await wait(TYPE_MS);
        }
        await wait(HOLD_MS);
        for (let c = name.length; c >= 0 && alive; c--) {
          setText(name.slice(0, c));
          await wait(ERASE_MS);
        }
        await wait(GAP_MS);
        i++;
      }
    })();

    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <span id="chainTyper" className="chain-typer" style={color ? { color } : undefined}>
      {text}
    </span>
  );
}
