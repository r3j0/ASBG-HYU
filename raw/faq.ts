export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems = [
  {
    question: "전공자가 아니어도 지원할 수 있나요?",
    answer: "네. 전공보다 함께 배우고 만들려는 태도를 중요하게 봅니다.",
  },
  {
    question: "AWS 경험이 없어도 괜찮나요?",
    answer: "괜찮습니다. 기초부터 함께 배우며 AWS를 처음 접하는 학생도 참여할 수 있습니다.",
  },
  {
    question: "활동은 어떤 방식으로 진행되나요?",
    answer: "정기 세미나와 스터디, 팀 프로젝트, 커뮤니티 네트워킹을 중심으로 진행됩니다.",
  },
  {
    question: "프로젝트 경험이 없어도 지원 가능한가요?",
    answer: "가능합니다. 프로젝트를 완성한 경험보다 새로운 시도를 함께할 의지를 더 중요하게 봅니다.",
  },
  {
    question: "정기 활동 주기와 기간은 어떻게 되나요?",
    answer: "학기 중 정기 활동을 기본으로 하며, 세부 일정은 모집 공고에서 안내합니다.",
  },
] as const satisfies readonly FaqItem[];
