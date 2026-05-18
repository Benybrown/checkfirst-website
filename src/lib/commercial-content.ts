import type { Metadata } from "next";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export type LinkCard = {
  href: string;
  title: string;
  description: string;
};

export type TextPair = {
  title: string;
  description: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CommercialPageContent = {
  path: string;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  coverageTitle: string;
  coverageText: string;
  sections: TextPair[];
  evidenceTitle: string;
  evidenceText: string;
  evidence: TextPair[];
  buyerTitle: string;
  buyerText: string;
  buyerPoints: string[];
  workflow: WorkflowStep[];
  faqs: FAQItem[];
  alternates?: Record<string, string>;
};

export const buyerPages: LinkCard[] = [
  {
    href: "/soc-2-vendor-risk",
    title: "SOC 2 vendor risk software",
    description: "Audit-ready vendor evidence for SOC 2 CC9.2 without spreadsheet chaos.",
  },
  {
    href: "/iso-27001-supplier-risk",
    title: "ISO 27001 supplier risk",
    description: "Supplier relationship evidence for ISO 27001 A.5.19-A.5.23.",
  },
  {
    href: "/assessments",
    title: "Vendor security assessment workflow",
    description: "Questionnaires, scans, documents, and reviewer decisions in one flow.",
  },
  {
    href: "/managed-tprm",
    title: "Managed TPRM support",
    description: "Analyst capacity for vendor follow-up, remediation, and reporting.",
  },
];

export const resourceLinks: LinkCard[] = [
  {
    href: "https://checkfirst.io/blog/best-tprm-tool-2026/",
    title: "Best TPRM Software in 2026",
    description: "Compare TPRM software options and category buying criteria.",
  },
  {
    href: "https://checkfirst.io/blog/vendor-security-assessment-guide-2026/",
    title: "Vendor Security Assessment Guide",
    description: "Improve supplier assessments, evidence review, and decision quality.",
  },
  {
    href: "https://checkfirst.io/blog/3rd-party-risk-management-program/",
    title: "Third-Party Risk Management Program Guide",
    description: "Build a repeatable program around vendor risk findings.",
  },
  {
    href: "https://checkfirst.io/blog/tprm-agentic-ai-assessment/",
    title: "AI Vendor Risk Assessment",
    description: "Use AI to accelerate due diligence while keeping human approval.",
  },
];

const commonSocIsoKeywords = [
  "tprm software",
  "vendor risk management",
  "vendor security assessment",
  "supplier due diligence",
  "third-party risk management",
];

export const commercialPages: Record<string, CommercialPageContent> = {
  "/soc-2-vendor-risk": {
    path: "/soc-2-vendor-risk",
    eyebrow: "SOC 2 vendor risk",
    title: "Vendor risk for SOC 2 audits, in your language, for startup-friendly pricing.",
    lead:
      "CheckFirst gives B2B SaaS teams an audit-ready vendor risk program for SOC 2 CC9.2: vendor inventory, tiering, questionnaires, evidence review, scans, remediation tracking, and reviewer decisions.",
    cta: "Start SOC 2 vendor review",
    metadataTitle: "SOC 2 Vendor Risk Software | CheckFirst",
    metadataDescription:
      "Build audit-ready SOC 2 vendor risk evidence for CC9.2 with vendor inventory, questionnaires, documents, scans, remediation, and reviewer decisions.",
    keywords: ["SOC 2 vendor risk", "SOC 2 CC9.2 vendor evidence", ...commonSocIsoKeywords],
    coverageTitle: "What SOC 2 teams need from vendor-risk software",
    coverageText:
      "Use this workflow when your SaaS team is close to a SOC 2 audit, customer security review, or Type I to Type II transition and needs a defensible vendor-risk record quickly.",
    sections: [
      {
        title: "Built around SOC 2 CC9.2 evidence",
        description:
          "Track vendor classification, due diligence, monitoring, remediation, and decision records in a structure your auditor can follow.",
      },
      {
        title: "Clear tiering before evidence collection",
        description:
          "Separate critical subprocessors and production vendors from low-risk tools so the team spends review time where it matters.",
      },
      {
        title: "Evidence review, not document storage only",
        description:
          "JinoQA reads questionnaire answers, JinoDocs reviews SOC 2 reports and policies, and ProvEye checks public posture before approval.",
      },
      {
        title: "Audit-ready decision trail",
        description:
          "Keep the reviewer, approval status, risk treatment, open remediation, and reassessment date connected to the vendor profile.",
      },
      {
        title: "Startup-friendly operating model",
        description:
          "Move from Excel, Notion, and email to a repeatable workflow without buying a broad enterprise compliance platform before you need one.",
      },
      {
        title: "Multilingual audit workflows",
        description:
          "English and French workflows support teams in France, Quebec, and global SaaS markets selling into enterprise buyers.",
      },
    ],
    evidenceTitle: "The evidence pack your auditor can review without reconstruction",
    evidenceText:
      "A complete SOC 2 evidence record is more than a questionnaire. It shows the full chain from vendor inventory to risk decision.",
    evidence: [
      {
        title: "Vendor inventory and ownership",
        description:
          "Vendor name, business owner, service purpose, data access, criticality, system dependency, and review status.",
      },
      {
        title: "Risk tiering rationale",
        description:
          "Document why one vendor receives a light review while another requires questionnaires, reports, scans, and remediation.",
      },
      {
        title: "Questionnaires and security documents",
        description:
          "Store completed questionnaires, SOC 2 reports, ISO certificates, policies, subprocessors, privacy documents, and exceptions.",
      },
      {
        title: "External posture signals",
        description:
          "Use public checks for DNS, SSL/TLS, exposed services, headers, and known issues as supporting review evidence.",
      },
      {
        title: "Remediation and acceptance records",
        description:
          "Capture gaps, owners, due dates, treatment decisions, approvals, and reassessment cadence.",
      },
      {
        title: "Exportable audit narrative",
        description:
          "Package the full review path so the auditor sees what was requested, what was reviewed, and why the decision was made.",
      },
    ],
    buyerTitle: "Best fit when SOC 2 is close and spreadsheets are breaking",
    buyerText:
      "Use this workflow when vendor-risk proof is urgent, but rebuilding the entire compliance stack would slow the team down.",
    buyerPoints: [
      "B2B SaaS preparing for first SOC 2 Type I or Type II.",
      "Teams that already use Vanta, Drata, Secureframe, or consultants but still manage vendor risk manually.",
      "Founders and compliance leads who need credible CC9.2 evidence before enterprise customer reviews.",
      "Security teams that want vendor questionnaires, document review, scans, remediation, and approvals in one record.",
      "French, Quebec, and international SaaS teams that need an English/French workflow for stakeholders.",
    ],
    workflow: [
      {
        step: "01",
        title: "Import your vendor list",
        description: "Add vendors, owners, data access, criticality, and audit scope.",
      },
      {
        step: "02",
        title: "Tier by audit risk",
        description: "Separate low-risk suppliers from critical systems that need deeper evidence.",
      },
      {
        step: "03",
        title: "Collect SOC 2 evidence",
        description: "Send questionnaires, upload SOC 2 reports, and request policies through one workflow.",
      },
      {
        step: "04",
        title: "Review with AI support",
        description: "Flag weak answers, missing documents, expired reports, and risky public posture.",
      },
      {
        step: "05",
        title: "Export the evidence pack",
        description: "Give auditors a consistent record of assessment, treatment, and follow-up.",
      },
    ],
    faqs: [
      {
        question: "Does this replace my SOC 2 automation platform?",
        answer:
          "It can, if vendor risk is your main gap. It can also sit beside Vanta, Drata, or a consultant if you only need a focused vendor-risk workflow.",
      },
      {
        question: "Which SOC 2 area does it support?",
        answer:
          "The workflow is positioned around vendor-risk evidence for CC9.2 and supporting records: inventory, risk tiering, due diligence, monitoring, and remediation.",
      },
      {
        question: "What counts as good SOC 2 vendor evidence?",
        answer:
          "A strong record usually includes inventory, owner, vendor purpose, data access, risk tier, questionnaire answers, independent reports, reviewed documents, remediation, final decision, and reassessment date.",
      },
      {
        question: "Do all vendors need the same review?",
        answer:
          "No. Low-risk vendors can follow a lighter path. Critical vendors, subprocessors, production services, and vendors touching customer data should receive deeper evidence collection.",
      },
      {
        question: "Can vendors answer without an account?",
        answer: "Yes. Secure questionnaire links let vendors respond without becoming full users.",
      },
    ],
  },

  "/iso-27001-supplier-risk": {
    path: "/iso-27001-supplier-risk",
    eyebrow: "ISO 27001 supplier risk",
    title: "Supplier risk evidence for ISO 27001, without spreadsheet control drift.",
    lead:
      "CheckFirst helps SaaS and technology teams document supplier relationships, supplier agreements, monitoring, ICT supply chain risk, and cloud service evidence for ISO 27001 A.5.19 through A.5.23.",
    cta: "Map ISO supplier controls",
    metadataTitle: "ISO 27001 Supplier Risk Software | CheckFirst",
    metadataDescription:
      "Manage supplier evidence for ISO 27001 A.5.19 through A.5.23 with inventory, agreements, monitoring, ICT supply chain review, and cloud service records.",
    keywords: ["ISO 27001 supplier risk", "ISO 27001 supplier controls", ...commonSocIsoKeywords],
    coverageTitle: "Supplier-risk control evidence for ISO 27001 programs",
    coverageText:
      "Use this workflow when you need ISO 27001 supplier evidence without creating a separate process outside your broader TPRM program.",
    sections: [
      {
        title: "A.5.19 Supplier relationships",
        description:
          "Maintain supplier inventory, ownership, criticality, data access, business dependency, and risk context.",
      },
      {
        title: "A.5.20 Supplier agreements",
        description:
          "Track required security expectations, contractual obligations, evidence requests, and document review status.",
      },
      {
        title: "A.5.21 ICT supply chain",
        description:
          "Review infrastructure exposure, service dependency, downstream providers, and public posture signals.",
      },
      {
        title: "A.5.22 Monitoring and change",
        description:
          "Keep reassessment schedules, renewal triggers, remediation tasks, and change-driven reviews visible.",
      },
      {
        title: "A.5.23 Cloud service use",
        description:
          "Capture cloud provider evidence, certifications, shared responsibility notes, and customer configuration obligations.",
      },
      {
        title: "Reusable TPRM evidence",
        description:
          "Use one supplier workflow that can support ISO 27001, SOC 2, customer reviews, and internal risk reporting.",
      },
    ],
    evidenceTitle: "Map supplier records to controls without losing the operational story",
    evidenceText:
      "A strong ISO supplier-risk workflow shows which records you maintain, where each control fits, and how the process stays alive after certification.",
    evidence: [
      {
        title: "Supplier relationship record",
        description: "Owner, purpose, service category, criticality, information handled, and business dependency.",
      },
      {
        title: "Agreement and requirement tracking",
        description:
          "Security clauses, DPA status, incident notification, audit rights, confidentiality, and subprocessor requirements.",
      },
      {
        title: "ICT supply chain notes",
        description:
          "Hosting providers, critical dependencies, downstream services, exposure signals, and inherited risk context.",
      },
      {
        title: "Monitoring cadence",
        description: "Review frequency, renewal dates, reassessment triggers, change events, and open exceptions.",
      },
      {
        title: "Cloud service responsibility",
        description:
          "Cloud evidence, customer responsibilities, configuration notes, certificates, reports, and shared responsibility decisions.",
      },
      {
        title: "Audit-ready control view",
        description:
          "A single view that explains which supplier controls were reviewed and what evidence supports each decision.",
      },
    ],
    buyerTitle: "Best fit for ISO teams that want control mapping without spreadsheet drift",
    buyerText:
      "This is a strong fit for European, French, Quebec, and international SaaS teams that use ISO 27001 language but still need practical vendor-risk execution.",
    buyerPoints: [
      "Companies preparing ISO 27001 certification or surveillance audits.",
      "Teams documenting supplier relationships, supplier agreements, ICT supply chain, monitoring, and cloud service usage.",
      "Security leaders who want one supplier record that can also support SOC 2 and customer due diligence.",
      "French-speaking teams that need local language support for operational stakeholders.",
      "Consultants or lean teams who need a repeatable supplier evidence workflow before buying a full GRC suite.",
    ],
    workflow: [
      {
        step: "01",
        title: "Classify suppliers",
        description: "Group suppliers by criticality, data type, region, and service dependency.",
      },
      {
        step: "02",
        title: "Collect documents",
        description: "Store ISO certificates, SOC 2 reports, policies, contracts, and questionnaires.",
      },
      {
        step: "03",
        title: "Map to controls",
        description: "Connect supplier evidence to A.5.19-A.5.23 and internal requirements.",
      },
      {
        step: "04",
        title: "Track remediation",
        description: "Assign actions, owners, deadlines, and treatment decisions.",
      },
      {
        step: "05",
        title: "Review for audit",
        description: "Maintain a clean supplier evidence record for ISO readiness and surveillance audits.",
      },
    ],
    faqs: [
      {
        question: "Is ISO 27001 only for European teams?",
        answer:
          "No. ISO 27001 is especially strong for France, Quebec, and EU buyers, but the supplier-risk workflow is useful for any team managing ISO-aligned vendor evidence.",
      },
      {
        question: "Does CheckFirst only support cloud vendors?",
        answer:
          "No. The workflow can support SaaS, cloud, professional services, infrastructure, and other third parties by tier and evidence need.",
      },
      {
        question: "Can the same record support SOC 2?",
        answer:
          "Yes. The same vendor inventory, documents, questionnaires, scans, remediation, and decisions can be mapped to SOC 2 vendor-risk evidence when needed.",
      },
      {
        question: "How does CheckFirst prevent control drift?",
        answer:
          "Supplier owners, review dates, remediation tasks, change triggers, and evidence status stay connected to the supplier profile instead of living in separate spreadsheets.",
      },
    ],
  },

  "/assessments": {
    path: "/assessments",
    eyebrow: "Vendor security assessment software",
    title: "Run vendor security assessments faster with AI-assisted review.",
    lead:
      "CheckFirst combines supplier intake, external validation, adaptive questionnaires, AI document analysis, and decision-ready reporting in one workflow.",
    cta: "Start assessment review",
    metadataTitle: "Vendor Security Assessment Software | CheckFirst",
    metadataDescription:
      "Run vendor security assessments faster with intake, questionnaires, external scans, evidence review, AI analysis, and risk decisions.",
    keywords: ["vendor security assessment software", "vendor risk assessment software", ...commonSocIsoKeywords],
    coverageTitle: "A complete assessment workflow, not just a questionnaire sender",
    coverageText:
      "Use this workflow when you need vendor security assessment software, supplier security reviews, questionnaire automation, and evidence-based due diligence in one place.",
    sections: [
      {
        title: "Supplier due diligence in one workflow",
        description:
          "Capture supplier context, criticality, data access, business impact, and owner accountability before launching the review.",
      },
      {
        title: "External validation before answers arrive",
        description:
          "ProvEye scans internet-facing footprint for DNS, SSL/TLS, exposed services, headers, and known vulnerabilities.",
      },
      {
        title: "Adaptive security questionnaires",
        description:
          "Send smarter questionnaires based on vendor type, risk tier, data access, framework scope, and prior answers.",
      },
      {
        title: "Evidence-based AI analysis",
        description:
          "JinoXtreme CSA and JinoQA score answers, controls, and documents with citations, confidence signals, and review notes.",
      },
      {
        title: "SOC 2 and ISO-ready evidence",
        description:
          "Keep questionnaires, reports, certificates, exceptions, remediation, and reviewer decisions connected to the vendor record.",
      },
      {
        title: "Continuous follow-up and remediation",
        description:
          "Track gaps, assign owners, request clarification, and revisit high-risk vendors on the right schedule.",
      },
    ],
    evidenceTitle: "What a serious vendor security assessment should capture",
    evidenceText:
      "A serious assessment workflow shows how the review starts, how evidence is collected, how findings are validated, and how final decisions are documented.",
    evidence: [
      {
        title: "Vendor intake context",
        description: "Business purpose, data access, system integration, business owner, renewal date, and expected criticality.",
      },
      {
        title: "Questionnaire evidence",
        description: "Standard, triage, or adaptive questionnaires with responses, clarification requests, and answer quality notes.",
      },
      {
        title: "Document review",
        description: "SOC 2 reports, ISO certificates, policies, penetration test summaries, subprocessors, privacy documents, and exceptions.",
      },
      {
        title: "External scan signals",
        description: "DNS, TLS, headers, ports, cloud exposure, and visible posture checks to support or challenge vendor claims.",
      },
      {
        title: "AI-assisted findings",
        description: "Weak answers, missing evidence, contradictory statements, expired reports, and suggested remediation items.",
      },
      {
        title: "Risk decision record",
        description: "Approval, conditional approval, escalation, remediation, rejection, reassessment date, and reviewer notes.",
      },
    ],
    buyerTitle: "Best fit for teams reviewing vendors under time pressure",
    buyerText:
      "This is a strong fit for security, procurement, and compliance teams that need faster reviews without losing evidence quality.",
    buyerPoints: [
      "Security teams overloaded by questionnaire review and document analysis.",
      "Procurement teams that need status visibility before contract approval.",
      "SaaS companies preparing SOC 2, ISO 27001, enterprise customer reviews, or annual vendor reassessments.",
      "Teams that want external validation instead of relying only on vendor self-attestation.",
      "Organizations that need one review record for intake, evidence, remediation, and final approval.",
    ],
    workflow: [
      {
        step: "01",
        title: "Intake and triage the vendor",
        description: "Capture vendor details, criticality, data sensitivity, and business use case.",
      },
      {
        step: "02",
        title: "Run external attack-surface checks",
        description: "Scan the vendor domain and infrastructure with ProvEye.",
      },
      {
        step: "03",
        title: "Launch AI-powered assessment flows",
        description: "Evaluate suppliers against controls and collect documentation in parallel.",
      },
      {
        step: "04",
        title: "Review evidence, not just answers",
        description: "Assess completeness, consistency, and supporting documents.",
      },
      {
        step: "05",
        title: "Decide and document",
        description: "Produce a unified risk profile and recommended treatment path.",
      },
    ],
    faqs: [
      {
        question: "What makes CheckFirst different from a standard questionnaire tool?",
        answer:
          "CheckFirst combines intake, scanning, adaptive questionnaires, AI analysis, and evidence-based scoring in one workflow.",
      },
      {
        question: "Can we use it for high-risk and lighter-tier suppliers?",
        answer:
          "Yes. You can route vendors by criticality and apply deeper evidence collection to higher-risk suppliers.",
      },
      {
        question: "Which frameworks can we align assessments to?",
        answer:
          "CheckFirst supports vendor evidence workflows for CSA CCM, SOC 2, ISO 27001, NIST CSF, GDPR, DORA, NIS2, PCI DSS, HIPAA/HITRUST, and custom frameworks.",
      },
      {
        question: "Does AI approve vendors automatically?",
        answer:
          "No. AI helps structure findings and highlight weak evidence. Human reviewers own approval, escalation, remediation, and risk acceptance decisions.",
      },
    ],
  },

  "/managed-tprm": {
    path: "/managed-tprm",
    eyebrow: "Managed TPRM services",
    title: "Outsource third-party risk management without losing control.",
    lead:
      "Get dedicated analysts, AI-assisted assessments, vendor follow-up, remediation tracking, and executive reporting without adding permanent headcount.",
    cta: "Discuss managed TPRM",
    metadataTitle: "Managed TPRM Services | CheckFirst",
    metadataDescription:
      "Outsource third-party risk management operations with AI-assisted assessments, vendor follow-up, remediation tracking, and executive reporting.",
    keywords: ["managed TPRM", "managed third-party risk management", ...commonSocIsoKeywords],
    coverageTitle: "Managed TPRM for teams that need execution capacity now",
    coverageText:
      "Use managed TPRM when you need analyst support, vendor follow-up, remediation tracking, and executive reporting without losing platform visibility.",
    sections: [
      {
        title: "Dedicated TPRM analysts",
        description:
          "Operating support for intake, outreach, evidence collection, assessment coordination, review preparation, and follow-up.",
      },
      {
        title: "AI-powered assessment execution",
        description:
          "ProvEye, JinoXtreme, Jino 360, JinoQA, and document analysis accelerate delivery while analysts validate the output.",
      },
      {
        title: "Audit-period support",
        description:
          "Organize vendor evidence for SOC 2 readiness, ISO 27001 supplier controls, customer security reviews, or annual reassessments.",
      },
      {
        title: "Program-level reporting",
        description:
          "Stakeholder-ready summaries, vendor status visibility, remediation tracking, executive reporting, and open blocker views.",
      },
      {
        title: "Flexible capacity without headcount risk",
        description:
          "Scale support during procurement waves, board reviews, customer due diligence spikes, and audit periods.",
      },
      {
        title: "You keep decision control",
        description:
          "CheckFirst can operate the workflow while your team keeps final approval, risk acceptance, and business ownership.",
      },
    ],
    evidenceTitle: "What the managed team operates for you",
    evidenceText:
      "The service is designed to make the operating work visible: what moves off your plate, what stays under your control, and how decisions are documented.",
    evidence: [
      {
        title: "Program intake and vendor inventory",
        description: "Normalize vendor lists, owners, criticality, data access, review status, and initial prioritization.",
      },
      {
        title: "Vendor outreach and chasing",
        description: "Send requests, follow up on missing documents, clarify answers, and keep suppliers moving through the review.",
      },
      {
        title: "Assessment execution",
        description: "Run questionnaires, ProvEye scans, document analysis, public research, and framework mapping.",
      },
      {
        title: "Review packets and recommendations",
        description: "Package findings, missing evidence, risk themes, and suggested treatment paths for your final decision.",
      },
      {
        title: "Remediation management",
        description: "Track vendor gaps, owners, due dates, exceptions, acceptance notes, and reassessment dates.",
      },
      {
        title: "Executive and audit reporting",
        description: "Summarize program health, critical vendors, high-risk findings, aging remediation, and audit evidence readiness.",
      },
    ],
    buyerTitle: "Best fit when vendor volume is growing faster than the team",
    buyerText: "This is a strong fit when you need analyst capacity, not just software licenses.",
    buyerPoints: [
      "Lean security or compliance teams with more vendor reviews than analyst hours.",
      "Companies preparing audits or customer reviews while also running day-to-day security work.",
      "Procurement teams that need supplier reviews to stop blocking contracts.",
      "Consultants or partners that want a repeatable operating layer for client vendor-risk programs.",
      "Teams that want software plus people, while keeping final risk decisions in-house.",
    ],
    workflow: [
      {
        step: "01",
        title: "Program intake",
        description: "Map vendor population, criticality model, approval path, and required framework coverage.",
      },
      {
        step: "02",
        title: "Assessment operations",
        description: "Drive outreach, questionnaire distribution, scan execution, document follow-up, and exception management.",
      },
      {
        step: "03",
        title: "Review and escalation",
        description: "Package findings and route clear recommendations to decision-makers.",
      },
      {
        step: "04",
        title: "Ongoing monitoring",
        description: "Maintain reassessment rhythm, remediation follow-up, and program visibility.",
      },
    ],
    faqs: [
      {
        question: "Who is managed TPRM best for?",
        answer:
          "Teams with growing vendor volume, limited analyst capacity, urgent onboarding pressure, or inconsistent remediation follow-through.",
      },
      {
        question: "Do we keep visibility and decision control?",
        answer:
          "Yes. CheckFirst acts as the operating layer while your team keeps platform access, dashboards, reports, and final decisions.",
      },
      {
        question: "Can managed TPRM support SOC 2 and ISO 27001 evidence?",
        answer:
          "Yes. The service can organize vendor records for SOC 2 vendor risk, ISO 27001 supplier controls, customer reviews, and broader TPRM reporting.",
      },
      {
        question: "Is this outsourcing or co-sourcing?",
        answer:
          "It can be either. CheckFirst can handle repeatable operations while your internal team keeps policy ownership, risk acceptance, and stakeholder decisions.",
      },
    ],
  },

  "/tprm-software": {
    path: "/tprm-software",
    eyebrow: "TPRM software",
    title: "Third-party risk management software for vendor reviews, evidence, and audit readiness.",
    lead:
      "CheckFirst helps teams build a repeatable TPRM program for vendor assessments, supplier due diligence, continuous monitoring, remediation, SOC 2 evidence, and ISO 27001 supplier controls.",
    cta: "Compare TPRM software",
    metadataTitle: "TPRM Software | Third-Party Risk Management Software | CheckFirst",
    metadataDescription:
      "Compare TPRM software for vendor assessments, supplier due diligence, continuous monitoring, AI-assisted review, remediation, and audit-ready evidence.",
    keywords: ["TPRM software", "third-party risk management software", "vendor risk management software", ...commonSocIsoKeywords],
    coverageTitle: "A complete TPRM workflow for vendor reviews and audit readiness",
    coverageText:
      "Use CheckFirst to manage the full third-party risk workflow while still supporting SOC 2 evidence, ISO 27001 supplier controls, vendor assessments, remediation, and reporting.",
    sections: [
      {
        title: "Replace fragmented vendor review workflows",
        description:
          "Connect intake, vendor inventory, questionnaires, document review, external scanning, remediation, and decisions in one system.",
      },
      {
        title: "Accelerate supplier due diligence without lowering standards",
        description:
          "Reduce analyst admin while keeping reviewers focused on material risk gaps, missing evidence, and business impact.",
      },
      {
        title: "Give procurement and security one shared operating picture",
        description:
          "Show vendor status, blockers, risk tiers, approvals, exceptions, and remediation paths in one place.",
      },
      {
        title: "Support audit-ready vendor evidence",
        description:
          "Map vendor records to SOC 2, ISO 27001, CSA CCM, customer requests, and your internal risk requirements.",
      },
      {
        title: "Assessment-first workflow",
        description:
          "CheckFirst is built around intake, adaptive questionnaires, evidence analysis, external validation, and decision-ready reporting.",
      },
      {
        title: "AI with human approval",
        description:
          "AI helps analyze supplier context while final risk decisions remain human-owned, reviewable, and auditable.",
      },
    ],
    evidenceTitle: "Core components of a mature TPRM program",
    evidenceText:
      "A complete third-party risk program should explain the full operating model: inventory, tiering, due diligence, external validation, remediation, reporting, and reassessment.",
    evidence: [
      {
        title: "Vendor inventory and tiering",
        description: "Maintain owners, business purpose, data access, criticality, risk tier, lifecycle status, and reassessment cadence.",
      },
      {
        title: "Supplier due diligence",
        description: "Launch questionnaires, collect reports, review policies, ask follow-up questions, and document the review path.",
      },
      {
        title: "External risk validation",
        description: "Use internet-facing posture checks to add independent context before approving critical vendors.",
      },
      {
        title: "Framework mapping",
        description: "Connect evidence and findings to SOC 2, ISO 27001, CSA CCM, internal controls, customer requests, and board reporting.",
      },
      {
        title: "Remediation and exceptions",
        description: "Track findings, owners, due dates, acceptance notes, compensating controls, and follow-up status.",
      },
      {
        title: "Program reporting",
        description: "See vendor volume, high-risk suppliers, aging reviews, unresolved gaps, audit readiness, and upcoming reassessments.",
      },
    ],
    buyerTitle: "Best fit for teams building a TPRM program, not only passing an audit",
    buyerText: "This is the right path when you need broad third-party risk management, not only a single audit use case.",
    buyerPoints: [
      "Security teams moving from spreadsheet-based vendor reviews to a repeatable program.",
      "Procurement and compliance teams that need a shared workflow for approvals and renewals.",
      "Companies that need SOC 2 and ISO evidence now but expect broader TPRM maturity later.",
      "Teams that want AI-assisted review but still require human approval and audit-ready decisions.",
      "Organizations comparing TPRM software, vendor risk management software, and managed TPRM support.",
    ],
    workflow: [
      {
        step: "01",
        title: "Inventory and tier vendors",
        description: "Start with criticality, risk, and business context.",
      },
      {
        step: "02",
        title: "Assess and collect evidence",
        description: "Run questionnaires, scans, and document review.",
      },
      {
        step: "03",
        title: "Map to frameworks",
        description: "Connect findings to controls and reporting needs.",
      },
      {
        step: "04",
        title: "Track remediation",
        description: "Assign tasks, monitor gaps, and reassess on cadence.",
      },
    ],
    faqs: [
      {
        question: "What is TPRM software used for?",
        answer:
          "TPRM software helps organizations assess, approve, monitor, and reassess third-party vendors.",
      },
      {
        question: "What should buyers look for?",
        answer:
          "Workflow speed, assessment depth, evidence handling, stakeholder visibility, framework alignment, and scalability.",
      },
      {
        question: "Can CheckFirst support software-only and managed delivery?",
        answer:
          "Yes. Teams can use the platform internally or combine it with managed TPRM services.",
      },
      {
        question: "Is this only for SOC 2 or ISO 27001?",
        answer:
          "No. SOC 2 and ISO 27001 are high-intent use cases, but CheckFirst remains a broader TPRM platform for vendor assessments, supplier due diligence, remediation, and monitoring.",
      },
    ],
  },

  "/vanta-vendor-risk-alternative": {
    path: "/vanta-vendor-risk-alternative",
    eyebrow: "Vanta vendor risk alternative",
    title: "A focused Vanta vendor-risk alternative for SaaS teams that only need the audit evidence.",
    lead:
      "CheckFirst is built for teams that need SOC 2 and ISO 27001 vendor-risk evidence their auditor can understand, without starting from a broad enterprise compliance platform rollout.",
    cta: "Compare vendor risk scope",
    metadataTitle: "Vanta Vendor Risk Alternative | CheckFirst",
    metadataDescription:
      "A focused vendor-risk workflow for SaaS teams that need SOC 2 and ISO 27001 evidence without a broad compliance platform rollout.",
    keywords: ["Vanta vendor risk alternative", "Vanta alternative", ...commonSocIsoKeywords],
    coverageTitle: "A careful comparison when your vendor-risk job is narrower",
    coverageText:
      "Use this comparison to decide whether you need a broad compliance automation platform or a focused vendor-risk workflow for evidence, scans, questionnaires, remediation, and approvals.",
    sections: [
      {
        title: "Focused vendor-risk scope",
        description:
          "Cover the specific control surface: vendor inventory, questionnaires, documents, scans, risk treatment, remediation, and evidence export.",
      },
      {
        title: "Public pricing clarity",
        description:
          "Make monthly pricing visible so teams can compare budget fit before entering a sales cycle.",
      },
      {
        title: "Multilingual workflow",
        description:
          "English, French France, and French Quebec support teams that need local stakeholder adoption, not English-only tooling.",
      },
      {
        title: "Works alongside broader platforms",
        description:
          "Buyers do not need to rip out their compliance stack if only vendor risk is the bottleneck.",
      },
      {
        title: "Evidence-first demo",
        description:
          "Show a CC9.2-ready evidence pack in the first five minutes of the demo.",
      },
      {
        title: "Fast proof of value",
        description:
          "Start with five to ten critical vendors and prove whether the workflow solves the audit blocker before a large rollout.",
      },
    ],
    evidenceTitle: "What to compare before choosing a vendor-risk tool",
    evidenceText:
      "A useful comparison gives you a fair evaluation framework, not just a product pitch.",
    evidence: [
      {
        title: "Buying job",
        description:
          "Are you buying full compliance automation, or do you mainly need vendor-risk evidence for SOC 2 and ISO 27001?",
      },
      {
        title: "Depth of vendor review",
        description:
          "Compare inventory, tiering, questionnaires, document review, scans, remediation, and decision records.",
      },
      {
        title: "Setup time",
        description:
          "Measure how quickly your first critical vendors can move from intake to evidence-ready approval.",
      },
      {
        title: "Language and adoption",
        description:
          "Consider whether stakeholders, vendors, and local teams need French or other multilingual workflows.",
      },
      {
        title: "Price transparency",
        description:
          "Look for a clear monthly number, vendor limits, AI review scope, scan volume, and implementation expectations.",
      },
      {
        title: "Ability to coexist",
        description:
          "If you already use a compliance platform, ask whether the vendor-risk workflow can operate beside it.",
      },
    ],
    buyerTitle: "Best fit when vendor risk is the blocker, not every compliance workflow",
    buyerText:
      "This is a good fit when you are evaluating Vanta but realize the immediate pain is narrower: vendor-risk evidence.",
    buyerPoints: [
      "You need SOC 2 or ISO vendor evidence faster than a broad compliance rollout.",
      "You already have policies, controls, or consultant support, but vendor reviews still live in spreadsheets.",
      "You want public pricing and a smaller first step before committing to a larger platform.",
      "You need questionnaire review, document analysis, scans, remediation, and decision records in one workflow.",
      "You want an English/French operating model for European, French, or Quebec stakeholders.",
    ],
    workflow: [
      {
        step: "01",
        title: "Anchor the pain",
        description: "Identify where vendor risk sits in your SOC 2 or ISO timeline.",
      },
      {
        step: "02",
        title: "Show the evidence pack",
        description: "Review the auditor-facing output before comparing feature lists.",
      },
      {
        step: "03",
        title: "Compare cost and setup",
        description: "Evaluate focused scope, transparent pricing, and time to launch.",
      },
      {
        step: "04",
        title: "Start with critical vendors",
        description: "Import the vendors that matter most and prove value inside the trial window.",
      },
    ],
    faqs: [
      {
        question: "Do I need to replace my whole compliance stack?",
        answer:
          "No. Many teams only need a focused vendor-risk workflow while keeping their broader compliance, GRC, or audit process in place.",
      },
      {
        question: "What does CheckFirst focus on?",
        answer:
          "Vendor inventory, tiering, questionnaires, documents, external scans, risk treatment, and evidence records for SOC 2 and ISO 27001 supplier controls.",
      },
      {
        question: "When is a broad compliance platform still the better choice?",
        answer:
          "A broad platform can be better if you want one system for policies, employee tasks, device evidence, control monitoring, audits, and vendor risk together.",
      },
      {
        question: "Can CheckFirst work beside Vanta?",
        answer:
          "Yes. If your broader compliance process already lives elsewhere, CheckFirst can focus on vendor-risk execution and evidence records.",
      },
    ],
  },

  "/drata-vendor-risk-alternative": {
    path: "/drata-vendor-risk-alternative",
    eyebrow: "Drata vendor risk alternative",
    title: "A Drata vendor-risk alternative for teams that want focused supplier evidence.",
    lead:
      "Compare a focused supplier-risk evidence workflow for teams evaluating vendor-risk modules, spreadsheet workflows, and SOC 2 or ISO 27001 audit requirements.",
    cta: "Review the comparison",
    metadataTitle: "Drata Vendor Risk Alternative | CheckFirst",
    metadataDescription:
      "Compare focused supplier-risk evidence workflows for SOC 2, ISO 27001, questionnaires, scans, and remediation tracking.",
    keywords: ["Drata vendor risk alternative", "Drata alternative", ...commonSocIsoKeywords],
    coverageTitle: "A practical comparison for supplier-risk evidence",
    coverageText:
      "Use this comparison when you are weighing Drata, vendor-risk modules, spreadsheets, and narrower supplier-risk tools.",
    sections: [
      {
        title: "Narrower buying job",
        description:
          "Not every team is shopping for every compliance workflow. Sometimes the urgent need is vendor-risk evidence now.",
      },
      {
        title: "Audit-ready exports",
        description:
          "Emphasize the output: evidence pack, risk decisions, remediation records, framework mappings, and reassessment dates.",
      },
      {
        title: "Transparent pricing",
        description: "See a clear monthly number before the demo call.",
      },
      {
        title: "French and Quebec support",
        description:
          "French-language workflows give teams a practical operational benefit when stakeholders do not want English-only compliance tooling.",
      },
      {
        title: "Fast setup",
        description:
          "A scoped onboarding path helps teams start with the vendors that matter most instead of launching a large implementation project.",
      },
      {
        title: "Human approval with AI acceleration",
        description:
          "AI helps structure evidence and findings while the team keeps final approval and risk acceptance decisions.",
      },
    ],
    evidenceTitle: "What to evaluate when comparing supplier-risk workflows",
    evidenceText:
      "The practical differences matter most during audit preparation: evidence quality, setup effort, scope, workflow ownership, and reporting.",
    evidence: [
      {
        title: "Vendor-risk scope",
        description:
          "Inventory, questionnaires, document review, scans, remediation, approvals, evidence export, and reassessment.",
      },
      {
        title: "Audit alignment",
        description:
          "Support for SOC 2 vendor risk, ISO 27001 supplier controls, CSA CCM, and internal policies.",
      },
      {
        title: "Workflow ownership",
        description:
          "Who manages vendor outreach, follow-up, review, remediation, and approval decisions?",
      },
      {
        title: "Evidence quality",
        description:
          "Whether the record shows what was requested, what was reviewed, who approved it, and what remains unresolved.",
      },
      {
        title: "Implementation effort",
        description:
          "Time to launch, vendor import path, first review setup, templates, and support model.",
      },
      {
        title: "Commercial fit",
        description:
          "Vendor limits, scan volume, AI review scope, public pricing, managed support, and enterprise requirements.",
      },
    ],
    buyerTitle: "Best fit when the team wants supplier evidence before a platform migration",
    buyerText:
      "This is a good fit when you are still deciding whether you need a broad compliance platform or a focused workflow.",
    buyerPoints: [
      "You are evaluating Drata but the immediate gap is vendor-risk execution.",
      "Your team needs supplier evidence for SOC 2, ISO 27001, or customer due diligence.",
      "You want faster setup, clearer pricing, and a focused first proof point.",
      "Your team wants to keep final risk decisions instead of outsourcing judgment to automation.",
      "You need a workflow that can support English and French stakeholders.",
    ],
    workflow: [
      {
        step: "01",
        title: "Identify the audit timeline",
        description: "Find out whether SOC 2 or ISO evidence is blocking sales or certification.",
      },
      {
        step: "02",
        title: "Import critical vendors",
        description: "Start with the vendors your auditor or customer cares about most.",
      },
      {
        step: "03",
        title: "Run evidence collection",
        description: "Questionnaires, scans, documents, and AI review happen in parallel.",
      },
      {
        step: "04",
        title: "Close with proof",
        description: "Show what the team can present to an auditor or customer.",
      },
    ],
    faqs: [
      {
        question: "Is this only for Drata users?",
        answer:
          "No. It is for buyers comparing Drata, Vanta, spreadsheets, and focused vendor-risk workflows.",
      },
      {
        question: "What should we compare?",
        answer:
          "Compare vendor-risk scope, evidence quality, setup time, multilingual support, pricing transparency, and whether you need a full compliance platform.",
      },
      {
        question: "Can CheckFirst support ISO 27001 too?",
        answer:
          "Yes. The same supplier workflow can map evidence to ISO 27001 A.5.19-A.5.23 as well as SOC 2 vendor-risk requirements.",
      },
      {
        question: "When should we choose a broader platform instead?",
        answer:
          "Choose a broader platform if your priority is an all-in-one compliance operating system for many controls, policies, audits, employees, and devices.",
      },
    ],
  },
};

export function getCommercialPage(path: string) {
  const page = commercialPages[path];
  if (!page) {
    throw new Error(`Missing commercial page content for ${path}`);
  }
  return page;
}

export function buildCommercialMetadata(page: CommercialPageContent): Metadata {
  const languages = page.alternates;

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: `https://checkfirst.io${page.path}`,
      siteName: "CheckFirst",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadataTitle,
      description: page.metadataDescription,
      images: defaultTwitterImages,
    },
    alternates: {
      canonical: page.path,
      ...(languages ? { languages } : {}),
    },
  };
}
