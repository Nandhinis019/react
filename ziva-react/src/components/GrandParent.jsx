import React from 'react'
import Parent from './Parent'

export default function GrandParent() {
  const company = "Google"; // Sample data for props

  return (
    <div>
      <h1>This is GrandParent Component</h1>
      <Parent propsname={company} />
    </div>
  )
}

