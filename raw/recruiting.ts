export interface RecruitingDetailItem {
  label: string;
  value: string;
}

export const recruitingDetailItems = [
  {
    label: "PERIOD",
    value: "08.XX — 09.XX",
  },
  {
    label: "WHO",
    value: "HANYANG STUDENTS",
  },
  {
    label: "MODE",
    value: "ONLINE APPLICATION",
  },
] as const satisfies readonly RecruitingDetailItem[];
