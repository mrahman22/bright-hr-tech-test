import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DocumentList } from "./DocumentList";
import { userDocuments } from "../../data/user-documents";
import type { DocumentItem } from "../../interfaces/user-documents";

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
  it("displays the contents of a folder when clicked", async () => {
    const user = userEvent.setup();

    render(<DocumentList documents={userDocuments} />);

    expect(screen.queryByText("Expenses claim form")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Expenses" }));

    expect(screen.getByText("Expenses claim form")).toBeInTheDocument();

    expect(screen.getByText("Fuel allowances")).toBeInTheDocument();

    expect(screen.queryByText("Employee Handbook")).not.toBeInTheDocument();
  });

  it("allows users to navigate back to the root documents", async () => {
    const user = userEvent.setup();

    render(<DocumentList documents={userDocuments} />);

    await user.click(screen.getByRole("button", { name: "Expenses" }));

    expect(screen.getByText("Expenses claim form")).toBeInTheDocument();

    expect(screen.queryByText("Employee Handbook")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Back" }));

    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Expenses" }),
    ).toBeInTheDocument();

    expect(screen.queryByText("Expenses claim form")).not.toBeInTheDocument();
  });
  it("returns to the parent folder when navigating back from a nested folder", async () => {
    const user = userEvent.setup();
    const documents: DocumentItem[] = [
      {
        type: "folder",
        name: "Parent folder",
        files: [
          {
            type: "folder",
            name: "Nested folder",
            files: [
              { type: "doc", name: "Nested document", added: "2024-01-01" },
            ],
          },
          { type: "pdf", name: "Parent document", added: "2024-01-02" },
        ],
      },
    ];

    render(<DocumentList documents={documents} />);

    await user.click(screen.getByRole("button", { name: "Parent folder" }));
    await user.click(screen.getByRole("button", { name: "Nested folder" }));
    expect(screen.getByText("Nested document")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Back" }));

    expect(
      screen.getByRole("button", { name: "Nested folder" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Parent document")).toBeInTheDocument();
    expect(screen.queryByText("Nested document")).not.toBeInTheDocument();
  });
});
