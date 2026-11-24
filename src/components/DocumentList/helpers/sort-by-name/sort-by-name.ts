import type { DocumentItem } from "../../../../interfaces/user-documents";

export const sortByName = (documents: DocumentItem[]): DocumentItem[] => {
  return [...documents].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  );
};
