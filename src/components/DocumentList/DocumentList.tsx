import { useState } from "react";
import type {
  DocumentItem,
  IDocumentFolder,
} from "../../interfaces/user-documents";
import { DocumentListRow } from "./components/DocumentListRow";
import { sortByName } from "./helpers/sort-by-name/sort-by-name";

interface IDocumentListProps {
  documents: DocumentItem[];
}

export const DocumentList = ({ documents }: IDocumentListProps) => {
  const [folderPath, setFolderPath] = useState<IDocumentFolder[]>([]);
  const [isSortByEnabled, setIsSortByEnabled] = useState(false);
  const currentDocuments = folderPath.at(-1)?.files ?? documents;

  const sortedDocuments = isSortByEnabled
    ? sortByName(currentDocuments)
    : currentDocuments;

  const isRoot = folderPath.length === 0;

  const handleFolderClick = (folder: IDocumentFolder) => {
    setFolderPath((path) => [...path, folder]);
  };

  const handleBack = () => {
    setFolderPath((path) => path.slice(0, -1));
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8 flex items-center justify-between">
        <div className="text-left">
          <nav aria-label="Folder location" className="text-black font-bold">
            <span>Documents</span>
            {folderPath.map((folder, index) => (
              <span key={index}> / {folder.name}</span>
            ))}
          </nav>

          <p className="mt-2 text-sm text-slate-500">
            Access your company files and folders
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-pressed={isSortByEnabled}
            onClick={() => setIsSortByEnabled((isEnabled) => !isEnabled)}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sort by name
          </button>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            {currentDocuments.length} items
          </span>
        </div>
      </header>

      {!isRoot && (
        <div className="mb-4 flex justify-start">
          <button
            type="button"
            onClick={handleBack}
            className="cursor-pointer rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Back
          </button>
        </div>
      )}

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
            {sortedDocuments.map((document) => (
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
