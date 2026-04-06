/* ======================================================
   i18n.js — SETOUCHI GLOBAL BOOTCAMP 2026
   4-language support: JA (default) / EN / ZH (繁體) / HI
   ====================================================== */

// Schedule toggle button text per language
const toggleText = {
    ja: { open: 'プログラムを閉じる', close: '7日間のプログラムを見る' },
    en: { open: 'Close Program', close: 'View the 7-Day Program' },
    zh: { open: '收起課程內容', close: '查看7天課程內容' },
    hi: { open: 'कार्यक्रम बंद करें', close: '7 दिन का कार्यक्रम देखें' }
};

function getToggleText(isOpen) {
    var lang = currentLang || 'ja';
    var t = toggleText[lang] || toggleText['ja'];
    return isOpen ? t.open : t.close;
}

// ──────────────────────────────────────────────
// Translations — EN / ZH (繁體中文) / HI
// ──────────────────────────────────────────────
const translations = {

    /* ========== ENGLISH ========== */
    en: {
        /* --- FAB --- */
        '#fabApply span': 'Get Updates',

        /* --- Header nav (desktop) --- */
        '.desktop-nav a[href="#what"]': 'About',
        '.desktop-nav a[href="#schedule"]': '7 Days',
        '.desktop-nav a[href="#who"]': 'Participants',
        '.desktop-nav a[href="#faculty"]': 'Faculty',
        '.desktop-nav a[href="#overview"]': 'Details',
        '.desktop-nav a[href="#faq"]': 'FAQ',
        '.header-actions .btn-navy': '<i class="fa-solid fa-paper-plane"></i> Get Updates',

        /* --- Header nav (mobile) --- */
        '.mobile-drawer a[href="#what"]': 'About',
        '.mobile-drawer a[href="#schedule"]': '7 Days',
        '.mobile-drawer a[href="#who"]': 'Participants',
        '.mobile-drawer a[href="#faculty"]': 'Faculty',
        '.mobile-drawer a[href="#overview"]': 'Details',
        '.mobile-drawer a[href="#faq"]': 'FAQ',
        '.mobile-drawer .btn-navy': 'Get Updates',

        /* --- Hero --- */
        '.hero-badges .badge-outline-light:nth-child(1)': '<i class="fa-regular fa-calendar"></i> Aug 16\u201322, 2026',
        '.hero-badges .badge-outline-light:nth-child(2)': '<i class="fa-solid fa-map-pin"></i> Ehime University, Matsuyama',
        '.hero-title': 'From Setouchi,<br>Change the World.',
        '.hero-sub': 'Notice. Think. Act \u2014 7 transformative days.',
        '.hero-desc': 'High school and university students form real teams<br class="pc-only"> and build solutions to social challenges from scratch.',
        '.hero-meta-item:nth-child(1) span': 'Capacity <strong>50</strong>',
        '.hero-meta-item:nth-child(3) span': 'For HS & University Students',
        '.hero-meta-item:nth-child(5) span': 'Ehime & Okayama <strong>Priority Spots</strong>',
        '.hero-ctas .btn-orange': '<i class="fa-solid fa-paper-plane"></i> Get Updates',
        '.hero-ctas .btn-outline-white': 'Learn More About the Program',

        /* --- WHAT section --- */
        '#what .section-label': 'WHAT IS THIS',
        '#what .section-heading': 'What You Will<br>Actually Do',
        '.what-image-caption': 'MIT Pre-Entrepreneurship Development Framework',
        '.what-feature-card:nth-child(1) h3': '7-Day Hands-On Program',
        '.what-feature-card:nth-child(1) p': 'SETOUCHI GLOBAL BOOTCAMP is an intensive program that cultivates next-generation innovators who challenge the world from Setouchi.',
        '.what-feature-card:nth-child(2) h3': 'Build and Ship',
        '.what-feature-card:nth-child(2) p': 'Integrating technology, design, and business \u2014 participants discover social issues, build prototypes, and design business models with their own hands.',
        '.what-feature-card:nth-child(3) h3': 'Zero2Maker Method',
        '.what-feature-card:nth-child(3) p': 'Built on an MIT-born method deployed in 12 countries to 4,000+ students. EnCube Labs\u2019 curriculum emphasizes making and shipping, not just thinking.',

        /* --- WHY section --- */
        '#why .section-label': 'WHY THIS CAMP',
        '#why .section-heading': 'Why This Camp',
        '#why .section-sub': 'SETOUCHI GLOBAL BOOTCAMP is where three contexts intersect.',
        '.why-global h3': 'Global',
        '.why-global p': 'World-class methodology. MIT-born methods and international mentors cultivate globally competitive thinking and execution.',
        '.why-regional h3': 'Regional',
        '.why-regional p': 'Setouchi\u2019s local issues. Using real social challenges rooted in Ehime & Okayama as raw material for innovation.',
        '.why-research h3': 'Research',
        '.why-research p': 'Research partnership with Ehime University. Academic depth added to problem-solving through university resources.',
        '.why-intersection-label': 'Intersection',
        '.why-intersection-inner p': 'Tackling regional<br>challenges with<br>world-class methods',

        /* --- Schedule --- */
        '#schedule .section-label': '7-DAY PROGRAM',
        '#schedule .section-heading': 'What You Do in 7 Days',
        '#schedule .section-sub': 'Four phases that build a \u201cstaircase of growth.\u201d',
        '#scheduleToggleText': 'View the 7-Day Program',
        /* Phase 1 – Discover */
        '.phase-discover .phase-ja': 'Discover',
        '.phase-discover .phase-goal': 'Experience the sensation of building with your own hands',
        '.phase-discover .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>CAD, electronics, and coding',
        '.phase-discover .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>3D printer experience',
        '.phase-discover .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>Storytelling',
        '.phase-discover .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>Team building & kickoff',
        /* Phase 2 – Design */
        '.phase-design .phase-ja': 'Design',
        '.phase-design .phase-goal': 'Identify social issues and sketch the prototype of a solution',
        '.phase-design .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>Engagement, observation & field research',
        '.phase-design .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>Problem identification & ideation',
        '.phase-design .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>Prototyping & validation',
        '.phase-design .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>Global session (international mentors)',
        /* Phase 3 – Build */
        '.phase-build .phase-ja': 'Build',
        '.phase-build .phase-goal': 'Turn your idea into a viable business',
        '.phase-build .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>Value proposition & customer identification',
        '.phase-build .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>Business model design & financial modeling',
        '.phase-build .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>Hypothesis testing & user testing',
        '.phase-build .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>Pitch preparation & final polish',
        /* Phase 4 – Demo Day */
        '.phase-demo .phase-ja': 'Present to the World',
        '.phase-demo .phase-goal': 'Share 7 days of work with the world',
        '.phase-demo .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>Final pitch (results presentation)',
        '.phase-demo .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>Judging panel review & awards',
        '.phase-demo .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>Certificate of completion',
        '.phase-demo .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>Networking reception',
        '.phase-label-gold': 'Final Presentation',

        /* --- WHO section --- */
        '#who .section-label': 'THE COHORT',
        '#who .section-heading': 'Who Participates',
        '#who .section-sub': '50 participants. Diverse backgrounds and perspectives become the team\u2019s strength.',
        '.cohort-unit': 'Pax',
        '.cohort-label': '5 per team \u00d7 10 teams',
        '.cohort-bar:nth-child(1) .bar-info span': 'High School',
        '.cohort-bar:nth-child(2) .bar-info span': 'University',
        '.cohort-regional .cohort-section-title': '<i class="fa-solid fa-map-location-dot text-navy"></i> Regional Breakdown',
        '.region-priority .region-name': 'Ehime & Okayama Priority',
        '.region-priority .region-num': '35',
        '.region-item:nth-child(2) .region-name': 'Outside Prefecture',
        '.region-item:nth-child(2) .region-num': '5',
        '.region-intl .region-name': 'International',
        '.region-intl .region-num': '10',
        '.cohort-mentors .cohort-section-title': '<i class="fa-solid fa-chalkboard-user text-green"></i> Supporting Mentors',
        '.mentor-item:nth-child(1) span': '5 \u2014 From top domestic & international universities',
        '.mentor-item:nth-child(2) span': '8 \u2014 Ehime University students',
        '.who-note-inner p': 'No English proficiency required. If you have <strong>the motivation to make a difference</strong> and the drive to act as a team, you\u2019re welcome. No startup or business experience needed.',

        /* --- Gallery --- */
        '#gallery .gallery-heading': 'From Bootcamps Around the World',
        '#gallery .section-sub': 'Real workshop scenes from the Zero2Entrepreneur program',

        /* --- Faculty --- */
        '#faculty .section-label': 'FACULTY & ORGANIZERS',
        '#faculty .section-heading': 'Faculty & Organizers',
        '#faculty .section-sub': 'The credibility of this program lies in its people.',
        '.faculty-card:nth-child(1) .faculty-desc': 'Developer of the MIT-born entrepreneurship education framework \u201cZero2Maker.\u201d Has guided over 4,000 young people across 12 countries toward entrepreneurial thinking. Oversees curriculum design for this program.',
        '.faculty-card:nth-child(2) h4': 'Nene Shirakawa',
        '.faculty-card:nth-child(2) .faculty-desc': 'Founder of the global education program \u201cFutureHACK.\u201d After completing her MIT MBA, she has been leading entrepreneurship education in Japan and Asia. Leads the educational design of this program.',
        '.faculty-card:nth-child(3) h4': 'Yuka Ishihara',
        '.faculty-card:nth-child(3) .faculty-role': 'Specially Appointed Assoc. Prof., Ehime University',
        '.faculty-card:nth-child(3) .faculty-desc': 'Program director on the Ehime University side. Researches and practices entrepreneurship education connecting local communities and the world. Oversees the venue and academic foundation for this camp.',
        '.faculty-card:nth-child(4) h4': 'Ryuji Osaki',
        '.faculty-card:nth-child(4) .faculty-desc': 'Runs a media and community platform promoting Setouchi\u2019s appeal domestically and internationally. As a regional entrepreneur, he supports youth challenges and designs the local field program.',

        /* --- Trust --- */
        '#trust .section-label': 'NUMBERS',
        '#trust .section-heading': 'Trust in Numbers',
        '.trust-card:nth-child(1) .trust-unit': 'Pax',
        '.trust-card:nth-child(1) .trust-desc': 'Carefully selected participants. A small-group format of 5 per team \u00d7 10 teams maximizes individual growth.',
        '.trust-card:nth-child(2) .trust-unit': 'Countries',
        '.trust-card:nth-child(2) .trust-desc': 'The number of countries where the Zero2Maker method has been deployed. Over 4,000 young people have trained with this same methodology.',
        '.trust-card:nth-child(3) .trust-unit': 'Mentors',
        '.trust-card:nth-child(3) .trust-desc': 'Global Peer Mentors recruited from top domestic and international universities. They bring a world-class perspective directly to participants.',
        '.trust-card:nth-child(4) .trust-unit': 'People',
        '.trust-card:nth-child(4) .trust-desc': 'Total participants who have proven the Zero2Maker method by EnCube Labs. This track record underpins the curriculum.',
        '.trust-orgs-label': 'Organizers & Operations',
        '.trust-orgs-list > :nth-child(1) span': 'Ehime University (Host)',
        '.trust-orgs-list > :nth-child(3) span': 'YURUGAS Secretariat (Ops)',
        '.trust-orgs-list > :nth-child(5) span': 'EnCube Labs (Curriculum Design)',

        /* --- Overview table --- */
        '#overview .section-label': 'PROGRAM DETAILS',
        '#overview .section-heading': 'Program Details',
        '#overview .section-sub': 'Everything you need to make your decision, in one place.',
        '.overview-table tr:nth-child(1) th': '<i class="fa-regular fa-calendar text-blue"></i> Dates',
        '.overview-table tr:nth-child(1) td': 'Aug 16 (Sun) \u2013 Aug 22 (Sat), 2026<span class="td-sub">7 days (accommodation included)</span>',
        '.overview-table tr:nth-child(2) th': '<i class="fa-solid fa-map-pin text-blue"></i> Venue',
        '.overview-table tr:nth-child(2) td': 'Ehime University (Matsuyama, Ehime)<span class="td-sub">Venue details provided upon acceptance</span>',
        '.overview-table tr:nth-child(3) th': '<i class="fa-solid fa-users text-blue"></i> Capacity',
        '.overview-table tr:nth-child(3) td': '50 (5 per team \u00d7 10 teams)',
        '.overview-table tr:nth-child(4) th': '<i class="fa-solid fa-school text-blue"></i> Eligibility',
        '.overview-table tr:nth-child(4) td': 'High school (25) & university students (25)<span class="td-sub">Ehime/Okayama priority: 35 / Outside pref.: 5 / International: 10</span>',
        '.overview-table tr:nth-child(5) th': '<i class="fa-solid fa-language text-blue"></i> Languages',
        '.overview-table tr:nth-child(5) td': 'Japanese & English (bilingual operation)<span class="td-sub">No English proficiency required</span>',
        '.overview-table tr:nth-child(6) th': '<i class="fa-solid fa-yen-sign text-blue"></i> Fee',
        '.overview-table tr:nth-child(6) td': '<div class="fee-grid"><div class="fee-item"><span class="fee-cat">High School</span><span class="fee-amount">\u00a5100,000<span class="fee-note"> (tax incl.)</span></span></div><div class="fee-item"><span class="fee-cat">University</span><span class="fee-amount">\u00a5150,000<span class="fee-note"> (tax incl.)</span></span></div></div><p class="td-sub">May be reduced or waived depending on grant status</p>',
        '.overview-table tr:nth-child(7) th': '<i class="fa-solid fa-circle-check text-blue"></i> Included',
        '.overview-table tr:nth-child(7) td': '<div class="includes-inline"><span>Accommodation (6 nights)</span><span>Meals (3/day)</span><span>Program materials</span><span>Mentoring</span><span>Certificate of completion</span></div>',
        '.overview-table tr:nth-child(8) th': '<i class="fa-solid fa-clock text-orange"></i> Early Deadline',
        '.overview-table tr:nth-child(8) td': '<strong class="text-orange">June 10, 2026 (Tue)</strong>',
        '.overview-table tr:nth-child(9) th': '<i class="fa-solid fa-clock text-crimson"></i> Final Deadline',
        '.overview-table tr:nth-child(9) td': '<strong class="text-crimson">June 30, 2026 (Tue)</strong>',
        '.overview-table tr:nth-child(10) th': '<i class="fa-solid fa-bell text-green"></i> Results',
        '.overview-table tr:nth-child(10) td': '<strong class="text-green">July 10, 2026 (Fri)</strong>',

        /* --- Overview CTA card --- */
        '.overview-cta-card h3': 'Start with an Info Session',
        '.overview-cta-card p': 'We\u2019ll explain program details, selection criteria, and financial aid options. Free to attend.',
        '.overview-cta-card .btn-navy': 'Check Info Session Dates <i class="fa-solid fa-arrow-down"></i>',
        '.overview-cta-card .link-underline': 'Register without waiting for a session \u2192',
        '.overview-note p': 'Depending on grant approval, the participation fee may be significantly reduced or fully waived. Details will be shared at the info session.',

        /* --- Recruitment --- */
        '#recruitment-schedule .section-label': 'RECRUITMENT SCHEDULE',
        '#recruitment-schedule .section-heading': 'Recruitment Schedule',
        '#recruitment-schedule .section-sub': 'See at a glance what to do next.',
        '.recruit-item:nth-child(1) .recruit-month': 'May',
        '.recruit-item:nth-child(1) .recruit-badge': 'In Person',
        '.recruit-item:nth-child(1) h4': 'Info Session 1',
        '.recruit-item:nth-child(1) p': 'In-person at Ehime University (Matsuyama). Detailed explanation of program, selection, and fees.',
        '.recruit-item:nth-child(2) .recruit-month': 'May',
        '.recruit-item:nth-child(2) .recruit-badge': 'Online',
        '.recruit-item:nth-child(2) h4': 'Info Session 2',
        '.recruit-item:nth-child(2) p': 'Online session (Zoom). Attend from anywhere.',
        '.recruit-item:nth-child(3) .recruit-month': 'Jun',
        '.recruit-item:nth-child(3) .recruit-badge': 'Online',
        '.recruit-item:nth-child(3) h4': 'Info Session 3',
        '.recruit-item:nth-child(3) p': 'Online session (Zoom). Individual questions welcome.',
        '.recruit-item:nth-child(4) .recruit-month': 'Jun',
        '.recruit-item:nth-child(4) .recruit-badge': 'Early Deadline',
        '.recruit-item:nth-child(4) h4': 'Application Early Deadline',
        '.recruit-item:nth-child(4) p': 'Early applicants receive priority screening and feedback.',
        '.recruit-item:nth-child(5) .recruit-month': 'Jun',
        '.recruit-item:nth-child(5) .recruit-badge': 'Online',
        '.recruit-item:nth-child(5) h4': 'Info Session 4',
        '.recruit-item:nth-child(5) p': 'Online session (Zoom). Final info session \u2014 last chance before the deadline.',
        '.recruit-item:nth-child(6) .recruit-month': 'Jun',
        '.recruit-item:nth-child(6) .recruit-badge': 'Final Deadline',
        '.recruit-item:nth-child(6) h4': 'Application Final Deadline',
        '.recruit-item:nth-child(6) p': 'Applications for 2026 close on this date.',
        '.recruit-item:nth-child(7) .recruit-month': 'Jul',
        '.recruit-item:nth-child(7) .recruit-badge': 'Results',
        '.recruit-item:nth-child(7) h4': 'Results Announcement',
        '.recruit-item:nth-child(7) p': 'Results sent by email. Accepted applicants receive enrollment instructions.',
        '.recruit-cta-text': 'Start by registering for an info session or signing up to receive recruitment updates.',
        '.recruit-cta .btn-orange': '<i class="fa-solid fa-paper-plane"></i> Get Updates (Free)',

        /* --- FAQ --- */
        '#faq .section-heading': 'Frequently Asked Questions',
        '.faq-item:nth-child(1) .faq-question': 'Can I participate even if my English isn\u2019t strong? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(1) .faq-answer p': 'Yes, you can. The program is run bilingually in Japanese and English, with staff support available. We value your willingness to take on challenges and your enthusiasm far more than English proficiency.',
        '.faq-item:nth-child(2) .faq-question': 'Can I participate from outside Ehime Prefecture? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(2) .faq-answer p': 'Yes. In addition to the Ehime/Okayama priority slots (35), there are outside-prefecture slots (5) and international slots (10). Accommodation is included in the program fee, so no worries if you\u2019re coming from afar. Note that transportation costs are borne individually.',
        '.faq-item:nth-child(3) .faq-question': 'Can I join without startup or business experience? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(3) .faq-answer p': 'Yes. True to its \u201cZERO TO ENTREPRENEUR\u201d concept, this program builds entrepreneurial thinking from scratch. No experience in business, programming, or design is required. In fact, we welcome you to come with a completely blank slate.',
        '.faq-item:nth-child(4) .faq-question': 'Are there scholarship or financial aid options? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(4) .faq-answer p': 'Depending on grant approval, the participation fee may be significantly reduced or fully waived. If finances are holding you back, please contact us through the info session or inquiry form. Don\u2019t give up because of cost.',
        '.faq-item:nth-child(5) .faq-question': 'Is there a selection process? What criteria are used? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(5) .faq-answer p': 'After formal application, there is a document screening. We prioritize passion and specificity \u2014 \u201cwhy do you want to participate\u201d and \u201cwhat social issues interest you\u201d \u2014 not academic record or background. Start by attending an info session or registering for updates.',
        '.faq-item:nth-child(6) .faq-question': 'Are there materials to explain to parents/school? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(6) .faq-answer p': 'We have an explanatory document (PDF) for parents and homeroom teachers. It will be sent with the confirmation email after registration or provided at the info session. We also welcome inquiries from schools about group participation.',

        /* --- Apply section --- */
        '#apply .section-label': 'GET STARTED',
        '#apply .section-heading': 'First, get<br>the latest info.',
        '.apply-desc': 'The official application form opens in May.<br>Register now to receive info session invites, financial aid updates, and application launch notifications first.',
        '.apply-point:nth-child(1) span': 'Registration is <strong>free and unconditional</strong>',
        '.apply-point:nth-child(2) span': 'Receive info session invitations by email',
        '.apply-point:nth-child(3) span': 'Materials for parents/schools will be sent',
        '.apply-point:nth-child(4) span': 'Priority updates on financial aid',
        '.form-title': 'Interest Registration Form',
        'label[for="fname"]': 'Name <span class="req">*</span>',
        'label[for="femail"]': 'Email <span class="req">*</span>',
        'label[for="fcat"]': 'Your Role <span class="req">*</span>',
        '#fcat option[value=""]': 'Please select',
        '#fcat option[value="hs"]': 'High school student (applicant)',
        '#fcat option[value="uni"]': 'University student (applicant)',
        '#fcat option[value="mentor"]': 'University student (mentor)',
        '#fcat option[value="parent"]': 'Parent / Guardian',
        '#fcat option[value="teacher"]': 'Teacher / School staff',
        '#fcat option[value="other"]': 'Other',
        'label[for="fregion"]': 'Prefecture (optional)',
        '@placeholder:#fname': 'Taro Yamada',
        '@placeholder:#fregion': 'e.g. Ehime',
        '#applyForm button[type="submit"]': '<i class="fa-solid fa-paper-plane"></i> Get Updates (Free)',
        '.form-note': '<i class="fa-solid fa-lock"></i> Your personal information is securely managed and never shared with third parties.',
        '#formSuccess h3': 'Registration Complete',
        '#formSuccess p': 'Thank you for registering.<br>We will send you info session invitations and application updates by email.',

        /* --- Partners --- */
        '.partners-label': 'Organizers & Partners',
        '.partners-bar > :nth-child(1) span': 'Ehime University',

        /* --- Footer --- */
        '.footer-tagline': 'Cultivating the next generation of global entrepreneurs from Setouchi.',
        '.footer-hosted': 'Host: Ehime University / Ops: YURUGAS',
        '.footer-grid > :nth-child(2) h4': 'Program',
        '.footer-grid > :nth-child(2) li:nth-child(1) a': 'About',
        '.footer-grid > :nth-child(2) li:nth-child(2) a': '7 Days',
        '.footer-grid > :nth-child(2) li:nth-child(3) a': 'Participants',
        '.footer-grid > :nth-child(3) h4': 'Information',
        '.footer-grid > :nth-child(3) li:nth-child(1) a': 'Faculty & Organizers',
        '.footer-grid > :nth-child(3) li:nth-child(2) a': 'Details & Fees',
        '.footer-grid > :nth-child(3) li:nth-child(3) a': 'Recruitment Schedule',
        '.footer-grid > :nth-child(3) li:nth-child(4) a': 'FAQ',
        '.footer-grid > :nth-child(4) h4': 'Join',
        '.footer-grid > :nth-child(4) li:nth-child(1) a': 'Get Updates',
        '.footer-grid > :nth-child(4) li:nth-child(2) a': 'Attend Info Session',
        '.footer-grid > :nth-child(4) .btn-orange': 'Register Now',
        '.footer-bottom-links > :nth-child(1)': 'Privacy Policy',
        '.footer-bottom-links > :nth-child(3)': 'Terms of Use',
        '.footer-bottom-links > :nth-child(5)': 'Contact Us'
    },

    /* ========== TRADITIONAL CHINESE (繁體中文) ========== */
    zh: {
        /* --- FAB --- */
        '#fabApply span': '獲取最新資訊',

        /* --- Header nav (desktop) --- */
        '.desktop-nav a[href="#what"]': '概要',
        '.desktop-nav a[href="#schedule"]': '7天計畫',
        '.desktop-nav a[href="#who"]': '參加者',
        '.desktop-nav a[href="#faculty"]': '導師團隊',
        '.desktop-nav a[href="#overview"]': '詳情',
        '.desktop-nav a[href="#faq"]': '常見問題',
        '.header-actions .btn-navy': '<i class="fa-solid fa-paper-plane"></i> 獲取資訊',

        /* --- Header nav (mobile) --- */
        '.mobile-drawer a[href="#what"]': '概要',
        '.mobile-drawer a[href="#schedule"]': '7天計畫',
        '.mobile-drawer a[href="#who"]': '參加者',
        '.mobile-drawer a[href="#faculty"]': '導師團隊',
        '.mobile-drawer a[href="#overview"]': '詳情',
        '.mobile-drawer a[href="#faq"]': '常見問題',
        '.mobile-drawer .btn-navy': '獲取資訊',

        /* --- Hero --- */
        '.hero-badges .badge-outline-light:nth-child(1)': '<i class="fa-regular fa-calendar"></i> 2026年8月16日\u301c22日',
        '.hero-badges .badge-outline-light:nth-child(2)': '<i class="fa-solid fa-map-pin"></i> 愛媛大學\u30fb松山',
        '.hero-title': '從瀨戶內，<br>撼動世界。',
        '.hero-sub': '發現、思考、行動的7天。',
        '.hero-desc': '高中生與大學生真誠組隊，<br class="pc-only">從零開始打造社會問題的解決方案。',
        '.hero-meta-item:nth-child(1) span': '名額 <strong>50人</strong>',
        '.hero-meta-item:nth-child(3) span': '面向高中生\u30fb大學生',
        '.hero-meta-item:nth-child(5) span': '愛媛\u30fb岡山 <strong>優先名額</strong>',
        '.hero-ctas .btn-orange': '<i class="fa-solid fa-paper-plane"></i> 獲取最新資訊',
        '.hero-ctas .btn-outline-white': '了解更多專案詳情',

        /* --- WHAT section --- */
        '#what .section-label': '專案介紹',
        '#what .section-heading': '這個專案<br>做什麼',
        '.what-image-caption': 'MIT 創業前期發展框架',
        '.what-feature-card:nth-child(1) h3': '7天實踐型課程',
        '.what-feature-card:nth-child(1) p': '瀨戶內全球訓練營是一項培養從瀨戶內走向世界的下一代創新者的集中課程。',
        '.what-feature-card:nth-child(2) h3': '親手打造與實現',
        '.what-feature-card:nth-child(2) p': '融合技術、設計與商業——參與者親手發現社會問題、製作原型、設計商業模式。',
        '.what-feature-card:nth-child(3) h3': 'Zero2Maker方法',
        '.what-feature-card:nth-child(3) p': '基於MIT開發的方法，已在12個國家向4,000多名學生推廣。EnCube Labs設計的課程強調「動手創造」而非空想。',

        /* --- WHY section --- */
        '#why .section-label': '為什麼選擇這裡',
        '#why .section-heading': '為什麼選擇這個訓練營',
        '#why .section-sub': '瀨戶內全球訓練營是三個維度交匯的唯一場所。',
        '.why-global h3': '全球',
        '.why-global p': '世界一流方法論。MIT發源的方法和國際導師團培養全球競爭力的思維與行動力。',
        '.why-regional h3': '地方',
        '.why-regional p': '瀨戶內地區的課題。以愛媛\u30fb岡山為起點，將扎根地方的社會問題作為創新的素材。',
        '.why-research h3': '研究',
        '.why-research p': '與愛媛大學的研究合作。利用大學的學術資源，為問題解決增添學術深度。',
        '.why-intersection-label': '交匯點',
        '.why-intersection-inner p': '用世界水準的<br>方法論解決<br>地方課題',

        /* --- Schedule --- */
        '#schedule .section-label': '7天計畫',
        '#schedule .section-heading': '7天裡做什麼',
        '#schedule .section-sub': '四個階段構建「成長階梯」。',
        '#scheduleToggleText': '查看7天課程內容',
        /* Phase 1 – Discover */
        '.phase-discover .phase-ja': '發現',
        '.phase-discover .phase-goal': '親手體驗創造的感覺',
        '.phase-discover .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>CAD\u30fb電子工作\u30fb程式設計',
        '.phase-discover .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>3D列印體驗',
        '.phase-discover .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>敘事技巧',
        '.phase-discover .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>團隊建設\u30fb開幕式',
        /* Phase 2 – Design */
        '.phase-design .phase-ja': '設計',
        '.phase-design .phase-goal': '捕捉社會問題，描繪解決方案的原型',
        '.phase-design .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>參與觀察\u30fb實地調查',
        '.phase-design .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>問題識別\u30fb創意發想',
        '.phase-design .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>原型製作\u30fb驗證',
        '.phase-design .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>全球研討會（海外導師）',
        /* Phase 3 – Build */
        '.phase-build .phase-ja': '構建',
        '.phase-build .phase-goal': '將想法變為可行的商業模式',
        '.phase-build .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>價值主張\u30fb顧客識別',
        '.phase-build .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>商業模式設計\u30fb財務建模',
        '.phase-build .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>假設驗證\u30fb用戶測試',
        '.phase-build .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>簡報準備\u30fb最終打磨',
        /* Phase 4 – Demo Day */
        '.phase-demo .phase-ja': '發布到世界',
        '.phase-demo .phase-goal': '向世界展示7天的成果',
        '.phase-demo .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>最終簡報（成果發表）',
        '.phase-demo .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>評審團評審\u30fb頒獎',
        '.phase-demo .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>結業證書頒發',
        '.phase-demo .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>交流會\u30fb人脈建立',
        '.phase-label-gold': '最終發表',

        /* --- WHO section --- */
        '#who .section-label': '參加者構成',
        '#who .section-heading': '誰來參加',
        '#who .section-sub': '50名參加者。多樣的背景和視角成為團隊的力量。',
        '.cohort-unit': '人',
        '.cohort-label': '每組5人 \u00d7 10組',
        '.cohort-bar:nth-child(1) .bar-info span': '高中生',
        '.cohort-bar:nth-child(2) .bar-info span': '大學生',
        '.cohort-regional .cohort-section-title': '<i class="fa-solid fa-map-location-dot text-navy"></i> 地區名額分配',
        '.region-priority .region-name': '愛媛\u30fb岡山 優先名額',
        '.region-priority .region-num': '35名',
        '.region-item:nth-child(2) .region-name': '縣外名額',
        '.region-item:nth-child(2) .region-num': '5名',
        '.region-intl .region-name': '國際名額',
        '.region-intl .region-num': '10名',
        '.cohort-mentors .cohort-section-title': '<i class="fa-solid fa-chalkboard-user text-green"></i> 陪伴導師團',
        '.mentor-item:nth-child(1) span': '5名 — 來自國內外頂尖大學',
        '.mentor-item:nth-child(2) span': '8名 — 愛媛大學教育學部學生',
        '.who-note-inner p': '不要求英語能力。只要有<strong>「讓社會變得更好」的熱情</strong>和團隊行動力，就歡迎你來。不需要創業經驗或商業知識。',

        /* --- Gallery --- */
        '#gallery .gallery-heading': '來自世界各地的訓練營',
        '#gallery .section-sub': 'Zero2Entrepreneur專案的真實工坊場景',

        /* --- Faculty --- */
        '#faculty .section-label': '導師與營運團隊',
        '#faculty .section-heading': '導師與營運團隊',
        '#faculty .section-sub': '這個專案值得信賴的理由，就在於這些人。',
        '.faculty-card:nth-child(1) .faculty-desc': 'MIT發的創業教育框架「Zero2Maker」開發者。在世界12個國家引導4,000多名年輕人走向創業思維。統括本專案的課程設計。',
        '.faculty-card:nth-child(2) h4': '白川 寧寧',
        '.faculty-card:nth-child(2) .faculty-desc': '全球教育專案「FutureHACK」創設者。完成MIT MBA後，致力於推動日本和亞洲的創業教育。負責本專案的教育設計。',
        '.faculty-card:nth-child(3) h4': '石原 裕香',
        '.faculty-card:nth-child(3) .faculty-role': '愛媛大學 特任副教授',
        '.faculty-card:nth-child(3) .faculty-desc': '愛媛大學方面的專案總監。研究並實踐連接地區與世界的創業教育。統括本訓練營的場地與學術基礎。',
        '.faculty-card:nth-child(4) h4': '大崎 龍史',
        '.faculty-card:nth-child(4) .faculty-desc': '營運推廣瀨戶內魅力的媒體與社群平台。作為地區創業家支持年輕人的挑戰，負責地區實地專案的設計。',

        /* --- Trust --- */
        '#trust .section-label': '數據說話',
        '#trust .section-heading': '用數字看信賴度',
        '.trust-card:nth-child(1) .trust-unit': '名',
        '.trust-card:nth-child(1) .trust-desc': '嚴格篩選的參加者。5人\u00d710組的小班制，最大化每個人的成長。',
        '.trust-card:nth-child(2) .trust-unit': '個國家',
        '.trust-card:nth-child(2) .trust-desc': 'Zero2Maker方法已導入的國家數量。4,000多名年輕人以相同方法論學習。',
        '.trust-card:nth-child(3) .trust-unit': '名',
        '.trust-card:nth-child(3) .trust-desc': '從國內外頂尖大學招聘的Global Peer Mentors。將世界級視野直接帶給參加者。',
        '.trust-card:nth-child(4) .trust-unit': '人',
        '.trust-card:nth-child(4) .trust-desc': 'EnCube Labs的Zero2Maker方法已驗證的總參加者數。這份實績是課程的支撐。',
        '.trust-orgs-label': '主辦\u30fb營運',
        '.trust-orgs-list > :nth-child(1) span': '愛媛大學（主辦）',
        '.trust-orgs-list > :nth-child(3) span': 'YURUGAS事務局（營運）',
        '.trust-orgs-list > :nth-child(5) span': 'EnCube Labs（課程設計）',

        /* --- Overview table --- */
        '#overview .section-label': '專案詳情',
        '#overview .section-heading': '舉辦概要',
        '#overview .section-sub': '做出參加決定所需的全部資訊。',
        '.overview-table tr:nth-child(1) th': '<i class="fa-regular fa-calendar text-blue"></i> 日期',
        '.overview-table tr:nth-child(1) td': '2026年8月16日（日）\u301c 8月22日（六）<span class="td-sub">7天（含住宿）</span>',
        '.overview-table tr:nth-child(2) th': '<i class="fa-solid fa-map-pin text-blue"></i> 地點',
        '.overview-table tr:nth-child(2) td': '愛媛大學（愛媛縣松山市）<span class="td-sub">場地詳情於錄取後通知</span>',
        '.overview-table tr:nth-child(3) th': '<i class="fa-solid fa-users text-blue"></i> 名額',
        '.overview-table tr:nth-child(3) td': '50名（5名 \u00d7 10組）',
        '.overview-table tr:nth-child(4) th': '<i class="fa-solid fa-school text-blue"></i> 對象',
        '.overview-table tr:nth-child(4) td': '高中生（25名）\u30fb大學生（25名）<span class="td-sub">愛媛\u30fb岡山 優先名額 35名 / 縣外名額 5名 / 國際名額 10名</span>',
        '.overview-table tr:nth-child(5) th': '<i class="fa-solid fa-language text-blue"></i> 使用語言',
        '.overview-table tr:nth-child(5) td': '日語\u30fb英語（雙語營運）<span class="td-sub">不要求英語能力</span>',
        '.overview-table tr:nth-child(6) th': '<i class="fa-solid fa-yen-sign text-blue"></i> 參加費',
        '.overview-table tr:nth-child(6) td': '<div class="fee-grid"><div class="fee-item"><span class="fee-cat">高中生</span><span class="fee-amount">\u00a5100,000<span class="fee-note">（含稅）</span></span></div><div class="fee-item"><span class="fee-cat">大學生</span><span class="fee-amount">\u00a5150,000<span class="fee-note">（含稅）</span></span></div></div><p class="td-sub">依補助金審核結果，費用可能減免或全額免除</p>',
        '.overview-table tr:nth-child(7) th': '<i class="fa-solid fa-circle-check text-blue"></i> 包含項目',
        '.overview-table tr:nth-child(7) td': '<div class="includes-inline"><span>住宿費（6晚）</span><span>餐費（每日3餐）</span><span>課程教材</span><span>導師指導</span><span>結業證書</span></div>',
        '.overview-table tr:nth-child(8) th': '<i class="fa-solid fa-clock text-orange"></i> 早期截止',
        '.overview-table tr:nth-child(8) td': '<strong class="text-orange">2026年6月10日（二）</strong>',
        '.overview-table tr:nth-child(9) th': '<i class="fa-solid fa-clock text-crimson"></i> 最終截止',
        '.overview-table tr:nth-child(9) td': '<strong class="text-crimson">2026年6月30日（二）</strong>',
        '.overview-table tr:nth-child(10) th': '<i class="fa-solid fa-bell text-green"></i> 錄取公告',
        '.overview-table tr:nth-child(10) td': '<strong class="text-green">2026年7月10日（五）</strong>',

        /* --- Overview CTA card --- */
        '.overview-cta-card h3': '先參加說明會',
        '.overview-cta-card p': '我們將說明專案詳情、篩選標準及費用補助。免費參加。',
        '.overview-cta-card .btn-navy': '確認說明會日程 <i class="fa-solid fa-arrow-down"></i>',
        '.overview-cta-card .link-underline': '不等說明會，直接登記 \u2192',
        '.overview-note p': '依補助金審核結果，參加費可能大幅減免或全額免除。詳情請於說明會中確認。',

        /* --- Recruitment --- */
        '#recruitment-schedule .section-label': '招募日程',
        '#recruitment-schedule .section-heading': '招募日程',
        '#recruitment-schedule .section-sub': '一目了然，下一步該做什麼。',
        '.recruit-item:nth-child(1) .recruit-month': '5月',
        '.recruit-item:nth-child(1) .recruit-badge': '實體',
        '.recruit-item:nth-child(1) h4': '說明會\u2460',
        '.recruit-item:nth-child(1) p': '愛媛大學（松山）實體舉辦。詳細說明專案內容、篩選及費用。',
        '.recruit-item:nth-child(2) .recruit-month': '5月',
        '.recruit-item:nth-child(2) .recruit-badge': '線上',
        '.recruit-item:nth-child(2) h4': '說明會\u2461',
        '.recruit-item:nth-child(2) p': '線上舉辦（Zoom）。遠方者亦可參加。',
        '.recruit-item:nth-child(3) .recruit-month': '6月',
        '.recruit-item:nth-child(3) .recruit-badge': '線上',
        '.recruit-item:nth-child(3) h4': '說明會\u2462',
        '.recruit-item:nth-child(3) p': '線上舉辦（Zoom）。亦接受個別提問。',
        '.recruit-item:nth-child(4) .recruit-month': '6月',
        '.recruit-item:nth-child(4) .recruit-badge': '早期截止',
        '.recruit-item:nth-child(4) h4': '報名 早期截止',
        '.recruit-item:nth-child(4) p': '早期報名者可優先獲得篩選及回饋。',
        '.recruit-item:nth-child(5) .recruit-month': '6月',
        '.recruit-item:nth-child(5) .recruit-badge': '線上',
        '.recruit-item:nth-child(5) h4': '說明會\u2463',
        '.recruit-item:nth-child(5) p': '線上舉辦（Zoom）。最後一場說明會，截止前的最後機會。',
        '.recruit-item:nth-child(6) .recruit-month': '6月',
        '.recruit-item:nth-child(6) .recruit-badge': '最終截止',
        '.recruit-item:nth-child(6) h4': '報名 最終截止',
        '.recruit-item:nth-child(6) p': '2026年度招募於此日截止。',
        '.recruit-item:nth-child(7) .recruit-month': '7月',
        '.recruit-item:nth-child(7) .recruit-badge': '錄取公告',
        '.recruit-item:nth-child(7) h4': '錄取公告',
        '.recruit-item:nth-child(7) p': '結果以電子郵件通知。錄取者將收到入學手續說明。',
        '.recruit-cta-text': '先從登記說明會或接收招募資訊開始吧。',
        '.recruit-cta .btn-orange': '<i class="fa-solid fa-paper-plane"></i> 獲取招募資訊（免費）',

        /* --- FAQ --- */
        '#faq .section-heading': '常見問題',
        '.faq-item:nth-child(1) .faq-question': '英語不好也可以參加嗎？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(1) .faq-answer p': '可以。本專案以日語和英語雙語營運，並設有工作人員支援。比起英語能力，我們更重視挑戰的意願和熱情。',
        '.faq-item:nth-child(2) .faq-question': '愛媛縣外也可以參加嗎？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(2) .faq-answer p': '可以參加。除愛媛\u30fb岡山優先名額（35名）外，還設有縣外名額（5名）和國際名額（10名）。住宿費已包含在參加費中，遠方者請放心。交通費需自行負擔。',
        '.faq-item:nth-child(3) .faq-question': '沒有創業經驗或商業知識也能參加嗎？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(3) .faq-answer p': '可以。正如「ZERO TO ENTREPRENEUR」的理念，這是一個從零開始培養創業思維的專案。不需要商業、程式設計或設計的任何經驗。我們反而歡迎「什麼都不懂」的你來參加。',
        '.faq-item:nth-child(4) .faq-question': '有獎學金或費用補助嗎？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(4) .faq-answer p': '依補助金審核結果，參加費可能大幅減免或全額免除。若因經濟原因猶豫，請透過說明會或諮詢表與我們聯繫。請不要因為費用而放棄。',
        '.faq-item:nth-child(5) .faq-question': '有篩選嗎？以什麼標準來選拔？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(5) .faq-answer p': '正式報名後有書面審查。我們最重視的不是學歷或成績，而是「為什麼想參加」「對什麼社會問題有興趣」這樣的熱情與具體性。請先從參加說明會或登記招募資訊開始。',
        '.faq-item:nth-child(6) .faq-question': '有給家長或學校的說明資料嗎？ <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(6) .faq-answer p': '我們備有給家長和導師的說明資料（PDF）。登記後的確認郵件或說明會上將提供。也歡迎學校單位的團體參加諮詢。',

        /* --- Apply section --- */
        '#apply .section-label': '開始行動',
        '#apply .section-heading': '首先，<br>獲取最新資訊。',
        '.apply-desc': '正式報名表將於5月公開。<br>現在登記，優先獲取說明會、費用補助、報名開始的通知。',
        '.apply-point:nth-child(1) span': '登記<strong>免費\u30fb無條件</strong>',
        '.apply-point:nth-child(2) span': '將寄送說明會通知信',
        '.apply-point:nth-child(3) span': '家長\u30fb學校用資料也會一併寄送',
        '.apply-point:nth-child(4) span': '優先通知費用補助最新資訊',
        '.form-title': '資訊登記表',
        'label[for="fname"]': '姓名 <span class="req">*</span>',
        'label[for="femail"]': '電子郵件 <span class="req">*</span>',
        'label[for="fcat"]': '您的身份 <span class="req">*</span>',
        '#fcat option[value=""]': '請選擇',
        '#fcat option[value="hs"]': '高中生（希望參加）',
        '#fcat option[value="uni"]': '大學生（希望參加）',
        '#fcat option[value="mentor"]': '大學生（希望擔任導師）',
        '#fcat option[value="parent"]': '家長',
        '#fcat option[value="teacher"]': '教師\u30fb學校相關人員',
        '#fcat option[value="other"]': '其他',
        'label[for="fregion"]': '居住地區（選填）',
        '@placeholder:#fname': '山田 太郎',
        '@placeholder:#fregion': '例：愛媛縣',
        '#applyForm button[type="submit"]': '<i class="fa-solid fa-paper-plane"></i> 獲取最新資訊（免費）',
        '.form-note': '<i class="fa-solid fa-lock"></i> 個人資訊嚴格管理，不會提供給第三方。',
        '#formSuccess h3': '登記完成',
        '#formSuccess p': '感謝您的登記。<br>我們將透過電子郵件發送說明會邀請及報名資訊。',

        /* --- Partners --- */
        '.partners-label': '主辦\u30fb合作機構',
        '.partners-bar > :nth-child(1) span': '愛媛大學',

        /* --- Footer --- */
        '.footer-tagline': '從瀨戶內，培育下一代全球創業家。',
        '.footer-hosted': '主辦：愛媛大學 / 營運：YURUGAS事務局',
        '.footer-grid > :nth-child(2) h4': '專案',
        '.footer-grid > :nth-child(2) li:nth-child(1) a': '概要',
        '.footer-grid > :nth-child(2) li:nth-child(2) a': '7天',
        '.footer-grid > :nth-child(2) li:nth-child(3) a': '參加者構成',
        '.footer-grid > :nth-child(3) h4': '資訊',
        '.footer-grid > :nth-child(3) li:nth-child(1) a': '導師\u30fb營運團隊',
        '.footer-grid > :nth-child(3) li:nth-child(2) a': '舉辦概要\u30fb費用',
        '.footer-grid > :nth-child(3) li:nth-child(3) a': '招募日程',
        '.footer-grid > :nth-child(3) li:nth-child(4) a': '常見問題',
        '.footer-grid > :nth-child(4) h4': '參加',
        '.footer-grid > :nth-child(4) li:nth-child(1) a': '獲取招募資訊',
        '.footer-grid > :nth-child(4) li:nth-child(2) a': '參加說明會',
        '.footer-grid > :nth-child(4) .btn-orange': '立即登記',
        '.footer-bottom-links > :nth-child(1)': '隱私權政策',
        '.footer-bottom-links > :nth-child(3)': '使用條款',
        '.footer-bottom-links > :nth-child(5)': '聯絡我們'
    },

    /* ========== HINDI (हिन्दी) ========== */
    hi: {
        /* --- FAB --- */
        '#fabApply span': 'जानकारी प्राप्त करें',

        /* --- Header nav (desktop) --- */
        '.desktop-nav a[href="#what"]': 'परिचय',
        '.desktop-nav a[href="#schedule"]': '7 दिन',
        '.desktop-nav a[href="#who"]': 'प्रतिभागी',
        '.desktop-nav a[href="#faculty"]': 'संकाय',
        '.desktop-nav a[href="#overview"]': 'विवरण',
        '.desktop-nav a[href="#faq"]': 'FAQ',
        '.header-actions .btn-navy': '<i class="fa-solid fa-paper-plane"></i> जानकारी प्राप्त करें',

        /* --- Header nav (mobile) --- */
        '.mobile-drawer a[href="#what"]': 'परिचय',
        '.mobile-drawer a[href="#schedule"]': '7 दिन',
        '.mobile-drawer a[href="#who"]': 'प्रतिभागी',
        '.mobile-drawer a[href="#faculty"]': 'संकाय',
        '.mobile-drawer a[href="#overview"]': 'विवरण',
        '.mobile-drawer a[href="#faq"]': 'FAQ',
        '.mobile-drawer .btn-navy': 'जानकारी प्राप्त करें',

        /* --- Hero --- */
        '.hero-badges .badge-outline-light:nth-child(1)': '<i class="fa-regular fa-calendar"></i> 16\u201322 अगस्त, 2026',
        '.hero-badges .badge-outline-light:nth-child(2)': '<i class="fa-solid fa-map-pin"></i> एहिमे विश्वविद्यालय, मात्सुयामा',
        '.hero-title': 'सेतोउची से,<br>दुनिया बदलो।',
        '.hero-sub': 'जानो। सोचो। करो \u2014 7 परिवर्तनकारी दिन।',
        '.hero-desc': 'हाई स्कूल और विश्वविद्यालय के छात्र मिलकर टीम बनाते हैं<br class="pc-only"> और सामाजिक चुनौतियों के समाधान शून्य से बनाते हैं।',
        '.hero-meta-item:nth-child(1) span': 'क्षमता <strong>50</strong>',
        '.hero-meta-item:nth-child(3) span': 'हाई स्कूल और विश्वविद्यालय छात्रों के लिए',
        '.hero-meta-item:nth-child(5) span': 'एहिमे और ओकायामा <strong>प्राथमिकता</strong>',
        '.hero-ctas .btn-orange': '<i class="fa-solid fa-paper-plane"></i> जानकारी प्राप्त करें',
        '.hero-ctas .btn-outline-white': 'कार्यक्रम के बारे में अधिक जानें',

        /* --- WHAT section --- */
        '#what .section-label': 'यह क्या है',
        '#what .section-heading': 'इस कार्यक्रम में<br>क्या होता है',
        '.what-image-caption': 'MIT प्री-एंटरप्रेन्योरशिप विकास फ्रेमवर्क',
        '.what-feature-card:nth-child(1) h3': '7 दिवसीय व्यावहारिक कार्यक्रम',
        '.what-feature-card:nth-child(1) p': 'सेतोउची ग्लोबल बूटकैंप एक गहन कार्यक्रम है जो सेतोउची से विश्व को चुनौती देने वाले अगली पीढ़ी के नवप्रवर्तकों को तैयार करता है।',
        '.what-feature-card:nth-child(2) h3': 'बनाओ और लागू करो',
        '.what-feature-card:nth-child(2) p': 'प्रौद्योगिकी, डिज़ाइन और व्यवसाय को एकीकृत करते हुए \u2014 प्रतिभागी सामाजिक मुद्दों की खोज करते हैं, प्रोटोटाइप बनाते हैं, और बिजनेस मॉडल डिज़ाइन करते हैं।',
        '.what-feature-card:nth-child(3) h3': 'Zero2Maker पद्धति',
        '.what-feature-card:nth-child(3) p': 'MIT में विकसित पद्धति पर आधारित, 12 देशों में 4,000+ छात्रों तक पहुँची। EnCube Labs का पाठ्यक्रम "बनाना और करना" पर केंद्रित है।',

        /* --- WHY section --- */
        '#why .section-label': 'यह कैंप क्यों',
        '#why .section-heading': 'यह कैंप क्यों',
        '#why .section-sub': 'सेतोउची ग्लोबल बूटकैंप तीन संदर्भों का अनूठा संगम है।',
        '.why-global h3': 'वैश्विक',
        '.why-global p': 'विश्व स्तरीय पद्धति। MIT से जन्मी विधियाँ और अंतर्राष्ट्रीय मेंटर वैश्विक प्रतिस्पर्धी सोच विकसित करते हैं।',
        '.why-regional h3': 'क्षेत्रीय',
        '.why-regional p': 'सेतोउची की स्थानीय चुनौतियाँ। एहिमे और ओकायामा की वास्तविक सामाजिक समस्याओं को नवाचार की सामग्री के रूप में उपयोग।',
        '.why-research h3': 'अनुसंधान',
        '.why-research p': 'एहिमे विश्वविद्यालय के साथ अनुसंधान साझेदारी। विश्वविद्यालय के शैक्षणिक संसाधनों से समस्या-समाधान में गहराई।',
        '.why-intersection-label': 'संगम बिंदु',
        '.why-intersection-inner p': 'क्षेत्रीय चुनौतियों को<br>विश्व स्तरीय<br>तरीकों से हल करना',

        /* --- Schedule --- */
        '#schedule .section-label': '7 दिन का कार्यक्रम',
        '#schedule .section-heading': '7 दिनों में क्या करेंगे',
        '#schedule .section-sub': 'चार चरण जो "विकास की सीढ़ी" बनाते हैं।',
        '#scheduleToggleText': '7 दिन का कार्यक्रम देखें',
        /* Phase 1 – Discover */
        '.phase-discover .phase-ja': 'खोजो',
        '.phase-discover .phase-goal': 'अपने हाथों से बनाने का अनुभव करो',
        '.phase-discover .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>CAD, इलेक्ट्रॉनिक्स और कोडिंग',
        '.phase-discover .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>3D प्रिंटर अनुभव',
        '.phase-discover .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>स्टोरीटेलिंग',
        '.phase-discover .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>टीम बिल्डिंग और किकऑफ',
        /* Phase 2 – Design */
        '.phase-design .phase-ja': 'डिज़ाइन करो',
        '.phase-design .phase-goal': 'सामाजिक मुद्दों को पहचानो और समाधान का प्रोटोटाइप बनाओ',
        '.phase-design .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>सहभागिता, अवलोकन और फील्ड रिसर्च',
        '.phase-design .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>समस्या पहचान और विचार सृजन',
        '.phase-design .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>प्रोटोटाइपिंग और मान्यकरण',
        '.phase-design .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>ग्लोबल सत्र (अंतर्राष्ट्रीय मेंटर)',
        /* Phase 3 – Build */
        '.phase-build .phase-ja': 'बनाओ',
        '.phase-build .phase-goal': 'अपने विचार को एक व्यवहार्य व्यवसाय में बदलो',
        '.phase-build .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>मूल्य प्रस्ताव और ग्राहक पहचान',
        '.phase-build .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>बिजनेस मॉडल डिज़ाइन और वित्तीय मॉडलिंग',
        '.phase-build .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>परिकल्पना परीक्षण और उपयोगकर्ता परीक्षण',
        '.phase-build .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>पिच तैयारी और अंतिम परिष्करण',
        /* Phase 4 – Demo Day */
        '.phase-demo .phase-ja': 'दुनिया को दिखाओ',
        '.phase-demo .phase-goal': '7 दिनों का काम दुनिया के सामने प्रस्तुत करो',
        '.phase-demo .phase-list li:nth-child(1)': '<i class="fa-solid fa-circle-dot"></i>अंतिम पिच (परिणाम प्रस्तुति)',
        '.phase-demo .phase-list li:nth-child(2)': '<i class="fa-solid fa-circle-dot"></i>निर्णायक मंडल मूल्यांकन और पुरस्कार',
        '.phase-demo .phase-list li:nth-child(3)': '<i class="fa-solid fa-circle-dot"></i>पूर्णता प्रमाणपत्र',
        '.phase-demo .phase-list li:nth-child(4)': '<i class="fa-solid fa-circle-dot"></i>नेटवर्किंग रिसेप्शन',
        '.phase-label-gold': 'अंतिम प्रस्तुति',

        /* --- WHO section --- */
        '#who .section-label': 'प्रतिभागी',
        '#who .section-heading': 'कौन भाग लेता है',
        '#who .section-sub': '50 प्रतिभागी। विविध पृष्ठभूमि और दृष्टिकोण टीम की ताकत बनते हैं।',
        '.cohort-unit': 'लोग',
        '.cohort-label': '5 प्रति टीम \u00d7 10 टीम',
        '.cohort-bar:nth-child(1) .bar-info span': 'हाई स्कूल',
        '.cohort-bar:nth-child(2) .bar-info span': 'विश्वविद्यालय',
        '.cohort-regional .cohort-section-title': '<i class="fa-solid fa-map-location-dot text-navy"></i> क्षेत्रीय वितरण',
        '.region-priority .region-name': 'एहिमे और ओकायामा प्राथमिकता',
        '.region-priority .region-num': '35',
        '.region-item:nth-child(2) .region-name': 'प्रांत के बाहर',
        '.region-item:nth-child(2) .region-num': '5',
        '.region-intl .region-name': 'अंतर्राष्ट्रीय',
        '.region-intl .region-num': '10',
        '.cohort-mentors .cohort-section-title': '<i class="fa-solid fa-chalkboard-user text-green"></i> सहायक मेंटर',
        '.mentor-item:nth-child(1) span': '5 \u2014 शीर्ष घरेलू और अंतर्राष्ट्रीय विश्वविद्यालयों से',
        '.mentor-item:nth-child(2) span': '8 \u2014 एहिमे विश्वविद्यालय के छात्र',
        '.who-note-inner p': 'अंग्रेजी दक्षता आवश्यक नहीं। अगर आपमें <strong>बदलाव लाने की प्रेरणा</strong> है और टीम के रूप में कार्य करने का जज़्बा है, तो आपका स्वागत है। स्टार्टअप या व्यावसायिक अनुभव की आवश्यकता नहीं।',

        /* --- Gallery --- */
        '#gallery .gallery-heading': 'दुनिया भर के बूटकैंप से',
        '#gallery .section-sub': 'Zero2Entrepreneur कार्यक्रम की वास्तविक कार्यशाला दृश्य',

        /* --- Faculty --- */
        '#faculty .section-label': 'संकाय और आयोजक',
        '#faculty .section-heading': 'संकाय और आयोजक',
        '#faculty .section-sub': 'इस कार्यक्रम की विश्वसनीयता इन लोगों में है।',
        '.faculty-card:nth-child(1) .faculty-desc': 'MIT से जन्मे उद्यमिता शिक्षा फ्रेमवर्क "Zero2Maker" के विकासकर्ता। 12 देशों में 4,000 से अधिक युवाओं को उद्यमशीलता की सोच की ओर प्रेरित किया। इस कार्यक्रम के पाठ्यक्रम डिज़ाइन का नेतृत्व करते हैं।',
        '.faculty-card:nth-child(2) h4': 'नेने शिराकावा',
        '.faculty-card:nth-child(2) .faculty-desc': 'वैश्विक शिक्षा कार्यक्रम "FutureHACK" की संस्थापक। MIT MBA पूरा करने के बाद, जापान और एशिया में उद्यमिता शिक्षा का नेतृत्व कर रही हैं। इस कार्यक्रम के शैक्षिक डिज़ाइन की प्रभारी।',
        '.faculty-card:nth-child(3) h4': 'युका इशिहारा',
        '.faculty-card:nth-child(3) .faculty-role': 'एहिमे विश्वविद्यालय, विशेष नियुक्त सहायक प्रोफेसर',
        '.faculty-card:nth-child(3) .faculty-desc': 'एहिमे विश्वविद्यालय की ओर से कार्यक्रम निदेशक। स्थानीय और वैश्विक को जोड़ने वाली उद्यमिता शिक्षा पर शोध और अभ्यास। इस कैंप के स्थल और शैक्षणिक आधार का नेतृत्व।',
        '.faculty-card:nth-child(4) h4': 'र्यूजी ओसाकी',
        '.faculty-card:nth-child(4) .faculty-desc': 'सेतोउची के आकर्षण को देश-विदेश में प्रसारित करने वाले मीडिया और समुदाय मंच का संचालन। क्षेत्रीय उद्यमी के रूप में युवाओं की चुनौतियों का समर्थन और स्थानीय फील्ड कार्यक्रम की डिज़ाइन।',

        /* --- Trust --- */
        '#trust .section-label': 'आँकड़े',
        '#trust .section-heading': 'संख्याओं में विश्वास',
        '.trust-card:nth-child(1) .trust-unit': 'लोग',
        '.trust-card:nth-child(1) .trust-desc': 'सावधानीपूर्वक चयनित प्रतिभागी। प्रति टीम 5 \u00d7 10 टीमों का छोटा समूह प्रारूप हर व्यक्ति की वृद्धि को अधिकतम करता है।',
        '.trust-card:nth-child(2) .trust-unit': 'देश',
        '.trust-card:nth-child(2) .trust-desc': 'जिन देशों में Zero2Maker पद्धति लागू की गई है। 4,000 से अधिक युवाओं ने इसी पद्धति से सीखा है।',
        '.trust-card:nth-child(3) .trust-unit': 'मेंटर',
        '.trust-card:nth-child(3) .trust-desc': 'शीर्ष घरेलू और अंतर्राष्ट्रीय विश्वविद्यालयों से आमंत्रित Global Peer Mentors। विश्व स्तरीय दृष्टिकोण सीधे प्रतिभागियों तक पहुँचाते हैं।',
        '.trust-card:nth-child(4) .trust-unit': 'लोग',
        '.trust-card:nth-child(4) .trust-desc': 'EnCube Labs की Zero2Maker पद्धति से प्रमाणित कुल प्रतिभागी। यह ट्रैक रिकॉर्ड पाठ्यक्रम का आधार है।',
        '.trust-orgs-label': 'आयोजक और संचालन',
        '.trust-orgs-list > :nth-child(1) span': 'एहिमे विश्वविद्यालय (आयोजक)',
        '.trust-orgs-list > :nth-child(3) span': 'YURUGAS सचिवालय (संचालन)',
        '.trust-orgs-list > :nth-child(5) span': 'EnCube Labs (पाठ्यक्रम डिज़ाइन)',

        /* --- Overview table --- */
        '#overview .section-label': 'कार्यक्रम विवरण',
        '#overview .section-heading': 'कार्यक्रम विवरण',
        '#overview .section-sub': 'निर्णय लेने के लिए सब कुछ यहाँ है।',
        '.overview-table tr:nth-child(1) th': '<i class="fa-regular fa-calendar text-blue"></i> तिथि',
        '.overview-table tr:nth-child(1) td': '16 अगस्त (रवि) \u2013 22 अगस्त (शनि), 2026<span class="td-sub">7 दिन (आवास सहित)</span>',
        '.overview-table tr:nth-child(2) th': '<i class="fa-solid fa-map-pin text-blue"></i> स्थान',
        '.overview-table tr:nth-child(2) td': 'एहिमे विश्वविद्यालय (मात्सुयामा, एहिमे)<span class="td-sub">स्थल विवरण स्वीकृति के बाद प्रदान किया जाएगा</span>',
        '.overview-table tr:nth-child(3) th': '<i class="fa-solid fa-users text-blue"></i> क्षमता',
        '.overview-table tr:nth-child(3) td': '50 (5 प्रति टीम \u00d7 10 टीम)',
        '.overview-table tr:nth-child(4) th': '<i class="fa-solid fa-school text-blue"></i> पात्रता',
        '.overview-table tr:nth-child(4) td': 'हाई स्कूल (25) और विश्वविद्यालय छात्र (25)<span class="td-sub">एहिमे/ओकायामा प्राथमिकता: 35 / प्रांत के बाहर: 5 / अंतर्राष्ट्रीय: 10</span>',
        '.overview-table tr:nth-child(5) th': '<i class="fa-solid fa-language text-blue"></i> भाषाएँ',
        '.overview-table tr:nth-child(5) td': 'जापानी और अंग्रेजी (द्विभाषी संचालन)<span class="td-sub">अंग्रेजी दक्षता आवश्यक नहीं</span>',
        '.overview-table tr:nth-child(6) th': '<i class="fa-solid fa-yen-sign text-blue"></i> शुल्क',
        '.overview-table tr:nth-child(6) td': '<div class="fee-grid"><div class="fee-item"><span class="fee-cat">हाई स्कूल</span><span class="fee-amount">\u00a5100,000<span class="fee-note"> (कर सहित)</span></span></div><div class="fee-item"><span class="fee-cat">विश्वविद्यालय</span><span class="fee-amount">\u00a5150,000<span class="fee-note"> (कर सहित)</span></span></div></div><p class="td-sub">अनुदान स्थिति के अनुसार कम या माफ हो सकता है</p>',
        '.overview-table tr:nth-child(7) th': '<i class="fa-solid fa-circle-check text-blue"></i> शामिल',
        '.overview-table tr:nth-child(7) td': '<div class="includes-inline"><span>आवास (6 रातें)</span><span>भोजन (प्रतिदिन 3)</span><span>कार्यक्रम सामग्री</span><span>मेंटरिंग</span><span>पूर्णता प्रमाणपत्र</span></div>',
        '.overview-table tr:nth-child(8) th': '<i class="fa-solid fa-clock text-orange"></i> प्रारंभिक समयसीमा',
        '.overview-table tr:nth-child(8) td': '<strong class="text-orange">10 जून, 2026 (मंगल)</strong>',
        '.overview-table tr:nth-child(9) th': '<i class="fa-solid fa-clock text-crimson"></i> अंतिम समयसीमा',
        '.overview-table tr:nth-child(9) td': '<strong class="text-crimson">30 जून, 2026 (मंगल)</strong>',
        '.overview-table tr:nth-child(10) th': '<i class="fa-solid fa-bell text-green"></i> परिणाम',
        '.overview-table tr:nth-child(10) td': '<strong class="text-green">10 जुलाई, 2026 (शुक्र)</strong>',

        /* --- Overview CTA card --- */
        '.overview-cta-card h3': 'पहले जानकारी सत्र में आएँ',
        '.overview-cta-card p': 'हम कार्यक्रम विवरण, चयन मानदंड और वित्तीय सहायता विकल्पों की व्याख्या करेंगे। निःशुल्क।',
        '.overview-cta-card .btn-navy': 'जानकारी सत्र की तिथियाँ देखें <i class="fa-solid fa-arrow-down"></i>',
        '.overview-cta-card .link-underline': 'सत्र की प्रतीक्षा किए बिना पंजीकरण करें \u2192',
        '.overview-note p': 'अनुदान स्वीकृति के अनुसार, भागीदारी शुल्क में काफी कमी या पूर्ण छूट हो सकती है। विवरण जानकारी सत्र में साझा किए जाएँगे।',

        /* --- Recruitment --- */
        '#recruitment-schedule .section-label': 'भर्ती कार्यक्रम',
        '#recruitment-schedule .section-heading': 'भर्ती कार्यक्रम',
        '#recruitment-schedule .section-sub': 'अगला कदम एक नज़र में।',
        '.recruit-item:nth-child(1) .recruit-month': 'मई',
        '.recruit-item:nth-child(1) .recruit-badge': 'व्यक्तिगत',
        '.recruit-item:nth-child(1) h4': 'जानकारी सत्र 1',
        '.recruit-item:nth-child(1) p': 'एहिमे विश्वविद्यालय (मात्सुयामा) में व्यक्तिगत रूप से। कार्यक्रम, चयन और शुल्क का विस्तृत विवरण।',
        '.recruit-item:nth-child(2) .recruit-month': 'मई',
        '.recruit-item:nth-child(2) .recruit-badge': 'ऑनलाइन',
        '.recruit-item:nth-child(2) h4': 'जानकारी सत्र 2',
        '.recruit-item:nth-child(2) p': 'ऑनलाइन सत्र (Zoom)। कहीं से भी भाग लें।',
        '.recruit-item:nth-child(3) .recruit-month': 'जून',
        '.recruit-item:nth-child(3) .recruit-badge': 'ऑनलाइन',
        '.recruit-item:nth-child(3) h4': 'जानकारी सत्र 3',
        '.recruit-item:nth-child(3) p': 'ऑनलाइन सत्र (Zoom)। व्यक्तिगत प्रश्नों का स्वागत।',
        '.recruit-item:nth-child(4) .recruit-month': 'जून',
        '.recruit-item:nth-child(4) .recruit-badge': 'प्रारंभिक समयसीमा',
        '.recruit-item:nth-child(4) h4': 'आवेदन प्रारंभिक समयसीमा',
        '.recruit-item:nth-child(4) p': 'प्रारंभिक आवेदकों को प्राथमिकता स्क्रीनिंग और फीडबैक मिलता है।',
        '.recruit-item:nth-child(5) .recruit-month': 'जून',
        '.recruit-item:nth-child(5) .recruit-badge': 'ऑनलाइन',
        '.recruit-item:nth-child(5) h4': 'जानकारी सत्र 4',
        '.recruit-item:nth-child(5) p': 'ऑनलाइन सत्र (Zoom)। अंतिम जानकारी सत्र \u2014 समयसीमा से पहले अंतिम अवसर।',
        '.recruit-item:nth-child(6) .recruit-month': 'जून',
        '.recruit-item:nth-child(6) .recruit-badge': 'अंतिम समयसीमा',
        '.recruit-item:nth-child(6) h4': 'आवेदन अंतिम समयसीमा',
        '.recruit-item:nth-child(6) p': '2026 के लिए आवेदन इस तिथि पर बंद होते हैं।',
        '.recruit-item:nth-child(7) .recruit-month': 'जुल',
        '.recruit-item:nth-child(7) .recruit-badge': 'परिणाम',
        '.recruit-item:nth-child(7) h4': 'परिणाम घोषणा',
        '.recruit-item:nth-child(7) p': 'परिणाम ईमेल द्वारा भेजे जाते हैं। स्वीकृत आवेदकों को नामांकन निर्देश प्राप्त होते हैं।',
        '.recruit-cta-text': 'पहले जानकारी सत्र के लिए पंजीकरण करें या भर्ती अपडेट प्राप्त करने के लिए साइन अप करें।',
        '.recruit-cta .btn-orange': '<i class="fa-solid fa-paper-plane"></i> जानकारी प्राप्त करें (निःशुल्क)',

        /* --- FAQ --- */
        '#faq .section-heading': 'अक्सर पूछे जाने वाले प्रश्न',
        '.faq-item:nth-child(1) .faq-question': 'क्या मैं अंग्रेजी में कमज़ोर होने पर भी भाग ले सकता हूँ? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(1) .faq-answer p': 'हाँ, आप भाग ले सकते हैं। कार्यक्रम जापानी और अंग्रेजी दोनों में चलाया जाता है, और स्टाफ सहायता उपलब्ध है। अंग्रेजी दक्षता से अधिक, हम चुनौती लेने की इच्छा और उत्साह को महत्व देते हैं।',
        '.faq-item:nth-child(2) .faq-question': 'क्या मैं एहिमे प्रांत के बाहर से भाग ले सकता हूँ? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(2) .faq-answer p': 'हाँ। एहिमे/ओकायामा प्राथमिकता स्लॉट (35) के अलावा, प्रांत-बाहर स्लॉट (5) और अंतर्राष्ट्रीय स्लॉट (10) हैं। आवास शुल्क कार्यक्रम शुल्क में शामिल है, इसलिए दूर से आने में चिंता न करें। परिवहन लागत व्यक्तिगत है।',
        '.faq-item:nth-child(3) .faq-question': 'क्या बिना स्टार्टअप या व्यावसायिक अनुभव के भाग ले सकता हूँ? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(3) .faq-answer p': 'हाँ। "ZERO TO ENTREPRENEUR" की अवधारणा के अनुसार, यह शून्य से उद्यमशीलता सोच बनाने का कार्यक्रम है। व्यवसाय, प्रोग्रामिंग या डिज़ाइन में कोई अनुभव आवश्यक नहीं। बल्कि हम "कुछ भी न जानने" की स्थिति में आने का स्वागत करते हैं।',
        '.faq-item:nth-child(4) .faq-question': 'क्या छात्रवृत्ति या वित्तीय सहायता उपलब्ध है? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(4) .faq-answer p': 'अनुदान स्वीकृति के अनुसार, भागीदारी शुल्क में काफी कमी या पूर्ण छूट हो सकती है। यदि आर्थिक कारणों से रुक रहे हैं, तो कृपया जानकारी सत्र या पूछताछ फॉर्म के माध्यम से संपर्क करें। लागत के कारण हार न मानें।',
        '.faq-item:nth-child(5) .faq-question': 'क्या चयन प्रक्रिया है? किन मानदंडों का उपयोग किया जाता है? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(5) .faq-answer p': 'औपचारिक आवेदन के बाद दस्तावेज़ स्क्रीनिंग होती है। हम शैक्षणिक रिकॉर्ड या पृष्ठभूमि नहीं, बल्कि जुनून और विशिष्टता \u2014 "आप क्यों भाग लेना चाहते हैं" और "कौन से सामाजिक मुद्दे आपकी रुचि रखते हैं" \u2014 को प्राथमिकता देते हैं। पहले जानकारी सत्र या अपडेट के लिए पंजीकरण से शुरू करें।',
        '.faq-item:nth-child(6) .faq-question': 'क्या माता-पिता/स्कूल के लिए स्पष्टीकरण सामग्री है? <i class="fa-solid fa-chevron-down faq-icon"></i>',
        '.faq-item:nth-child(6) .faq-answer p': 'हमारे पास माता-पिता और शिक्षकों के लिए स्पष्टीकरण दस्तावेज़ (PDF) है। पंजीकरण के बाद पुष्टि ईमेल के साथ या जानकारी सत्र में प्रदान किया जाएगा। स्कूलों से सामूहिक भागीदारी के बारे में पूछताछ का भी स्वागत है।',

        /* --- Apply section --- */
        '#apply .section-label': 'शुरू करें',
        '#apply .section-heading': 'पहले,<br>नवीनतम जानकारी प्राप्त करें।',
        '.apply-desc': 'आधिकारिक आवेदन पत्र मई में खुलेगा।<br>अभी पंजीकरण करें और सत्र आमंत्रण, वित्तीय सहायता और आवेदन की सूचना सबसे पहले प्राप्त करें।',
        '.apply-point:nth-child(1) span': 'पंजीकरण <strong>निःशुल्क और बिना शर्त</strong> है',
        '.apply-point:nth-child(2) span': 'जानकारी सत्र के निमंत्रण ईमेल से प्राप्त करें',
        '.apply-point:nth-child(3) span': 'माता-पिता/स्कूल के लिए सामग्री भी भेजी जाएगी',
        '.apply-point:nth-child(4) span': 'वित्तीय सहायता पर प्राथमिकता अपडेट',
        '.form-title': 'सूचना पंजीकरण फॉर्म',
        'label[for="fname"]': 'नाम <span class="req">*</span>',
        'label[for="femail"]': 'ईमेल <span class="req">*</span>',
        'label[for="fcat"]': 'आपकी भूमिका <span class="req">*</span>',
        '#fcat option[value=""]': 'कृपया चुनें',
        '#fcat option[value="hs"]': 'हाई स्कूल छात्र (आवेदक)',
        '#fcat option[value="uni"]': 'विश्वविद्यालय छात्र (आवेदक)',
        '#fcat option[value="mentor"]': 'विश्वविद्यालय छात्र (मेंटर)',
        '#fcat option[value="parent"]': 'अभिभावक',
        '#fcat option[value="teacher"]': 'शिक्षक / स्कूल स्टाफ',
        '#fcat option[value="other"]': 'अन्य',
        'label[for="fregion"]': 'प्रांत (वैकल्पिक)',
        '@placeholder:#fname': 'तारो यामादा',
        '@placeholder:#fregion': 'उदा.: एहिमे',
        '#applyForm button[type="submit"]': '<i class="fa-solid fa-paper-plane"></i> जानकारी प्राप्त करें (निःशुल्क)',
        '.form-note': '<i class="fa-solid fa-lock"></i> आपकी व्यक्तिगत जानकारी सुरक्षित रूप से प्रबंधित की जाती है और तीसरे पक्ष के साथ साझा नहीं की जाती।',
        '#formSuccess h3': 'पंजीकरण पूर्ण',
        '#formSuccess p': 'पंजीकरण के लिए धन्यवाद।<br>हम आपको जानकारी सत्र के निमंत्रण और आवेदन अपडेट ईमेल से भेजेंगे।',

        /* --- Partners --- */
        '.partners-label': 'आयोजक और भागीदार',
        '.partners-bar > :nth-child(1) span': 'एहिमे विश्वविद्यालय',

        /* --- Footer --- */
        '.footer-tagline': 'सेतोउची से, अगली पीढ़ी के वैश्विक उद्यमियों को तैयार करना।',
        '.footer-hosted': 'आयोजक: एहिमे विश्वविद्यालय / संचालन: YURUGAS',
        '.footer-grid > :nth-child(2) h4': 'कार्यक्रम',
        '.footer-grid > :nth-child(2) li:nth-child(1) a': 'परिचय',
        '.footer-grid > :nth-child(2) li:nth-child(2) a': '7 दिन',
        '.footer-grid > :nth-child(2) li:nth-child(3) a': 'प्रतिभागी',
        '.footer-grid > :nth-child(3) h4': 'जानकारी',
        '.footer-grid > :nth-child(3) li:nth-child(1) a': 'संकाय और आयोजक',
        '.footer-grid > :nth-child(3) li:nth-child(2) a': 'विवरण और शुल्क',
        '.footer-grid > :nth-child(3) li:nth-child(3) a': 'भर्ती कार्यक्रम',
        '.footer-grid > :nth-child(3) li:nth-child(4) a': 'FAQ',
        '.footer-grid > :nth-child(4) h4': 'भाग लें',
        '.footer-grid > :nth-child(4) li:nth-child(1) a': 'जानकारी प्राप्त करें',
        '.footer-grid > :nth-child(4) li:nth-child(2) a': 'जानकारी सत्र में भाग लें',
        '.footer-grid > :nth-child(4) .btn-orange': 'अभी पंजीकरण करें',
        '.footer-bottom-links > :nth-child(1)': 'गोपनीयता नीति',
        '.footer-bottom-links > :nth-child(3)': 'उपयोग की शर्तें',
        '.footer-bottom-links > :nth-child(5)': 'संपर्क करें'
    }
};

// ──────────────────────────────────────────────
// i18n Engine
// ──────────────────────────────────────────────
const defaultCache = {};
let currentLang = 'ja';

document.addEventListener('DOMContentLoaded', function () {
    // Collect all selectors (including @placeholder: keys)
    var allSelectors = new Set();
    for (var lang in translations) {
        for (var sel in translations[lang]) {
            allSelectors.add(sel);
        }
    }

    // Cache default values
    for (var selector of allSelectors) {
        if (selector.indexOf('@placeholder:') === 0) {
            // Cache the default placeholder value
            var realSel = selector.slice('@placeholder:'.length);
            var el = document.querySelector(realSel);
            if (el) {
                defaultCache[selector] = el.placeholder || '';
            }
        } else {
            var el = document.querySelector(selector);
            if (el) {
                defaultCache[selector] = el.innerHTML;
            }
        }
    }

    // Attach lang switcher
    var langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', function (e) {
            currentLang = e.target.value;
            applyTranslations(currentLang);
        });
    }

    // Hero slideshow
    initHeroSlideshow();
});

function applyTranslations(lang) {
    document.documentElement.lang = lang;

    // Remove all lang classes
    document.body.classList.remove('lang-en', 'lang-zh', 'lang-hi');

    if (lang === 'ja') {
        // Restore all defaults
        for (var selector in defaultCache) {
            if (selector.indexOf('@placeholder:') === 0) {
                var realSel = selector.slice('@placeholder:'.length);
                var el = document.querySelector(realSel);
                if (el) el.placeholder = defaultCache[selector];
            } else {
                var el = document.querySelector(selector);
                if (el) el.innerHTML = defaultCache[selector];
            }
        }
    } else {
        var mapping = translations[lang];
        if (!mapping) return;

        // First restore defaults, then apply translations
        for (var selector in defaultCache) {
            if (selector.indexOf('@placeholder:') === 0) {
                var realSel = selector.slice('@placeholder:'.length);
                var el = document.querySelector(realSel);
                if (el) el.placeholder = defaultCache[selector];
            } else {
                var el = document.querySelector(selector);
                if (el) el.innerHTML = defaultCache[selector];
            }
        }
        for (var selector in mapping) {
            if (selector.indexOf('@placeholder:') === 0) {
                var realSel = selector.slice('@placeholder:'.length);
                var el = document.querySelector(realSel);
                if (el) el.placeholder = mapping[selector];
            } else {
                var el = document.querySelector(selector);
                if (el) el.innerHTML = mapping[selector];
            }
        }
        document.body.classList.add('lang-' + lang);
    }

    // Update schedule toggle text
    var wrap = document.getElementById('phaseLadderWrap');
    var textEl = document.getElementById('scheduleToggleText');
    if (wrap && textEl) {
        var isOpen = wrap.classList.contains('expanded');
        textEl.textContent = getToggleText(isOpen);
    }
}

// Hero slideshow
function initHeroSlideshow() {
    var slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    var current = 0;
    setInterval(function () {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
}
