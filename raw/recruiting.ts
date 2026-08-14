export interface RecruitingDetailItem {
  label: string;
  value: string;
}

export const recruitingDetailItems = [
  {
    label: "PERIOD",
    value: "TO BE ANNOUNCED",
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
