import { AmountRoomOptionProps } from "@/(pages)/(publicRoutes)/(home)/components/AmountRoomOption/types";

export const amountRoomOptionMock: AmountRoomOptionProps = {
  option: {
    id: 0,
    value: "Todos",
    text: null,
  },
  isSelected: false,
  onSelect: jest.fn(),
};
