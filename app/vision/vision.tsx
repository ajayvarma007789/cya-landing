import { HoverEffect } from "@/components/aceternity/card";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Vision",
    description:
      "To become a globally recognized hub of excellence in Cyber Security education and research, while upholding the distinctive values of the Institute",
      id:0,
  },
  {
    title: "Mission",
    description:
      "To provide the comprehensive teaching of a cutting-edge and globally relevant curriculum in Cyber Security within a conducive and innovative learning environment.",
    id: 0,
  },
  
];
