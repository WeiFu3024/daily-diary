# Daily-Diary React Web Project

This project is used to practice react. One can use this web to create and delete diary.

## Quick Start

If you just want to get started quickly:

1. **Install dependencies:**
   ```bash
   npm install
   npm install --save-dev @babel/plugin-proposal-private-property-in-object
   ```

2. **Open two terminal windows:**
   - **Terminal 1:** `npx --watch json-server data/db.json --port 8000`
   - **Terminal 2:** `npm start`

3. **Open your browser** at [http://localhost:3000](http://localhost:3000)

For detailed instructions and troubleshooting, see the sections below.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher recommended)
- **npm** (usually comes with Node.js)
- A code editor (VS Code, etc.)

To check if you have Node.js and npm installed, run:
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## Installation

### Step 1: Install Dependencies

First, navigate to the project directory and install all required packages:

```bash
npm install
```

### Step 2: Install Missing Babel Plugin (If Needed)

If you encounter the error `Cannot find module '@babel/plugin-proposal-private-property-in-object'`, run:

```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

**Note:** This is a known issue with some versions of `react-scripts`. If the error persists after installation, try the troubleshooting steps below.

## Running the Application

This application requires **two separate terminal windows** to run properly:

### Terminal 1: Start the Database Server

In the first terminal, start the JSON server (this acts as your backend database):

```bash
npx --watch json-server data/db.json --port 8000
```

You should see output indicating the server is running on `http://localhost:8000`

**Keep this terminal window open** while using the application.

### Terminal 2: Start the React Application

In a **second terminal window**, start the React development server:

```bash
npm start
```

The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000)

The page will reload automatically when you make changes to the code.

## Troubleshooting

### Error: Cannot find module '@babel/plugin-proposal-private-property-in-object'

**Solution 1:** Install the missing plugin:
```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

**Solution 2:** If Solution 1 doesn't work, try a clean reinstall:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# On Windows PowerShell, use:
# Remove-Item -Recurse -Force node_modules, package-lock.json

# Reinstall all dependencies
npm install
```

### Port Already in Use

If you see an error about port 3000 or 8000 being in use:

- **For port 3000 (React app):** The terminal will prompt you to use a different port. Press `Y` to confirm.
- **For port 8000 (JSON server):** Change the port in the command:
  ```bash
  npx --watch json-server data/db.json --port 8001
  ```
  Then update the API URL in your React code if needed.

### Database Not Found

Make sure the `data/db.json` file exists. If it doesn't exist, create it with this content:
```json
{
  "diaries": []
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
