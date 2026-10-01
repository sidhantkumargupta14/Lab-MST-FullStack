import { useState } from 'react'
import EventCard from './components/EventCard'

const events = [
  { id: 1, title: 'React Workshop' },
  { id: 2, title: 'JavaScript Seminar' },
  { id: 3, title: 'Web Development Meetup' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <section className="container">
        <h1>Memoized Event Card</h1>
        <p className="description">
          Click the counter. The parent re-renders, but EventCard components are memoized.
        </p>

        <button className="counter-button" onClick={() => setCount((value) => value + 1)}>
          Counter: {count}
        </button>

        <div className="events">
          {events.map((event) => (
            <EventCard key={event.id} title={event.title} />
          ))}
        </div>

        <p className="console-note">
          Open the browser console and click the counter. EventCard logs appear only on its initial render.
        </p>
      </section>
    </main>
  )
}

export default App
