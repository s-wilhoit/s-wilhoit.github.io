import { SVGProps } from "react";

export default function Harvard(props: SVGProps<SVGSVGElement>) {
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
        fill="#A51C30"
        fillOpacity="0.2"
      />
      <path
        d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
        stroke="#A51C30"
        strokeWidth="2"
      />
      <path
        d="M24 20V44M40 20V44M24 32H40M22 20H42M22 44H42"
        stroke="#A51C30"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
