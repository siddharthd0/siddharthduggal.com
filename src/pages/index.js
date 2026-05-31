import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

const expoOut = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expoOut } },
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1C4.134 1 1 4.134 1 8c0 3.09 2.006 5.716 4.79 6.641.35.064.479-.152.479-.338 0-.166-.006-.607-.009-1.192-1.948.423-2.359-.939-2.359-.939-.318-.809-.778-1.024-.778-1.024-.636-.435.048-.426.048-.426.703.049 1.073.721 1.073.721.624 1.069 1.638.76 2.037.581.063-.452.244-.76.444-.935-1.555-.177-3.19-.778-3.19-3.46 0-.764.273-1.389.721-1.879-.072-.177-.312-.889.069-1.853 0 0 .588-.188 1.927.719A6.71 6.71 0 018 4.82a6.71 6.71 0 011.756.236c1.338-.907 1.925-.719 1.925-.719.382.964.142 1.676.07 1.853.449.49.72 1.115.72 1.879 0 2.689-1.638 3.281-3.198 3.455.251.217.475.645.475 1.3 0 .938-.009 1.694-.009 1.924 0 .188.127.406.482.337C12.997 13.714 15 11.09 15 8c0-3.866-3.134-7-7-7z" fill="currentColor"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6 7.5M6 7.5L1 13H3.5L7 9.5L10.5 13H13L8 7.5M6 7.5L3.5 1H1L6 7.5M8 7.5L13 1H10.5L7 4.5L8 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M3.5 6V11.5M3.5 4.5V4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M6.5 11.5V8.5C6.5 7.4 7.1 6.5 8 6.5C8.9 6.5 9.5 7.2 9.5 8.5V11.5M6.5 6V11.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const socials = [
  { icon: GitHubIcon, href: "https://github.com/siddharthd0", label: "GitHub" },
  { icon: XIcon, href: "https://twitter.com/siddharthd01", label: "Twitter" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/siddharth-duggal", label: "LinkedIn" },
];

function BalloonSvg() {
  return (
    <svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M11 1.2 C 16.4 1.2, 19.8 5.4, 19.8 11.4 C 19.8 16.9, 15.9 21.4, 11 21.9 C 6.1 21.4, 2.2 16.9, 2.2 11.4 C 2.2 5.4, 5.6 1.2, 11 1.2 Z"
        fill="#e8a030"
      />
      <ellipse cx="7.6" cy="7" rx="2.2" ry="3" fill="#ffffff" fillOpacity="0.3" />
      <ellipse cx="11" cy="18.8" rx="5.5" ry="2" fill="#000" fillOpacity="0.08" />
      <path d="M9.6 21.9 L11 24.4 L12.4 21.9 Z" fill="#b8761c" />
      <path
        d="M11 24.4 Q 8.6 28 11 32 Q 13.4 36 10.6 40 Q 8.4 42.5 11 44"
        stroke="#e8a030"
        strokeOpacity="0.5"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PopBurst() {
  const particles = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const angle = (i / 9) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const radius = 18 + Math.random() * 10;
        return {
          id: i,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          duration: 0.45 + Math.random() * 0.15,
          size: 2.5 + Math.random() * 1.5,
        };
      }),
    []
  );

  return (
    <span className="relative block w-[22px] h-[22px]">
      <motion.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] rounded-full"
        style={{ background: "#e8a030", filter: "blur(6px)" }}
        initial={{ opacity: 0.55, scale: 0.5 }}
        animate={{ opacity: 0, scale: 1.9 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-1/2 top-1/2 rounded-full bg-[#e8a030]"
          style={{
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
          transition={{ duration: p.duration, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </span>
  );
}

const BALLOON_SPAWN_DUR = 0.5;
const BALLOON_START_SCALE = 0.12;

function Balloon({ onDone }) {
  const [phase, setPhase] = useState("rise");
  const xMv = useMotionValue(0);
  const yMv = useMotionValue(0);
  const rotateMv = useMotionValue(0);
  const opacityMv = useMotionValue(0);
  const scaleMv = useMotionValue(BALLOON_START_SCALE);

  const params = useMemo(() => {
    const TAU = Math.PI * 2;
    return {
      finalSize: 0.88 + Math.random() * 0.18,
      duration: 3.6 + Math.random() * 1.0,
      spawnX: (Math.random() - 0.5) * 4,
      terminalVy: 64 + Math.random() * 18,
      vyRampRate: 1.1 + Math.random() * 0.4,
      drag: 1.55 + Math.random() * 0.35,
      windAmp: 75 + Math.random() * 45,
      windFreqA: (0.22 + Math.random() * 0.18) * TAU,
      windFreqB: (0.55 + Math.random() * 0.3) * TAU,
      windFreqC: (1.1 + Math.random() * 0.5) * TAU,
      windPhaseA: Math.random() * TAU,
      windPhaseB: Math.random() * TAU,
      windPhaseC: Math.random() * TAU,
      driftAccel: (Math.random() - 0.5) * 9,
      bobAmp: 0.7 + Math.random() * 0.6,
      bobFreq: (0.6 + Math.random() * 0.35) * TAU,
      bobPhase: Math.random() * TAU,
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    let stopped = false;
    const t0 = performance.now();
    let prevT = t0;
    let xPos = params.spawnX;
    let vx = 0;
    let yPos = 0;
    let smoothRot = 0;

    const step = (now) => {
      if (stopped) return;
      const t = (now - t0) / 1000;
      const dt = Math.min((now - prevT) / 1000, 1 / 30);
      prevT = now;

      if (t >= params.duration) {
        setPhase("pop");
        return;
      }

      const spawnRaw = Math.min(t / BALLOON_SPAWN_DUR, 1);
      const easedOpacity = 1 - Math.pow(1 - spawnRaw, 5);
      const c1 = 1.7;
      const c3 = c1 + 1;
      const easedScale =
        1 + c3 * Math.pow(spawnRaw - 1, 3) + c1 * Math.pow(spawnRaw - 1, 2);
      opacityMv.set(easedOpacity);
      scaleMv.set(
        BALLOON_START_SCALE + (params.finalSize - BALLOON_START_SCALE) * easedScale
      );

      const windWeight = spawnRaw;
      const wind =
        (Math.sin(t * params.windFreqA + params.windPhaseA) * params.windAmp * 0.6 +
          Math.sin(t * params.windFreqB + params.windPhaseB) * params.windAmp * 0.3 +
          Math.sin(t * params.windFreqC + params.windPhaseC) * params.windAmp * 0.15 +
          params.driftAccel) *
        windWeight;

      const ax = wind - params.drag * vx;
      vx += ax * dt;
      xPos += vx * dt;

      const vy = params.terminalVy * (1 - Math.exp(-params.vyRampRate * t));
      yPos -= vy * dt;

      const targetRot = -vx * 0.16;
      smoothRot += (targetRot - smoothRot) * Math.min(dt * 9, 1);

      const bob = Math.sin(t * params.bobFreq + params.bobPhase) * params.bobAmp;

      xMv.set(xPos);
      yMv.set(yPos + bob);
      rotateMv.set(smoothRot);

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
    };
  }, [params, xMv, yMv, rotateMv, opacityMv, scaleMv]);

  useEffect(() => {
    if (phase === "pop") {
      const t = setTimeout(onDone, 520);
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  return (
    <motion.span
      className="absolute left-1/2 bottom-0 inline-block will-change-transform"
      style={{
        marginLeft: -11,
        transformOrigin: "50% 100%",
        x: xMv,
        y: yMv,
        rotate: rotateMv,
        opacity: opacityMv,
        scale: scaleMv,
      }}
    >
      {phase === "rise" ? <BalloonSvg /> : <PopBurst />}
    </motion.span>
  );
}

function BloonLink({ href, children }) {
  const [items, setItems] = useState([]);
  const idRef = useRef(0);
  const lastSpawn = useRef(0);

  const handleEnter = useCallback(() => {
    const now = Date.now();
    if (now - lastSpawn.current < 180) return;
    lastSpawn.current = now;
    const id = idRef.current++;
    setItems((prev) => [...prev, id]);
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((x) => x !== id));
  }, []);

  return (
    <span className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleEnter}
        className="text-[#f0ece4]/60 hover:text-white transition-colors duration-150"
      >
        {children}
      </a>
      <span className="pointer-events-none absolute left-0 bottom-full w-full h-0">
        {items.map((id) => (
          <Balloon key={id} onDone={() => remove(id)} />
        ))}
      </span>
    </span>
  );
}

function TechLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f0ece4]/60 hover:text-[#60a5fa] transition-colors duration-150"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex items-center px-[max(1.75rem,6vw)] py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.h1
          variants={item}
          className="font-display font-light text-[#f0ece4] leading-[1] mb-5 whitespace-nowrap tracking-tight"
          style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
        >
          Siddharth Duggal
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono text-[11px] text-[#888] leading-[1.7] mb-6 max-w-[20rem]"
        >
          I build software. Working on{" "}
          <BloonLink href="https://bloon.ai">Bloon.ai</BloonLink>
          , and previously started{" "}
          <TechLink href="https://techoptimum.org">Tech Optimum</TechLink>
          {" "}to get students into coding.
        </motion.p>

        <motion.div variants={item} className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#888] hover:text-[#f0ece4] transition-colors duration-150"
            >
              <Icon />
            </a>
          ))}
          <a
            href="mailto:siddharth@bloon.ai"
            className="group font-mono text-[11px] text-[#888] hover:text-[#f0ece4] transition-colors duration-200"
          >
            siddharth<span className="inline-block origin-center transition-transform duration-[450ms] ease-[cubic-bezier(0.34,1.45,0.5,1)] group-hover:-rotate-[10deg] group-hover:scale-[1.18]">@</span>bloon.ai
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
