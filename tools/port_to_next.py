#!/usr/bin/env python3
"""Port docs/index.html -> Next.js App Router (static export) with navy/ice retheme."""
import re

SRC = "/root/diamond-landing/docs/index.html"
html = open(SRC).read()

# ---------- extract sections ----------
css = html.split("<style>")[1].split("</style>")[0]
body = html.split("<body>")[1].split("<script>")[0]
site_js = html.split("<script>")[1].split("</script>")[0]

# ---------- 1) CSS: navy/ice token swap ----------
TOKEN_MAP = [
    # dark theme tokens
    ("--accent: #00ffa3;", "--accent: #6db6ff;"),
    ("--accent-dim: #00b87a;", "--accent-dim: #3d8fe0;"),
    ("--accent-glow: rgba(0, 255, 163, 0.18);", "--accent-glow: rgba(109, 182, 255, 0.16);"),
    ("--gradient-1: linear-gradient(135deg, #00ffa3 0%, #00d4ff 100%);",
     "--gradient-1: linear-gradient(135deg, #9ed3ff 0%, #2f7fe0 100%);"),
    ("--gradient-2: linear-gradient(135deg, #b700ff 0%, #00ffa3 100%);",
     "--gradient-2: linear-gradient(135deg, #16336e 0%, #6db6ff 100%);"),
    ("--selection-bg: #00ffa3;", "--selection-bg: #6db6ff;"),
    ("--selection-fg: #06060a;", "--selection-fg: #0a1020;"),
    ("--nav-bg: rgba(6, 6, 10, 0.7);", "--nav-bg: rgba(4, 7, 15, 0.7);"),
    ("--nav-bg-scrolled: rgba(6, 6, 10, 0.92);", "--nav-bg-scrolled: rgba(4, 7, 15, 0.92);"),
    ("--bg: #06060a;", "--bg: #04070f;"),
    ("--bg-soft: #0d0d14;", "--bg-soft: #0a101e;"),
    ("--bg-card: #11111a;", "--bg-card: #0e1524;"),
    ("--bg-elevated: #16161f;", "--bg-elevated: #131c30;"),
    ("--border: #1e1e2a;", "--border: #1c2a45;"),
    ("--border-strong: #2a2a3a;", "--border-strong: #2b3f66;"),
    ("--fg: #f5f5fa;", "--fg: #eef4ff;"),
    ("--fg-soft: #b8b8c8;", "--fg-soft: #a8bce0;"),
    ("--code-bg: #0a0a12;", "--code-bg: #070d1a;"),
    # light theme tokens
    ("--accent: #00b87a;", "--accent: #2563c9;"),
    ("--accent-dim: #009060;", "--accent-dim: #16336e;"),
    ("--accent-glow: rgba(0, 184, 122, 0.15);", "--accent-glow: rgba(37, 99, 201, 0.12);"),
    ("--gradient-1: linear-gradient(135deg, #00b87a 0%, #00d4ff 100%);",
     "--gradient-1: linear-gradient(135deg, #16336e 0%, #4da3ff 100%);"),
    ("--gradient-2: linear-gradient(135deg, #b700ff 0%, #00b87a 100%);",
     "--gradient-2: linear-gradient(135deg, #0a1020 0%, #2563c9 100%);"),
    ("--nav-bg: rgba(250, 250, 250, 0.8);", "--nav-bg: rgba(247, 250, 255, 0.8);"),
    ("--nav-bg-scrolled: rgba(255, 255, 255, 0.95);", "--nav-bg-scrolled: rgba(255, 255, 255, 0.95);"),
    ("--bg: #fafafa;", "--bg: #f7faff;"),
    ("--bg-soft: #f3f3f7;", "--bg-soft: #eef3fb;"),
    ("--border: #e5e5eb;", "--border: #d9e4f5;"),
    ("--border-strong: #cfcfd7;", "--border-strong: #b8ccec;"),
    ("--code-bg: #f3f3f7;", "--code-bg: #eef3fb;"),
    ("--selection-bg: #00b87a;", "--selection-bg: #2563c9;"),
    # fixed one-off accents
    (".flow-icon.deposit { background: rgba(0, 212, 255, 0.12); color: #00d4ff; }",
     ".flow-icon.deposit { background: rgba(77, 163, 255, 0.14); color: #4da3ff; }"),
    (".flow-icon.fee { background: rgba(183, 0, 255, 0.12); color: #b700ff; }",
     ".flow-icon.fee { background: rgba(217, 164, 65, 0.14); color: #b8862f; }"),
    (".econ-bar-seg.fee { background: #b700ff; }", ".econ-bar-seg.fee { background: #d9a441; }"),
    (".econ-legend-dot.fee { background: #b700ff; }", ".econ-legend-dot.fee { background: #d9a441; }"),
]
for old, new in TOKEN_MAP:
    assert old in css, f"CSS token not found: {old}"
    css = css.replace(old, new)

# theme-color meta values inside JS handled separately
site_js = site_js.replace("'#fafafa' : '#06060a'", "'#f7faff' : '#04070f'")
site_js = "document.addEventListener('DOMContentLoaded',function(){\n" + site_js + "\n});"

# ---------- 2) BODY -> JSX ----------
jsx = body
jsx = re.sub(r"<!--.*?-->", "", jsx, flags=re.S)                      # HTML comments
jsx = jsx.replace('class=', 'className=')
for attr in ("stroke-width", "stroke-linecap", "stroke-linejoin",
             "fill-rule", "clip-rule", "stroke-dasharray", "stroke-dashoffset",
             "font-size", "font-family", "text-anchor", "stop-color", "stop-opacity"):
    jsx = re.sub(rf'{attr}=', attr.replace("-", "X").title().replace("X", "-").replace("-", "").replace(" ", ""), jsx) if False else jsx
for a, b in [("stroke-width", "strokeWidth"), ("stroke-linecap", "strokeLinecap"),
             ("stroke-linejoin", "strokeLinejoin"), ("fill-rule", "fillRule"),
             ("clip-rule", "clipRule"), ("stroke-dasharray", "strokeDasharray"),
             ("stroke-dashoffset", "strokeDashoffset"), ("font-size", "fontSize"),
             ("font-family", "fontFamily"), ("text-anchor", "textAnchor"),
             ("stop-color", "stopColor"), ("stop-opacity", "stopOpacity")]:
    jsx = jsx.replace(f"{a}=", f"{b}=")
# void tags
jsx = re.sub(r"<meta([^>]*?)>", r"<meta\1/>", jsx)
jsx = re.sub(r"<link([^>]*?)>", r"<link\1/>", jsx)
jsx = re.sub(r"<input([^>]*?)>", r"<input\1/>", jsx)
jsx = re.sub(r"<br>", "<br/>", jsx)

# inline style strings -> objects (only one known instance)
jsx = jsx.replace('style="color: #b700ff;"', 'style={{ color: "#d9a441" }}')
jsx = jsx.replace('style="width:36px;height:36px;"', 'style={{ width: 36, height: 36 }}')

# ---------- header logo swap ----------
old_nav_logo = re.search(r'<div className="logo-mark">.*?</div>\s*<span>Diamond Hands</span>', jsx, re.S)
new_logo = '''<div className="logo-mark">
        <img src="logo-full.png" alt="" width={64} height={38} />
      </div>
      <span>Diamond Hands</span>'''
jsx = jsx[:old_nav_logo.start()] + new_logo + jsx[old_nav_logo.end():]

# ---------- footer logo swap ----------
old_footer_logo = re.search(r'<div className="logo-mark" style=\{\{ width: 36, height: 36 \}\}>.*?</div>\s*<span>Diamond Hands</span>', jsx, re.S)
new_footer = '''<div className="logo-mark footer-logo-mark">
          <img src="logo-full.png" alt="" width={64} height={38} />
        </div>
        <span>Diamond Hands</span>'''
jsx = jsx[:old_footer_logo.start()] + new_footer + jsx[old_footer_logo.end():]

# ---------- hero brand lockup ----------
jsx = jsx.replace(
    '<div className="hero-content">',
    '''<div className="hero-content">
      <div className="hero-brand">
        <img src="logo-full.png" alt="Two hands framing a diamond — the Diamond Hands Protocol mark" className="hero-logo" />
      </div>''',
    1)

open("/root/diamond-landing/src/app/globals.css", "w").write(css)
open("/root/diamond-landing/src/app/page.tsx", "w").write(
    "export default function Page() {\n  return (\n<>" + jsx + "</>\n  );\n}\n")
open("/root/diamond-landing/public/site.js", "w").write(site_js)
open("/root/diamond-landing/docs/site.js", "w").write(site_js)
print("extracted:", len(css), "css chars |", len(jsx), "jsx chars |", len(site_js), "js chars")
