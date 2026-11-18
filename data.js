/* =========================================================
   SETLINE website content (Arabic + English)
   Edit texts, projects and team here — no HTML changes needed.
   ========================================================= */

const I18N = {
  ar: {
    "nav.about": "من نحن", "nav.services": "خدماتنا", "nav.method": "منهجيتنا",
    "nav.projects": "أعمالنا", "nav.map": "الخريطة", "nav.team": "فريقنا", "nav.contact": "تواصل معنا",
    "map.eyebrow": "حضورنا · Map", "map.title": "مشاريعنا على خريطة المملكة",
    "map.lgProjects": "مدينة نفذنا فيها مشاريع", "map.lgCoverage": "منطقة خدمة", "map.lgRegion": "منطقة إدارية فيها مشاريعنا",
    "map.cities": "المدن", "map.kCities": "مدن", "map.kRegions": "مناطق إدارية", "map.kProjects": "مشروعاً",
    "map.projectsIn": "مشاريع في", "map.coverOnly": "منطقة خدمة — تواصل معنا لمشروعك القادم هنا.",
    "map.note": "يُضاف إليها مشروع على موقع جبلي (الشركة السعودية للقهوة).",
    "map.hint": "اضغط على أي مدينة لعرض مشاريعها",
    "map.region": "منطقة", "map.cArea": "م² منفّذة", "map.cYears": "سنوات العمل",
    "map.viewAll": "عرض كل مشاريع {c}", "map.quote": "اطلب عرض سعر لمشروعك في {c}", "map.close": "إغلاق",

    "hero.title": "نضع المعيار..<br>ونبني عليه",
    "hero.lead": "سِت لاين شركة مقاولات متخصصة في التصميم والتنفيذ، تقدم حلولاً متكاملة في التشطيبات الداخلية والأعمال الكهروميكانيكية والإنشائية؛ من المخطط إلى التسليم.",
    "hero.cta1": "اطلب عرض سعر", "hero.cta2": "شاهد أعمالنا",
    "p.precision": "الدقة", "p.control": "التحكم", "p.execution": "التنفيذ", "p.delivery": "التسليم",

    "stats.projects": "مشروع منفذ", "stats.regions": "مناطق داخل المملكة",
    "stats.since": "بداية أعمالنا", "stats.sectors": "قطاعات نخدمها",

    "about.eyebrow": "من نحن · About",
    "about.title": "من المخطط إلى التسليم",
    "about.p1": "سِت لاين شركة مقاولات متخصصة في التنفيذ والتصميم، تقدم حلولاً متكاملة في التشطيبات الداخلية والأعمال الكهروميكانيكية وشبكات البنية التحتية، للمشاريع التجارية والمكتبية والسكنية والضيافة والتجزئة.",
    "about.p2": "مقرنا الرئيسي في حي الربيع بالرياض، ونخدم عملاءنا في الرياض وجدة والمنطقة الشرقية، بفريق هندسي وفني يدير المشروع من دراسة المخططات حتى التسليم.",
    "about.quote": "اخترنا اسمنا من <b>خط التوقيع الميداني (Setline)</b>: الخط الذي ينتقل عليه التصميم من الورق إلى الأرض؛ ومنه يبدأ التزامنا بالدقة والتحكم والتنفيذ والتسليم في الموعد.",
    "about.vision": "رؤيتنا", "about.visionText": "أن نكون المرجع الذي يُقاس عليه في دقة التنفيذ وجودة التسليم في المملكة.",
    "about.mission": "رسالتنا", "about.missionText": "نحوّل التصاميم إلى واقع قابل للبناء، بتحكم كامل في التكلفة والجدول والجودة، وتسليم في الموعد.",
    "about.coverage": "نطاق عملنا",
    "r.riyadh": "الرياض — المقر الرئيسي", "r.jeddah": "جدة", "r.east": "المنطقة الشرقية",

    "services.eyebrow": "خدماتنا · Services", "services.title": "حلول متكاملة تحت إدارة واحدة",
    "sectors.eyebrow": "القطاعات · Sectors", "sectors.title": "خبرة متخصصة في كل قطاع",
    "method.eyebrow": "المنهجية · Methodology", "method.title": "خمس خطوات، من المخطط إلى التسليم",
    "quality.title": "الجودة والسلامة: فحص في كل مرحلة",
    "projects.eyebrow": "أعمالنا · Our Work", "projects.title": "مشاريع مختارة",
    "clients.eyebrow": "عملاؤنا · Clients", "clients.title": "عملاء يثقون بنا",
    "team.eyebrow": "كوادرنا · Our People", "team.title": "كوادر هندسية في كل تخصص",
    "team.lead": "مهندسون وفنيون وحرفيون وكوادر إدارية في كل تخصص يحتاجه المشروع — بقيادة تنفيذية واحدة وأقسام متخصصة.",
    "team.org": "الهيكل", "team.orgTop": "قيادة تنفيذية واحدة",
    "team.crews": "فرق العمل: مهندسون · فنيون وحرفيون · كوادر إدارية",
    "team.join": "انضم لفريقنا", "team.joinMsg": "مرحباً، أرغب في الانضمام لفريق سِت لاين. تخصصي:",

    "contact.eyebrow": "تواصل معنا · Contact", "contact.title": "نحوّل تصميمك إلى واقع",
    "contact.lead": "أرسل لنا تفاصيل مشروعك، ونرد عليك بعرض فني ومالي وجدول زمني خلال أسبوع تقريباً.",
    "contact.phone": "الهاتف", "contact.whatsapp": "واتساب", "contact.email": "البريد",
    "contact.address": "العنوان", "contact.addressText": "حي الربيع، الرياض، المملكة العربية السعودية",
    "form.name": "الاسم", "form.phone": "رقم الجوال", "form.type": "نوع المشروع", "form.city": "المدينة",
    "form.message": "تفاصيل المشروع (المساحة، الموقع، الموعد المطلوب)",
    "form.sendWa": "إرسال عبر واتساب", "form.sendMail": "إرسال بالبريد",
    "footer.tag": "سِت لاين للهندسة والإنشاءات — نضع المعيار.. ونبني عليه",

    "f.all": "الكل", "lbl.client": "العميل", "lbl.area": "المساحة", "lbl.duration": "المدة", "lbl.year": "السنة",
    "lbl.photos": "صور",
    "seo.h1": "سِت لاين للهندسة والإنشاءات — مقاول تصميم وتنفيذ وتشطيبات في الرياض",
    "seo.title": "سِت لاين للهندسة والإنشاءات | تصميم وتنفيذ وتشطيبات في الرياض — SETLINE",
    "profile.btn": "حمّل الملف التعريفي",
    "profile.meta": "PDF · ‏22 صفحة · 1.3 ميجا",
    "app.install": "ثبّت التطبيق",
    "app.barTitle": "تطبيق سِت لاين",
    "app.barSub": "ثبّته على جهازك — مجاناً ويعمل بدون إنترنت",
    "app.barBtn": "تثبيت"
  },

  en: {
    "nav.about": "About", "nav.services": "Services", "nav.method": "Method",
    "nav.projects": "Projects", "nav.map": "Map", "nav.team": "Team", "nav.contact": "Contact us",
    "map.eyebrow": "Map · حضورنا", "map.title": "Our projects across the Kingdom",
    "map.lgProjects": "City with our projects", "map.lgCoverage": "Service area", "map.lgRegion": "Region with our projects",
    "map.cities": "Cities", "map.kCities": "Cities", "map.kRegions": "Regions", "map.kProjects": "Projects",
    "map.projectsIn": "Projects in", "map.coverOnly": "Service area — talk to us about your next project here.",
    "map.note": "Plus one project on a mountain site (Saudi Coffee Company).",
    "map.hint": "Tap a city to see its projects",
    "map.region": "Region:", "map.cArea": "m² delivered", "map.cYears": "Years",
    "map.viewAll": "View all projects in {c}", "map.quote": "Request a quote for {c}", "map.close": "Close",

    "hero.title": "We set the standard.<br>We build to it.",
    "hero.lead": "SETLINE is a design-and-build contractor delivering interior fit-out, MEP and civil works — from drawing to handover.",
    "hero.cta1": "Request a quote", "hero.cta2": "See our work",
    "p.precision": "Precision", "p.control": "Control", "p.execution": "Execution", "p.delivery": "Delivery",

    "stats.projects": "Projects delivered", "stats.regions": "Regions in KSA",
    "stats.since": "Working since", "stats.sectors": "Sectors served",

    "about.eyebrow": "About · من نحن",
    "about.title": "From drawing to handover",
    "about.p1": "SETLINE is a contracting company specialised in design and execution, delivering integrated interior fit-out, MEP and infrastructure works for commercial, office, residential, hospitality and retail projects.",
    "about.p2": "Headquartered in Al Rabie, Riyadh, we serve clients across Riyadh, Jeddah and the Eastern Province with an engineering team that manages every project from drawing review to handover.",
    "about.quote": "Our name comes from the <b>site setting-out line</b> — the line where design moves from paper to ground. That is where our commitment to precision, control and on-time delivery begins.",
    "about.vision": "Vision", "about.visionText": "To be the benchmark for execution accuracy and delivery quality in the Kingdom.",
    "about.mission": "Mission", "about.missionText": "To turn designs into buildable reality, with full control of cost, schedule and quality — delivered on time.",
    "about.coverage": "Coverage",
    "r.riyadh": "Riyadh — Head office", "r.jeddah": "Jeddah", "r.east": "Eastern Province",

    "services.eyebrow": "Services · خدماتنا", "services.title": "Integrated solutions, one point of control",
    "sectors.eyebrow": "Sectors · القطاعات", "sectors.title": "Specialised experience in every sector",
    "method.eyebrow": "Methodology · المنهجية", "method.title": "Five steps, from drawing to handover",
    "quality.title": "Quality & safety: inspected at every stage",
    "projects.eyebrow": "Our Work · أعمالنا", "projects.title": "Selected projects",
    "clients.eyebrow": "Clients · عملاؤنا", "clients.title": "Clients who trust us",
    "team.eyebrow": "Our People · كوادرنا", "team.title": "Engineers in every discipline",
    "team.lead": "Engineers, technicians, craftsmen and administrative staff in every discipline a project needs — under one executive leadership with specialized departments.",
    "team.org": "Structure", "team.orgTop": "One executive leadership",
    "team.crews": "Work crews: engineers · technicians and craftsmen · administrative staff",
    "team.join": "Join our team", "team.joinMsg": "Hello, I would like to join the SETLINE team. My field:",

    "contact.eyebrow": "Contact · تواصل معنا", "contact.title": "From design to reality",
    "contact.lead": "Send us your project details and we will reply with a technical and financial offer and a schedule within about a week.",
    "contact.phone": "Phone", "contact.whatsapp": "WhatsApp", "contact.email": "Email",
    "contact.address": "Address", "contact.addressText": "Al Rabie District, Riyadh, Saudi Arabia",
    "form.name": "Name", "form.phone": "Mobile", "form.type": "Project type", "form.city": "City",
    "form.message": "Project details (area, location, target date)",
    "form.sendWa": "Send via WhatsApp", "form.sendMail": "Send by email",
    "footer.tag": "SETLINE Engineering & Construction — We set the standard. We build to it.",

    "f.all": "All", "lbl.client": "Client", "lbl.area": "Area", "lbl.duration": "Duration", "lbl.year": "Year",
    "lbl.photos": "photos",
    "seo.h1": "SETLINE Engineering & Construction — design-and-build and fit-out contractor in Riyadh",
    "seo.title": "SETLINE Engineering & Construction | Design & Build, Fit-Out & MEP in Riyadh",
    "profile.btn": "Download company profile",
    "profile.meta": "PDF · 22 pages · 1.3 MB",
    "app.install": "Install app",
    "app.barTitle": "SETLINE app",
    "app.barSub": "Install it on your device — free, works offline",
    "app.barBtn": "Install"
  }
};

const SERVICES = [
  { code: "01", ar: ["التصميم والهندسة", "إعداد وتطوير التصاميم والمخططات المعمارية والهندسية والداخلية، والمخططات التنفيذية <bdi>(Shop Drawings)</bdi>."],
                en: ["Design & Engineering", "Architectural, engineering and interior design development, including shop drawings."] },
  { code: "02", ar: ["الأعمال المدنية والإنشائية", "الحفر والردم، القواعد والأساسات، الهياكل الخرسانية والمعدنية، المباني واللياسة، العزل، والتوقيع المساحي."],
                en: ["Civil & Structural Works", "Excavation, foundations, concrete and steel frames, masonry and plaster, insulation, and survey setting-out."] },
  { code: "03", ar: ["التشطيبات والتجهيزات (Fit-Out)", "أرضيات وحوائط وأسقف، جبس ودهانات، نجارة وأبواب، زجاج وألمنيوم، وتوريد وتركيب الأثاث."],
                en: ["Interior Fit-Out", "Floors, walls and ceilings, gypsum and paint, joinery and doors, glazing and aluminium, furniture supply and installation."] },
  { code: "04", ar: ["الأعمال الكهروميكانيكية (MEP)", "تنفيذ وتنسيق الأنظمة الكهربائية والميكانيكية والصحية بما يتكامل مع المتطلبات المعمارية والتشغيلية."],
                en: ["MEP Works", "Electrical, mechanical and plumbing systems, coordinated with architectural and operational requirements."] },
  { code: "05", ar: ["إدارة المشاريع والإشراف", "تمثيل المالك، الجدول الزمني المرجعي، ضبط التكاليف، مراجعة المستخلصات وأوامر التغيير، وتقارير دورية."],
                en: ["Project Management", "Owner's representation, baseline schedule, cost control, payment and variation review, and regular reporting."] },
  { code: "06", ar: ["التصميم والتنفيذ (Turnkey)", "عقد واحد وإدارة واحدة: تصميم، تراخيص، إدارة مقاولي الباطن، وتسليم المشروع جاهزاً للتشغيل."],
                en: ["Design & Build (Turnkey)", "One contract, one team: design, permits, subcontractor management and a ready-to-operate handover."] }
];

const SECTORS = [
  { ar: ["القطاع التجاري والمكاتب", "مقرات إدارية · مكاتب · معارض · مساحات تجارية"], en: ["Commercial & Offices", "Headquarters · Offices · Showrooms · Retail"] },
  { ar: ["القطاع السكني", "فلل · وحدات سكنية · مجمعات سكنية"], en: ["Residential", "Villas · Apartments · Compounds"] },
  { ar: ["الضيافة", "فنادق · شقق فندقية · مطاعم ومقاهي"], en: ["Hospitality", "Hotels · Serviced apartments · Restaurants & cafés"] },
  { ar: ["الجمعيات والقطاع غير الربحي", "مقرات جمعيات ولجان تنموية"], en: ["Non-profits", "Association and committee headquarters"] },
  { ar: ["التعليم والبحث", "معاهد ومراكز بحثية"], en: ["Education & Research", "Institutes and research centres"] }
];

const STEPS = [
  { ar: ["دراسة المشروع", "مراجعة المخططات والمتطلبات وزيارة الموقع."], en: ["Project study", "Review drawings and requirements, visit the site."] },
  { ar: ["التخطيط والتسعير", "عرض فني ومالي وجدول زمني خلال أسبوع تقريباً."], en: ["Planning & pricing", "Technical and financial offer with a schedule in about a week."] },
  { ar: ["التوقيع والتجهيز", "نقل المحاور والمناسيب إلى الموقع وتجهيزه للتنفيذ."], en: ["Setting-out", "Transfer axes and levels to site and prepare it for works."] },
  { ar: ["التنفيذ والتحكم", "إدارة الموقع وتقارير تقدم دورية للعميل."], en: ["Execution & control", "Site management with regular progress reports."] },
  { ar: ["التسليم", "فحص نهائي ومعالجة الملاحظات قبل الاستلام."], en: ["Handover", "Final inspection and snag closure before acceptance."] }
];

const QUALITY = [
  { ar: "اعتماد المواد قبل التوريد", en: "Material approval before supply" },
  { ar: "نقاط فحص (Hold Points) قبل كل مرحلة", en: "Hold-point inspections before each stage" },
  { ar: "اختبارات تشغيل الأنظمة", en: "System testing & commissioning" },
  { ar: "خطة سلامة وتوعية يومية", en: "Site safety plan and daily toolbox talks" },
  { ar: "إغلاق الملاحظات وتوثيقها", en: "Documented snag closure" },
  { ar: "مستندات ومخططات التسليم النهائية", en: "Final handover documents and as-built drawings" }
];

/* Project categories used for the filter buttons */
const CATEGORIES = {
  residential: { ar: "سكني", en: "Residential" },
  offices:     { ar: "مكاتب وشركات", en: "Offices" },
  fnb:         { ar: "مطاعم ومقاهي", en: "Restaurants & Cafés" },
  nonprofit:   { ar: "جمعيات", en: "Non-profits" },
  other:       { ar: "تجاري وتعليمي", en: "Commercial & Education" }
};

/* Projects — photos live in assets/projects/pNN_1..3.jpg */
const PROJECTS = [
  { n: 1, cat: "residential", area: 600, dur: { ar: "6 أشهر", en: "6 months" }, year: "2026",
    ar: { t: "فيلا سكنية · إنشاء", c: "الرياض", cl: "عميل فردي", d: "تنفيذ أعمال الإنشاء لفيلا سكنية بمساحة 600 م² وفق المخططات المعتمدة وبأعلى معايير الجودة والسلامة، من الأعمال الإنشائية حتى اكتمال الهيكل والتزاماً بالجدول الزمني." },
    en: { t: "Villa Construction", c: "Riyadh", cl: "Private client", d: "Construction of a 600 m² villa to the approved drawings and the highest quality and safety standards, from structural works to completion of the frame, delivered on schedule." } },
  { n: 2, cat: "residential", area: 400, dur: { ar: "4 أشهر", en: "4 months" }, year: "2026",
    ar: { t: "فيلا سكنية – الرياض", c: "الرياض", cl: "عميل فردي", d: "نفّذنا أعمال العظم لفيلا بمساحة 400 م² خلال أربعة أشهر، بتنظيم دقيق لتسلسل الأعمال وتوريد المواد، حتى اكتمال الهيكل جاهزاً لمرحلة التشطيب." },
    en: { t: "Villa – Riyadh", c: "Riyadh", cl: "Private client", d: "Shell works for a 400 m² villa in four months, with tightly planned sequencing and on-site material supply — ready for the finishing phase." } },
  { n: 3, cat: "other", area: 450, dur: { ar: "40 يوماً", en: "40 days" }, year: "2026",
    ar: { t: "شركة تجهيز طيّب", c: "الرياض", cl: "شركة تجهيز طيّب", d: "تشطيب كامل لورشة بمساحة 450 م² لتجهيز سيارات الدفع الرباعي، بتوزيع يفصل مناطق العمل والتخزين واستقبال العملاء، أُنجز خلال 40 يوماً." },
    en: { t: "Tayyib Outfitting", c: "Riyadh", cl: "Tayyib Outfitting Co.", d: "Full fit-out of a 450 m² 4x4 outfitting workshop, separating work, storage and customer reception areas. Delivered in 40 days." } },
  { n: 4, cat: "offices", area: 230, dur: { ar: "30 يوماً", en: "30 days" }, year: "2026",
    ar: { t: "شركة الفراج للمحاماة", c: "الرياض", cl: "مكتب عمر بن عبدالعزيز الفراج للمحاماة", d: "صممنا ونفذنا وأثثنا مقر الشركة بالكامل خلال 30 يوماً، بمساحة 230 م² تجمع مكاتب المحامين وغرف استقبال العملاء والاجتماعات." },
    en: { t: "Al-Farraj Law Firm", c: "Riyadh", cl: "Omar bin Abdulaziz Al-Farraj Law Firm", d: "Designed, built and fully furnished a 230 m² headquarters in 30 days — lawyers' offices, client reception and meeting rooms." } },
  { n: 5, cat: "fnb", area: 110, dur: { ar: "45 يوماً", en: "45 days" }, year: "2025",
    ar: { t: "مقهى الفصل العاشر", c: "جازان", cl: "مقهى الفصل العاشر", d: "تصميم وتنفيذ متكامل يشمل التصميم الداخلي والتشطيبات وتوريد وتركيب الأثاث، وتسليم المقهى جاهزاً للتشغيل بهوية مميزة." },
    en: { t: "Tenth Chapter Café", c: "Jazan", cl: "Tenth Chapter Café", d: "Turnkey interior design, complete finishes and furniture supply and installation — handed over ready to operate with a distinctive identity." } },
  { n: 6, cat: "residential", area: 121, dur: { ar: "30 يوماً", en: "30 days" }, year: "2025",
    ar: { t: "فيلا سكنية · تشطيب", c: "الرياض", cl: "عميل فردي", d: "أعمال تشطيب كاملة لفيلا سكنية بعناية بالتفاصيل والجودة في كل مرحلة، وتسليمها جاهزة للسكن خلال 30 يوماً." },
    en: { t: "Villa Finishing", c: "Riyadh", cl: "Private client", d: "Complete finishing works with close attention to detail — handed over ready to move in, in a record 30 days." } },
  { n: 7, cat: "fnb", area: 60, dur: { ar: "35 يوماً", en: "35 days" }, year: "2025",
    ar: { t: "مطعم سغب", c: "الرياض", cl: "مطعم سغب", d: "على مساحة 60 م² جهزنا المطعم ليستوعب منطقة الطعام والعمليات الخلفية دون إحساس بالضيق، وافتُتح في موعده بعد 35 يوماً." },
    en: { t: "Saghab Restaurant", c: "Riyadh", cl: "Saghab Restaurant", d: "A 60 m² fit-out holding both dining and back-of-house without feeling cramped. Completed in 35 days and opened on schedule." } },
  { n: 8, cat: "residential", area: 480, dur: { ar: "6 أشهر", en: "6 months" }, year: "2025",
    ar: { t: "فيلا سكنية – أبو عريش", c: "أبو عريش", cl: "عميل فردي", d: "نفذنا الهيكل الإنشائي لفيلا بمساحة 480 م² من الأساسات حتى اكتمال العظم خلال ستة أشهر، بإشراف ميداني على كل مرحلة." },
    en: { t: "Villa – Abu Arish", c: "Abu Arish", cl: "Private client", d: "Structural frame of a 480 m² villa, from foundations to completed shell, in six months — supervised on site at every stage." } },
  { n: 9, cover: 2, cat: "nonprofit", area: 114, dur: { ar: "25 يوماً", en: "25 days" }, year: "2024",
    ar: { t: "لجنة التنمية بحي النخيل", c: "الرياض", cl: "لجنة النخيل", d: "إعادة تطوير مقر اللجنة بتصميم جديد للعمل الجماعي، مع قاعة اجتماعات ومحطات عمل مؤثثة بالكامل خلال 25 يوماً." },
    en: { t: "Al Nakheel Committee", c: "Riyadh", cl: "Al Nakheel Committee", d: "Redeveloped headquarters with a meeting hall and fully furnished workstations, delivered in 25 days." } },
  { n: 10, client: "mushar", cat: "offices", area: 345, dur: { ar: "70 يوماً", en: "70 days" }, year: "2023",
    ar: { t: "شركة مشار للاستشارات", c: "الرياض", cl: "مشار للاستشارات الإدارية العليا", d: "تجهيز داخلي لمقر الشركة بمساحات عمل تجمع بين الاحترافية والراحة، بدقة في التفاصيل حتى التسليم الجاهز للتشغيل." },
    en: { t: "Mashar Consulting", c: "Riyadh", cl: "Mashar Senior Consulting", d: "Interior fit-out combining professionalism and comfort, with precise detailing through to a ready-to-operate handover." } },
  { n: 11, client: "saudi-coffee", cat: "offices", area: 219, dur: { ar: "30 يوماً", en: "30 days" }, year: "2023",
    ar: { t: "الشركة السعودية للقهوة", c: "موقع جبلي", cl: "الشركة السعودية للقهوة", d: "على موقع جبلي غير ملائم للبناء التقليدي، صنّعنا المكتب بالكامل من هيكل معدني وألواح ساندوتش بانل: سريع ومعزول ومتين، خلال 30 يوماً." },
    en: { t: "Saudi Coffee Co.", c: "Mountain site", cl: "Saudi Coffee Company", d: "A prefabricated steel-frame and sandwich-panel office on a mountain site — fast, insulated and durable, complete in 30 days." } },
  { n: 12, client: "core", cat: "fnb", area: 188, dur: { ar: "65 يوماً", en: "65 days" }, year: "2023",
    ar: { t: "مقهى Essential Core", c: "الرياض", cl: "Essential Core Café", d: "تصميم وتنفيذ متكامل يشمل التصميم الداخلي والتشطيبات والأثاث، بهوية بصرية معاصرة وتجربة مريحة للزوار." },
    en: { t: "Essential Core Café", c: "Riyadh", cl: "Essential Core Café", d: "Integrated interior design, finishes and furniture — a contemporary identity with a comfortable visitor experience." } },
  { n: 13, cat: "fnb", area: 220, dur: { ar: "يومان", en: "2 days" }, year: "2022",
    ar: { t: "روزيلا", c: "الرياض", cl: "روزيلا", d: "واجهة مؤقتة بهيكل خشبي مكسو بألواح معدنية وردية ونمط مربعات متدرج يضيف عمقاً ويتفاعل مع الضوء." },
    en: { t: "Rosella", c: "Riyadh", cl: "Rosella", d: "A temporary façade: timber frame clad in pink metal panels with a graduated square pattern that adds depth and plays with light." } },
  { n: 14, client: "dialogue-corner", cat: "nonprofit", area: 218, dur: { ar: "65 يوماً", en: "65 days" }, year: "2022",
    ar: { t: "جمعية ركن الحوار", c: "الرياض", cl: "جمعية ركن الحوار", d: "تصميم وتنفيذ متكامل لمقر الجمعية من التصميم الداخلي حتى التسليم الجاهز للتشغيل، بتوازن بين بيئة عمل احترافية وأجواء هادئة." },
    en: { t: "Dialogue Corner", c: "Riyadh", cl: "Dialogue Corner Association", d: "Turnkey headquarters from interior design to ready-to-operate, balancing a professional workplace with a calm atmosphere." } },
  { n: 15, cat: "residential", area: 280, dur: { ar: "25 يوماً", en: "25 days" }, year: "2020",
    ar: { t: "فيلا سكنية", c: "الرياض", cl: "عميل فردي", d: "أعمال تشطيب وتكسية لفيلا سكنية تشمل الأعمال الخشبية على الواجهات، بواجهات مميزة ومساحات أنيقة." },
    en: { t: "Residential Villa", c: "Riyadh", cl: "Private client", d: "Finishing and cladding works including timber façade work — distinctive façades and elegant living spaces." } },
  { n: 16, cat: "residential", area: 91, dur: { ar: "60 يوماً", en: "60 days" }, year: "2018",
    ar: { t: "كرفان خاص", c: "الرياض", cl: "عميل فردي", d: "تجهيز داخلي كامل لكرفان خاص يشمل الأسقف والأرضيات والإضاءة والأثاث، باستغلال ذكي للمساحة المحدودة." },
    en: { t: "Private Caravan", c: "Riyadh", cl: "Private client", d: "Complete interior fit-out — ceilings, flooring, lighting and furniture — making smart use of a limited space." } },
  { n: 17, cat: "residential", area: 527, dur: { ar: "5 أشهر", en: "5 months" }, year: "2015",
    ar: { t: "فيلا سكنية – جازان", c: "جازان", cl: "عميل فردي", d: "بدأنا من أرض فضاء ونفذنا أعمال الإنشاء والعظم بمساحة 527 م² خلال خمسة أشهر، بتركيز على السلامة الإنشائية ودقة الأبعاد." },
    en: { t: "Villa – Jazan", c: "Jazan", cl: "Private client", d: "From bare land to completed shell across 527 m² in five months, focused on structural integrity and dimensional accuracy." } },
  { n: 18, client: "taibah", cat: "other", area: 231, dur: { ar: "55 يوماً", en: "55 days" }, year: "2014",
    ar: { t: "معهد البحوث والاستشارات", c: "الرياض", cl: "معهد البحوث والاستشارات – جامعة طيبة", d: "تجهيز داخلي وتأثيث لمقر المعهد بمساحات عمل تناسب طابعه الأكاديمي والاستشاري، وتسليمه جاهزاً للتشغيل." },
    en: { t: "Research Institute", c: "Riyadh", cl: "Taibah University Research Institute", d: "Interior fit-out and furnishing suited to an academic and advisory setting, handed over ready to operate." } }
];

/* Clients — logos from the company profile (p.19), files in assets/clients/<logo>.png */
const CLIENTS = [
  { logo: "almajdiah",       ar: "الماجدية ريزدنس",                en: "Almajdiah Residence" },
  { logo: "shaml",           ar: "شمل",                            en: "Shaml" },
  { logo: "saudi-coffee",    ar: "الشركة السعودية للقهوة",          en: "Saudi Coffee Company" },
  { logo: "core",            ar: "مقهى Core",                      en: "Core Café" },
  { logo: "dialogue-corner", ar: "جمعية ركن الحوار",               en: "Dialogue Corner Association" },
  { logo: "mapact",          ar: "MAP ACT",                        en: "MAP ACT" },
  { logo: "dec",             ar: "ديناميك للاستشارات الهندسية",     en: "DEC Dynamic Engineering Consultants" },
  { logo: "cenomi",          ar: "سينومي",                         en: "Cenomi" },
  { logo: "ghezlan",         ar: "غزلان للتخليص الجمركي",           en: "Ghezlan Custom Clearance" },
  { logo: "mushar",          ar: "مشار للاستشارات",                 en: "Mushar Consulting" },
  { logo: "zc-contracting",  ar: "ZC للمقاولات",                   en: "ZC Contracting" },
  { logo: "red-shrimp",      ar: "مطعم ريد شريمب",                 en: "Red Shrimp Seafood Restaurant" },
  { logo: "compass",         ar: "المدور للمقاولات",                en: "Compass Contracting" },
  { logo: "taibah",          ar: "جامعة طيبة",                     en: "Taibah University" },
  { logo: "irqah",           ar: "جمعية تنمية عرقة",               en: "Irqah Development Association" },
  { logo: "amlood",          ar: "أملود",                          en: "Amlood" }
];

/* Our people by discipline (company profile p.5–6). No personal names are published on the site. */
const DISCIPLINES = [
  { code: "01", tag: "PMP",        ar: ["إدارة المشاريع", "مدراء مشاريع معتمدون (PMP)"],                       en: ["Project Management", "Certified project managers (PMP)"] },
  { code: "02", tag: "CIVIL",      ar: ["الهندسة المدنية والإنشائية", "مهندسو مواقع وتنفيذ ومهندسون معماريون"],  en: ["Civil & Structural Engineering", "Site, construction and architectural engineers"] },
  { code: "03", tag: "MEP",        ar: ["الهندسة الكهروميكانيكية", "مهندسو الأنظمة الميكانيكية والكهربائية"],     en: ["MEP Engineering", "Mechanical and electrical systems engineers"] },
  { code: "04", tag: "DESIGN",     ar: ["التصميم الداخلي", "مصممون داخليون، FF&E، ورسامون فنيون"],                en: ["Interior Design", "Interior designers, FF&E and draftsmen"] },
  { code: "05", tag: "SURVEY",     ar: ["الأعمال المساحية", "مساحون متخصصون في التوقيع وتحديد المناسيب"],       en: ["Surveying", "Surveyors specialized in setting out and levels"] },
  { code: "06", tag: "QA/QC · HSE", ar: ["الجودة والسلامة", "مختصو ضبط الجودة والصحة والسلامة المهنية"],        en: ["Quality & Safety", "QA/QC and HSE specialists"] },
  { code: "07", tag: "PLANNING",   ar: ["التخطيط والتكاليف", "مهندسو تخطيط ومراقبة تكاليف المشاريع"],           en: ["Planning & Cost Control", "Project planning and cost control engineers"] },
  { code: "08", tag: "TECH OFFICE", ar: ["المكتب الفني", "مهندسو رسومات تنفيذية وحصر كميات ومراقبة وثائق"],     en: ["Technical Office", "Shop drawing, quantity surveying and document control"] }
];

/* Departments (org chart, without names) */
const DEPARTMENTS = [
  { ar: "إدارة المشاريع", en: "Project Management" },
  { ar: "التصميم الداخلي", en: "Interior Design" },
  { ar: "تطوير الأعمال", en: "Business Development" },
  { ar: "الموارد البشرية", en: "Human Resources" }
];

/* Cities on the map.
   "match" = the Arabic city name used in PROJECTS (ar.c) — projects are counted automatically.
   type "projects" = orange marker · type "coverage" = service area without listed projects.
   region = province name in map-data.js (highlighted when it has projects).
   label = which side of the marker the name goes on ("start" = west, "end" = east). */
const CITIES = [
  { id: "riyadh",   ar: "الرياض",   en: "Riyadh",   match: "الرياض",   lat: 24.7136, lon: 46.6753, type: "projects", region: "Riyadh Region",  label: "end", hq: true },
  /* Jazan and Abu Arish are ~30 km apart: their labels are pulled away (dx/dy) with a leader line */
  { id: "jazan",    ar: "جازان",    en: "Jazan",    match: "جازان",    lat: 16.8892, lon: 42.5511, type: "projects", region: "Jazan Region",   label: "start", dx: -48, dy: 16 },
  { id: "abuarish", ar: "أبو عريش", en: "Abu Arish", match: "أبو عريش", lat: 16.9689, lon: 42.8325, type: "projects", region: "Jazan Region",   label: "end", dx: 44, dy: -40 },
  { id: "jeddah",   ar: "جدة",      en: "Jeddah",   match: "جدة",      lat: 21.4858, lon: 39.1925, type: "coverage", region: "Makkah Region",  label: "end" },
  { id: "dammam",   ar: "المنطقة الشرقية", en: "Eastern Province", match: "الدمام", lat: 26.4207, lon: 50.0888, type: "coverage", region: "Eastern Region", label: "start", dx: -6, dy: -34 }
];

/* Province names for map labels */
const REGION_NAMES = {
  "Riyadh Region": ["الرياض", "Riyadh"], "Makkah Region": ["مكة المكرمة", "Makkah"], "Al Madinah Region": ["المدينة المنورة", "Madinah"],
  "Eastern Region": ["الشرقية", "Eastern"], "Al-Qassim Region": ["القصيم", "Qassim"], "Hayel Region": ["حائل", "Hail"],
  "Tabuk Region": ["تبوك", "Tabuk"], "Northern Borders Region": ["الحدود الشمالية", "Northern Borders"], "Al Jawf Region": ["الجوف", "Al Jawf"],
  "Jazan Region": ["جازان", "Jazan"], "Najran Region": ["نجران", "Najran"], "'Asir Region": ["عسير", "Asir"], "Al Bahah Region": ["الباحة", "Al Bahah"]
};

/* Contact details used by the form */
const CONTACT = { whatsapp: "966569555903", email: "info@setline.sa" };
