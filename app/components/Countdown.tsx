'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string; // e.g., "2025-12-31T23:59:59Z"
}

const calculateTimeLeft = (targetDate: string) => {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { expired: false, days, hours, minutes, seconds };
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="text-red-500 font-semibold">
        Deal Expired
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Live ticking countdown */}
      <div className="text-white font-mono text-lg">
        {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}h :
        {timeLeft.minutes.toString().padStart(2, '0')}m :
        {timeLeft.seconds.toString().padStart(2, '0')}s
      </div>

      {/* Stats display */}
      <div className="flex gap-4">
        <div className="rounded-2xl bg-white/5 p-4 text-center flex-1">
          <p className="text-2xl font-semibold text-white">{timeLeft.days}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Days</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4 text-center flex-1">
          <p className="text-2xl font-semibold text-white">{timeLeft.hours}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hours</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4 text-center flex-1">
          <p className="text-2xl font-semibold text-white">{timeLeft.minutes}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Minutes</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4 text-center flex-1">
          <p className="text-2xl font-semibold text-white">{timeLeft.seconds}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;