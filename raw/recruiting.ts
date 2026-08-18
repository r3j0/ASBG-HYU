export interface RecruitingDetailItem {
  label: string;
  value: string;
}

export const recruitingDetailItems = [
  {
    label: "PERIOD",
    value: "08.19 – 09.04",
  },
  {
    label: "RESULT",
    value: "09.07 (MON)",
  },
  {
    label: "FIRST OT",
    value: "09.11 (FRI)",
  },
  {
    label: "WHO",
    value: "HYU STUDENTS",
  },
] as const satisfies readonly RecruitingDetailItem[];

export const applyFormUrl = "https://forms.gle/miZBXpKkU8yRzYch6";

/** 지원 마감(09.04) 이후 false로 바꾸면 지원 CTA가 마감 안내로 전환됩니다. */
export const isApplicationOpen = true;
