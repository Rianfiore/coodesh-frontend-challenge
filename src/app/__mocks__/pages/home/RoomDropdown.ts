import { RoomDropdownProps } from "@/(pages)/(publicRoutes)/(home)/components/RoomDropdown/types";


export const roomDropdownMock: RoomDropdownProps = {
  onSelectItem: jest.fn(),
  selectedAmountRoomsOption: {
    id: 0,
    value: "Todos",
    text: "",
  },
  onClose: jest.fn(),
};
