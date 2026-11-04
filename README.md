# Express + TypeScript Boilerplate

A modern, production-ready Express and TypeScript boilerplate. It comes pre-configured with modern Node.js module resolution (`NodeNext`), live-reloading, security headers, and request validation.

## 🚀 Features

* **TypeScript**: Fully typed with strict mode enabled.
* **Modern Modules**: Configured with `"module": "NodeNext"` and `"type": "module"`.
* **Live Reload**: Uses [`tsx`](https://github.com/privatenumber/tsx) for fast development cycles.
* **Security**: Hardened by default using [Helmet](https://helmetjs.github.io/) and CORS.
* **Validation**: Request body, query, and params validation using [Zod](https://zod.dev/).
* **Error Handling**: Centralized and standard global error handler.

## 📦 Prerequisites

* Node.js (v18 or higher recommended)
* npm, yarn, or pnpm

## 🛠️ Installation

1. Clone this repository (or copy the files).
2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure your environment variables:

```env
PORT=3000
```

## 💻 Running the Application

### Development

Start the development server with live-reload:

```bash
npm run dev
```

### Production

Compile the TypeScript code to JavaScript and run the compiled version:

```bash
# 1. Build the project
npm run build

# 2. Start the production server
npm start
```

## 📁 Project Structure

```text
├── src/
│   ├── controllers/      # Route controllers (logic)
│   ├── middlewares/      # Express middlewares (error handler, validation)
│   ├── routes/           # Express routes definitions
│   ├── app.ts            # Express application setup
│   └── server.ts         # Application entry point
├── dist/                 # Compiled JavaScript output
├── .env                  # Environment variables
├── .gitignore            # Git ignored files
├── package.json          # Project metadata and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🛡️ Middlewares included

* **Helmet**: Sets various HTTP headers to help protect your app.
* **CORS**: Enables Cross-Origin Resource Sharing.
* **validateRequest**: A custom middleware that takes a Zod schema and validates incoming requests.
* **errorHandler**: Catches any errors thrown in the application and returns a formatted JSON response.