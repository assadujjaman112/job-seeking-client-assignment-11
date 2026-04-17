import { useState, useEffect, useRef } from "react";
import { FiBriefcase, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

const stats = [
  { target: 500, suffix: "+", label: "Active Jobs", sub: "Updated daily", icon: FiBriefcase },
  { target: 200, suffix: "+", label: "Partner Companies", sub: "Top employers", icon: FiUsers },
  { target: 10000, suffix: "+", label: "Registered Job Seekers", sub: "Growing community", icon: FiAward },
  { target: 95, suffix: "%", label: "Placement Rate", sub: "Successful matches", icon: FiTrendingUp },
];

const Counter = ({ target, suffix, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl px-8 py-14"
      style={{ background: "linear-gradient(135deg, #331D2C 0%, #4e2a42 60%, #1a0e18 100%)" }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Numbers That <span className="text-amber-400">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ target, suffix, label, sub, icon: Icon }) => (
            <div
              key={label}
              className="text-center bg-white/10 rounded-2xl px-6 py-8 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-amber-400 text-xl" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                <Counter target={target} suffix={suffix} />
              </p>
              <p className="text-sm font-semibold text-white/90 mb-1">{label}</p>
              <p className="text-xs text-white/50">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
