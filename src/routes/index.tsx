import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import hero from "@/assets/hero.jpg";
import y1 from "@/assets/y1.jpg";
import y2 from "@/assets/y2.jpg";
import y3 from "@/assets/y3.jpg";
import y4 from "@/assets/y4.jpg";
import y5 from "@/assets/y5.jpg";
import rose from "@/assets/rose.jpg";
import h1 from "@/assets/h1.jpg";
import h2 from "@/assets/h2.jpg";
import h3 from "@/assets/h3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshin — 5 Years of Us" },
      { name: "description", content: "A cinematic anniversary memory: 25 June 2021 — 25 June 2026." },
    ],
  }),
  component: Akshin,
});

const START = new Date("2021-06-25T00:00:00");
const TARGET = new Date("2026-06-25T00:00:00");

const timeline = [
  { year: "2021", title: "The Beginning", text: "Two strangers, one sunset, a thousand quiet sparks. Where it all started.", img: y1 },
  { year: "2022", title: "Growing Together", text: "Late-night talks, golden walks, learning the language only we speak.", img: y2 },
  { year: "2023", title: "Our Adventures", text: "New cities, mountain air, and a map we kept rewriting with every trip.", img: y3 },
  { year: "2024", title: "Becoming Stronger", text: "Through every storm, we found shelter in each other. Always.", img: y4 },
  { year: "2025", title: "Forever, In Progress", text: "Promises whispered, dreams shared, a future we are quietly building.", img: y5 },
];

const moments = [
  { date: "Jun 25, 2021", title: "First Hello", text: "The day everything began." },
  { date: "Dec 31, 2022", title: "Our First New Year", text: "Midnight kisses under city lights." },
  { date: "Aug 14, 2023", title: "The Mountain Trip", text: "Where we left our hearts above the clouds." },
  { date: "Feb 14, 2024", title: "Letters & Roses", text: "A quiet Valentine that meant everything." },
  { date: "Jun 25, 2026", title: "5 Years", text: "And this is only the beginning." },
];

function Akshin() {
  return (
    <main className="bg-stage relative min-h-screen text-foreground">
      <CursorGlow />
      <Particles />
      <Hero />
      <Countdown />
      <Timeline />
      <Gallery />
      <Moments />
      <Stats />
      <Letter />
      <MusicPlayer />
      <FinalSection />
      <footer className="relative z-10 py-10 text-center text-xs text-muted-foreground">
        Made with <span className="text-soft-pink">♥</span> · Anish &amp; Kinshu · 25.06.2021 — 25.06.2026
      </footer>
    </main>
  );
}

/* ---------------- Cursor Glow ---------------- */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="cursor-glow hidden md:block" />;
}

/* ---------------- Particles ---------------- */
function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 14,
        size: 2 + Math.random() * 5,
        key: i,
      })),
    []
  );
  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.key}
          className="particle"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-soft-pink/80"
        >
          25 · 06 · 2021 — 25 · 06 · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-gold text-[clamp(4.5rem,16vw,11rem)] font-light leading-none"
        >
          Akshin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-4 font-serif text-xl italic text-foreground/85 sm:text-2xl"
        >
          <span className="text-gold">Anish</span>
          <span className="mx-3 text-soft-pink">&amp;</span>
          <span className="text-gold">Kinshu</span>
        </motion.p>


        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="shimmer mx-auto my-6 w-40 origin-center"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-serif text-2xl font-light italic text-foreground/90 sm:text-3xl"
        >
          Celebrating 5 Years of Our Best Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-4 text-sm tracking-[0.4em] text-rose-gold/90"
        >
          5 YEARS · INFINITE MEMORIES
        </motion.p>

        <motion.a
          href="#story"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="glow-ring mt-10 inline-block rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] text-foreground backdrop-blur-md transition-colors hover:bg-rose-gold/20"
          style={{ background: "linear-gradient(135deg, rgba(248,200,220,.1), rgba(212,175,140,.15))" }}
        >
          Begin Our Story
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.4em] text-foreground/60"
      >
        SCROLL
      </motion.div>
    </section>
  );
}

/* ---------------- Countdown ---------------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, passed: diff === 0 };
}

function Countdown() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { d, h, m, s, passed } = useCountdown(TARGET);
  const label = passed ? "Our day is here" : "Until our 5th anniversary";
  const items = mounted
    ? [
        { v: d, l: "Days" },
        { v: h, l: "Hours" },
        { v: m, l: "Minutes" },
        { v: s, l: "Seconds" },
      ]
    : [
        { v: 0, l: "Days" },
        { v: 0, l: "Hours" },
        { v: 0, l: "Minutes" },
        { v: 0, l: "Seconds" },
      ];
  return (
    <section id="story" className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-rose-gold">{label}</p>
      <div className="glass mx-auto inline-flex flex-wrap items-center justify-center gap-4 px-6 py-6 sm:gap-10 sm:px-10">
        {items.map((it) => (
          <div key={it.l} className="min-w-[60px] sm:min-w-[80px]">
            <div className="text-gold font-serif text-4xl font-light sm:text-6xl">
              {String(it.v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
function Timeline() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Heading eyebrow="Our Journey" title="A Love Story in Five Chapters" />
      <div className="relative mt-16">
        <div
          className="absolute left-4 top-0 h-full w-px md:left-1/2"
          style={{ background: "linear-gradient(180deg, transparent, #d4af8c66, transparent)" }}
        />
        <div className="space-y-20">
          {timeline.map((t, i) => (
            <TimelineRow key={t.year} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item, index }: { item: (typeof timeline)[number]; index: number }) {
  const isRight = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className={`relative grid items-center gap-8 md:grid-cols-2 ${isRight ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className={`pl-12 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
        <div className="text-rose-gold font-serif text-6xl leading-none opacity-80">{item.year}</div>
        <h3 className="text-gold mt-2 font-serif text-3xl">{item.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto md:max-w-sm">
          {isRight ? "" : null}
          {item.text}
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.02, rotate: isRight ? -0.5 : 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass glow-ring relative ml-12 overflow-hidden md:ml-0 aspect-[4/5]"
      >
        <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-soft-pink">
          Chapter {index + 1}
        </div>
      </motion.div>

      <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-rose-gold shadow-[0_0_20px_#d4af8c] md:left-1/2" />
    </motion.div>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const imgs = [hero, h1, y1, h2, y2, y3, h3, y4, y5, rose];
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Heading eyebrow="Memory Gallery" title="Moments We Keep Forever" />
      <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {imgs.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="glass group relative block w-full overflow-hidden break-inside-avoid"
          >
            <img src={src} alt="" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-[0.3em] text-soft-pink opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              Memory #{String(i + 1).padStart(2, "0")}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur-lg"
          >
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={imgs[active]}
              className="glow-ring max-h-[85vh] max-w-full rounded-xl object-contain"
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Moments ---------------- */
function Moments() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Heading eyebrow="Special Moments" title="Little Dates, Big Feelings" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass relative overflow-hidden p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-rose-gold">{m.date}</div>
            <h3 className="text-gold mt-3 font-serif text-2xl">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            <div className="heart-pulse absolute -bottom-4 -right-4 text-6xl text-soft-pink/15">♥</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function AnimatedNumber({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

function Stats() {
  const days = Math.max(0, Math.floor((Date.now() - START.getTime()) / 86400000));
  const items = [
    { v: days, l: "Days Together" },
    { v: 1200, l: "Photos Collected" },
    { v: 14, l: "Trips Taken" },
    { v: 1825, l: "Memories Made" },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Heading eyebrow="By The Numbers" title="A Love Worth Counting" />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((it) => (
          <motion.div
            key={it.l}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass p-6 text-center"
          >
            <div className="text-gold font-serif text-4xl font-light md:text-5xl">
              <AnimatedNumber to={it.v} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-xs">
              {it.l}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Letter ---------------- */
const LETTER = `My dearest,

Five years ago, on a quiet June day, the world handed me you — and nothing has been ordinary since. You are my favorite sentence in every story, the warmth in every winter, the song I never want to end.

Thank you for five years of patience, laughter, late-night talks and tighter hugs. Here's to every chapter still unwritten. I love you, today and always.

— Forever yours.`;

function Letter() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    if (!open) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(LETTER.slice(0, i));
      if (i >= LETTER.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [open]);

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
      <Heading eyebrow="A Letter For You" title="Words From My Heart" />
      <div className="mt-12 flex flex-col items-center gap-8">
        <button onClick={() => setOpen(true)} className="group" aria-label="Open the letter">
          <div className={`envelope ${open ? "open" : ""} transition-transform group-hover:-translate-y-1`}>
            <div className="envelope-flap" />
            <div className="envelope-seal">A&amp;K</div>
            <div className="absolute inset-x-6 bottom-6 top-12 rounded-md bg-[#f8f2ea] p-4 text-left text-[10px] leading-relaxed text-[#3a2a22] shadow-inner">
              <div className="font-serif text-base">Anish &amp; Kinshu</div>
              <div className="shimmer my-2" />
              <div className="opacity-70">Five years. Infinite love.</div>
            </div>
          </div>
        </button>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="glow-ring rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] backdrop-blur-md transition-colors hover:bg-rose-gold/20"
          >
            Open My Letter
          </button>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass mx-auto max-w-xl whitespace-pre-line p-8 text-left font-serif text-lg leading-relaxed text-foreground/90"
          >
            <span className="caret">{text}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Music Player ---------------- */
function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(0.5);
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.volume = vol;
  }, [vol]);
  const toggle = async () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      try {
        await ref.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio
        ref={ref}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/10/30/audio_347ca52a90.mp3?filename=romantic-piano-12241.mp3"
        preload="none"
      />
      <div className="glass flex items-center gap-3 px-3 py-2 pr-4 shadow-2xl">
        <button
          onClick={toggle}
          className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-rose-gold/40 bg-background ${playing ? "spin-slow" : "spin-slow spin-paused"}`}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <img src={rose} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <span className="relative z-10 text-sm">{playing ? "❚❚" : "▶"}</span>
        </button>
        <div className="hidden sm:block">
          <div className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">Our Song</div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={vol}
            onChange={(e) => setVol(parseFloat(e.target.value))}
            className="mt-1 w-28 accent-[var(--rose-gold)]"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Final Section ---------------- */
function FinalSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const fireflies = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        key: i,
        top: Math.random() * 90,
        left: Math.random() * 100,
        dx: (Math.random() - 0.5) * 80 + "px",
        dy: (Math.random() - 0.5) * 80 + "px",
        delay: Math.random() * 4,
        dur: 4 + Math.random() * 5,
      })),
    []
  );
  return (
    <section className="relative z-10 overflow-hidden py-32 text-center">
      <div className="absolute inset-0">
        {mounted && fireflies.map((f) => (
          <span
            key={f.key}
            className="firefly"
            style={
              {
                top: `${f.top}%`,
                left: `${f.left}%`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.dur}s`,
                ["--dx" as string]: f.dx,
                ["--dy" as string]: f.dy,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-6"
      >
        <p className="font-serif text-xl italic text-foreground/80 sm:text-2xl">
          “These 5 years were my favorite chapter.”
        </p>
        <h2 className="text-gold mx-auto mt-8 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          And this is only the beginning <span className="text-soft-pink">♥</span>
        </h2>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glow-ring mt-10 rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] backdrop-blur-md transition-colors hover:bg-rose-gold/20"
        >
          Replay Our Story
        </button>
      </motion.div>
    </section>
  );
}

/* ---------------- Heading ---------------- */
function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-xs uppercase tracking-[0.5em] text-rose-gold"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-gold mt-3 font-serif text-4xl font-light sm:text-5xl"
      >
        {title}
      </motion.h2>
      <div className="shimmer mx-auto mt-5 w-24" />
    </div>
  );
}
