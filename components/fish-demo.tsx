"use client";

import { useState, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import { FishArt } from "@/components/fish-art";
import { trackEvent } from "@/lib/analytics";

const colors = [
  { name: "Tangerine", body: "#ff9b73", fin: "#ffd166" },
  { name: "Lagoon", body: "#2dd4bf", fin: "#b9f7e8" },
  { name: "Blueberry", body: "#8d9eff", fin: "#d2c8ff" },
  { name: "Sunshine", body: "#ffd166", fin: "#ff9b73" },
  { name: "Coral", body: "#fb7185", fin: "#fda4af" },
  { name: "Ocean", body: "#38bdf8", fin: "#bae6fd" },
  { name: "Grape", body: "#c084fc", fin: "#f0abfc" },
];
const patterns = ["Bubbles", "Stripes", "Waves"];
const brushSizes = [
  { name: "Fine brush", size: 2.5 },
  { name: "Regular brush", size: 4.5 },
  { name: "Big brush", size: 7 },
];
type BrushMark = { x: number; y: number; radius: number; color: string };

export function FishDemo() {
  const [colorIndex, setColorIndex] = useState(0);
  const [pattern, setPattern] = useState(0);
  const [brushSize, setBrushSize] = useState(brushSizes[1].size);
  const [marks, setMarks] = useState<BrushMark[]>([]);
  const [released, setReleased] = useState(false);
  const color = colors[colorIndex];

  function paint(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.type === "pointermove" && event.buttons !== 1) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 112;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    if (x < 0 || x > 112 || y < 0 || y > 100) return;
    setMarks((current) => [...current.slice(-99), { x, y, radius: brushSize, color: color.fin }]);
    setReleased(false);
  }

  function releaseFish() {
    if (!released) trackEvent("fish_demo_started");
    setReleased(true);
    trackEvent("fish_demo_completed");
  }

  function surprise() {
    setColorIndex(Math.floor(Math.random() * colors.length));
    setPattern(Math.floor(Math.random() * patterns.length));
    setMarks([]);
    trackEvent("fish_demo_started");
  }

  function reset() {
    setColorIndex(0);
    setPattern(0);
    setMarks([]);
    setReleased(false);
  }

  return (
    <div className={`creator-demo${released ? " is-released" : ""}`}>
      <div className="creator-workspace">
        <div className="creator-toolbar">
          <span className="creator-step"><span>1</span> Pick a color</span>
          <button className="text-button" onClick={reset} type="button">
            Clear
          </button>
        </div>
        <div className="fish-canvas" aria-label="Draw on your fish with the selected brush">
          <span className="canvas-sparkle sparkle-one">✳</span>
          <span className="canvas-sparkle sparkle-two">✦</span>
          <div
            className="fish-preview"
            role="group"
            aria-label="Draw or drag across your fish to add color"
            onPointerDown={paint}
            onPointerMove={paint}
            onPointerUp={(event) => {
              if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={(event) => {
              if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerDownCapture={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
          >
            <FishArt className="creator-fish" color={color.body} accent={color.fin} variant={pattern} label={`Your ${color.name.toLowerCase()} demo fish`} />
            <svg className="fish-paint-marks" viewBox="0 0 112 100" aria-hidden="true">
              <defs><clipPath id="fish-paint-mask"><path d="M27 50c0-22 20-37 48-32 15 3 25 15 28 32-3 17-13 29-28 32-28 5-48-10-48-32Z" /></clipPath></defs>
              <g clipPath="url(#fish-paint-mask)">{marks.map((mark, index) => <circle key={index} cx={mark.x} cy={mark.y} r={mark.radius} fill={mark.color} opacity=".82" />)}</g>
            </svg>
          </div>
          {released && <span className="release-bubble bubble-pop-one" />}
          {released && <span className="release-bubble bubble-pop-two" />}
        </div>
        <div className="pattern-picker" role="group" aria-label="Choose a fish pattern">
          <span>Pattern</span>
          {patterns.map((name, index) => (
            <button aria-pressed={pattern === index} className={pattern === index ? "active" : ""} key={name} onClick={() => { setPattern(index); setReleased(false); }} type="button">{name}</button>
          ))}
        </div>
        <div className="creator-controls">
          <div className="creator-control-groups">
            <div className="color-picker" role="group" aria-label="Choose a fish color">
              {colors.map((item, index) => (
                <button
                  aria-label={item.name}
                  aria-pressed={colorIndex === index}
                  className={`color-swatch${colorIndex === index ? " active" : ""}`}
                  key={item.name}
                  onClick={() => { setColorIndex(index); setReleased(false); }}
                  style={{ backgroundColor: item.body }}
                  type="button"
                />
              ))}
            </div>
            <div className="brush-picker" role="group" aria-label="Brush size">
              {brushSizes.map((brush) => (
                <button aria-label={brush.name} aria-pressed={brushSize === brush.size} className={brushSize === brush.size ? "active" : ""} key={brush.name} onClick={() => setBrushSize(brush.size)} type="button">
                  <i style={{ width: brush.size * 1.5, height: brush.size * 1.5 }} />
                </button>
              ))}
            </div>
          </div>
          <button className="surprise-button" onClick={surprise} type="button"><span>✧</span> Surprise me</button>
        </div>
        <div className="creator-footer">
          <span><span className="brush-icon">⌁</span> Made with imagination</span>
          <button className="button button-dark button-release" onClick={releaseFish} type="button">
            {released ? "Fish released!" : "Release my fish"} <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <div className="demo-aquarium">
        <div className="demo-aquarium-top"><span>YOUR MINI AQUARIUM</span><span className="live-pill"><i /> LIVE</span></div>
        <div className="demo-water">
          <div className="demo-water-light" />
          {released ? (
            <>
              <div className="released-fish-wrap">
                <FishArt className="released-fish-art" color={color.body} accent={color.fin} variant={pattern} />
                <svg className="released-fish-marks" viewBox="0 0 112 100" aria-hidden="true">
                  <defs><clipPath id="released-fish-mask"><path d="M27 50c0-22 20-37 48-32 15 3 25 15 28 32-3 17-13 29-28 32-28 5-48-10-48-32Z" /></clipPath></defs>
                  <g clipPath="url(#released-fish-mask)">{marks.map((mark, index) => <circle key={index} cx={mark.x} cy={mark.y} r={mark.radius} fill={mark.color} opacity=".82" />)}</g>
                </svg>
              </div>
              <span className="demo-seaweed seaweed-one" />
              <span className="demo-seaweed seaweed-two" />
            </>
          ) : (
            <div className="empty-demo">
              <div className="fish-ghost"><FishArt color="rgba(225,247,245,.18)" accent="rgba(225,247,245,.1)" /></div>
              <span>Your fish will swim here</span>
            </div>
          )}
          <span className="mini-bubble mini-bubble-one" /><span className="mini-bubble mini-bubble-two" />
        </div>
        <div className="demo-aquarium-bottom">
          {released ? (
            <p><span className="status-dot" /> There she goes! Your fish is swimming.</p>
          ) : (
            <p>Make it yours, then send it swimming.</p>
          )}
        </div>
        {released && <Link className="demo-cta" href="/signup">Want to see it on your TV? <strong>Create your aquarium ↗</strong></Link>}
      </div>
    </div>
  );
}
