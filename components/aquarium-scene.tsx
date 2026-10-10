"use client";

import { useState } from "react";
import { FishArt } from "@/components/fish-art";

const fish = [
  { left: "58%", top: "21%", size: "104px", color: "#ff9b73", accent: "#ffd166", speed: "18s" },
  { left: "76%", top: "42%", size: "82px", color: "#a78bfa", accent: "#f6b8d1", speed: "23s" },
  { left: "54%", top: "66%", size: "118px", color: "#2dd4bf", accent: "#b9f7e8", speed: "20s" },
  { left: "84%", top: "76%", size: "72px", color: "#38bdf8", accent: "#ffd166", speed: "16s" },
  { left: "72%", top: "11%", size: "64px", color: "#ffd166", accent: "#ff9b73", speed: "25s" },
];

export function AquariumScene() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="aquarium-scene" aria-label="An animated aquarium with colorful demo fish">
      <div className="water-glow" />
      <div className="water-ray ray-one" />
      <div className="water-ray ray-two" />
      {fish.map((item, index) => (
        <button
          aria-label={`Demo fish ${index + 1}${selected === index ? ", made by a little artist" : ""}`}
          aria-pressed={selected === index}
          className={`scene-fish scene-fish-${index + 1}${selected === index ? " is-selected" : ""}`}
          key={item.left}
          onClick={() => setSelected(selected === index ? null : index)}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            animationDuration: item.speed,
            "--fish-color": item.color,
            "--fish-accent": item.accent,
          } as React.CSSProperties}
          type="button"
        >
          <FishArt color={item.color} accent={item.accent} variant={index} />
        </button>
      ))}
      {selected !== null && <div className="fish-credit">Made by a little artist <span>✦</span></div>}
      {Array.from({ length: 12 }, (_, i) => (
        <span className={`bubble bubble-${i + 1}`} key={i} />
      ))}
      <div className="reef reef-left"><i /><i /><i /><i /></div>
      <div className="reef reef-right"><i /><i /><i /></div>
      <div className="scene-caption"><span className="status-dot" /> YOUR LIVING AQUARIUM</div>
    </div>
  );
}
