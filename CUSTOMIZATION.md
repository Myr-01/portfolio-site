# Fərdiləşdirmə Təlimatları

Bu sənəd portfolio saytını şəxsiləşdirmək üçün addım-addım təlimatlar təqdim edir.

## 📝 Mətn Məzmununu Dəyişmək

### 1. Hero Bölməsi
`index.html` faylında aşağıdakı bölməni tapın və dəyişin:

```html
<h1 class="hero-title">Salam, mən <span class="highlight">Merdan</span></h1>
<p class="hero-subtitle">WordPress & Elementor Developer</p>
<p class="hero-description">Professional sayt quruculuğu və dizayn xidmətləri ilə biznesinizi onlayn dünyada gücləndirim</p>
```

### 2. About Bölməsi
Təhsil və iş təcrübənizi yeniləyin:

```html
<div class="detail-item">
    <h3>Təhsil</h3>
    <p><strong>Universitet adı</strong></p>
    <p>İxtisas adı</p>
</div>

<div class="detail-item">
    <h3>İş Təcrübəsi</h3>
    <p><strong>Şirkət adı</strong></p>
    <p>Vəzifə</p>
    <p class="detail-description">İş təsviri...</p>
</div>
```

### 3. Xidmətlər
Her bir `.service-card` bölməsində başlıq və təsviri dəyişin.

### 4. Portfolio Layihələri
Her bir `.portfolio-card`-da:
- `src="assets/images/..."` - şəkil yolunu
- `href="..."` - layihə linkini
- `<h3>` - layihə adını
- `<p>` - layihə təsvirini
- `<span class="tag">` - texnologiya teqlərini dəyişin

### 5. Əlaqə Məlumatları
Email və Fiverr linklərini yeniləyin:

```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://fiverr.com/your-username">fiverr.com/your-username</a>
```

Sosial media linklərini yeniləyin:
```html
<a href="https://linkedin.com/in/your-profile">
<a href="https://github.com/your-username">
```

## 🎨 Rəngləri Dəyişmək

`css/style.css` faylında `:root` bölməsində CSS dəyişənlərini redaktə edin:

```css
:root {
    /* Lüks Palitra */
    --dark-coffee: #2b2118;      /* Əsas fon - dərinlik, lüks */
    --old-lace: #f7f3e3;          /* Əsas mətn - yüksək kontrast */
    --camel: #af9164;             /* İkinci dərəcəli elementlər */
    --silver: #b3b6b7;            /* Neytral mətn, ayırıcı */
    --molten-lava: #6f1a07;       /* CTA, hover, vurğu */
    
    /* Semantic Mapping */
    --primary-color: #6f1a07;     /* Molten Lava */
    --secondary-color: #af9164;    /* Camel */
    --text-primary: #f7f3e3;       /* Old Lace */
    --text-muted: #b3b6b7;         /* Silver */
    --bg-primary: #2b2118;         /* Dark Coffee */
}
```

### Cari Palitra: Lüks & Professional
Dark Coffee fonunda Old Lace mətn, Camel detallar və Molten Lava vurğu - klassik və lüks görünüş.

### Rəng Sxemləri Nümunələri

**1. Purple & Pink**
```css
--primary-color: #a855f7;
--primary-dark: #9333ea;
--secondary-color: #ec4899;
```

**2. Orange & Red**
```css
--primary-color: #f97316;
--primary-dark: #ea580c;
--secondary-color: #ef4444;
```

**3. Teal & Cyan**
```css
--primary-color: #14b8a6;
--primary-dark: #0d9488;
--secondary-color: #06b6d4;
```

**4. Light Mode (Demo)**
Tam light theme üçün:
```css
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
--bg-tertiary: #f3f4f6;
--text-primary: #111827;
--text-secondary: #374151;
--text-muted: #6b7280;
--border-color: #e5e7eb;
```

## 🖼️ Şəkilləri Əlavə Etmək

### Portfolio Şəkilləri
1. Şəkilləri `assets/images/` qovluğuna yükləyin
2. Optimal ölçü: 1200x800px
3. Format: WebP və ya optimized JPG
4. Fayl adları: lowercase, tire ilə ayrılmış (məs: `hamd-group.jpg`)

`index.html`-də şəkil yolunu yeniləyin:
```html
<img src="assets/images/your-project.jpg" alt="Layihə adı" loading="lazy">
```

### Şəkil Optimizasiya Alətləri
- [TinyPNG](https://tinypng.com) - JPG/PNG sıxışdırma
- [Squoosh](https://squoosh.app) - Format çevirmə və optimizasiya
- [WebP Converter](https://cloudconvert.com/webp-converter) - WebP-yə çevirmə

## 🔤 Fontları Dəyişmək

`index.html`-də Google Fonts linkini dəyişin:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

`css/style.css`-də font dəyişənlərini yeniləyin:
```css
--font-heading: 'Your Heading Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

### Tövsiyə olunan font cütləri:
- **Modern**: Poppins + Inter (cari)
- **Professional**: Montserrat + Open Sans
- **Elegant**: Playfair Display + Roboto
- **Tech**: Space Grotesk + DM Sans
- **Classic**: Merriweather + Lato

## 📱 Responsive Breakpoint-ləri Dəyişmək

`css/style.css`-də media query-ləri redaktə edin:

```css
/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

## ✉️ Email Formu Konfiqurasiyası

### Method 1: Mailto (Cari)
`js/script.js`-də email ünvanını dəyişin:
```javascript
const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
```

### Method 2: Formspree (Tövsiyə olunur)
1. [Formspree](https://formspree.io) hesabı yaradın
2. `index.html`-də form action əlavə edin:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Method 3: Netlify Forms
`index.html`-də forma `netlify` attribute əlavə edin:
```html
<form name="contact" method="POST" data-netlify="true">
```

## 🎭 Animasiyaları Dəyişmək

### Animasiya sürətini dəyişmək
`css/style.css`-də transition dəyişənlərini redaktə edin:
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Animasiyaları söndürmək
```css
* {
    transition: none !important;
    animation: none !important;
}
```

## 🔍 SEO Metadata

`index.html`-də meta teqlərini yeniləyin:

```html
<meta name="description" content="Sizin təsviriniz">
<meta name="keywords" content="WordPress, Elementor, Web Developer, Azerbaijan">
<meta name="author" content="Sizin adınız">

<!-- Open Graph -->
<meta property="og:title" content="Sizin adınız - Developer">
<meta property="og:description" content="Sizin təsviriniz">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg">
```

## 📊 Analytics Əlavə Etmək

### Google Analytics
`</head>` tag-dən əvvəl:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 Custom Domain

### robots.txt və sitemap.xml yeniləyin
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### sitemap.xml-də URL-ləri dəyişin
```xml
<loc>https://yourdomain.com/</loc>
```

## 💡 Əlavə Bölmələr Əlavə Etmək

### Yeni bölmə əlavə etmək:

1. `index.html`-də yeni section yaradın:
```html
<section id="your-section" class="your-section">
    <div class="container">
        <h2 class="section-title">Bölmə Başlığı</h2>
        <!-- Məzmun -->
    </div>
</section>
```

2. Nav menüyə link əlavə edin:
```html
<li><a href="#your-section" class="nav-link">Bölmə</a></li>
```

3. `css/style.css`-də stil əlavə edin:
```css
.your-section {
    padding: var(--spacing-xl) 0;
    background-color: var(--bg-primary);
}
```

## 🆘 Tez-tez verilən suallar

**S: Rənglər dəyişmir?**
C: Browser cache-ni təmizləyin (Ctrl+F5) və ya incognito modunda test edin.

**S: Şəkillər yüklənmir?**
C: Şəkil path-lərini yoxlayın və şəkillərin doğru qovluqda olduğundan əmin olun.

**S: Responsive görünmür?**
C: Chrome DevTools-da Device Mode ilə test edin və breakpoint-ləri yoxlayın.

## 📞 Dəstək

Suallar üçün: merdan@example.com
