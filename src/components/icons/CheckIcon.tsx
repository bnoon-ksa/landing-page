import type { SVGProps } from 'react';

export default function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <circle cx="22" cy="22" r="22" fill="#336AEA" />
      <path
        d="M12.1864 22.7288L18.6441 29.1864L31.8135 16.0171"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
