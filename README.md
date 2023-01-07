# Realtime Code Editor

## Introduction

The Realtime Code Editor is a web-based code editor that allows multiple users to edit the same codebase simultaneously in realtime. It is built with React.js, Node.js, Socket.IO, and Tailwind CSS. You can find the source code for the project on GitHub at https://github.com/Devil5614737/realtime-code-editor and a live demo is available at https://musical-khapse-5244f7.netlify.app/.

## Features

- Collaborative editing: Multiple users can edit the same codebase at the same time and see each other's changes in realtime.
- Syntax highlighting: The editor supports syntax highlighting for multiple programming languages.
- File management: Users can create, rename, and delete files and directories within the codebase.
- Live preview: Changes to the code are reflected in a live preview window.

## Installation

To install and run the Realtime Code Editor locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Devil5614737/realtime-code-editor`
2. Navigate to the project directory: `cd realtime-code-editor`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

The application will be running at http://localhost:3000.

## Deployment

To deploy the Realtime Code Editor to a production environment, follow these steps:

1. Build the production bundle: `npm run build`
2. Set the `NODE_ENV` environment variable to `production`: `export NODE_ENV=production`
3. Start the production server: `npm run start:prod`

## Configuration

The Realtime Code Editor can be customized by creating a `.env` file in the root directory of the project and setting the following variables:

- `PORT`: The port number on which the server should listen (default: 3000).
- `SESSION_SECRET`: A secret used to encrypt session data.
- `HOST`: The hostname or IP address of the server (default: localhost).

## API Reference

The Realtime Code Editor has a simple API with the following endpoints:

- `GET /api/files`: Returns a list of all files and directories in the codebase.
- `POST /api/files`: Creates a new file or directory.
- `PATCH /api/files/:path`: Updates the contents of a file or the name of a file or directory.
- `DELETE /api/files/:path`: Deletes a file or directory.

## Contributing

We welcome contributions to the Realtime Code Editor. If you would like to submit a bug fix or new feature, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your branch to your fork and submit a pull request.

## License

The Realtime Code Editor is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
