interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
  socials: Social[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  progress: string;
  title: string;
  image: Image;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateEnded: date;
  dateStarted: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  linktoBuild: string;
  image: Image;
  summary: string;
  technologies: Skill[];
}
