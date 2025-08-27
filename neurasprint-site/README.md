# NeuraSprint AI — Website (Next.js + Tailwind)

## Local dev
```bash
pnpm i # or npm i / yarn
pnpm dev # http://localhost:3000
```

Set optional env vars (or edit the constants in `app/page.tsx`):
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/intro
NEXT_PUBLIC_CONTACT_EMAIL=hello@neurasprintai.com
```

## Deploy to Vercel
1. Create a new GitHub repo and push this folder.
2. In Vercel: New Project → Import your repo → Framework: Next.js → Deploy.
3. Add your domain in Project → Settings → Domains (e.g., `neurasprintai.com`).

### DNS (at your registrar)
- **A**  `@` → `76.76.21.21`
- **CNAME** `www` → `cname.vercel-dns.com`

### Email (optional, Google Workspace example)
- MX records: ASPMX + ALTs (Google docs)
- SPF: `v=spf1 include:_spf.google.com ~all`
- DKIM: generate in Admin -> add TXT
- DMARC: `_dmarc` TXT -> `v=DMARC1; p=quarantine; rua=mailto:dmarc@neurasprintai.com; fo=1; adkim=s; aspf=s; pct=100`

## Editing
- Main page is in `app/page.tsx`.
- Global styles in `app/globals.css`.
- Favicon + logos are in `/public`.
