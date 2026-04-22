import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { Testimonial } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "CheckFirst — منصة تقييم أمان الموردين بالذكاء الاصطناعي",
  description:
    "CheckFirst يستبدل تقييمات أمان الموردين اليدوية والبطيئة بتحليل فوري بالذكاء الاصطناعي. قيّم الموردين مقابل أكثر من 243 ضابطاً أمنياً في دقائق.",
  alternates: {
    canonical: "/ar",
  },
};

/* ─── Data ─── */

const problemPoints = [
  {
    who: "المشترون",
    pain: "يهدرون أسابيع في إرسال استبيانات ومتابعة ردود الموردين",
  },
  {
    who: "الموردون",
    pain: "يجيبون على نفس الـ 300 سؤال مراراً وتكراراً لكل عميل محتمل",
  },
  {
    who: "فرق الأمان",
    pain: "غارقة في أعمال المراجعة اليدوية التي لا تتوسع",
  },
  {
    who: "الصفقات",
    pain: "تتوقف لأن تقييمات الأمان تستغرق من 4 إلى 8 أسابيع",
  },
];

const metrics = [
  { value: "85%", label: "تقييمات أسرع" },
  { value: "243", label: "ضوابط CSA CCM" },
  { value: "+40", label: "أطر عمل مدعومة" },
  { value: "99.9%", label: "وقت تشغيل المنصة" },
];

const capabilities = [
  {
    name: "JinoXtreme",
    tag: "تقييم بالذكاء الاصطناعي",
    description:
      "يقيّم الموردين مقابل جميع ضوابط أمان السحابة الـ 243 عبر 18 مجالاً أمنياً — مع تصنيفات امتثال مبنية على الأدلة.",
  },
  {
    name: "ProvEye",
    tag: "فحص خارجي",
    description:
      "فحوصات عامة مستقلة للبنية التحتية للموردين — DNS، SSL، المنافذ المفتوحة، رؤوس الأمان، الثغرات المعروفة.",
  },
  {
    name: "Jino 360",
    tag: "بحث عن المورد",
    description:
      "جمع معلومات استخباراتية بالذكاء الاصطناعي من مصادر ويب متعددة — موقع الشركة، الأخبار، حوادث الأمان، الشهادات، الملفات العامة.",
  },
  {
    name: "استبيانات ذكية",
    tag: "استطلاعات تكيّفية",
    description:
      "استبيانات ذكية تتكيف مع سياق المورد وملف المخاطر. يتم تقديم الاستبيانات بناءً على إجابات المورد لتقييم ديناميكي.",
  },
  {
    name: "JinoQA & JinoDocs",
    tag: "تقييم المورد",
    description:
      "أداتان متخصصتان بالذكاء الاصطناعي لتقييم وثائق وردود الموردين. ما عليك سوى تحميل الملفات للحصول على تقرير مفصل وملف أمني.",
  },
];

const platformModules = [
  {
    title: "إدارة الموردين",
    description:
      "تتبع دورة حياة من 9 مراحل من الإعداد إلى الإنهاء. تصنيف كامل للمخاطر وحالة الامتثال وسجل التقييمات لكل مورد.",
  },
  {
    title: "إدارة المخاطر",
    description:
      "مصفوفة مخاطر 5×5 مع سير عمل من 4 مراحل: التحديد ← التقييم ← المعالجة ← المراقبة. قبول، تخفيف، نقل أو تجنب — كل منها بمبررات موثقة.",
  },
  {
    title: "نظام الاستبيانات",
    description:
      "ثلاثة أنواع: فرز (فحص سريع)، قياسي (مخصص بالكامل)، وذكي (مُنشأ بالذكاء الاصطناعي). قالب CSA CAIQ مدمج. تحليل دلالي للردود عبر Jino-QA.",
  },
  {
    title: "خزنة المستندات",
    description:
      "تخزين مركزي لتقارير SOC 2، شهادات ISO، السياسات، اتفاقيات عدم الإفصاح. مرتبط بموردين وتقييمات واستبيانات محددة للإحالة المرجعية.",
  },
  {
    title: "إدارة المهام",
    description:
      "تتبع الإصلاحات مع مستويات الأولوية وتواريخ الاستحقاق والمسؤولين. ترتبط المهام تلقائياً بالمخاطر والتقييمات والموردين. تنبيهات التأخير تحافظ على سير العمل.",
  },
  {
    title: "إطار عمل CSA",
    description:
      "تطبيق كامل لمصفوفة ضوابط السحابة CSA — 18 مجالاً أمنياً، 243 ضابطاً. حدد فجوات الموردين مقابل معايير الصناعة وأنشئ تقارير الامتثال.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "أضف مورديك",
    description:
      "أنشئ ملفات تعريف للموردين أو استخدم بوابة التسجيل الذاتي. استورد قوائم الموردين الحالية. لا حاجة لجداول البيانات.",
  },
  {
    step: "02",
    title: "افحص مع ProvEye",
    description:
      "قم بإجراء فحص أمني خارجي على أي نطاق مورد. DNS، SSL، المنافذ، الرؤوس، الثغرات — في 30-60 ثانية، دون الحاجة لتعاون المورد.",
  },
  {
    step: "03",
    title: "الذكاء الاصطناعي يقيّم المخاطر",
    description:
      "JinoXtreme CSA يقيّم مقابل جميع ضوابط CSA الـ 243. Jino 360 يبحث عبر الويب. الاستبيانات الذكية تتكيف مع ملف كل مورد.",
  },
  {
    step: "04",
    title: "راجع وقرر",
    description:
      "جميع البيانات تصب في ملف مخاطر موحد مع تقييم بمصفوفة 5×5. تقارير مُنشأة بالذكاء الاصطناعي مع ملخصات تنفيذية ونتائج وتوصيات مرتبة حسب الأولوية.",
  },
];

const testimonials = [
  {
    quote:
      "قلّصنا دورة تقييم الموردين من ثلاثة أسابيع إلى يومين. نتائج الذكاء الاصطناعي دقيقة بشكل مدهش — يكتشف أشياء كان فريقنا يغفل عنها.",
    name: "Sarah Mitchell",
    role: "رئيسة الأمان",
    company: "Meridian Financial",
  },
  {
    quote:
      "CheckFirst استبدل أربع أدوات مختلفة لدينا. رسم خرائط CSA وحده وفر لفريق الامتثال مئات الساعات في كل دورة تدقيق.",
    name: "James Okafor",
    role: "CISO",
    company: "HealthBridge Systems",
  },
  {
    quote:
      "الاستبيانات الذكية غيّرت قواعد اللعبة. موردونا يكملونها فعلاً لأنهم لا يرون سوى الأسئلة ذات الصلة.",
    name: "Laura Chen",
    role: "مديرة مخاطر الموردين",
    company: "Ascend Cloud",
  },
];

const pricingTeaser = [
  { name: "المبتدئ", price: "اتصل بنا", note: "25 فحص ProvEye/شهر", highlight: false },
  { name: "المحترف", price: "اتصل بنا", note: "تقييمات غير محدودة", highlight: true },
  { name: "المؤسسة", price: "مخصص", note: "نسخة مخصصة", highlight: false },
];

const faqItems = [
  {
    question: "كيف يعمل التقييم بالذكاء الاصطناعي؟",
    answer:
      "JinoXtreme CSA يقيّم موردك مقابل جميع ضوابط مصفوفة التحكم السحابية CSA الـ 243 عبر 18 مجالاً أمنياً. يجمع البيانات من ملف المورد ونتائج فحص ProvEye وردود الاستبيانات والبحث على الويب لإنتاج تصنيفات امتثال لكل ضابط مع مبررات مبنية على الأدلة.",
  },
  {
    question: "ما هي أطر العمل التي تدعمونها؟",
    answer:
      "CheckFirst يدعم أكثر من 40 إطار عمل للأمان والامتثال بما في ذلك CSA CCM v4.0، SOC 2، ISO 27001/27002/27017/27018، NIST CSF، GDPR، DORA، NIS2، PCI DSS، HIPAA/HITRUST، CIS Controls، والمزيد. قوالب أطر العمل المخصصة متاحة في خطط المؤسسة.",
  },
  {
    question: "هل يمكن للموردين ملء التقييمات بأنفسهم؟",
    answer:
      "نعم. أرسل الاستبيانات مباشرة إلى الموردين عبر رابط آمن. يردون في متصفحهم — لا حاجة لحساب. Jino-QA يحلل بعد ذلك ردودهم دلالياً من حيث الاكتمال والجودة والاتساق وتوافق الامتثال.",
  },
  {
    question: "كم يستغرق التقييم؟",
    answer:
      "فحوصات ProvEye الخارجية تكتمل في 30-60 ثانية. تقييمات JinoXtreme CSA مع التقييم الكامل لـ 243 ضابطاً تنتهي عادة في دقائق. بحث Jino 360 على الويب يعمل بالتوازي. معظم الموردين يتم تقييمهم بالكامل خلال 10 دقائق.",
  },
  {
    question: "هل بياناتي آمنة؟",
    answer:
      "كل عميل يحصل على نسخة معزولة تماماً مع قاعدة بياناته الخاصة. البيانات مشفرة في حالة السكون والنقل. ندعم المصادقة الثنائية، والتحكم في الوصول القائم على الأدوار من 4 مستويات، وتسجيل الدخول الموحد، وتوفير SCIM.",
  },
  {
    question: "ماذا يفحص ProvEye؟",
    answer:
      "ProvEye يحلل بشكل مستقل البنية التحتية للمورد: صحة DNS (SPF، DKIM، DMARC)، حالة SSL/TLS، المنافذ المفتوحة، رؤوس الأمان (HSTS، CSP)، والثغرات المعروفة (بحث CVE). لا حاجة لتعاون المورد.",
  },
];

/* ─── Page ─── */

export default function ArabicHomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-canvas px-6 pt-16 pb-24 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.9]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.18]"
          style={{ background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)" }}
        />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-6 justify-center">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              <span>منصة إدارة مخاطر الأطراف الثالثة بالذكاء الاصطناعي</span>
            </div>
            <h1 className="font-display text-[30px] leading-[1.14] tracking-[-0.02em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
              توقف عن ملاحقة جداول البيانات.{" "}
              <span className="italic text-ink-500">قيّم الموردين في دقائق.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-[60ch] font-body text-[17px] leading-[1.75] text-ink-500 sm:text-[18px]">
              CheckFirst يستبدل تقييمات أمان الموردين اليدوية والبطيئة بتحليل فوري
              بالذكاء الاصطناعي. قيّم الموردين، وافحص البنية التحتية، وأدِر المخاطر
              من البداية إلى النهاية.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href="/ar/contact" variant="primary" size="lg">
                احجز عرضاً تجريبياً
              </Button>
              <Button href="/ar/pricing" variant="secondary" size="lg">
                عرض الأسعار
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ── */}
      <section className="border-y border-ink-200 bg-canvas-raised px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1200px] divide-ink-200 gap-0 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className={`flex flex-col gap-2 py-4 sm:py-2 sm:px-6 ${
                idx === 0 ? "sm:pl-0" : ""
              } ${idx === metrics.length - 1 ? "sm:pr-0" : ""}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {m.label}
              </span>
              <span className="font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] text-ink-900 sm:text-[44px]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem ── */}
      <Section>
        <SectionHeader
          tag="المشكلة"
          title="تقييمات الأمان معطّلة"
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {problemPoints.map((p) => (
            <Card key={p.who}>
              <p className="font-body text-base leading-relaxed text-ink-700">
                <span className="font-display font-bold text-ink-900">
                  {p.who}
                </span>{" "}
                {p.pain}.
              </p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-body text-base leading-relaxed text-ink-500">
          <strong className="font-display text-ink-900">
            CheckFirst يتبع نهجاً مختلفاً.
          </strong>{" "}
          منصة موحدة تخدم كلاً من المشترين الذين يقيّمون الموردين والموردين الذين
          يثبتون أمانهم.
        </p>
      </Section>

      {/* ── Core Capabilities — DARK brand moment ── */}
      <Section dark>
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark mb-6">ما تحصل عليه</span>
            <h2 className="font-display text-[32px] leading-[1.14] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
              خمسة محركات. منصة واحدة. تغطية شاملة.
            </h2>
          </div>
          <p className="max-w-md font-body text-[17px] leading-[1.75] text-white/65">
            أدوات محددة تقوم بأشياء محددة — وليست وعوداً غامضة حول الذكاء الاصطناعي.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, idx) => (
            <Card key={c.name} variant="data" className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  {String(idx + 1).padStart(2, "0")} · {c.tag}
                </span>
                <span className="h-px w-6 bg-brand-400/60" />
              </div>
              <h3 className="font-display text-[22px] leading-[1.2] tracking-[-0.02em] text-white">
                {c.name}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.75] text-white/65">
                {c.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Platform Modules ── */}
      <Section>
        <SectionHeader
          tag="المنصة"
          title="كل شيء متصل"
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m, idx) => (
            <div key={m.title} className="group relative bg-canvas-raised p-7 transition-colors hover:bg-canvas">
              <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-[8px] border border-ink-200 bg-canvas font-mono text-[11px] text-ink-500 transition-colors group-hover:border-ink-900 group-hover:text-ink-900">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {m.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.75] text-ink-500">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section id="how-it-works" className="bg-canvas-raised">
        <SectionHeader
          tag="كيف يعمل"
          title="من استقبال المورد إلى المراقبة المستمرة"
        />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="pointer-events-none absolute left-[6%] right-[6%] top-[26px] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />
          {howItWorks.map((item, idx) => (
            <div key={item.step}>
              <div className="mb-5">
                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-ink-200 bg-canvas font-mono text-[13px] text-ink-700">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs font-body text-[14.5px] leading-[1.75] text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section>
        <SectionHeader
          tag="ماذا تقول الفرق"
          title="مصمم لفرق الأمان التي تنجز"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* ── Pricing Teaser ── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="الأسعار"
          title="أسعار بسيطة وشفافة"
          description="خطط واضحة. بدون مفاجآت."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {pricingTeaser.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[14px] border p-7 transition-all duration-200 ${
                plan.highlight
                  ? "border-ink-900 bg-ink-950 text-white"
                  : "border-ink-200 bg-canvas-raised hover:border-ink-900"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-2.5 right-7 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-300">
                  <span className="h-1 w-1 rounded-full bg-brand-400 animate-signal" />
                  الأكثر شعبية
                </span>
              )}
              <h3 className={`font-mono text-[11px] uppercase tracking-[0.14em] ${plan.highlight ? "text-white/60" : "text-ink-400"}`}>
                {plan.name}
              </h3>
              <p className={`mt-4 font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] ${plan.highlight ? "text-white" : "text-ink-900"}`}>
                {plan.price}
              </p>
              <p className={`mt-2 font-body text-[13.5px] ${plan.highlight ? "text-white/60" : "text-ink-500"}`}>
                {plan.note}
              </p>
              <div className="mt-7">
                <Button
                  href="/ar/pricing"
                  variant={plan.highlight ? "ghost-dark" : "secondary"}
                  className="w-full"
                >
                  عرض خطة {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <SectionHeader
          tag="الأسئلة الشائعة"
          title="الأسئلة الشائعة"
          description="كل ما تحتاج معرفته للبدء."
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">ابدأ الآن</span>
          <h2 className="font-display text-[34px] leading-[1.14] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
            هل أنت مستعد للسيطرة على مخاطر الموردين؟
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.75] text-white/70">
            اكتشف كيف يمكن لـ CheckFirst استبدال جداول البيانات والبريد الإلكتروني
            والتخمين بمنصة واحدة مدعومة بالذكاء الاصطناعي.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/ar/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100">
              احجز عرضاً تجريبياً
            </Button>
            <Button href="/ar/pricing" variant="ghost-dark" size="lg">
              عرض الأسعار
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
