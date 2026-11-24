// Mərdan Ağcabəyli — portfolio: aktiv nav, kursor işığı, görünmə animasiyası

(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // İl
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Aktiv naviqasiya: ekranın yuxarı hissəsindəki bölmə
    const links = [...document.querySelectorAll('.side-nav a')];
    const sections = links
        .map((a) => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    const setActive = (id) => {
        links.forEach((a) => {
            const on = a.getAttribute('href') === '#' + id;
            a.classList.toggle('active', on);
            if (on) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
        });
    };

    const onScroll = () => {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom && sections.length) {
            setActive(sections[sections.length - 1].id);
            return;
        }
        const mark = window.innerHeight * 0.35;
        let current = sections[0];
        for (const s of sections) {
            if (s.getBoundingClientRect().top <= mark) current = s;
        }
        if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Kursoru izləyən işıq (yalnız siçan olan cihazlarda)
    const spot = document.querySelector('.spotlight');
    if (spot && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
        let raf = 0;
        window.addEventListener('pointermove', (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                spot.style.setProperty('--x', e.clientX + 'px');
                spot.style.setProperty('--y', e.clientY + 'px');
                spot.classList.add('on');
            });
        });
        document.addEventListener('pointerleave', () => spot.classList.remove('on'));
    }

    // Görünmə animasiyası
    const targets = document.querySelectorAll('.exp-item, .featured, .other-grid > li, .service-list li, .contact');
    if (!reduceMotion && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting) {
                        en.target.classList.add('in');
                        io.unobserve(en.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
        );
        targets.forEach((t) => {
            t.classList.add('reveal');
            io.observe(t);
        });
    }
})();
