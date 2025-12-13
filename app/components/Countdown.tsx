'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string; // e.g., "2025-12-13T23:59:59"
}

const calculateTimeLeft = (targetDate: string) => {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    hours: Math.ceil(difference / (1000 * 60 * 60)), // intuitive rounding
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ targetDate }: CountdownProps) => {
  // Declare hooks unconditionally (no early return before all hooks run)
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Set initial value once mounted
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, targetDate]);

  return (
    <div className="space-y-4">
      {/* Live ticking countdown (shows zeros until mounted updates) */}
      <div className="text-white font-mono text-lg">
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')} Until Phase One closes
      </div>

      {/* Dynamic Hours Left stat */}
      <div className="rounded-2xl bg-white/5 p-4 text-center">
        <p className="text-2xl font-semibold text-white">{timeLeft.hours}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hours Left</p>
      </div>
    </div>
  );
};

export default Countdown;