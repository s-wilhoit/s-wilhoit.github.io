export interface ContactFormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  affiliation: string;
  quote: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  description: string;
}

export interface PolicyInitiative {
  id: number;
  title: string;
  description: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
}

export interface PathwayCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

export interface ConsultingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}
