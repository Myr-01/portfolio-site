# Portfolio Saytı - Merdan

WordPress & Elementor Developer üçün professional portfolio saytı.

## 🎨 Dizayn

### Rəng Palitrası

Lüks və professional hiss verən rəng sxemi:

| Rəng | Hex | İstifadə |
|---|---|---|
| **Dark Coffee** | `#2b2118` | Əsas fon - dərinlik və lüks |
| **Old Lace** | `#f7f3e3` | Mətn - yüksək kontrast |
| **Camel** | `#af9164` | İkinci dərəcəli elementlər, vurğu |
| **Silver** | `#b3b6b7` | Neytral mətn, ayırıcı |
| **Molten Lava** | `#6f1a07` | CTA, hover, aktiv elementlər |

### Xüsusiyyətlər

- Single-page dizayn (smooth scroll ilə bölmələr arası keçid)
- Responsive dizayn (mobil, tablet, desktop)
- Modern və minimal UI/UX
- Semantic HTML5
- CSS Grid və Flexbox layout
- Vanilla JavaScript (framework-suz)
- SEO optimizasiyalı
- Performance-optimized

## 📁 Struktur

```
portfolio-site/
├── index.html          # Əsas HTML faylı
├── css/
│   └── style.css      # Bütün stillər
├── js/
│   └── script.js      # JavaScript funksionallıq
├── assets/
│   └── images/        # Şəkillər
└── README.md
```

## 🎨 Bölmələr

1. **Hero** - Ad, tagline, CTA düyməsi
2. **About** - Bio, təhsil (ATU), iş təcrübəsi (Alpha Media)
3. **Xidmətlər** - 4 xidmət kartı (WordPress, Elementor, Hosting, Biznes Saytları)
4. **Portfolio** - 3 layihə nümunəsi (Hamd Group, Olimp Mebel, Lux Mebel)
5. **Əlaqə** - Email, Fiverr, sosial media, əlaqə formu

## 🖼️ Şəkillər

Portfolio layihələri üçün aşağıdakı şəkilləri `assets/images/` qovluğuna əlavə edin:

- `hamdgroup.jpg` - Hamd Group layihəsi üçün
- `olimpmebel.jpg` - Olimp Mebel/Smart Expo layihəsi üçün
- `luxmebel.jpg` - Lux Mebel layihəsi üçün

**Qeyd:** Şəkillər 1200x800px ölçüsündə və optimizasiya olunmuş formatda (WebP və ya optimized JPG) olmalıdır.

## ⚙️ Quraşdırma

1. Layihəni yükləyin
2. Şəkilləri `assets/images/` qovluğuna əlavə edin
3. `index.html` faylında email və sosial media linklərini yeniləyin
4. Brauzerdə `index.html` faylını açın

## 🌐 Deploy

Statik sayt olduğuna görə, aşağıdakı platformalarda deploy edə bilərsiniz:

- **GitHub Pages** - Pulsuz, GitHub repository-dən birbaşa
- **Netlify** - Drag & drop ilə deploy, pulsuz SSL
- **Vercel** - Sürətli deploy, serverless functions dəstəyi
- **Cloudflare Pages** - Qlobal CDN ilə sürətli

### GitHub Pages ilə Deploy

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

Sonra GitHub repository Settings → Pages bölməsində aktivləşdirin.

## 📝 Fərdiləşdirmə

### Rəngləri dəyişmək

`css/style.css` faylında `:root` dəyişənlərini redaktə edin:

```css
:root {
    --primary-color: #3b82f6;    /* Əsas rəng */
    --secondary-color: #10b981;  /* İkinci rəng */
    /* ... */
}
```

### Mətn məzmununu yeniləmək

`index.html` faylında bölmələrin məzmununu redaktə edin.

### Email əlaqəsini təyin etmək

`js/script.js` faylında `your-email@example.com` əvəzinə öz emailinizi yazın:

```javascript
const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
```

## 🛠️ Texnologiyalar

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins, Inter)

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## ✨ Performans

- Lazy loading şəkillər üçün
- CSS animations (hardware-accelerated)
- Minimal JavaScript
- Google Fonts preconnect

## 📄 Lisenziya

Bu layihə şəxsi istifadə üçün nəzərdə tutulub.

## 📧 Əlaqə

Suallar üçün: merdan@example.com
