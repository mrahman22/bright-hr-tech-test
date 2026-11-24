import { useState } from "react";
import type {
  DocumentItem,
  IDocumentFolder,
} from "../../interfaces/user-documents";
import { DocumentListRow } from "./components/DocumentListRow";

interface IDocumentListProps {
  documents: DocumentItem[];
}

export const DocumentList = ({ documents }: IDocumentListProps) => {
  const [currentDocuments, setCurrentDocuments] =
    useState<DocumentItem[]>(documents);

  const handleFolderClick = (folder: IDocumentFolder) => {
    setCurrentDocuments(folder.files);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Documents
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Access your company files and folders
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {currentDocuments.length} items
        </span>
      </header>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-140 border-collapse text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                Date added
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {currentDocuments.map((document) => (
              <DocumentListRow
                key={document.name}
                document={document}
                onFolderClick={handleFolderClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
