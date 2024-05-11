import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";

export const useCurrentBreakpointMock = {
  outerWidth: jest.fn(),
  initialConfig: {
    screenSize: convertPixelIntoNumber(defaultTheme.screens.laptop),
    breakpointName: "laptop",
    breakpointValue: convertPixelIntoNumber(defaultTheme.screens.laptop),
  },
};
