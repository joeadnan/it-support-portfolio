export type SkillLevel = "Basic" | "Intermediate" | "Advanced";
export type CertificationStatus = "Completed" | "In Progress" | "Planned";
export type CaseStudyLabel = "Real Case" | "Lab Practice";

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

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: CertificationStatus;
  category: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  credentialUrl?: string;
};

export type DocumentationSample = {
  title: string;
  description: string;
  fileUrl: string;
  tags: string[];
};

export type EducationBackground = {
  school: string;
  major: string;
  period: string;
  description: string;
  focus: string[];
};

export type AvailabilityInfo = {
  status: string;
  targetRoles: string[];
  workTypes: string[];
  location: string;
};

export type WhyHireMeItem = {
  title: string;
  description: string;
};
