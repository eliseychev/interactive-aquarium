import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { productConfig } from "@/config/product";

export const runtime = "nodejs";

const fishBodies = [
  { x: 104, y: 480, width: 150, height: 92, label: "THE HAPPY GUPPY" },
  { x: 354, y: 480, width: 168, height: 105, label: "THE SWIRLY ONE" },
  { x: 104, y: 232, width: 175, height: 107, label: "THE DAYDREAMER" },
  { x: 367, y: 232, width: 155, height: 96, label: "THE LITTLE COMET" },
];

export async function GET() {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([612, 792]);
  const titleFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdf.embedFont(StandardFonts.Helvetica);
  const ink = rgb(0.17, 0.29, 0.31);
  const muted = rgb(0.48, 0.57, 0.55);
  page.drawText("A LITTLE OCEAN OF YOUR OWN", { x: 52, y: 740, size: 10, font: titleFont, color: muted });
  page.drawText("Color a fish. Send it swimming.", { x: 52, y: 704, size: 24, font: titleFont, color: ink });
  page.drawText("Pick a fish, add your favorite colors, then ask a grown-up to bring it to the big screen.", {
    x: 52, y: 681, size: 9, font: bodyFont, color: muted,
  });

  fishBodies.forEach((fish, index) => {
    const centerX = fish.x + fish.width / 2;
    const centerY = fish.y + fish.height / 2;
    const tailX = fish.x - 37;
    const line = rgb(0.43, 0.52, 0.50);
    page.drawSvgPath(
      `M ${fish.x} ${centerY} C ${fish.x + 12} ${fish.y + fish.height + 11}, ${fish.x + fish.width - 3} ${fish.y + fish.height + 11}, ${fish.x + fish.width} ${centerY} C ${fish.x + fish.width - 3} ${fish.y - 11}, ${fish.x + 12} ${fish.y - 11}, ${fish.x} ${centerY} Z`,
      { borderColor: line, borderWidth: 2.1, color: rgb(1, 1, 1), opacity: 0, borderOpacity: 1 },
    );
    page.drawSvgPath(
      `M ${fish.x + 5} ${centerY} L ${tailX} ${centerY + 34} L ${tailX + 4} ${centerY - 34} Z`,
      { borderColor: line, borderWidth: 2.1, color: rgb(1, 1, 1), opacity: 0, borderOpacity: 1 },
    );
    page.drawSvgPath(
      `M ${centerX - 8} ${fish.y + fish.height - 14} Q ${centerX + 15} ${centerY} ${centerX - 8} ${fish.y + 14} Q ${centerX + 8} ${centerY} ${centerX - 8} ${fish.y + fish.height - 14} Z`,
      { borderColor: line, borderWidth: 1.3, color: rgb(1, 1, 1), opacity: 0, borderOpacity: 1 },
    );
    page.drawCircle({ x: fish.x + fish.width - 23, y: centerY + 12, size: 9, borderColor: line, borderWidth: 1.6, color: rgb(1, 1, 1), opacity: 0, borderOpacity: 1 });
    page.drawCircle({ x: fish.x + fish.width - 23, y: centerY + 12, size: 2, color: ink });
    page.drawLine({ start: { x: fish.x + fish.width - 27, y: centerY - 13 }, end: { x: fish.x + fish.width - 12, y: centerY - 15 }, thickness: 1.2, color: line });
    page.drawText(fish.label, { x: fish.x + 4, y: fish.y - 17, size: 7, font: titleFont, color: muted });
    if (index < fishBodies.length - 1) {
      page.drawLine({ start: { x: 52, y: fish.y - 39 }, end: { x: 560, y: fish.y - 39 }, thickness: 0.5, color: rgb(0.87, 0.89, 0.85) });
    }
  });

  page.drawText("Draw your own patterns, scales and silly smiles. There are no wrong fish!", {
    x: 52, y: 58, size: 9, font: bodyFont, color: muted,
  });
  page.drawText(`${productConfig.brand.toUpperCase()}  ·  Made for little big imaginations`, {
    x: 52, y: 39, size: 7, font: titleFont, color: muted,
  });

  const bytes = await pdf.save();
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="drawarium-fish-templates.pdf"',
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
