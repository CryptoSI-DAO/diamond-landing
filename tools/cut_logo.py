#!/usr/bin/env python3
"""Cut logo assets for DHP: transparent cutout, dark-mode variant, favicon crop."""
from PIL import Image
from collections import deque

SRC = "/root/.hermes/cache/images/img_20e0f5a953cc.jpg"
OUT = "/root/diamond-landing/docs"

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

# 1) Edge flood-fill: only EXTERIOR near-white becomes transparent (interior whites stay)
def near_white(p, tol=38):
    r, g, b, a = p
    return r > 255 - tol and g > 255 - tol and b > 255 - tol

seen = [[False] * w for _ in range(h)]
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if near_white(px[x, y]) and not seen[y][x]:
            seen[y][x] = True; q.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        if near_white(px[x, y]) and not seen[y][x]:
            seen[y][x] = True; q.append((x, y))
while q:
    x, y = q.popleft()
    px[x, y] = (255, 255, 255, 0)
    for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and near_white(px[nx, ny]):
            seen[ny][nx] = True; q.append((nx, ny))

# 2) Trim to content bbox + 2% margin
bbox = img.getbbox()
mx, my = int((bbox[2]-bbox[0]) * 0.02), int((bbox[3]-bbox[1]) * 0.02)
crop = img.crop((max(0,bbox[0]-mx), max(0,bbox[1]-my), min(w,bbox[2]+mx), min(h,bbox[3]+my)))
crop.save(f"{OUT}/logo-full.png")

# 3) Dark-mode variant: lighten navy hands, keep light diamond facets untouched
d = crop.copy(); dp = d.load()
dw, dh = d.size
for y in range(dh):
    for x in range(dw):
        r, g, b, a = dp[x, y]
        if a > 0 and r < 80 and g < 95 and b > 100:  # navy hands only
            dp[x, y] = (min(255,int(r*1.9)+40), min(255,int(g*1.9)+60), min(255,int(b*0.92)+70), a)
d.save(f"{OUT}/logo-full-dark.png")

# 4) Favicon source: square crop centered on the DIAMOND (light-blue facet pixels)
light_bbox = None
xs, ys = [], []
for y in range(0, dh, 3):
    for x in range(0, dw, 3):
        r, g, b, a = dp[x, y]
        if a > 200 and 120 < r < 210 and 190 < g < 240 and b > 230:  # pale ice facets
            xs.append(x); ys.append(y)
if xs:
    cx, cy = (min(xs)+max(xs))//2, (min(ys)+max(ys))//2
    side = int(max(max(xs)-min(xs), max(ys)-min(ys)) * 1.25)
    half = side // 2
    sq = d.crop((max(0,cx-half), max(0,cy-half), min(dw,cx+half), min(dh,cy+half)))
    # pad to true square on transparent canvas
    S = max(sq.size)
    canvas = Image.new("RGBA", (S, S), (0,0,0,0))
    canvas.paste(sq, ((S-sq.size[0])//2, (S-sq.size[1])//2))
    canvas.save(f"{OUT}/logo-gem.png")
    for size in (512, 192, 32):
        canvas.resize((size, size), Image.LANCZOS).save(f"{OUT}/logo-gem-{size}.png")

print("sizes:", crop.size, d.size)
print("assets written")
