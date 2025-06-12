import { useState } from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css';

const students = [
  { name: 'Aiden Carter', level: 1, score: 88 },
  { name: 'Bella Thompson', level: 2, score: 91 },
  { name: 'Caleb Johnson', level: 3, score: 91 },
  { name: 'Daisy Nguyen', level: 3, score: 93 },
  { name: 'Ethan Wright', level: 1, score: 76 },
  { name: 'Gavin Lopez', level: 3, score: 95 },
  { name: 'Hannah Patel', level: 2, score: 95 },
  { name: 'Isaac Chen', level: 2, score: 87 }
];

export default function StudentOverview() {
  const [filterLevel, setFilterLevel] = useState('All');

  const filtered =
    filterLevel === 'All'
      ? students
      : students.filter(s => s.level === Number(filterLevel));

  return (
    <div className="Main">
      <h2>Students Overview</h2>

      <div className="Filter">
        <label>
          Filter by level:{' '}
          <select
            value={filterLevel}
            onChange={e => setFilterLevel(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>

      <table>
        <thead>
            <th>Name</th>
            <th>Level</th>
            <th>Average Score</th>
        </thead>
        <tbody>
          {filtered.map((student, i) => (
            <tr key={i}>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
createRoot(document.getElementById('root')!).render(
 <StrictMode>
<StudentOverview></StudentOverview>
 </StrictMode>,
 )

