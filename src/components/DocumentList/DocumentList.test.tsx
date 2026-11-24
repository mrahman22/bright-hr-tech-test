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
});
