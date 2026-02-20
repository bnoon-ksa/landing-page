import type { SVGProps } from 'react';

export default function LocationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M128 0C78.69 0 38.4 40.29 38.4 89.6c0 64.171 80.331 157.949 83.78 161.869a8.04 8.04 0 0 0 11.64 0c3.449-3.92 83.78-97.698 83.78-161.869C217.6 40.29 177.31 0 128 0m0 134.4c-24.75 0-44.8-20.05-44.8-44.8S103.25 44.8 128 44.8s44.8 20.05 44.8 44.8-20.05 44.8-44.8 44.8"
      />
    </svg>
  );
}
