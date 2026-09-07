#!/usr/bin/env python3
"""v2: crop the gem from the PRISTINE cutout (no recolor → no halos)."""
from PIL import Image

OUT = "/root/diamond-landing/docs"
src = Image.open(f"{OUT}/logo-full.png")  # original colors, clean alpha
w, h = src.size
px = src.load()

# Find pale ice-blue facet pixels (the diamond body) on the untouched image
xs, ys = [], []
for y in range(0, h, 2):
    for x in range(0, w, 2):
        r, g, b, a = px[x, y]
        if a > 200 and 120 < r < 215 and 185 < g < 245 and b > 225:
            xs.append(x); ys.append(y)
assert xs, "no ice facets found"
cx, cy = (min(xs) + max(xs)) // 2, (min(ys) + max(ys)) // 2
side = int(max(max(xs) - min(xs), max(ys) - min(ys)) * 1.18)
half = side // 2
l, t = max(0, cx - half), max(0, cy - half)
r_, b_ = min(w, l + side), min(h, t + side)
l, t = max(0, r_ - side), max(0, b_ - side)  # keep full side
sq = src.crop((l, t, r_, b_))
S = max(sq.size)
canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))
canvas.paste(sq, ((S - sq.size[0]) // 2, (S - sq.size[1]) // 2))
canvas.save(f"{OUT}/logo-gem.png")
for size in (512, 192, 32):
    canvas.resize((size, size), Image.LANCZOS).save(f"{OUT}/logo-gem-{size}.png")
print("gem center:", cx, cy, "| canvas:", S)
