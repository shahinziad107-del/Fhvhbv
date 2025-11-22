import { TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Ziad',
    role: 'Team Lead & Strategist',
    bio: 'Ziad drives the vision of the team, ensuring every project aligns with our core values of innovation and excellence. He specializes in system architecture and leadership.',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    socials: [
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'email', url: 'mailto:ziad@example.com' }
    ],
    skills: ['Leadership', 'Architecture', 'Strategy']
  },
  {
    id: '2',
    name: 'Ahmed',
    role: 'Senior Frontend Engineer',
    bio: 'A pixel-perfectionist who breathes React and Tailwind. Ahmed ensures our user interfaces are intuitive, accessible, and performant across all devices.',
    imageUrl: 'https://picsum.photos/400/400?random=2',
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' }
    ],
    skills: ['React', 'TypeScript', 'UI/UX']
  },
  {
    id: '3',
    name: 'Morsy',
    role: 'Backend Specialist',
    bio: 'The backbone of our operations. Morsy designs robust APIs and scalable databases that keep our applications running smoothly under high loads.',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'twitter', url: '#' }
    ],
    skills: ['Node.js', 'Database', 'Cloud']
  },
  {
    id: '4',
    name: 'Bella',
    role: 'Product Designer',
    bio: 'Bella bridges the gap between functionality and aesthetics. Her designs focus on empathy, ensuring every interaction delights the user.',
    imageUrl: 'https://picsum.photos/400/400?random=4',
    socials: [
      { platform: 'linkedin', url: '#' },
      { platform: 'email', url: 'mailto:bella@example.com' }
    ],
    skills: ['Figma', 'Prototyping', 'User Research']
  },
  {
    id: '5',
    name: 'Khalifa',
    role: 'DevOps & QA Engineer',
    bio: 'Khalifa automates the boring stuff so we can focus on building. He maintains our CI/CD pipelines and ensures code quality remains high.',
    imageUrl: 'https://picsum.photos/400/400?random=5',
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' }
    ],
    skills: ['Docker', 'CI/CD', 'Testing']
  }
];