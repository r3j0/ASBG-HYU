export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems = [
  {
    question: "AWS나 클라우드를 처음 접해도 괜찮나요?",
    answer: "네. AWS를 처음 접하는 학생도 함께 참여할 수 있도록 기초적인 학습과 세션을 진행할 예정입니다.",
  },
  {
    question: "2026년 2학기에는 어떤 활동을 하나요?",
    answer: "1기는 클라우드 스터디를 중심으로 운영하며, 세션, Hands-on, 연합 세션 및 AWS 관련 행사 참여 등을 함께 계획하고 있습니다.",
  },
  {
    question: "스터디는 어떻게 진행되나요?",
    answer: "AWS에서 제공하는 학습 자료와 권장 학습 방식을 활용하고, 구성원이 함께 공부하거나 주제를 나누어 발표하는 형태를 고려하고 있습니다.",
  },
  {
    question: "프로젝트도 진행하나요?",
    answer: "2026년 2학기 1기는 스터디를 중심으로 운영합니다. 이후 구성원의 관심과 역량에 따라 프로젝트 등 활동 범위를 확대할 계획입니다.",
  },
  {
    question: "다른 학교나 AWS와의 교류 활동도 있나요?",
    answer: "AWS 관련 행사 참여와 다른 대학 Builder Club과의 연합 세션 등 다양한 교류 활동을 계획하고 있습니다.",
  },
] as const satisfies readonly FaqItem[];
