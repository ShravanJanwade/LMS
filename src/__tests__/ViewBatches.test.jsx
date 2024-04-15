import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ViewBatches from "../Pages/ViewBatches";
import BatchHeader from "../Components/BatchHeader";
import BatchDetailsCards from "../Components/BatchDetailsCards";
import BatchDetailsTable from "../Components/BatchDetailsTable";

jest.mock("../Services/BatchData", () => ({
  fetchBatchData: jest.fn().mockResolvedValue([]),
}));

jest.mock("../Services/ProgressData", () => ({
  fetchProgressData: jest.fn().mockResolvedValue([]),
}));

describe("ViewBatches component", () => {
  test("renders BatchHeader component", async () => {
    // Arrange
    render(<ViewBatches />);

    // Act
    const batchHeader = screen.getByText("BatchHeader");

    // Assert
    expect(batchHeader).toBeInTheDocument();
  });

  test("renders BatchDetailsCards component by default", async () => {
    // Arrange
    render(<ViewBatches />);

    // Act
    const batchDetailsCards = screen.getByText("BatchDetailsCards");

    // Assert
    expect(batchDetailsCards).toBeInTheDocument();
  });

  test("toggles between card and table view", async () => {
    // Arrange
    render(<ViewBatches />);

    // Act
    const toggleButton = screen.getByRole("button", { name: /Toggle View/i });
    fireEvent.click(toggleButton);
    const batchDetailsTable = screen.getByText("BatchDetailsTable");

    // Assert
    expect(batchDetailsTable).toBeInTheDocument();
  });

  test("updates status when status changes", async () => {
    // Arrange
    render(<ViewBatches />);

    // Act
    const selectElement = screen.getByLabelText("Select Status");
    fireEvent.change(selectElement, { target: { value: "InProgress" } });

    // Assert
    expect(selectElement.value).toBe("InProgress");
  });

  test("updates search query when search input changes", async () => {
    // Arrange
    render(<ViewBatches />);

    // Act
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "John Doe" } });

    // Assert
    expect(searchInput.value).toBe("John Doe");
  });
});
