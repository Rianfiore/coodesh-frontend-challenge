import { amountRoomOptionMock } from "@/__mocks__/pages/home";
import { render } from "@testing-library/react";
import { AmountRoomOption } from ".";

describe("AmountRoomOption component", () => {
  test("should render the component", () => {
    const { getByTestId } = render(
      <AmountRoomOption {...amountRoomOptionMock} />
    );

    const amountRoomOption = getByTestId("amount-room-option");

    expect(amountRoomOption).toBeInTheDocument();
  });

  test("should call onSelect when clicked", () => {
    const { getByTestId } = render(
      <AmountRoomOption {...amountRoomOptionMock} />
    );

    const amountRoomOption = getByTestId("amount-room-option");

    amountRoomOption.click();

    expect(amountRoomOptionMock.onSelect).toHaveBeenCalled();
  });

  test("should show option value", () => {
    const { getByTestId } = render(
      <AmountRoomOption {...amountRoomOptionMock} />
    );

    const amountRoomOption = getByTestId("amount-room-option");

    expect(amountRoomOption).toHaveTextContent(
      amountRoomOptionMock.option.value
    );
  });
});
