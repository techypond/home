export interface Project {
  name: string
  description: string
  tech: string[]
  status: 'Live' | 'Beta' | 'WIP'
  url: string
}

export const projects: Project[] = [
  {
    name: 'Tommies Idea Board',
    description: 'A collaborative platform for sharing start up ideas.',
    tech: ['Go', 'Vue 3', 'Redis'],
    status: 'Live',
    url: 'https://tommies.techypond.com',
  },
  {
    name: 'Skaffale',
    description: 'Browse, search, and discover AI/ML libraries across Python, JavaScript, R, and C.',
    tech: ['Node.js', 'Vue 3', 'PostgreSQL'],
    status: 'Live',
    url: 'https://skaffale.techypond.com',
  },
  {
    name: 'Elezioni',
    description: 'Interactive Italian election data visualization — explore parliament composition and electoral maps.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'Live',
    url: 'https://elezioni.techypond.com',
  },
  {
    name: 'Trink App',
    description: 'A fun multiplayer drinking game app with classic and truth-or-dare modes for any group.',
    tech: ['React Native', 'Expo', 'SQLite'],
    status: 'Live',
    url: 'https://trinkapp.techypond.com',
  },
  {
    name: 'Homelenz',
    description: 'Property management and real estate platform with geospatial support and REST API.',
    tech: ['Node.js', 'PostGIS', 'PostgreSQL'],
    status: 'Live',
    url: 'https://homelenz.techypond.com',
  },
]
