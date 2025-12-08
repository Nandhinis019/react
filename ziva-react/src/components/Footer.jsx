import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();

  return (
    <div><p>&copy; {year} ziva. All Rights reservation
    <br />Powered by ziva </p></div>

  )
}