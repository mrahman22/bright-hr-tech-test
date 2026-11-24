export interface IDocumentFile {
  type: "pdf" | "doc" | "csv" | "mov";
  name: string;
  added: string;
}

export interface IDocumentFolder {
  type: "folder";
  name: string;
  files: DocumentItem[];
}

export type DocumentItem = IDocumentFile | IDocumentFolder;
