import type { SVGProps } from 'react';

export default function Check2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="#336AEA" />
      <path
        d="M8.30859 15.4969L12.7177 19.906L21.6904 10.9333"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
