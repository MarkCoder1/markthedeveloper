export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | 'Present';
  highlights: string[];
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: 'Real-time Dashboard',
    description: 'Streaming metrics dashboard with graceful degradation, skeleton loading, and offline cache.',
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'Tailwind'],
    link: 'https://example.com',
    highlights: ['Sub-200ms updates', 'Adaptive polling fallback', 'Accessible charts'],
  },
  {
    title: 'Design System',
    description: 'Composable UI kit focusing on accessibility, theming, and frictionless developer experience.',
    tech: ['Storybook', 'TypeScript', 'Testing'],
    repo: 'https://github.com/username/design-system',
    highlights: ['A11y-first components', 'Tree-shakeable imports', 'Theming tokens'],
  },
  {
    title: 'Build Optimizer',
    description: 'CLI analyzing bundle composition & suggesting code-splitting strategies for performance wins.',
    tech: ['Node.js', 'ESBuild'],
    repo: 'https://github.com/username/build-optimizer',
    highlights: ['~30% bundle reduction', 'Dependency graph output', 'Config diff suggestions'],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    start: '2023-02',
    end: 'Present',
    highlights: [
      'Led migration to App Router & incremental adoption of React Server Components',
      'Improved Core Web Vitals (LCP from 3.1s → 1.6s)',
      'Mentored engineers on performance profiling & a11y audits',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'CI/CD'],
  },
  {
    company: 'Dev Studio',
    role: 'Frontend Engineer',
    start: '2021-06',
    end: '2023-01',
    highlights: [
      'Delivered multi-tenant dashboard architecture with role-based routing',
      'Introduced design token pipeline & dark mode strategy',
    ],
    tech: ['React', 'Node.js', 'Design Tokens'],
  },
];

export const stats = [
  { label: 'Years Experience', value: new Date().getFullYear() - 2021 },
  { label: 'Projects Delivered', value: 24 },
  { label: 'Performance Wins', value: '→50% LCP' },
  { label: 'A11y Audits', value: 18 },
];
