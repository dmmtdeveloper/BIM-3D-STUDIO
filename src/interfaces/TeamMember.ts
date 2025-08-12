export interface TeamMemberModalProps {
  isOpen: boolean;
  member: {
    id: string;
    name: string;
    position: string;
    location: string;
    experience: string;
    image: string;
    education: string;
    certifications: string[];
    specialization: string;
    skills: string[];
    bio: string;
    projectsCompleted: number;
    email: string;
    linkedin?: string;
  };
}

