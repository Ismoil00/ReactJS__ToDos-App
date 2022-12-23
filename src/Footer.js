import React from 'react'

const Footer = ({ finalDisplay }) => {
  const curYear = new Date().getFullYear();
  return (
    <main className="footerSec">
      <div id="copyRight">&copy; {curYear} To-Do App</div>
      <div id="todosAmount">{finalDisplay.length > 1 ? `You have ${finalDisplay.length} Tasks` : finalDisplay.length === 1 ? `You have a Task` : "No Tasks"}</div>
    </main>
  )
}

export default Footer