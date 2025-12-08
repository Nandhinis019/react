import React from 'react'

export default function Child({ propschild, onIncrease }) {
  return (
    <div>
      <h3>This is Child Component</h3>
      <h2>{propschild}</h2>

      {/* New button inside Child */}
      <button onClick={onIncrease}>Increase from Child</button>
    </div>
  );
}


