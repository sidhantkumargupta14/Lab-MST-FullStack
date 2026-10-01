# Q2 - Memoized Event Card

## Requirements covered
1. `EventCard` displays the event title and is wrapped with `React.memo`.
2. The parent has 3 hard-coded events rendered using `map()` and `key={event.id}`.
3. The parent contains a counter button.
4. `console.log()` is inside `EventCard`. Clicking the counter re-renders the parent, but the memoized cards do not re-render because their props do not change.

## Run in VS Code

Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Demonstration

Open the browser Developer Tools Console. You should initially see:

```text
EventCard rendered: React Workshop
EventCard rendered: JavaScript Seminar
EventCard rendered: Web Development Meetup
```

Click the **Counter** button several times. The counter changes, but no new `EventCard rendered:` messages should appear because `EventCard` is memoized and receives the same props.
