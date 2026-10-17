import type { SocialLink } from '@/types'

export const profile = {
  name: 'Dream',
  displayName: 'Dream',
  location: 'Perú',
  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/ddreamm7' },
    { id: 'email', label: 'Email', href: 'mailto:aalonsoopg@gmail.com' },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/51929514714',
    },
    { id: 'phone', label: 'Phone', href: 'tel:+51929514714' },
  ] as const satisfies readonly SocialLink[],
  contact: {
    email: 'aalonsoopg@gmail.com',
    phone: '+51929514714',
    whatsapp: 'https://wa.me/51929514714',
  },
} as const
