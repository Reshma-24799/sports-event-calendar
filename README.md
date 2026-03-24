# Sports Events Calendar

## Overview
Welcome to the Sports Events Calendar! This is a simple, responsive web application built to help users keep track of upcoming sports events. It includes a calendar view to easily spot days with events, and a form to add your own custom games or matches. 

The project is built using:
- **React** for the UI
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vite** for fast bundling and development
- **Vitest & React Testing Library** for testing

## How to Run the Application

To get this running on your local machine, follow these steps:

1. **Install dependencies:**
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Running the tests:**
   ```bash
   npm test
   ```

## Folder Structure
To keep the codebase maintainable and organized, the files are separated by their core responsibilities:

- **`src/components/`**: Reusable UI pieces that make up the page views, like `Calendar.tsx` and `EventForm.tsx`. Keeping these separate makes them easier to test and reuse later if needed.
- **`src/pages/`**: Higher-level or top-level layout pieces, like `Navbar.tsx`, that act as containers or primary views.
- **`src/context/`**: Holds the React Context (`EventContext.tsx`) for our global state, keeping state logic decoupled from UI components.
- **`src/data/`**: Stores static assets and mock initial data (`events.json`).
- **`src/tests/`**: Contains all unit tests (e.g., `Calendar.test.tsx`, `Navbar.test.tsx`). By keeping test files here, the main `src` directory stays less cluttered.

## Design Decisions & Assumptions
During development, I made a few key decisions and assumptions to keep things straightforward and maintainable:

- **State Management:** I opted for React's built-in Context API (`EventContext.tsx`) rather than a heavy library like Redux. Since we are just adding and viewing a relatively small list of events, Context is more than enough and keeps the codebase light.
- **Calendar Layout:** For the calendar view, I built a custom grid rather than pulling in a heavy third-party calendar library. This gave me  full control over how I wanted to  style the event dots and handle day selections.

