import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DocumentList } from "./DocumentList";
import { userDocuments } from "../../data/user-documents";

describe("DocumentList", () => {
  it("displays the names of the documents", () => {
    render(<DocumentList documents={userDocuments} />);

    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();

    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
  });
  it("renders folders as clickable buttons", () => {
    render(<DocumentList documents={userDocuments} />);

    expect(
      screen.getByRole("button", { name: "Expenses" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Misc" })).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: "Employee Handbook" }),
    ).not.toBeInTheDocument();
  });
});
