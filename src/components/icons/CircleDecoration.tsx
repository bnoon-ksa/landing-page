import type { SVGProps } from 'react';

export default function CircleDecoration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122 122"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 61a61 61 0 1 1 122 0A61 61 0 0 1 0 61"
        fill="none"
        stroke="#5A6A85"
        strokeWidth="1"
        id="circle-text-path"
      />
      <text fill="#5A6A85" fontSize="10" fontFamily="inherit">
        <textPath href="#circle-text-path" startOffset="0%">
          BNOON &bull; FERTILITY &bull; WOMEN&apos;S HEALTH &bull;
        </textPath>
      </text>
    </svg>
  );
}
