# Document Management App

A document management interface built with React, TypeScript and Tailwind CSS as part of a frontend technical assessment.

The application allows users to browse company documents, navigate through folders and sort documents alphabetically.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### Running Tests

Run the test suite:

```bash
npm run test
```

### Production Build

Create a production build:

```bash
npm run build
```

## Features

### Document Listing

- Displays documents and folders in a table.
- Shows document names, file types and dates added.
- Visually distinguishes folders from files.
- Displays the number of items in the current folder.

### Folder Navigation

- Click folders to view their contents.
- Supports navigation through nested folders.
- Provides a Back button to return to the previous folder.
- Displays the current folder location.

### Document Sorting

- Sorts documents alphabetically by name.
- Handles uppercase and lowercase names consistently.
- Supports sorting within the current folder.
- Preserves the original document data without mutation.

## Technologies

- **React** — Component-based user interface.
- **TypeScript** — Type safety and document modelling.
- **Tailwind CSS** — Responsive styling.
- **Vite** — Development tooling and build process.
- **Vitest** — Unit and component testing.
- **React Testing Library** — Testing user interactions and rendered behaviour.

## Development Approach

I used a test-driven development approach, following the Red, Green, Refactor cycle where practical.

Tests were written to describe expected user behaviour before implementing the corresponding functionality.

The application separates presentation, state management and utility functions to keep the code readable and maintainable.

Folder navigation uses a single state variable to track the current folder path, while document sorting is handled by a separate pure helper function.

## Testing

The test suite covers:

- Rendering document names and distinguishing folders from files.
- Opening folders and displaying their contents.
- Navigating back to parent folders.
- Navigating through nested folders.
- Sorting documents alphabetically.
- Case-insensitive sorting.
- Ensuring sorting does not mutate the original document array.

## Further Improvements

Given additional time, I would consider:

- Sorting documents by date added.
- Filtering documents by filename.
- Improving the folder navigation experience with interactive breadcrumbs.
- Adding further accessibility and edge-case tests.

## Notes

The application uses local mock data and does not require a backend or external API.
