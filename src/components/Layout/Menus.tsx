export type MenuItem = {
  id: string;
  title: string;
  href: string;
  className?: string;
  children?: { title: string; href: string }[]; // ✅ add
};
export const menus: MenuItem[] = [
  {
    id: 'Home',
    title: 'Home',
    href: '/en',
    className: 'mobile-only',
  },

  {
    id: 'aboutus',
    title: 'About Us',
    href: '/en/about-us',
  },
  {
    id: 'ourclinics',
    title: 'Our Clinics',
    href: '/en/our-clinics',
  },
  {
    id: 'doctors',
    title: 'Our Experts',
    href: '/en/our-experts',
  },
  {
    id: 'services',
    title: 'Treatments',
    href: '/en/treatments',
  },
  {
    id: 'oursuccess',
    title: 'Our Success',
    href: '/en/our-success',
  },
  {
    id: 'fertilityguide',
    title: 'Fertility Guide',
    href: '/en/fertility-guide',
  },
  {
    id: 'yourvisit',
    title: 'Your Visit',
    href: '/en/your-visit',
  },
 {
    id: 'contact',
    title: 'Contact Us',
    href: '/en/contact-us', // fallback
    children: [
     
     
      { title: 'Contact Us', href: '/en/contact-us' },
       { title: 'Refer a Patient', href: '/en/refer-a-patient' },
    ],
  },
  {
    id: 'arabic',
    title: 'العربية',
    href: '#', // placeholder — we'll handle navigation dynamically
    className: 'mobile-only',
  },
];
