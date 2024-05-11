import { UseClickInOutProps } from "@/hooks/useClickInOut/types";

export const useClickInOutMock: UseClickInOutProps = {
  ignoredRefs: [
    {
      current: document.createElement("span"),
    },
  ],

  onClickInside: jest.fn(),
  onClickOutside: jest.fn(),
};
