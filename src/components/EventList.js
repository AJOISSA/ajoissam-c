import React from 'react';

const events = [
  { id: 1, name: "Tapahtuma 1", date: "2025-05-01", location: "Paikka 1" },
  { id: 2, name: "Tapahtuma 2", date: "2025-06-15", location: "Paikka 2" },
];

const EventList = () => (
  <div className="space-y-4">
    {events.map(event => (
      <div key={event.id} className="border border-gray-700 p-4">
        <h3 className="text-lg">{event.name}</h3>
        <p>{event.date} @ {event.location}</p>
        <button className="mt-2 bg-red-600 px-3 py-1 rounded">Lisätietoja</button>
      </div>
    ))}
  </div>
);

export default EventList;
