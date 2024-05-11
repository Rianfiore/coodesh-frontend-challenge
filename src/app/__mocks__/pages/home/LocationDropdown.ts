import { LocationDropdownProps } from "@/(pages)/(publicRoutes)/(home)/components/LocationDropdown/types";

export const locationDropdownMock: LocationDropdownProps = {
  onSelectItem: jest.fn(),
  onClose: jest.fn(),
};
