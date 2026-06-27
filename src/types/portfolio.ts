export type SkillLevel = "Basic" | "Intermediate" | "Advanced";

export type Skill = {
  title: string;
  description: string;
  level: SkillLevel;
  icon: string;
};

export type ProjectAccent =
  | "blue"
  | "emerald"
  | "orange"
  | "violet"
  | "cyan"
  | "rose";

export type Project = {
  title: string;
  category: string;
  summary: string;
  tools: string[];
  results: string[];
  accent: ProjectAccent;
};

export type CaseStudy = {
  title: string;
  problem: string;
  analysis: string[];
  solution: string;
  impact: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type DocumentItem = {
  title: string;
  description: string;
  category: string;
  url: string;
};
