import { InputProps } from "@/components/Input/types";
import { BurguerMenu } from "@/icons";

export const inputMock: InputProps = {
  icon: BurguerMenu({}),
  label: "Localização",
  placeholder: "Qual é a localização?",
  onClick: jest.fn(),
  onInputChange: jest.fn(),
  onInputFocus: jest.fn(),
  onBlur: jest.fn(),
};
