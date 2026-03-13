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
      <section className="relative overflow-hidden bg-slate-900 px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-0 h-[600px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-brand-400/8 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-brand-900/40 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-300">
              منصة إدارة مخاطر الأطراف الثالثة بالذكاء الاصطناعي
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
              توقف عن ملاحقة جداول البيانات.
              <br />
              <span className="text-brand-400">قيّم الموردين في دقائق.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              CheckFirst يستبدل تقييمات أمان الموردين اليدوية والبطيئة بتحليل فوري
              بالذكاء الاصطناعي. قيّم الموردين، وافحص البنية التحتية، وأدِر المخاطر
              من البداية إلى النهاية.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      <section className="border-b border-slate-200/60 bg-slate-50/50 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-brand-700">
                {m.value}
              </p>
              <p className="mt-1 font-body text-sm text-slate-600">{m.label}</p>
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
              <p className="font-body text-base leading-relaxed text-slate-700">
                <span className="font-display font-bold text-slate-900">
                  {p.who}
                </span>{" "}
                {p.pain}.
              </p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-body text-base leading-relaxed text-slate-600">
          <strong className="font-display text-slate-900">
            CheckFirst يتبع نهجاً مختلفاً.
          </strong>{" "}
          منصة موحدة تخدم كلاً من المشترين الذين يقيّمون الموردين والموردين الذين
          يثبتون أمانهم.
        </p>
      </Section>

      {/* ── Core Capabilities ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="ما تحصل عليه"
          title="خمسة محركات. منصة واحدة. تغطية شاملة."
          description="أدوات محددة تقوم بأشياء محددة — وليست وعوداً غامضة حول الذكاء الاصطناعي."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Card key={c.name}>
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                {c.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {c.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
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
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m) => (
            <div key={m.title} className="rounded-[16px] border border-slate-200/80 bg-white p-6">
              <h3 className="font-display text-base font-bold text-slate-900">
                {m.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section id="how-it-works" className="bg-slate-50/60">
        <SectionHeader
          tag="كيف يعمل"
          title="من استقبال المورد إلى المراقبة المستمرة"
          description=""
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step}>
              <span aria-hidden="true" className="font-display text-5xl font-extrabold text-brand-600">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
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
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="الأسعار"
          title="أسعار بسيطة وشفافة"
          description="خطط واضحة. بدون مفاجآت."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingTeaser.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "ring-2 ring-brand-600 relative" : ""}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  الأكثر شعبية
                </span>
              )}
              <h3 className="font-display text-base font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <p className="mt-1 font-body text-sm text-slate-500">
                {plan.note}
              </p>
              <div className="mt-6">
                <Button
                  href="/ar/pricing"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  عرض خطة {plan.name}
                </Button>
              </div>
            </Card>
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            هل أنت مستعد للسيطرة على مخاطر الموردين؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            اكتشف كيف يمكن لـ CheckFirst استبدال جداول البيانات والبريد الإلكتروني
            والتخمين بمنصة واحدة مدعومة بالذكاء الاصطناعي.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/ar/contact" variant="primary" size="lg">
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
