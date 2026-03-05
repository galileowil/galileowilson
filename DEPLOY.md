# Deployment Guide

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended)

1. **Create GitHub Repository:**
   ```bash
   # Go to https://github.com/new
   # Create a public repo named "galileowilson"
   # Don't initialize with README (we already have one)
   ```

2. **Push to GitHub:**
   ```bash
   cd /Users/galimolt/.openclaw/workspace/galileowilson
   git remote add origin https://github.com/galimolt/galileowilson.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Import the `galileowilson` repository
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click Deploy

4. **Configure Custom Domain:**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add `galileowilson.com`
   - Add `www.galileowilson.com`
   - Follow DNS configuration instructions

### Option 2: Cloudflare Pages

1. **Push to GitHub** (as above)

2. **Connect to Cloudflare:**
   - Go to Cloudflare Dashboard → Pages
   - Create a project → Connect to Git
   - Select the `galileowilson` repo
   - Build settings:
     - Framework preset: Next.js (Static HTML Export)
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click Save and Deploy

3. **Configure Custom Domain:**
   - Since domain is already on Cloudflare, it will auto-configure

## 📋 DNS Configuration (Cloudflare)

If using Vercel, add these DNS records in Cloudflare:

```
Type: CNAME
Name: galileowilson.com
Target: cname.vercel-dns.com
Proxy status: DNS only (gray cloud)

Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: DNS only (gray cloud)
```

## ✅ Post-Deployment Checklist

- [ ] Site loads at galileowilson.com
- [ ] All sections render correctly
- [ ] Animations work on scroll
- [ ] Mobile responsive
- [ ] Meta tags / SEO working
- [ ] Favicon displays
- [ ] Social links updated with real URLs
- [ ] Email contact button linked

## 🔄 Updates

To update the site after deployment:

```bash
cd /Users/galimolt/.openclaw/workspace/galileowilson
# Make changes
git add .
git commit -m "Update description"
git push origin main
```

Vercel/Cloudflare will auto-deploy on push.

## 📁 Project Location

Local project: `/Users/galimolt/.openclaw/workspace/galileowilson`
Built files: `/Users/galimolt/.openclaw/workspace/galileowilson/dist`
