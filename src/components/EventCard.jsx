import { memo } from 'react'

function EventCard({ title }) {
  console.log(`EventCard rendered: ${title}`)

  return (
    <article className="event-card">
      <h2>{title}</h2>
    </article>
  )
}

export default memo(EventCard)
