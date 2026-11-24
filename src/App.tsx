import { Header } from "./components/Header";
import { DocumentList } from "./components/DocumentList";
import { userDocuments } from "./data/user-documents";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DocumentList documents={userDocuments} />
    </div>
  );
};
