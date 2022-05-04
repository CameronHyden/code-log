import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogInput from "./LogInput";

it("should match the LogInput component snapshot", () => {
  const { container } = render(<LogInput />);

  expect(container).toMatchSnapshot();
});

it("services dropdown should be visible when button clicked", () => {
  render(<LogInput />);
  const button = screen.getByLabelText("Log your code");
  userEvent.click(button);
  const AddSection = screen.getByLabelText("title");
  expect(AddSection).toBeInTheDocument();
});
