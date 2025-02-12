import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe("Booking form", () => {
  test("test that the BookingsForm component can be submitted by the user", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    // const dateInput = screen.getAllByLabelText(/Choose date/);
    // fireEvent.change(dateInput, { target: { value: "2020-05-24" } });

    // const timeInput = screen.getAllByLabelText(/Choose time/);
    // fireEvent.change(timeInput, { target: { value: "17:00" } });

    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
