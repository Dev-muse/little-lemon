import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./Little-lemon-Api";
import { initializeTimes, updateTimes } from "./App";

jest.mock("./Little-lemon-Api", () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes should return available times from fetchAPI", async () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes); // Mock API to return test data

  const times = initializeTimes(); // Call function

  expect(times).toEqual(mockTimes); // Expect output to match mock data
});

test("updateTimes updates localStorage when called", () => {
  const mockData = ["17:00", "18:00"];
  const testDate = "2025-02-11";

  fetchAPI.mockReturnValue(mockData);
  Storage.prototype.setItem = jest.fn();

  updateTimes([], { type: "UPDATE_TIMES", payload: testDate });

  expect(localStorage.setItem).toHaveBeenCalledWith(
    testDate,
    JSON.stringify(mockData)
  );
});

test("writes available times to localStorage", () => {
  const mockData = ["17:00", "18:00", "19:00"];
  const testDate = "2025-02-11";

  // Mock localStorage.setItem
  Storage.prototype.setItem = jest.fn();

  localStorage.setItem(testDate, JSON.stringify(mockData));

  expect(localStorage.setItem).toHaveBeenCalledWith(
    testDate,
    JSON.stringify(mockData)
  );
});

test("reads available times from localStorage", () => {
  const mockData = ["17:00", "18:00", "19:00"];
  const testDate = "2025-02-11";

  // Mock localStorage.getItem
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));

  const storedData = JSON.parse(localStorage.getItem(testDate));

  expect(localStorage.getItem).toHaveBeenCalledWith(testDate);
  expect(storedData).toEqual(mockData);
});

test("updateTimes should return new available times when date changes", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes); // Mock API to return test data

  const initialState = ["17:00", "18:00"]; // Example initial state
  const action = { type: "UPDATE_TIMES", payload: "2025-02-11" };

  const newState = updateTimes(initialState, action);

  expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-02-11"));
  expect(newState).toEqual(mockTimes); // Expect the new state to match mock data
});

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
