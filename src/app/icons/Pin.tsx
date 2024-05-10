import { SVGProps } from "react";
export const Pin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#A2A7AA"
      d="M12.121 4.001a5.749 5.749 0 0 1 4.416 9.429l-4.539 5.447-4.54-5.447A5.749 5.749 0 0 1 11.876 4h.246Zm-.246-2c-4.696 0-8.312 4.143-7.678 8.796a7.748 7.748 0 0 0 1.725 3.913l5.745 6.893c.172.207.49.207.662 0l5.745-6.893a7.748 7.748 0 0 0 1.725-3.914c.634-4.652-2.982-8.795-7.678-8.795h-.246Z"
    />
    <path
      fill="#A2A7AA"
      d="M10.498 9.744a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </svg>
);
