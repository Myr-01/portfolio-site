# Deployment Guide

Bu sənəd portfolio saytını müxtəlif platformalarda deploy etmək üçün təlimatlar təqdim edir.

## 🚀 GitHub Pages

### 1. Repository yaradın
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### 2. GitHub Pages aktivləşdirin
1. GitHub repository-nizə gedin
2. **Settings** → **Pages**
3. **Source**: main branch seçin
4. **Save** düyməsini basın
5. Saytınız `https://USERNAME.github.io/portfolio/` ünvanında əlçatan olacaq

## 🌐 Netlify

### Drag & Drop Method
1. [Netlify](https://netlify.com) saytına daxil olun
2. "Add new site" → "Deploy manually"
3. `portfolio-site` qovluğunu sürüşdürün
4. Avtomatik olaraq deploy ediləcək

### Git Integration Method
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

1. Netlify-da "Add new site" → "Import from Git"
2. GitHub repository-ni seçin
3. Build settings:
   - **Build command**: (boş buraxın)
   - **Publish directory**: `/`
4. "Deploy site" düyməsini basın

### Custom Domain (Netlify)
1. Domain Settings → Add custom domain
2. Domain provider-də CNAME record əlavə edin:
   - Type: `CNAME`
   - Name: `www` (və ya subdomain)
   - Value: `your-site.netlify.app`

## ⚡ Vercel

```bash
npm install -g vercel
vercel login
vercel
```

və ya:

1. [Vercel](https://vercel.com) saytına daxil olun
2. "Add New" → "Project"
3. GitHub repository-ni import edin
4. Deploy settings avtomatik təyin olunacaq

## ☁️ Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com) saytına daxil olun
2. "Create a project"
3. GitHub repository-ni bağlayın
4. Build settings:
   - **Build command**: (boş)
   - **Build output directory**: `/`
5. "Save and Deploy"

## 📋 Deployment Checklist

Deploy etməzdən əvvəl:

- [ ] `index.html`-də email ünvanını yeniləyin
- [ ] Sosial media linklərini yeniləyin (LinkedIn, GitHub, Fiverr)
- [ ] Portfolio şəkillərini `assets/images/` qovluğuna əlavə edin
- [ ] Open Graph URL-ni yeniləyin (`<meta property="og:url">`)
- [ ] Favicon əlavə edin (opsional)
- [ ] Google Analytics əlavə edin (opsional)

## 🔧 Performance Optimization

Deploy etdikdən sonra:

1. **Şəkilləri optimizasiya edin**
   - [TinyPNG](https://tinypng.com) və ya [Squoosh](https://squoosh.app)
   - WebP formatına çevirin
   - 1200x800px maksimum ölçü

2. **Performans test edin**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - Lighthouse (Chrome DevTools)

3. **SEO yoxlayın**
   - [Google Search Console](https://search.google.com/search-console)
   - Sitemap əlavə edin (opsional)

## 🌍 Custom Domain

### Netlify Custom Domain
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Cloudflare
Cloudflare üzərindən domain idarə edirsinizsə, avtomatik SSL və CDN aktivləşdirilir.

## 📊 Analytics (Opsional)

### Google Analytics
`</head>` tag-dən əvvəl əlavə edin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 SSL Certificate

Bütün müasir hosting platformaları (Netlify, Vercel, Cloudflare Pages) avtomatik HTTPS/SSL təmin edir. Əlavə konfiqurasiya tələb olunmur.

## 📱 PWA (Progressive Web App) - Opsional

Əgər PWA funksionallığı əlavə etmək istəyirsinizsə:

1. `manifest.json` yaradın
2. Service Worker əlavə edin
3. Icons əlavə edin (192x192, 512x512)

## 🆘 Troubleshooting

### Şəkillər görünmür
- Şəkil path-lərini yoxlayın (relative paths istifadə edin)
- `assets/images/` qovluğunda şəkillərin olduğundan əmin olun

### Animasiyalar işləmir
- Browser console-da JavaScript error-ları yoxlayın
- `script.js` faylının yüklənməsini yoxlayın

### Mobile-da düzgün görünmür
- Responsive breakpoint-ləri test edin
- Chrome DevTools-da Device Mode istifadə edin

## 📞 Support

Suallar üçün: merdan@example.com
