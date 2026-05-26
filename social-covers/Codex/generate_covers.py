from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


OUT = Path(__file__).resolve().parent

PALETTE = {
    "yellow": "#EABB30",
    "pale": "#FEF4CD",
    "navy": "#15377E",
    "blue": "#2E66DB",
    "ice": "#E2F0FB",
    "ink": "#071633",
    "white": "#FFFFFF",
}

SIZES = {
    "facebook-cover": (1640, 624),
    "linkedin-company-cover": (1128, 191),
    "linkedin-profile-cover": (1584, 396),
    "x-header": (1500, 500),
    "youtube-banner": (2560, 1440),
    "instagram-square": (1080, 1080),
    "instagram-story": (1080, 1920),
}


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def mix(a: str, b: str, t: float) -> tuple[int, int, int]:
    ar, ag, ab = hex_to_rgb(a)
    br, bg, bb = hex_to_rgb(b)
    return (
        int(ar + (br - ar) * t),
        int(ag + (bg - ag) * t),
        int(ab + (bb - ab) * t),
    )


def rgba(color: str, alpha: int) -> tuple[int, int, int, int]:
    return (*hex_to_rgb(color), alpha)


def font(size: int, weight: str = "regular") -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/DIN Alternate Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ]
    if weight == "regular":
        candidates = [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            *candidates,
        ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def gradient(size: tuple[int, int], top: str, bottom: str) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(1, h - 1)
        draw.line([(0, y), (w, y)], fill=mix(top, bottom, t))
    return img.convert("RGBA")


def add_noise(img: Image.Image, opacity: int = 13) -> None:
    rng = random.Random(47)
    w, h = img.size
    px = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(px)
    step = max(2, int(min(w, h) / 260))
    for y in range(0, h, step):
        for x in range(0, w, step):
            v = rng.randint(0, 255)
            a = rng.randint(0, opacity)
            draw.rectangle((x, y, x + step - 1, y + step - 1), fill=(v, v, v, a))
    img.alpha_composite(px)


def draw_grid(draw: ImageDraw.ImageDraw, w: int, h: int, color: str, alpha: int, step: int) -> None:
    c = rgba(color, alpha)
    for x in range(-step, w + step, step):
        draw.line((x, 0, x, h), fill=c, width=1)
    for y in range(-step, h + step, step):
        draw.line((0, y, w, y), fill=c, width=1)


def draw_floorplan(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, scale: float, color: str, alpha: int) -> None:
    line = rgba(color, alpha)
    thick = max(2, int(4 * scale))
    rects = [
        (x, y, x + w, y + h),
        (x, y, x + int(w * 0.58), y + int(h * 0.48)),
        (x + int(w * 0.58), y, x + w, y + int(h * 0.38)),
        (x, y + int(h * 0.48), x + int(w * 0.36), y + h),
        (x + int(w * 0.36), y + int(h * 0.48), x + w, y + h),
    ]
    for rect in rects:
        draw.rounded_rectangle(rect, radius=int(8 * scale), outline=line, width=thick)
    for p in [
        (x + int(w * 0.18), y + int(h * 0.22)),
        (x + int(w * 0.72), y + int(h * 0.2)),
        (x + int(w * 0.2), y + int(h * 0.72)),
        (x + int(w * 0.67), y + int(h * 0.73)),
    ]:
        r = int(13 * scale)
        draw.ellipse((p[0] - r, p[1] - r, p[0] + r, p[1] + r), outline=rgba(PALETTE["yellow"], 180), width=thick)


def draw_app_card(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, scale: float, title: str) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=int(22 * scale), fill=rgba(PALETTE["white"], 228), outline=rgba(PALETTE["blue"], 95), width=max(1, int(2 * scale)))
    draw.text((x + int(26 * scale), y + int(22 * scale)), title, fill=hex_to_rgb(PALETTE["navy"]), font=font(max(12, int(22 * scale)), "bold"))
    for i, label in enumerate(["LIGHT", "CLIMATE", "SECURITY"]):
        yy = y + int((68 + i * 46) * scale)
        draw.rounded_rectangle((x + int(26 * scale), yy, x + w - int(26 * scale), yy + int(24 * scale)), radius=int(12 * scale), fill=rgba(PALETTE["ice"], 255))
        draw.rounded_rectangle((x + int(26 * scale), yy, x + int((110 + i * 35) * scale), yy + int(24 * scale)), radius=int(12 * scale), fill=rgba(PALETTE["yellow"], 215))
        draw.text((x + int(36 * scale), yy + int(4 * scale)), label, fill=hex_to_rgb(PALETTE["navy"]), font=font(max(8, int(10 * scale)), "bold"))


def draw_code_panel(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, scale: float) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=int(18 * scale), fill=rgba(PALETTE["ink"], 220), outline=rgba(PALETTE["yellow"], 125), width=max(1, int(2 * scale)))
    lines = [
        "scene.mode = evening",
        "knx.group('1/2/7').sync()",
        "logic.when(motion && dusk)",
        "app.view('home').refresh()",
        "loxone.output('garden').dim(34)",
    ]
    mono = font(max(8, int(15 * scale)), "regular")
    for i, line in enumerate(lines):
        yy = y + int((22 + i * 28) * scale)
        draw.text((x + int(22 * scale), yy), line, fill=hex_to_rgb(PALETTE["ice"]), font=mono)
        if i % 2 == 1:
            draw.line((x + int(22 * scale), yy + int(22 * scale), x + w - int(26 * scale), yy + int(22 * scale)), fill=rgba(PALETTE["blue"], 70), width=1)


def draw_protocol_chips(draw: ImageDraw.ImageDraw, chips: list[str], box: tuple[int, int, int, int], scale: float, light: bool) -> None:
    x1, y1, x2, y2 = box
    x, y = x1, y1
    f = font(max(8, int(13 * scale)), "bold")
    for chip in chips:
        bbox = draw.textbbox((0, 0), chip, font=f)
        cw = bbox[2] - bbox[0] + int(26 * scale)
        ch = int(28 * scale)
        if x + cw > x2:
            x = x1
            y += ch + int(10 * scale)
        if y + ch > y2:
            break
        fill = rgba(PALETTE["white"] if light else PALETTE["navy"], 180)
        outline = rgba(PALETTE["blue"] if light else PALETTE["yellow"], 120)
        txt = hex_to_rgb(PALETTE["navy"] if light else PALETTE["pale"])
        draw.rounded_rectangle((x, y, x + cw, y + ch), radius=ch // 2, fill=fill, outline=outline, width=max(1, int(1 * scale)))
        draw.text((x + int(13 * scale), y + int(7 * scale)), chip, fill=txt, font=f)
        x += cw + int(10 * scale)


def draw_warm_home(draw: ImageDraw.ImageDraw, cx: int, cy: int, s: int) -> None:
    roof = [(cx - s, cy), (cx, cy - int(s * 0.72)), (cx + s, cy)]
    body = (cx - int(s * 0.78), cy, cx + int(s * 0.78), cy + int(s * 0.82))
    draw.polygon(roof, fill=rgba(PALETTE["navy"], 232))
    draw.rounded_rectangle(body, radius=int(s * 0.07), fill=rgba(PALETTE["navy"], 235))
    for dx, dy in [(-0.38, 0.18), (0.08, 0.18), (-0.38, 0.49), (0.08, 0.49)]:
        x = cx + int(s * dx)
        y = cy + int(s * dy)
        draw.rounded_rectangle((x, y, x + int(s * 0.26), y + int(s * 0.2)), radius=int(s * 0.035), fill=rgba(PALETTE["yellow"], 230))
    draw.arc((cx - int(s * 1.12), cy - int(s * 0.98), cx + int(s * 1.12), cy + int(s * 1.26)), 205, 335, fill=rgba(PALETTE["blue"], 125), width=max(2, s // 32))


def draw_living_room(draw: ImageDraw.ImageDraw, w: int, h: int, scale: float) -> None:
    floor_y = int(h * 0.73)
    draw.rectangle((0, floor_y, w, h), fill=rgba(PALETTE["pale"], 210))
    draw.line((0, floor_y, w, floor_y), fill=rgba(PALETTE["navy"], 55), width=max(1, int(2 * scale)))

    window = (int(w * 0.09), int(h * 0.16), int(w * 0.43), int(h * 0.62))
    draw.rounded_rectangle(window, radius=int(18 * scale), fill=rgba(PALETTE["ice"], 235), outline=rgba(PALETTE["navy"], 85), width=max(2, int(3 * scale)))
    wx1, wy1, wx2, wy2 = window
    draw.line((wx1, (wy1 + wy2) // 2, wx2, (wy1 + wy2) // 2), fill=rgba(PALETTE["navy"], 45), width=max(1, int(2 * scale)))
    draw.line(((wx1 + wx2) // 2, wy1, (wx1 + wx2) // 2, wy2), fill=rgba(PALETTE["navy"], 45), width=max(1, int(2 * scale)))
    draw.ellipse((int(w * 0.28), int(h * 0.22), int(w * 0.54), int(h * 0.64)), fill=rgba(PALETTE["yellow"], 72))

    sofa = (int(w * 0.13), int(h * 0.58), int(w * 0.47), int(h * 0.78))
    draw.rounded_rectangle(sofa, radius=int(28 * scale), fill=rgba(PALETTE["navy"], 230))
    draw.rounded_rectangle((sofa[0] + int(20 * scale), sofa[1] - int(34 * scale), sofa[2] - int(20 * scale), sofa[1] + int(42 * scale)), radius=int(24 * scale), fill=rgba(PALETTE["navy"], 210))
    draw.rounded_rectangle((sofa[0] + int(34 * scale), sofa[1] + int(22 * scale), sofa[0] + int(104 * scale), sofa[1] + int(86 * scale)), radius=int(16 * scale), fill=rgba(PALETTE["blue"], 160))
    draw.rounded_rectangle((sofa[2] - int(112 * scale), sofa[1] + int(24 * scale), sofa[2] - int(34 * scale), sofa[1] + int(88 * scale)), radius=int(16 * scale), fill=rgba(PALETTE["yellow"], 205))

    lamp_x = int(w * 0.55)
    draw.line((lamp_x, int(h * 0.30), lamp_x, floor_y), fill=rgba(PALETTE["navy"], 120), width=max(2, int(4 * scale)))
    draw.polygon(
        [
            (lamp_x - int(48 * scale), int(h * 0.29)),
            (lamp_x + int(48 * scale), int(h * 0.29)),
            (lamp_x + int(32 * scale), int(h * 0.40)),
            (lamp_x - int(32 * scale), int(h * 0.40)),
        ],
        fill=rgba(PALETTE["yellow"], 205),
    )
    draw.ellipse((lamp_x - int(90 * scale), int(h * 0.24), lamp_x + int(90 * scale), int(h * 0.49)), fill=rgba(PALETTE["yellow"], 42))


def concept_home_aspiration(size: tuple[int, int]) -> Image.Image:
    w, h = size
    s = min(w, h) / 900
    img = gradient(size, PALETTE["ice"], PALETTE["white"])
    draw = ImageDraw.Draw(img)
    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((int(w * 0.00), int(h * 0.06), int(w * 0.68), int(h * 0.88)), fill=rgba(PALETTE["yellow"], 54))
    gd.ellipse((int(w * 0.36), int(h * 0.18), int(w * 1.04), int(h * 1.10)), fill=rgba(PALETTE["blue"], 35))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(int(45 * s))))
    draw_living_room(draw, w, h, s)
    draw_grid(draw, w, h, PALETTE["blue"], 18, max(34, int(54 * s)))
    draw_app_card(draw, int(w * 0.64), int(h * 0.23), int(w * 0.23), int(h * 0.44), s, "HOME")
    draw_protocol_chips(draw, ["KNX", "Loxone", "Matter", "custom app"], (int(w * 0.60), int(h * 0.72), int(w * 0.91), int(h * 0.88)), s, True)
    for a, b in [
        ((int(w * 0.40), int(h * 0.45)), (int(w * 0.64), int(h * 0.39))),
        ((int(w * 0.55), int(h * 0.34)), (int(w * 0.64), int(h * 0.48))),
        ((int(w * 0.35), int(h * 0.72)), (int(w * 0.70), int(h * 0.72))),
    ]:
        draw.line((*a, *b), fill=rgba(PALETTE["yellow"], 165), width=max(2, int(4 * s)))
    add_noise(img, 8)
    return img


def concept_blueprint(size: tuple[int, int]) -> Image.Image:
    w, h = size
    s = min(w, h) / 900
    img = gradient(size, PALETTE["ice"], PALETTE["pale"])
    draw = ImageDraw.Draw(img)
    draw_grid(draw, w, h, PALETTE["blue"], 42, max(32, int(48 * s)))
    draw_floorplan(draw, int(w * 0.07), int(h * 0.14), int(w * 0.47), int(h * 0.68), s, PALETTE["navy"], 130)
    draw_app_card(draw, int(w * 0.60), int(h * 0.18), int(w * 0.27), int(h * 0.48), s, "CONTROL")
    draw_code_panel(draw, int(w * 0.52), int(h * 0.64), int(w * 0.37), int(h * 0.22), s)
    for a, b in [
        ((int(w * 0.35), int(h * 0.25)), (int(w * 0.60), int(h * 0.30))),
        ((int(w * 0.43), int(h * 0.63)), (int(w * 0.64), int(h * 0.68))),
        ((int(w * 0.22), int(h * 0.52)), (int(w * 0.56), int(h * 0.55))),
    ]:
        draw.line((*a, *b), fill=rgba(PALETTE["yellow"], 180), width=max(2, int(4 * s)))
    draw_protocol_chips(draw, ["KNX", "Loxone", "Matter", "DALI", "Modbus", "Home Assistant"], (int(w * 0.58), int(h * 0.04), int(w * 0.94), int(h * 0.17)), s, True)
    add_noise(img, 10)
    return img


def concept_living(size: tuple[int, int]) -> Image.Image:
    w, h = size
    s = min(w, h) / 900
    img = gradient(size, PALETTE["navy"], PALETTE["ink"])
    draw = ImageDraw.Draw(img)
    draw_grid(draw, w, h, PALETTE["ice"], 22, max(36, int(56 * s)))
    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((int(w * 0.14), int(h * 0.06), int(w * 0.78), int(h * 1.14)), fill=rgba(PALETTE["blue"], 58))
    gd.ellipse((int(w * 0.34), int(h * 0.12), int(w * 1.04), int(h * 1.08)), fill=rgba(PALETTE["yellow"], 50))
    glow = glow.filter(ImageFilter.GaussianBlur(int(42 * s)))
    img.alpha_composite(glow)
    draw_warm_home(draw, int(w * 0.36), int(h * 0.38), int(min(w, h) * 0.22))
    draw_code_panel(draw, int(w * 0.58), int(h * 0.22), int(w * 0.30), int(h * 0.31), s)
    draw_app_card(draw, int(w * 0.66), int(h * 0.56), int(w * 0.20), int(h * 0.30), s * 0.92, "APP")
    draw_protocol_chips(draw, ["lighting", "climate", "shades", "security", "audio"], (int(w * 0.08), int(h * 0.78), int(w * 0.54), int(h * 0.93)), s, False)
    add_noise(img, 16)
    return img


def concept_precision(size: tuple[int, int]) -> Image.Image:
    w, h = size
    s = min(w, h) / 900
    img = gradient(size, PALETTE["white"], PALETTE["ice"])
    draw = ImageDraw.Draw(img)
    draw_grid(draw, w, h, PALETTE["navy"], 24, max(34, int(52 * s)))
    for i in range(11):
        x = int(w * (0.05 + 0.085 * i))
        y = int(h * (0.28 + 0.09 * math.sin(i)))
        draw.line((x, int(h * 0.08), x + int(w * 0.13), int(h * 0.84)), fill=rgba(PALETTE["blue"], 58), width=max(1, int(2 * s)))
        draw.ellipse((x - int(6 * s), y - int(6 * s), x + int(6 * s), y + int(6 * s)), fill=rgba(PALETTE["yellow"], 190))
    draw.rounded_rectangle((int(w * 0.10), int(h * 0.20), int(w * 0.48), int(h * 0.76)), radius=int(28 * s), outline=rgba(PALETTE["navy"], 150), width=max(2, int(4 * s)))
    draw_floorplan(draw, int(w * 0.14), int(h * 0.27), int(w * 0.30), int(h * 0.42), s * 0.92, PALETTE["navy"], 145)
    draw.rounded_rectangle((int(w * 0.56), int(h * 0.24), int(w * 0.90), int(h * 0.72)), radius=int(28 * s), fill=rgba(PALETTE["navy"], 232))
    draw_protocol_chips(draw, ["KNX", "logic", "custom UI", "API", "scenes", "diagnostics"], (int(w * 0.60), int(h * 0.33), int(w * 0.86), int(h * 0.62)), s, False)
    draw.line((int(w * 0.48), int(h * 0.48), int(w * 0.56), int(h * 0.48)), fill=rgba(PALETTE["yellow"], 200), width=max(3, int(5 * s)))
    add_noise(img, 9)
    return img


CONCEPTS = {
    "01-blueprint-interface": concept_blueprint,
    "02-warm-engineering": concept_living,
    "03-quiet-precision": concept_precision,
    "04-home-aspiration": concept_home_aspiration,
}


def make_contact_sheet(files: list[Path]) -> None:
    thumbs = []
    for path in files:
        img = Image.open(path).convert("RGB")
        img.thumbnail((420, 240))
        thumbs.append((path, img.copy()))
    cols = 3
    cell_w, cell_h = 460, 300
    rows = math.ceil(len(thumbs) / cols)
    sheet = Image.new("RGB", (cols * cell_w, rows * cell_h), hex_to_rgb(PALETTE["ice"]))
    draw = ImageDraw.Draw(sheet)
    label_font = font(18, "regular")
    for idx, (path, img) in enumerate(thumbs):
        col = idx % cols
        row = idx // cols
        x = col * cell_w + 20
        y = row * cell_h + 20
        sheet.paste(img, (x, y))
        draw.text((x, y + 248), path.stem, fill=hex_to_rgb(PALETTE["navy"]), font=label_font)
    sheet.save(OUT / "preview-contact-sheet.png", quality=95)


def main() -> None:
    generated: list[Path] = []
    for concept_name, maker in CONCEPTS.items():
        for size_name, size in SIZES.items():
            img = maker(size).convert("RGB")
            path = OUT / f"{concept_name}__{size_name}__{size[0]}x{size[1]}.png"
            img.save(path, quality=96, optimize=True)
            generated.append(path)
    make_contact_sheet(generated)
    for path in generated:
        print(path.name)
    print("preview-contact-sheet.png")


if __name__ == "__main__":
    main()
