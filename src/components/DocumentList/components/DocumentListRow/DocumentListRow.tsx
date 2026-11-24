import type { DocumentItem } from "../../../../interfaces/user-documents";

interface DocumentListRowProps {
  document: DocumentItem;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const DocumentListRow = ({ document }: DocumentListRowProps) => {
  const isFolder = document.type === "folder";

  return (
    <tr className="transition-colors hover:bg-slate-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg"
          >
            {isFolder ? "📁" : "📄"}
          </span>

          {isFolder ? (
            <button
              type="button"
              className="cursor-pointer text-left text-sm font-medium text-slate-800 hover:text-blue-600 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {document.name}
            </button>
          ) : (
            <span className="text-sm font-medium text-slate-700">
              {document.name}
            </span>
          )}
        </div>
      </td>

      <td className="px-6 py-4 text-sm text-slate-500">
        {isFolder ? "Folder" : document.type.toUpperCase()}
      </td>

      <td className="px-6 py-4 text-sm text-slate-500">
        {isFolder
          ? "—"
          : dateFormatter.format(new Date(`${document.added}T00:00:00Z`))}
      </td>
    </tr>
  );
};
