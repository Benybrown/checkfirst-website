export type Lang = "en" | "fr" | "es" | "ar";

type T = Record<Lang, string>;

function t(en: string, fr: string, es: string, ar: string): T {
  return { en, fr, es, ar };
}

export const translations = {
  hero: {
    badge: t(
      "AI-Powered TPRM Platform",
      "Plateforme TPRM propulsée par l'IA",
      "Plataforma TPRM impulsada por IA",
      "منصة إدارة مخاطر الأطراف الثالثة بالذكاء الاصطناعي"
    ),
    titleLine1: t(
      "Stop chasing spreadsheets.",
      "Arrêtez de courir après les tableurs.",
      "Deja de perseguir hojas de cálculo.",
      "توقف عن ملاحقة جداول البيانات."
    ),
    titleLine2: t(
      "Assess vendors in minutes.",
      "Évaluez vos fournisseurs en minutes.",
      "Evalúa proveedores en minutos.",
      "قيّم الموردين في دقائق."
    ),
    description: t(
      "CheckFirst replaces slow, manual vendor security assessments with instant AI analysis. Evaluate vendors, scan infrastructure, and manage risk end-to-end.",
      "CheckFirst remplace les évaluations manuelles et lentes de la sécurité des fournisseurs par une analyse IA instantanée. Évaluez les fournisseurs, analysez l'infrastructure et gérez les risques de bout en bout.",
      "CheckFirst reemplaza las evaluaciones de seguridad de proveedores lentas y manuales con análisis instantáneo de IA. Evalúa proveedores, escanea infraestructura y gestiona riesgos de extremo a extremo.",
      "CheckFirst يستبدل تقييمات أمان الموردين اليدوية والبطيئة بتحليل فوري بالذكاء الاصطناعي. قيّم الموردين، وافحص البنية التحتية، وأدِر المخاطر من البداية إلى النهاية."
    ),
    ctaPrimary: t("Book a demo", "Réserver une démo", "Reservar una demo", "احجز عرضاً تجريبياً"),
    ctaSecondary: t("View pricing", "Voir les tarifs", "Ver precios", "عرض الأسعار"),
  },

  metrics: {
    fasterAssessments: t("Faster assessments", "Évaluations plus rapides", "Evaluaciones más rápidas", "تقييمات أسرع"),
    csaControls: t("CSA CCM controls", "Contrôles CSA CCM", "Controles CSA CCM", "ضوابط CSA CCM"),
    frameworksSupported: t("Frameworks supported", "Référentiels supportés", "Marcos compatibles", "أطر عمل مدعومة"),
    platformUptime: t("Platform uptime", "Disponibilité plateforme", "Disponibilidad plataforma", "وقت تشغيل المنصة"),
  },

  problem: {
    tag: t("The problem", "Le problème", "El problema", "المشكلة"),
    title: t("Security assessments are broken", "Les évaluations de sécurité sont défaillantes", "Las evaluaciones de seguridad están rotas", "تقييمات الأمان معطّلة"),
    buyers: t("Buyers", "Acheteurs", "Compradores", "المشترون"),
    buyersPain: t(
      "waste weeks sending spreadsheet questionnaires and chasing vendor responses",
      "perdent des semaines à envoyer des questionnaires et à relancer les fournisseurs",
      "pierden semanas enviando cuestionarios en hojas de cálculo y persiguiendo respuestas de proveedores",
      "يهدرون أسابيع في إرسال استبيانات ومتابعة ردود الموردين"
    ),
    vendors: t("Vendors", "Fournisseurs", "Proveedores", "الموردون"),
    vendorsPain: t(
      "answer the same 300 questions over and over, for every prospect",
      "répondent aux mêmes 300 questions encore et encore, pour chaque prospect",
      "responden las mismas 300 preguntas una y otra vez, para cada prospecto",
      "يجيبون على نفس الـ 300 سؤال مراراً وتكراراً لكل عميل محتمل"
    ),
    securityTeams: t("Security teams", "Équipes sécurité", "Equipos de seguridad", "فرق الأمان"),
    securityTeamsPain: t(
      "are buried in manual review work that doesn't scale",
      "sont submergées par un travail de revue manuelle qui ne passe pas à l'échelle",
      "están enterrados en trabajo de revisión manual que no escala",
      "غارقة في أعمال المراجعة اليدوية التي لا تتوسع"
    ),
    deals: t("Deals", "Contrats", "Acuerdos", "الصفقات"),
    dealsPain: t(
      "stall because security assessments take 4–8 weeks to complete",
      "stagnent car les évaluations de sécurité prennent 4 à 8 semaines",
      "se estancan porque las evaluaciones de seguridad tardan 4–8 semanas",
      "تتوقف لأن تقييمات الأمان تستغرق من 4 إلى 8 أسابيع"
    ),
    conclusion: t(
      "CheckFirst takes a different approach.",
      "CheckFirst adopte une approche différente.",
      "CheckFirst adopta un enfoque diferente.",
      "CheckFirst يتبع نهجاً مختلفاً."
    ),
    conclusionBody: t(
      "A unified platform that serves both buyers assessing vendors and vendors proving their security.",
      "Une plateforme unifiée qui sert à la fois les acheteurs évaluant les fournisseurs et les fournisseurs prouvant leur sécurité.",
      "Una plataforma unificada que sirve tanto a los compradores que evalúan proveedores como a los proveedores que demuestran su seguridad.",
      "منصة موحدة تخدم كلاً من المشترين الذين يقيّمون الموردين والموردين الذين يثبتون أمانهم."
    ),
  },

  capabilities: {
    tag: t("What you get", "Ce que vous obtenez", "Lo que obtienes", "ما تحصل عليه"),
    title: t(
      "Five engines. One platform. Complete coverage.",
      "Cinq moteurs. Une plateforme. Couverture complète.",
      "Cinco motores. Una plataforma. Cobertura completa.",
      "خمسة محركات. منصة واحدة. تغطية شاملة."
    ),
    description: t(
      "Named tools that do specific things — not vague promises about AI.",
      "Des outils concrets qui font des choses précises — pas de vagues promesses sur l'IA.",
      "Herramientas concretas que hacen cosas específicas — no promesas vagas sobre IA.",
      "أدوات محددة تقوم بأشياء محددة — وليست وعوداً غامضة حول الذكاء الاصطناعي."
    ),
    items: [
      {
        name: "JinoXtreme",
        tag: t("AI Assessment", "Évaluation IA", "Evaluación IA", "تقييم بالذكاء الاصطناعي"),
        description: t(
          "Evaluates vendors against all 243 Cloud Security Controls across 18 security domains — with evidence-based compliance ratings.",
          "Évalue les fournisseurs selon les 243 contrôles de sécurité cloud dans 18 domaines — avec des notes de conformité basées sur des preuves.",
          "Evalúa proveedores contra los 243 controles de seguridad en la nube en 18 dominios — con calificaciones de cumplimiento basadas en evidencia.",
          "يقيّم الموردين مقابل جميع ضوابط أمان السحابة الـ 243 عبر 18 مجالاً أمنياً — مع تصنيفات امتثال مبنية على الأدلة."
        ),
      },
      {
        name: "ProvEye",
        tag: t("External Scanning", "Scan externe", "Escaneo externo", "فحص خارجي"),
        description: t(
          "Independently public scans of vendor infrastructure — DNS, SSL, open ports, security headers, known vulnerabilities.",
          "Scans publics indépendants de l'infrastructure fournisseur — DNS, SSL, ports ouverts, en-têtes de sécurité, vulnérabilités connues.",
          "Escaneos públicos independientes de la infraestructura del proveedor — DNS, SSL, puertos abiertos, encabezados de seguridad, vulnerabilidades conocidas.",
          "فحوصات عامة مستقلة للبنية التحتية للموردين — DNS، SSL، المنافذ المفتوحة، رؤوس الأمان، الثغرات المعروفة."
        ),
      },
      {
        name: "Jino 360",
        tag: t("Vendor Research", "Recherche fournisseur", "Investigación de proveedor", "بحث عن المورد"),
        description: t(
          "AI-powered intelligence gathering from multiple web sources — company website, news, security incidents, certifications, public filings.",
          "Collecte de renseignements par IA depuis de multiples sources web — site de l'entreprise, actualités, incidents de sécurité, certifications, documents publics.",
          "Recopilación de inteligencia impulsada por IA de múltiples fuentes web — sitio web de la empresa, noticias, incidentes de seguridad, certificaciones, documentos públicos.",
          "جمع معلومات استخباراتية بالذكاء الاصطناعي من مصادر ويب متعددة — موقع الشركة، الأخبار، حوادث الأمان، الشهادات، الملفات العامة."
        ),
      },
      {
        name: t("Smart Questionnaires", "Questionnaires intelligents", "Cuestionarios inteligentes", "استبيانات ذكية"),
        tag: t("Adaptive Surveys", "Enquêtes adaptatives", "Encuestas adaptativas", "استطلاعات تكيّفية"),
        description: t(
          "Intelligent questionnaires that adapt to vendor context and risk profile. Questionnaires are presented depending on supplier answers for a dynamic assessment.",
          "Des questionnaires intelligents qui s'adaptent au contexte et au profil de risque du fournisseur. Les questionnaires sont présentés en fonction des réponses du fournisseur pour une évaluation dynamique.",
          "Cuestionarios inteligentes que se adaptan al contexto y perfil de riesgo del proveedor. Los cuestionarios se presentan según las respuestas del proveedor para una evaluación dinámica.",
          "استبيانات ذكية تتكيف مع سياق المورد وملف المخاطر. يتم تقديم الاستبيانات بناءً على إجابات المورد لتقييم ديناميكي."
        ),
      },
      {
        name: "JinoQA",
        tag: t("Q&A Assessment", "Évaluation Q&R", "Evaluación Q&A", "تقييم الأسئلة والأجوبة"),
        description: t(
          "AI specialized tool for assessing supplier feedbacks. Just upload all supplier Questions & Answers file and get a detailed report and security profile.",
          "Outil IA spécialisé pour évaluer les retours fournisseurs. Téléchargez le fichier Questions & Réponses du fournisseur et obtenez un rapport détaillé et un profil de sécurité.",
          "Herramienta IA especializada para evaluar respuestas de proveedores. Sube el archivo de Preguntas y Respuestas del proveedor y obtén un informe detallado y perfil de seguridad.",
          "أداة ذكاء اصطناعي متخصصة لتقييم ردود الموردين. ما عليك سوى تحميل ملف الأسئلة والأجوبة للحصول على تقرير مفصل وملف أمني."
        ),
      },
      {
        name: "JinoDocs",
        tag: t("Document Assessment", "Évaluation documentaire", "Evaluación documental", "تقييم المستندات"),
        description: t(
          "AI specialized tool for assessing supplier documentations. Just upload all supplier documentations PDF files and get a detailed report and security profile.",
          "Outil IA spécialisé pour évaluer la documentation fournisseur. Téléchargez les fichiers PDF de documentation et obtenez un rapport détaillé et un profil de sécurité.",
          "Herramienta IA especializada para evaluar documentación de proveedores. Sube los archivos PDF de documentación y obtén un informe detallado y perfil de seguridad.",
          "أداة ذكاء اصطناعي متخصصة لتقييم وثائق الموردين. ما عليك سوى تحميل ملفات PDF للحصول على تقرير مفصل وملف أمني."
        ),
      },
    ],
  },

  platform: {
    tag: t("The platform", "La plateforme", "La plataforma", "المنصة"),
    title: t("Everything connects", "Tout est connecté", "Todo se conecta", "كل شيء متصل"),
    modules: [
      {
        title: t("Supplier Management", "Gestion des fournisseurs", "Gestión de proveedores", "إدارة الموردين"),
        description: t(
          "9-stage lifecycle tracking from onboarding to offboarding. Full risk classification, compliance status, and assessment history per vendor.",
          "Suivi du cycle de vie en 9 étapes, de l'intégration à la désactivation. Classification des risques, statut de conformité et historique des évaluations par fournisseur.",
          "Seguimiento del ciclo de vida en 9 etapas desde la incorporación hasta la baja. Clasificación de riesgos completa, estado de cumplimiento e historial de evaluaciones por proveedor.",
          "تتبع دورة حياة من 9 مراحل من الإعداد إلى الإنهاء. تصنيف كامل للمخاطر وحالة الامتثال وسجل التقييمات لكل مورد."
        ),
      },
      {
        title: t("Risk Management", "Gestion des risques", "Gestión de riesgos", "إدارة المخاطر"),
        description: t(
          "5×5 risk matrix with 4-stage workflow: Identification → Assessment → Treatment → Monitoring. Accept, Mitigate, Transfer, or Avoid — each with documented rationale.",
          "Matrice de risque 5×5 avec workflow en 4 étapes : Identification → Évaluation → Traitement → Surveillance. Accepter, Atténuer, Transférer ou Éviter — chacun avec une justification documentée.",
          "Matriz de riesgos 5×5 con flujo de trabajo de 4 etapas: Identificación → Evaluación → Tratamiento → Monitoreo. Aceptar, Mitigar, Transferir o Evitar — cada uno con justificación documentada.",
          "مصفوفة مخاطر 5×5 مع سير عمل من 4 مراحل: التحديد ← التقييم ← المعالجة ← المراقبة. قبول، تخفيف، نقل أو تجنب — كل منها بمبررات موثقة."
        ),
      },
      {
        title: t("Questionnaire System", "Système de questionnaires", "Sistema de cuestionarios", "نظام الاستبيانات"),
        description: t(
          "Three types: Triage (quick screening), Standard (full custom), and Smart (AI-generated). Built-in CSA CAIQ template. Semantic response analysis via Jino-QA.",
          "Trois types : Triage (screening rapide), Standard (personnalisé complet) et Intelligent (généré par IA). Modèle CSA CAIQ intégré. Analyse sémantique des réponses via Jino-QA.",
          "Tres tipos: Triaje (filtrado rápido), Estándar (personalizado completo) e Inteligente (generado por IA). Plantilla CSA CAIQ integrada. Análisis semántico de respuestas vía Jino-QA.",
          "ثلاثة أنواع: فرز (فحص سريع)، قياسي (مخصص بالكامل)، وذكي (مُنشأ بالذكاء الاصطناعي). قالب CSA CAIQ مدمج. تحليل دلالي للردود عبر Jino-QA."
        ),
      },
      {
        title: t("Document Vault", "Coffre-fort documentaire", "Bóveda de documentos", "خزنة المستندات"),
        description: t(
          "Centralised storage for SOC 2 reports, ISO certificates, policies, NDAs. Linked to specific suppliers, assessments, or questionnaires for cross-referencing.",
          "Stockage centralisé pour les rapports SOC 2, certificats ISO, politiques, NDA. Lié à des fournisseurs, évaluations ou questionnaires spécifiques pour un référencement croisé.",
          "Almacenamiento centralizado para informes SOC 2, certificados ISO, políticas, NDAs. Vinculado a proveedores, evaluaciones o cuestionarios específicos para referencias cruzadas.",
          "تخزين مركزي لتقارير SOC 2، شهادات ISO، السياسات، اتفاقيات عدم الإفصاح. مرتبط بموردين وتقييمات واستبيانات محددة للإحالة المرجعية."
        ),
      },
      {
        title: t("Task Management", "Gestion des tâches", "Gestión de tareas", "إدارة المهام"),
        description: t(
          "Remediation tracking with priority levels, due dates, and assignees. Tasks auto-link to risks, assessments, and suppliers. Overdue alerts keep things moving.",
          "Suivi des remédiations avec niveaux de priorité, dates d'échéance et assignataires. Les tâches se lient automatiquement aux risques, évaluations et fournisseurs. Les alertes de retard maintiennent le rythme.",
          "Seguimiento de remediación con niveles de prioridad, fechas límite y asignados. Las tareas se vinculan automáticamente a riesgos, evaluaciones y proveedores. Las alertas de vencimiento mantienen todo en movimiento.",
          "تتبع الإصلاحات مع مستويات الأولوية وتواريخ الاستحقاق والمسؤولين. ترتبط المهام تلقائياً بالمخاطر والتقييمات والموردين. تنبيهات التأخير تحافظ على سير العمل."
        ),
      },
      {
        title: t("CSA Framework", "Référentiel CSA", "Marco CSA", "إطار عمل CSA"),
        description: t(
          "Full CSA Cloud Controls Matrix implementation — 18 security domains, 243 controls. Map vendor gaps against industry standards and generate compliance reports.",
          "Implémentation complète de la matrice CSA Cloud Controls — 18 domaines de sécurité, 243 contrôles. Cartographiez les lacunes fournisseurs par rapport aux standards et générez des rapports de conformité.",
          "Implementación completa de la Matriz de Controles en la Nube CSA — 18 dominios de seguridad, 243 controles. Mapea brechas de proveedores contra estándares de la industria y genera informes de cumplimiento.",
          "تطبيق كامل لمصفوفة ضوابط السحابة CSA — 18 مجالاً أمنياً، 243 ضابطاً. حدد فجوات الموردين مقابل معايير الصناعة وأنشئ تقارير الامتثال."
        ),
      },
    ],
  },

  howItWorks: {
    tag: t("How it works", "Comment ça marche", "Cómo funciona", "كيف يعمل"),
    title: t(
      "From vendor intake to ongoing monitoring",
      "De l'intégration fournisseur à la surveillance continue",
      "Desde la incorporación del proveedor hasta el monitoreo continuo",
      "من استقبال المورد إلى المراقبة المستمرة"
    ),
    steps: [
      {
        step: "01",
        title: t("Add your vendors", "Ajoutez vos fournisseurs", "Agrega tus proveedores", "أضف مورديك"),
        description: t(
          "Create supplier profiles or use the intake portal for self-registration. Import existing vendor lists. No spreadsheets needed.",
          "Créez des profils fournisseurs ou utilisez le portail d'accueil pour l'auto-inscription. Importez des listes de fournisseurs existantes. Pas de tableurs nécessaires.",
          "Crea perfiles de proveedores o usa el portal de registro automático. Importa listas de proveedores existentes. Sin hojas de cálculo.",
          "أنشئ ملفات تعريف للموردين أو استخدم بوابة التسجيل الذاتي. استورد قوائم الموردين الحالية. لا حاجة لجداول البيانات."
        ),
      },
      {
        step: "02",
        title: t("Scan with ProvEye", "Scannez avec ProvEye", "Escanea con ProvEye", "افحص مع ProvEye"),
        description: t(
          "Run an external security scan on any vendor domain. DNS, SSL, ports, headers, vulnerabilities — in 30–60 seconds, no vendor cooperation required.",
          "Lancez un scan de sécurité externe sur n'importe quel domaine fournisseur. DNS, SSL, ports, en-têtes, vulnérabilités — en 30–60 secondes, sans coopération du fournisseur.",
          "Ejecuta un escaneo de seguridad externo en cualquier dominio de proveedor. DNS, SSL, puertos, encabezados, vulnerabilidades — en 30–60 segundos, sin cooperación del proveedor.",
          "قم بإجراء فحص أمني خارجي على أي نطاق مورد. DNS، SSL، المنافذ، الرؤوس، الثغرات — في 30-60 ثانية، دون الحاجة لتعاون المورد."
        ),
      },
      {
        step: "03",
        title: t("AI assesses risk", "L'IA évalue le risque", "La IA evalúa el riesgo", "الذكاء الاصطناعي يقيّم المخاطر"),
        description: t(
          "JinoXtreme CSA evaluates against all 243 CSA controls. Jino 360 researches across the web. Smart Questionnaires adapt to each vendor's profile.",
          "JinoXtreme CSA évalue selon les 243 contrôles CSA. Jino 360 recherche sur le web. Les questionnaires intelligents s'adaptent au profil de chaque fournisseur.",
          "JinoXtreme CSA evalúa contra los 243 controles CSA. Jino 360 investiga en la web. Los cuestionarios inteligentes se adaptan al perfil de cada proveedor.",
          "JinoXtreme CSA يقيّم مقابل جميع ضوابط CSA الـ 243. Jino 360 يبحث عبر الويب. الاستبيانات الذكية تتكيف مع ملف كل مورد."
        ),
      },
      {
        step: "04",
        title: t("Review and decide", "Révisez et décidez", "Revisa y decide", "راجع وقرر"),
        description: t(
          "All data feeds into a unified risk profile with 5×5 matrix scoring. AI-generated reports with executive summaries, findings, and prioritised recommendations.",
          "Toutes les données alimentent un profil de risque unifié avec notation matricielle 5×5. Rapports générés par IA avec résumés exécutifs, conclusions et recommandations prioritaires.",
          "Todos los datos alimentan un perfil de riesgo unificado con puntuación de matriz 5×5. Informes generados por IA con resúmenes ejecutivos, hallazgos y recomendaciones priorizadas.",
          "جميع البيانات تصب في ملف مخاطر موحد مع تقييم بمصفوفة 5×5. تقارير مُنشأة بالذكاء الاصطناعي مع ملخصات تنفيذية ونتائج وتوصيات مرتبة حسب الأولوية."
        ),
      },
    ],
  },

  testimonials: {
    tag: t("What teams are saying", "Ce que disent les équipes", "Lo que dicen los equipos", "ماذا تقول الفرق"),
    title: t("Built for security teams that ship", "Conçu pour les équipes sécurité qui livrent", "Hecho para equipos de seguridad que entregan", "مصمم لفرق الأمان التي تنجز"),
    items: [
      {
        quote: t(
          "We cut our vendor assessment cycle from three weeks to two days. The AI findings are surprisingly thorough — it catches things our team used to miss.",
          "Nous avons réduit notre cycle d'évaluation des fournisseurs de trois semaines à deux jours. Les résultats de l'IA sont étonnamment approfondis — elle détecte des choses que notre équipe manquait.",
          "Redujimos nuestro ciclo de evaluación de proveedores de tres semanas a dos días. Los hallazgos de la IA son sorprendentemente exhaustivos — detecta cosas que nuestro equipo solía pasar por alto.",
          "قلّصنا دورة تقييم الموردين من ثلاثة أسابيع إلى يومين. نتائج الذكاء الاصطناعي دقيقة بشكل مدهش — يكتشف أشياء كان فريقنا يغفل عنها."
        ),
        name: "Sarah Mitchell",
        role: t("Head of Security", "Directrice de la sécurité", "Directora de seguridad", "رئيسة الأمان"),
        company: "Meridian Financial",
      },
      {
        quote: t(
          "CheckFirst replaced four different tools for us. The CSA mapping alone saved our compliance team hundreds of hours per audit cycle.",
          "CheckFirst a remplacé quatre outils différents pour nous. La cartographie CSA seule a fait gagner des centaines d'heures à notre équipe de conformité par cycle d'audit.",
          "CheckFirst reemplazó cuatro herramientas diferentes para nosotros. Solo el mapeo CSA ahorró a nuestro equipo de cumplimiento cientos de horas por ciclo de auditoría.",
          "CheckFirst استبدل أربع أدوات مختلفة لدينا. رسم خرائط CSA وحده وفر لفريق الامتثال مئات الساعات في كل دورة تدقيق."
        ),
        name: "James Okafor",
        role: "CISO",
        company: "HealthBridge Systems",
      },
      {
        quote: t(
          "The smart questionnaires are a game-changer. Our vendors actually complete them because they only see relevant questions.",
          "Les questionnaires intelligents changent la donne. Nos fournisseurs les complètent réellement car ils ne voient que les questions pertinentes.",
          "Los cuestionarios inteligentes son un cambio radical. Nuestros proveedores realmente los completan porque solo ven preguntas relevantes.",
          "الاستبيانات الذكية غيّرت قواعد اللعبة. موردونا يكملونها فعلاً لأنهم لا يرون سوى الأسئلة ذات الصلة."
        ),
        name: "Laura Chen",
        role: t("Vendor Risk Manager", "Responsable risque fournisseur", "Gerente de riesgo de proveedores", "مديرة مخاطر الموردين"),
        company: "Ascend Cloud",
      },
    ],
  },

  pricing: {
    tag: t("Pricing", "Tarifs", "Precios", "الأسعار"),
    title: t("Simple, transparent pricing", "Des tarifs simples et transparents", "Precios simples y transparentes", "أسعار بسيطة وشفافة"),
    description: t("Clear plans. No surprises.", "Des plans clairs. Sans surprises.", "Planes claros. Sin sorpresas.", "خطط واضحة. بدون مفاجآت."),
    mostPopular: t("Most popular", "Le plus populaire", "Más popular", "الأكثر شعبية"),
    plans: [
      {
        name: t("Starter", "Starter", "Starter", "المبتدئ"),
        price: t("Contact us", "Contactez-nous", "Contáctenos", "اتصل بنا"),
        note: t("25 ProvEye scans/mo", "25 scans ProvEye/mois", "25 escaneos ProvEye/mes", "25 فحص ProvEye/شهر"),
        highlight: false,
      },
      {
        name: t("Professional", "Professionnel", "Profesional", "المحترف"),
        price: t("Contact us", "Contactez-nous", "Contáctenos", "اتصل بنا"),
        note: t("Unlimited assessments", "Évaluations illimitées", "Evaluaciones ilimitadas", "تقييمات غير محدودة"),
        highlight: true,
      },
      {
        name: t("Enterprise", "Entreprise", "Empresa", "المؤسسة"),
        price: t("Custom", "Sur mesure", "Personalizado", "مخصص"),
        note: t("Dedicated instance", "Instance dédiée", "Instancia dedicada", "نسخة مخصصة"),
        highlight: false,
      },
    ],
    seePlan: t("See", "Voir", "Ver", "عرض"),
    plan: t("plan", "plan", "plan", "خطة"),
  },

  faq: {
    tag: t("FAQ", "FAQ", "FAQ", "الأسئلة الشائعة"),
    title: t("Common questions", "Questions fréquentes", "Preguntas frecuentes", "الأسئلة الشائعة"),
    description: t(
      "Everything you need to know about getting started.",
      "Tout ce que vous devez savoir pour commencer.",
      "Todo lo que necesitas saber para empezar.",
      "كل ما تحتاج معرفته للبدء."
    ),
    items: [
      {
        question: t(
          "How does the AI assessment work?",
          "Comment fonctionne l'évaluation par IA ?",
          "¿Cómo funciona la evaluación con IA?",
          "كيف يعمل التقييم بالذكاء الاصطناعي؟"
        ),
        answer: t(
          "JinoXtreme CSA evaluates your vendor against all 243 CSA Cloud Controls Matrix controls across 18 security domains. It combines data from the vendor profile, ProvEye scan results, questionnaire responses, and web research to produce per-control compliance ratings with evidence-based justifications.",
          "JinoXtreme CSA évalue votre fournisseur selon les 243 contrôles de la matrice CSA Cloud Controls dans 18 domaines de sécurité. Il combine les données du profil fournisseur, les résultats de scan ProvEye, les réponses aux questionnaires et la recherche web pour produire des notes de conformité par contrôle avec des justifications basées sur des preuves.",
          "JinoXtreme CSA evalúa a tu proveedor contra los 243 controles de la Matriz de Controles en la Nube CSA en 18 dominios de seguridad. Combina datos del perfil del proveedor, resultados de escaneo ProvEye, respuestas a cuestionarios e investigación web para producir calificaciones de cumplimiento por control con justificaciones basadas en evidencia.",
          "JinoXtreme CSA يقيّم موردك مقابل جميع ضوابط مصفوفة التحكم السحابية CSA الـ 243 عبر 18 مجالاً أمنياً. يجمع البيانات من ملف المورد ونتائج فحص ProvEye وردود الاستبيانات والبحث على الويب لإنتاج تصنيفات امتثال لكل ضابط مع مبررات مبنية على الأدلة."
        ),
      },
      {
        question: t(
          "What frameworks do you support?",
          "Quels référentiels supportez-vous ?",
          "¿Qué marcos de trabajo soportan?",
          "ما هي أطر العمل التي تدعمونها؟"
        ),
        answer: t(
          "CheckFirst supports 40+ security and compliance frameworks including CSA CCM v4.0, SOC 2, ISO 27001/27002/27017/27018, NIST CSF, GDPR, DORA, NIS2, PCI DSS, HIPAA/HITRUST, CIS Controls, and more. Custom framework templates are available on Enterprise plans.",
          "CheckFirst supporte plus de 40 référentiels de sécurité et de conformité, dont CSA CCM v4.0, SOC 2, ISO 27001/27002/27017/27018, NIST CSF, RGPD, DORA, NIS2, PCI DSS, HIPAA/HITRUST, CIS Controls, et plus encore. Des modèles de référentiels personnalisés sont disponibles sur les plans Entreprise.",
          "CheckFirst soporta más de 40 marcos de seguridad y cumplimiento incluyendo CSA CCM v4.0, SOC 2, ISO 27001/27002/27017/27018, NIST CSF, GDPR, DORA, NIS2, PCI DSS, HIPAA/HITRUST, CIS Controls, y más. Plantillas de marcos personalizados están disponibles en planes Enterprise.",
          "CheckFirst يدعم أكثر من 40 إطار عمل للأمان والامتثال بما في ذلك CSA CCM v4.0، SOC 2، ISO 27001/27002/27017/27018، NIST CSF، GDPR، DORA، NIS2، PCI DSS، HIPAA/HITRUST، CIS Controls، والمزيد. قوالب أطر العمل المخصصة متاحة في خطط المؤسسة."
        ),
      },
      {
        question: t(
          "Can vendors fill out assessments themselves?",
          "Les fournisseurs peuvent-ils remplir les évaluations eux-mêmes ?",
          "¿Pueden los proveedores completar las evaluaciones por sí mismos?",
          "هل يمكن للموردين ملء التقييمات بأنفسهم؟"
        ),
        answer: t(
          "Yes. Send questionnaires directly to vendors via a secure link. They respond in their browser — no account needed. Jino-QA then semantically analyses their responses for completeness, quality, consistency, and compliance alignment.",
          "Oui. Envoyez des questionnaires directement aux fournisseurs via un lien sécurisé. Ils répondent dans leur navigateur — pas besoin de compte. Jino-QA analyse ensuite sémantiquement leurs réponses en termes de complétude, qualité, cohérence et alignement de conformité.",
          "Sí. Envía cuestionarios directamente a los proveedores a través de un enlace seguro. Responden en su navegador — sin necesidad de cuenta. Jino-QA luego analiza semánticamente sus respuestas en cuanto a completitud, calidad, consistencia y alineación de cumplimiento.",
          "نعم. أرسل الاستبيانات مباشرة إلى الموردين عبر رابط آمن. يردون في متصفحهم — لا حاجة لحساب. Jino-QA يحلل بعد ذلك ردودهم دلالياً من حيث الاكتمال والجودة والاتساق وتوافق الامتثال."
        ),
      },
      {
        question: t(
          "How long does an assessment take?",
          "Combien de temps prend une évaluation ?",
          "¿Cuánto tiempo toma una evaluación?",
          "كم يستغرق التقييم؟"
        ),
        answer: t(
          "ProvEye external scans complete in 30–60 seconds. JinoXtreme CSA assessments with full 243-control evaluation typically finish in minutes. Jino 360 web research runs concurrently. Most vendors are fully assessed within 10 minutes.",
          "Les scans externes ProvEye se terminent en 30–60 secondes. Les évaluations JinoXtreme CSA avec l'évaluation complète des 243 contrôles se terminent généralement en quelques minutes. La recherche web Jino 360 s'exécute en parallèle. La plupart des fournisseurs sont entièrement évalués en 10 minutes.",
          "Los escaneos externos de ProvEye se completan en 30–60 segundos. Las evaluaciones JinoXtreme CSA con evaluación completa de 243 controles típicamente terminan en minutos. La investigación web de Jino 360 se ejecuta simultáneamente. La mayoría de los proveedores son evaluados completamente en 10 minutos.",
          "فحوصات ProvEye الخارجية تكتمل في 30-60 ثانية. تقييمات JinoXtreme CSA مع التقييم الكامل لـ 243 ضابطاً تنتهي عادة في دقائق. بحث Jino 360 على الويب يعمل بالتوازي. معظم الموردين يتم تقييمهم بالكامل خلال 10 دقائق."
        ),
      },
      {
        question: t(
          "Is my data secure?",
          "Mes données sont-elles sécurisées ?",
          "¿Están seguros mis datos?",
          "هل بياناتي آمنة؟"
        ),
        answer: t(
          "Each customer gets a fully isolated instance with their own database. Data is encrypted at rest and in transit. We support two-factor authentication, 4-layer role-based access control, SSO, and SCIM provisioning.",
          "Chaque client dispose d'une instance entièrement isolée avec sa propre base de données. Les données sont chiffrées au repos et en transit. Nous supportons l'authentification à deux facteurs, le contrôle d'accès basé sur les rôles à 4 niveaux, le SSO et le provisionnement SCIM.",
          "Cada cliente obtiene una instancia completamente aislada con su propia base de datos. Los datos están cifrados en reposo y en tránsito. Soportamos autenticación de dos factores, control de acceso basado en roles de 4 capas, SSO y aprovisionamiento SCIM.",
          "كل عميل يحصل على نسخة معزولة تماماً مع قاعدة بياناته الخاصة. البيانات مشفرة في حالة السكون والنقل. ندعم المصادقة الثنائية، والتحكم في الوصول القائم على الأدوار من 4 مستويات، وتسجيل الدخول الموحد، وتوفير SCIM."
        ),
      },
      {
        question: t(
          "What does ProvEye scan?",
          "Que scanne ProvEye ?",
          "¿Qué escanea ProvEye?",
          "ماذا يفحص ProvEye؟"
        ),
        answer: t(
          "ProvEye independently analyses vendor infrastructure: DNS health (SPF, DKIM, DMARC), SSL/TLS status, open ports, security headers (HSTS, CSP), and known vulnerabilities (CVE lookups). No vendor cooperation needed.",
          "ProvEye analyse indépendamment l'infrastructure fournisseur : santé DNS (SPF, DKIM, DMARC), statut SSL/TLS, ports ouverts, en-têtes de sécurité (HSTS, CSP) et vulnérabilités connues (recherche CVE). Aucune coopération du fournisseur nécessaire.",
          "ProvEye analiza independientemente la infraestructura del proveedor: salud DNS (SPF, DKIM, DMARC), estado SSL/TLS, puertos abiertos, encabezados de seguridad (HSTS, CSP) y vulnerabilidades conocidas (búsqueda CVE). Sin necesidad de cooperación del proveedor.",
          "ProvEye يحلل بشكل مستقل البنية التحتية للمورد: صحة DNS (SPF، DKIM، DMARC)، حالة SSL/TLS، المنافذ المفتوحة، رؤوس الأمان (HSTS، CSP)، والثغرات المعروفة (بحث CVE). لا حاجة لتعاون المورد."
        ),
      },
    ],
  },

  cta: {
    title: t(
      "Ready to take control of vendor risk?",
      "Prêt à prendre le contrôle du risque fournisseur ?",
      "¿Listo para tomar el control del riesgo de proveedores?",
      "هل أنت مستعد للسيطرة على مخاطر الموردين؟"
    ),
    description: t(
      "See how CheckFirst can replace your spreadsheets, emails, and guesswork with a single AI-powered platform.",
      "Découvrez comment CheckFirst peut remplacer vos tableurs, emails et approximations par une seule plateforme propulsée par l'IA.",
      "Descubre cómo CheckFirst puede reemplazar tus hojas de cálculo, correos electrónicos y conjeturas con una sola plataforma impulsada por IA.",
      "اكتشف كيف يمكن لـ CheckFirst استبدال جداول البيانات والبريد الإلكتروني والتخمين بمنصة واحدة مدعومة بالذكاء الاصطناعي."
    ),
    ctaPrimary: t("Book a demo", "Réserver une démo", "Reservar una demo", "احجز عرضاً تجريبياً"),
    ctaSecondary: t("View pricing", "Voir les tarifs", "Ver precios", "عرض الأسعار"),
  },
} as const;
