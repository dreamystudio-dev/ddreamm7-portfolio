import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'alpha',
    stack: 'Unity',
    cover: '/project-placeholder.svg',
    links: {
      source: 'https://github.com/ddreamm7',
      download: 'https://github.com/ddreamm7/alpha/releases/latest',
    },
  },
  {
    slug: 'neon-runner',
    stack: 'Unreal Engine',
    cover: '/project-placeholder.svg',
    links: {
      source: 'https://github.com/ddreamm7',
      download: 'https://github.com/ddreamm7/neon-runner/releases/latest',
    },
  },
  {
    slug: 'voxel-shooter',
    stack: 'Unity',
    cover: '/project-placeholder.svg',
    links: {
      source: 'https://github.com/ddreamm7',
      download: 'https://github.com/ddreamm7/voxel-shooter/releases/latest',
    },
  },
  {
    slug: 'pixel-art-tool',
    stack: 'Vue 3',
    cover: '/project-placeholder.svg',
    links: {
      source: 'https://github.com/ddreamm7',
      download: 'https://github.com/ddreamm7/pixel-art-tool/releases/latest',
    },
  },
  {
    slug: 'terra-gen',
    stack: 'Godot',
    cover: '/project-placeholder.svg',
    links: {
      source: 'https://github.com/ddreamm7',
      download: 'https://github.com/ddreamm7/terra-gen/releases/latest',
    },
  },
] as const
