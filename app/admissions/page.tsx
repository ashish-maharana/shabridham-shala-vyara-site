import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Admissions | Shabridham Shala",
  description: "શબરીધામ શાળા માટે Admissions પૂછપરછ અને પ્રક્રિયા માર્ગદર્શન.",
  path: "/admissions",
});

const steps = ["વિનંતી", "શાળા મુલાકાત", "દસ્તાવેજ ચકાસણી", "દાખલા માર્ગદર્શન"];
const docs = [
  "જન્મ પ્રમાણપત્રની નકલ",
  "જો લાગુ પડે તો અગાઉની શાળાનો રેકોર્ડ",
  "વિદ્યાર્થીના ફોટા",
  "વાલી ઓળખ/સરનામું પુરાવો",
  "જરૂરી તબીબી માહિતી (જો હોય તો)",
];

export default function AdmissionsPage() {
  const faqs: Array<[string, string]> = [
    ["શું Admissions ખુલ્લાં છે?", "હાલની ક્લાસ ઉપલબ્ધતા માટે શાળાનો સંપર્ક કરીને પુષ્ટિ કરો."],
    ["કયો બોર્ડ/કયા ધોરણો ઉપલબ્ધ છે?", "અધિકૃત વિગતો પુષ્ટિ થાય ત્યાં સુધી લખાણ સંપાદિત રાખો."],
    ["શું આ ગુજરાતી-માધ્યમ છે?", "હાલનો જાહેર આધાર ગુજરાતી-માધ્યમ શાળા-સલામત સ્થિતિ દર્શાવે છે."],
    ["શું સંપર્ક માહિતી અધિકૃત છે?", "ફોન અને ઇમેઇલ અધિકૃત પુષ્ટિ થાય ત્યાં સુધી પ્લેસહોલ્ડર છે."],
  ];

  return (
    <>
      <PageHero
        variant="shabridham-ref"
        content={{
          eyebrow: "Admissions",
          title: "યોગ્ય Admissions માર્ગ શોધો",
          description: "પેરેન્ટ વિનંતી, ક્લાસ ઉપલબ્ધતા, દસ્તાવેજો અને મુલાકાત માર્ગદર્શન માટે સરળ અને મિત્રસભર Admissions પૃષ્ઠ.",
          imageSrc: placeholderAssets.illustrationA,
          imageAlt: "પ્લેસહોલ્ડર: Admissions",
          primaryCta: { label: "વિનંતી શરૂ કરો", href: "/contact" },
          secondaryCta: { label: "અભ્યાસક્રમ", href: "/academics" },
        }}
      />

      <section className="panel section-pad section-gap" id="process">
        <h1 className="title-lg">પરિવારો માટે સરળ પગલાં.</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <article className="sticker" key={s}>
              <span className="badge">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-black">{s}</h3>
              <p className="body-copy mt-2 text-sm">કચેરી માર્ગદર્શિત પગલું; અંતિમ વિગતો શાળાથી પુષ્ટિ કરવી.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section-pad section-gap bg-[var(--yellow)]" id="documents">
        <h2 className="title-lg">દસ્તાવેજો તૈયાર રાખો.</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {docs.map((d) => (
            <div className="chip justify-start bg-white" key={d}>
              {d}
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-pad section-gap" id="faq">
        <h2 className="title-lg">FAQ</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection
        variant="shabridham-ref"
        title="શરૂ કરવા તૈયાર છો?"
        description="અંતિમ સંપર્ક વર્કફ્લો જોડાયા પછી આ ફોર્મથી પેરેન્ટ રસ એકત્ર કરી શકાય છે."
        primary={{ label: "હવે સંપર્ક કરો", href: "/contact" }}
        secondary={{ label: "મુખ્ય પૃષ્ઠ", href: "/" }}
      />
    </>
  );
}

