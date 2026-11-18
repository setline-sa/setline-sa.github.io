"""Move the SETLINE site to its own domain in one step.

Usage (from the website folder):
    python scripts/set_domain.py setline.sa

What it does:
  - replaces the current site address in index.html, data.js, sitemap.xml and robots.txt
  - writes the CNAME file that tells GitHub Pages which domain to serve
Then it prints the remaining steps (DNS, Search Console, Analytics, email).
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = ["index.html", "data.js", "sitemap.xml", "robots.txt"]


def main():
    if len(sys.argv) != 2:
        sys.exit("Usage: python scripts/set_domain.py <domain>   e.g. setline.sa")
    domain = sys.argv[1].strip().lower().removeprefix("https://").removeprefix("http://").strip("/")
    if not re.fullmatch(r"[a-z0-9-]+(\.[a-z0-9-]+)+", domain):
        sys.exit(f"Not a valid domain: {domain}")

    data = (ROOT / "data.js").read_text(encoding="utf-8")
    m = re.search(r'const SITE = \{ url: "([^"]+)"', data)
    if not m:
        sys.exit("Could not find SITE.url in data.js")
    old, new = m.group(1), f"https://{domain}/"
    if old == new:
        print(f"Site already uses {new}")
    for name in FILES:
        f = ROOT / name
        text = f.read_text(encoding="utf-8")
        count = text.count(old)
        f.write_text(text.replace(old, new), encoding="utf-8")
        print(f"{name}: {count} link(s) updated")
    (ROOT / "CNAME").write_text(domain + "\n", encoding="utf-8")
    print(f"CNAME: {domain}")
    print(f"""
Next steps:
  1. DNS at the domain registrar:
       A     @    185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
       CNAME www  setline-sa.github.io
  2. Commit + push, then GitHub repo > Settings > Pages: confirm '{domain}' and tick 'Enforce HTTPS'.
  3. Re-render assets/og-image.jpg (it shows the old address) and bump ?v= on it in index.html.
  4. Google Search Console: add the property https://{domain}/ and submit sitemap.xml.
  5. Google Analytics (company account): set the web stream URL to https://{domain}/
     and put the measurement ID in data.js > SITE.gaId.
  6. Company email (info@{domain}): add the MX/TXT records from the email provider.
""")


if __name__ == "__main__":
    main()
