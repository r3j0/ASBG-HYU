export type ActivityAccent = "blue" | "orange" | "neutral";

export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  label: string;
  description: string;
  tag: string;
  accent: ActivityAccent;
}

export const activityItems = [
  {
    id: "learn",
    number: "01",
    title: "LEARN",
    label: "AWS Seminar & Hands-on",
    description: "AWS와 클라우드를 처음 접하는 학생도\n함께 배울 수 있는 세션과 실습을 진행합니다.",
    tag: "SEMINAR / HANDS-ON",
    accent: "blue",
  },
  {
    id: "build",
    number: "02",
    title: "STUDY",
    label: "Cloud Study",
    description: "구성원이 함께 클라우드를 공부하고,\n서로의 지식과 경험을 나누며 성장합니다.",
    tag: "CLOUD / STUDY",
    accent: "orange",
  },
  {
    id: "connect",
    number: "03",
    title: "CONNECT",
    label: "Community & Sessions",
    description: "AWS 공식 행사와 연합 세션을 통해\n다양한 빌더들과 교류하고 경험을 넓혀갑니다.",
    tag: "COMMUNITY / SESSION",
    accent: "neutral",
  },
] as const satisfies readonly ActivityItem[];
