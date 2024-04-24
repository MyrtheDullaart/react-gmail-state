import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [showReadEmails, setShowReadEmails] = useState(true)

  const unReadEmails = emails.filter(e => !e.read)
  let displayEmails = emails

  if (!showReadEmails) {
    displayEmails = unReadEmails
  } 

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={!showReadEmails}
              onChange={() => {
                setShowReadEmails(!showReadEmails)
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{displayEmails.map((email, index) => {
        return (
          <li className={`email ${email.read ? 'read' : 'unread'}`} key={index}>
            <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              onClick={() => {
                email.read = !email.read
                setEmails([...emails])
              }}
              checked={email.read}/>
            </div>
            <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              onClick={() => {
                email.starred = !email.starred
                setEmails([...emails])
              }}
              checked={email.starred}
            />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        )
      })}
      </main>
    </div>
  )
}

export default App
