# Getting Started with Create React App & FastAPI Server

This project consists of a **React Frontend** and a **FastAPI Backend**.

## Prerequisites

- Node.js (v16 or later) and npm installed
- Python 3.8+ installed
- Virtual Environment (venv) for Python

---

## Frontend Setup (React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project root directory, you can run:

### `npm install`
Installs all the dependencies required for the React application.

### `npm start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production in the `build` folder.

### `npm run eject`
If you need to customize the configuration, you can eject it, but this is irreversible.

---

## Backend Setup (FastAPI)

### Steps to Initialize FastAPI Server

1. Navigate to the `server` directory:
   ```sh
   cd server
   ```

2. Create a Virtual Environment (if not created yet):
   ```sh
   python -m venv venv
   ```

3. Activate the Virtual Environment:
   - **Windows:**
     ```sh
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```sh
     source venv/bin/activate
     ```

4. Install required dependencies:
   ```sh
   pip install -r requirements.txt
   ```

5. Start the FastAPI development server:
   ```sh
   uvicorn api:app --reload
   ```
   This will start the backend at `http://localhost:8000`.

---

## Connecting Frontend and Backend

If you're running the frontend and backend on different ports (e.g., React on `localhost:3000` and FastAPI on `localhost:8000`), you may run into **CORS issues**. To fix this, add the following middleware in `api.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to specific domains if necessary
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Now, when you make API calls from the React frontend, they should work without CORS issues.

---

## Summary

1. Install dependencies for frontend (`npm install`) and backend (`pip install -r requirements.txt`).
2. Start FastAPI backend with `uvicorn api:app --reload`.
3. Start React frontend with `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to use the app.

For further details, refer to the official documentation of [React](https://reactjs.org/) and [FastAPI](https://fastapi.tiangolo.com/).