import type { DocumentItem } from "../../interfaces/user-documents";

interface IDocumentListProps {
  documents: DocumentItem[];
}

export const DocumentList = ({ documents }: IDocumentListProps) => {
  return (
    <ul>
      {documents.map((document) => (
        <li key={document.name}>{document.name}</li>
      ))}
    </ul>
  );
};
