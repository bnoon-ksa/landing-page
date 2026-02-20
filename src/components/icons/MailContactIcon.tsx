import type { SVGProps } from 'react';

export default function MailContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M230.4 38.4H25.6c-2.54 0-4.85.75-6.88 1.94L128 124.27 237.28 40.34a12.7 12.7 0 0 0-6.88-1.94"
      />
      <rect fill="currentColor" width="12.8" height="71.36" x="0" y="52.2" rx="6.4" ry="6.4" />
      <rect fill="currentColor" width="12.8" height="71.36" x="243.2" y="52.2" rx="6.4" ry="6.4" />
      <path
        fill="currentColor"
        d="M243.2 131.88v73.72c0 7.07-5.73 12.8-12.8 12.8H25.6c-7.07 0-12.8-5.73-12.8-12.8v-73.72L128 219.56z"
      />
    </svg>
  );
}
