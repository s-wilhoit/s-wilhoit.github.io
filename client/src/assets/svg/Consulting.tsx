import { SVGProps } from "react";

export default function Consulting(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z"
        fill="#38B2AC"
        fillOpacity="0.2"
      />
      <path
        d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
        stroke="#38B2AC"
        strokeWidth="2"
      />
      <path
        d="M32 22V32L38 38M32 44C24.268 44 18 37.732 18 30C18 22.268 24.268 16 32 16C39.732 16 46 22.268 46 30C46 37.732 39.732 44 32 44Z"
        stroke="#38B2AC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
