import { describe, expect, it } from "vitest";
import type { DocumentItem } from "../../../../interfaces/user-documents";
import { sortByName } from "./sort-by-name";

describe("sortByName", () => {
  it("sorts documents alphabetically regardless of case", () => {
    const documents: DocumentItem[] = [
      { type: "pdf", name: "zebra", added: "2026-01-01" },
      { type: "pdf", name: "Banana", added: "2026-01-02" },
      { type: "pdf", name: "apple", added: "2026-01-03" },
    ];

    const result = sortByName(documents);

    expect(result.map((document) => document.name)).toEqual([
      "apple",
      "Banana",
      "zebra",
    ]);
  });

  it("does not mutate the original documents array", () => {
    const documents: DocumentItem[] = [
      { type: "pdf", name: "Zebra", added: "2026-01-01" },
      { type: "pdf", name: "Apple", added: "2026-01-02" },
    ];

    const result = sortByName(documents);

    expect(result.map((document) => document.name)).toEqual(["Apple", "Zebra"]);

    expect(documents.map((document) => document.name)).toEqual([
      "Zebra",
      "Apple",
    ]);
  });
});
