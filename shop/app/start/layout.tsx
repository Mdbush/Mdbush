import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your SoloKit Product — 30-Second Quiz",
  description:
    "Answer 3 questions to find the perfect SoloKit tool for your UAE freelance business.",
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
