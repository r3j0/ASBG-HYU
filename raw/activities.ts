export type ActivityAccent = "blue" | "orange" | "neutral";
export type ActivityVisualType = "learn" | "build" | "connect";

export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  label: string;
  description: string;
  tag: string;
  accent: ActivityAccent;
  visual: ActivityVisualType;
}

export const activityItems = [
  {
    id: "learn",
    number: "01",
    title: "LEARN",
    label: "AWS SEMINAR & STUDY",
    description: "AWS 기술을 함께 배우는\n정기 세미나와 스터디.",
    tag: "AWS / CLOUD",
    accent: "blue",
    visual: "learn",
  },
  {
    id: "build",
    number: "02",
    title: "BUILD",
    label: "PROJECT & HACKATHON",
    description: "아이디어를 실제 서비스와\n프로젝트로 만드는 경험.",
    tag: "PROJECT / HACKATHON",
    accent: "orange",
    visual: "build",
  },
  {
    id: "connect",
    number: "03",
    title: "CONNECT",
    label: "NETWORKING & COMMUNITY",
    description: "다양한 빌더들과 만나\n지식을 나누는 열린 커뮤니티.",
    tag: "NETWORK / COMMUNITY",
    accent: "neutral",
    visual: "connect",
  },
] as const satisfies readonly ActivityItem[];
