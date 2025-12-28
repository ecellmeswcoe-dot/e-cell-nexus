import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const eventDate = new Date("December 29, 2025 13:30:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-50 blur-md group-hover:opacity-80 transition-opacity" />
          
          {/* Time Block */}
          <div className="relative glass-card rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-primary/30 text-center">
            <span className="font-mono text-3xl md:text-5xl font-bold text-gradient block">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2 block">
              {block.label}
            </span>
          </div>
          
          {/* Separator */}
          {index < timeBlocks.length - 1 && (
            <span className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl font-bold animate-pulse">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
