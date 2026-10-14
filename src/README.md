# Student Task Manager

A small React app to add, complete, filter and delete tasks.

## Run it (Windows / VS Code terminal)

```bash
npm create vite@latest student-task-manager -- --template react
cd student-task-manager
npm install
```

Then replace the generated `src/` files with the ones in this project
(delete `src/index.css` and `src/assets`), and run:

```bash
npm run dev
```

## Features
- Add tasks (empty titles rejected with a message)
- Complete / un-complete with a checkbox
- Delete with a confirmation prompt
- "No tasks available" empty state
- Total, completed and remaining counters
- All / Pending / Completed filter
- Reusable `Card` component using `children`
- `ErrorBoundary` with a friendly fallback

