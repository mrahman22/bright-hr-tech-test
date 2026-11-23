export interface DocumentFile {
  type: "pdf" | "doc" | "csv" | "mov";
  name: string;
  added: string;
}

export interface DocumentFolder {
  type: "folder";
  name: string;
  files: DocumentItem[];
}

export type DocumentItem = DocumentFile | DocumentFolder;
