/* ==========================================================================
   SETOUCHI GLOBAL BOOTCAMP 2026 — Main Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. Scroll Reveal
    // =========================================================
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('active');
        });
    }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


    // =========================================================
    // 2. Header scroll effect
    // =========================================================
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });


    // =========================================================
    // 3. Mobile menu
    // =========================================================
    const mobileBtn  = document.getElementById('mobileMenuBtn');
    const drawer     = document.getElementById('mobileDrawer');
    const menuIcon   = document.getElementById('menuIcon');

    mobileBtn.addEventListener('click', () => {
        const open = drawer.classList.toggle('open');
        menuIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        mobileBtn.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn').forEach(el => {
        el.addEventListener('click', () => {
            drawer.classList.remove('open');
            menuIcon.className = 'fa-solid fa-bars';
        });
    });


    // =========================================================
    // 4. Floating button visibility
    // =========================================================
    const fab = document.getElementById('fabApply');
    window.addEventListener('scroll', () => {
        fab.classList.toggle('visible', window.scrollY > window.innerHeight * 0.55);
    }, { passive: true });


    // =========================================================
    // 5. Countdown — deadline: June 10, 2026 (early)
    // =========================================================
    const DEADLINE = new Date('2026-06-10T23:59:59+09:00');
    const el = {
        d: document.getElementById('cDays'),
        h: document.getElementById('cHours'),
        m: document.getElementById('cMins'),
        s: document.getElementById('cSecs'),
    };
    const pad = n => String(n).padStart(2, '0');

    function tick() {
        const diff = DEADLINE - new Date();
        if (!el.d) return;
        if (diff <= 0) {
            ['d','h','m','s'].forEach(k => { if (el[k]) el[k].textContent = '00'; });
            return;
        }
        if (el.d) el.d.textContent = pad(Math.floor(diff / 86400000));
        if (el.h) el.h.textContent = pad(Math.floor((diff % 86400000) / 3600000));
        if (el.m) el.m.textContent = pad(Math.floor((diff % 3600000) / 60000));
        if (el.s) el.s.textContent = pad(Math.floor((diff % 60000) / 1000));
    }
    tick();
    setInterval(tick, 1000);


    // =========================================================
    // 6. FAQ accordion
    // =========================================================
    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-question');
        const a = item.querySelector('.faq-answer');

        q.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // close all
            document.querySelectorAll('.faq-item').forEach(other => {
                other.classList.remove('open');
                other.querySelector('.faq-answer').style.maxHeight = null;
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // open current
            if (!isOpen) {
                item.classList.add('open');
                a.style.maxHeight = a.scrollHeight + 'px';
                q.setAttribute('aria-expanded', 'true');
            }
        });
    });


    // =========================================================
    // 7. Apply form submit
    // =========================================================
    const form    = document.getElementById('applyForm');
    const success = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled  = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 送信中...';

            // Replace with actual form endpoint
            setTimeout(() => {
                form.style.display    = 'none';
                success.style.display = 'block';
                success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1200);
        });
    }


    // =========================================================
    // 8. Smooth scroll (offset for fixed header)
    // =========================================================
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const offset = (header?.offsetHeight ?? 80) + 16;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
        });
    });


    // =========================================================
    // 9. Active nav highlight
    // =========================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('nav-active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.4 }).observe && sections.forEach(s => {
        new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    navLinks.forEach(l => l.classList.toggle('nav-active', l.getAttribute('href') === '#' + e.target.id));
                }
            });
        }, { threshold: 0.4 }).observe(s);
    });


    // =========================================================
    // 10. Stagger animations for grids
    // =========================================================
    document.querySelectorAll(
        '.phase-ladder > .phase-card, .outcomes-grid > *, .faculty-grid > *, .trust-grid > *'
    ).forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.07}s`;
    });

});
