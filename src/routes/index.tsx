import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Coffee, Pizza, Sandwich, IceCream, MapPin, Phone, MessageCircle, Facebook, Instagram,
  Baby, PartyPopper, Bike, Users, BookOpen, Sofa, Flame, Menu as MenuIcon, X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import dessert from "@/assets/dessert.jpg";

const TITLE = "بلاك بير كوفي لاونج | Black Bear Coffee Lounge - بلقاس";
const DESC = "كافيه ومطعم عائلي في بلقاس: بيتزا، كريب، حلويات، مشروبات، منطقة ألعاب للأطفال وحجز حفلات. مش مجرد كافيه.. ده مكان ليك وللي بتحبهم.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/201080801917";

const MENU = {
  pizza: { label: "بيتزا", icon: Pizza, items: [
    { name: "بيتزا بيبروني", en: "Pepperoni Pizza", desc: "شرائح بيبروني مقرمشة على صوص طماطم طازة وموتزاريلا سايحة." },
    { name: "تشيكن رانش", en: "Chicken Ranch", desc: "فراخ مشوية وصوص رانش كريمي مع خضار طازة وجبنة ممطوطة." },
    { name: "سوبريم بيتزا", en: "Supreme Pizza", desc: "خليط لحوم وفلفل وزيتون ومشروم مع طبقة موتزاريلا غنية." },
  ]},
  crepes: { label: "كريب وساندوتشات", icon: Sandwich, items: [
    { name: "كريب لودد تشيز", en: "Loaded Cheese Crepe", desc: "كريب ذهبي محشي بمزيج أجبان سايحة." },
    { name: "ساندوتش كرسبي تشيكن", en: "Crispy Chicken", desc: "صدور فراخ مقرمشة مع صوص البيت وخس طازة." },
    { name: "عروض الكومبو", en: "Combo Offers", desc: "ساندوتش + بطاطس + مشروب بسعر مميز." },
  ]},
  desserts: { label: "حلويات", icon: IceCream, items: [
    { name: "مولتن كيك", en: "Molten Cake", desc: "كيكة شوكولاتة دافية قلبها سايح." },
    { name: "وافل", en: "Waffles", desc: "وافل مقرمش بالصوصات والفواكه." },
    { name: "تارت", en: "Tarts", desc: "تارت بزبدة وكريمة وفواكه موسمية." },
    { name: "آيس كريم", en: "Ice Cream", desc: "نكهات كريمية منعشة." },
  ]},
  drinks: { label: "مشروبات", icon: Coffee, items: [
    { name: "ماتشا لاتيه", en: "Matcha Latte", desc: "ماتشا أصلية مع لبن كريمي." },
    { name: "قهوة تركي / فرنساوي", en: "Turkish / French Coffee", desc: "محضرة على أصولها بريحة تفتح النفس." },
    { name: "آيس لاتيه", en: "Iced Latte", desc: "إسبريسو مع لبن بارد وتلج." },
    { name: "موهيتو طبيعي", en: "Fresh Mojito", desc: "نعناع وليمون وتلج.. انتعاش." },
  ]},
} as const;
type Cat = keyof typeof MENU;

const NAV = [["#about", "عن المكان"], ["#menu", "المنيو"], ["#features", "خدماتنا"], ["#offers", "العروض"], ["#contact", "تواصل"]];

function Index() {
  const [cat, setCat] = useState<Cat>("pizza");
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground">🐻</span>
            <span>Black Bear</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {NAV.map(([h, l]) => <a key={h} href={h} className="text-muted-foreground transition hover:text-primary">{l}</a>)}
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="hidden rounded-full bg-gradient-gold px-4 py-2 text-sm font-bold text-primary-foreground md:inline-block">احجز ترابيزة</a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="القائمة">{open ? <X /> : <MenuIcon />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t border-border px-4 py-4 md:hidden">
            {NAV.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="بلاك بير كوفي لاونج" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32">
          <p className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-primary">Black Bear Coffee Lounge · بلقاس</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            مش مجرد كافيه.. ده مكان ليك <span className="text-gradient-gold">وللي بتحبهم</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">لكل طعم حكاية ☕🍕</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-gradient-gold px-7 py-3 font-bold text-primary-foreground shadow-glow transition hover:scale-105">استكشف المنيو</a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3 font-bold backdrop-blur transition hover:border-primary hover:text-primary">
              <MessageCircle className="h-5 w-5" /> احجز عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-bold text-primary">عن بلاك بير</span>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">لاونج للعيلة والشباب في قلب بلقاس</h2>
          <p className="mt-4 leading-loose text-muted-foreground">
            بلاك بير هو مكانك الدافي للقعدة الحلوة. جو مريح وإضاءة هادية، سواء جاي تتجمع مع صحابك، تذاكر في هدوء، أو تريّح مع عيلتك على أكلة ومشروب من إيدينا.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[[Users, "تجمعات"], [BookOpen, "مذاكرة"], [Sofa, "استرخاء"]].map(([I, t]) => {
              const Icon = I as typeof Users;
              return <div key={t as string} className="rounded-2xl border border-border bg-card p-4 text-center"><Icon className="mx-auto mb-2 h-6 w-6 text-primary" /><span className="text-sm font-semibold">{t as string}</span></div>;
            })}
          </div>
        </div>
        <img src={dessert} alt="مولتن كيك وماتشا" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover shadow-glow" />
      </section>

      {/* Menu */}
      <section id="menu" className="bg-card/50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black md:text-4xl">المنيو</h2>
          <p className="mt-2 text-center text-muted-foreground">مكونات طازة كل يوم</p>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {(Object.keys(MENU) as Cat[]).map((k) => {
              const Icon = MENU[k].icon;
              const active = k === cat;
              return (
                <button key={k} onClick={() => setCat(k)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "bg-gradient-gold text-primary-foreground shadow-glow" : "border border-border bg-secondary text-secondary-foreground hover:border-primary"}`}>
                  <Icon className="h-4 w-4" /> {MENU[k].label}
                </button>
              );
            })}
          </div>
          <div key={cat} className="mt-10 grid animate-in fade-in slide-in-from-bottom-2 gap-4 duration-500 sm:grid-cols-2">
            {MENU[cat].items.map((it) => (
              <div key={it.en} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold transition group-hover:text-primary">{it.name}</h3>
                  <span className="font-display text-xs text-muted-foreground">{it.en}</span>
                </div>
                <p className="mt-2 text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="text-center text-3xl font-black md:text-4xl">أكتر من مجرد قعدة</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { I: Baby, t: "منطقة ألعاب الأطفال", d: "اقعد ريّح وولادك بيلعبوا في أمان.", tag: "Open Play · 50 ج/طفل" },
            { I: PartyPopper, t: "حفلات ومناسبات", d: "أعياد ميلاد، خطوبة وكل احتفالاتك.. خلّي احتفالك مميز.", tag: "احجز مناسبتك" },
            { I: Bike, t: "دليفري سريع", d: "أكلك المفضل يوصلك سخن لحد البيت في بلقاس.", tag: "اطلب دلوقتي" },
          ].map(({ I, t, d, tag }) => (
            <a key={t} href={WA} target="_blank" rel="noreferrer" className="group rounded-3xl border border-border bg-card p-8 transition hover:border-primary/60">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground transition group-hover:scale-110"><I className="h-7 w-7" /></div>
              <h3 className="mt-6 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
              <span className="mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">{tag}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="px-4 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-gold p-8 text-primary-foreground md:p-12">
          <div className="flex items-center gap-2 font-bold"><Flame className="h-5 w-5" /> عروض الأسبوع</div>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">عروض يوم الأحد 🔥</h2>
          <p className="mt-3 max-w-2xl text-lg font-semibold opacity-90">خصومات خاصة على البيتزا والكريب والباستا — وكمان باكدج ٦ ساندوتشات كرسبي بسعر مميز!</p>
          <a href={WA} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-background px-7 py-3 font-bold text-foreground transition hover:scale-105">اطلب العرض</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card/50 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">تعالى زورنا</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4"><MapPin className="h-6 w-6 shrink-0 text-primary" /><p className="leading-loose text-muted-foreground">بلقاس، شارع أبو رجيلة، بجوار مكتبة النجاح، أعلى محل ستينج للملابس (المدخل أمام مغسلة هالة شو، الدور التاني).</p></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 shrink-0 text-primary" /><div className="flex flex-col font-display" dir="ltr"><a href="tel:01080801917" className="hover:text-primary">01080801917</a><a href="tel:01080801918" className="hover:text-primary">01080801918</a></div></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> واتساب</a>
              <a href="https://www.facebook.com/Blackbear39155/" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full border border-border hover:border-primary hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/blackbearcafeeg" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full border border-border hover:border-primary hover:text-primary"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <iframe title="الموقع" className="min-h-80 w-full rounded-3xl border border-border" loading="lazy"
            src="https://www.google.com/maps?q=Belqas+Abu+Regila+Street&output=embed" />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Black Bear Coffee Lounge · بلاك بير</footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="واتساب" className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-glow transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
