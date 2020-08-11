export interface BioInterface {
  name: string;
  tagline: string;
  email: string;
  github: string;
  website: string;
  linkedin: string;
  objective: string;
}

export interface PositionInterface {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  achievements: string[];
}
