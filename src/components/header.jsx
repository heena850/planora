import React from 'react'

const Header = ({ title = 'Task Manager' }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        {/* Left: Logo + Title */}
        <div className="header-left">
          <div className="header-logo">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="12" fill="white" fillOpacity="0.2" />
              <path
                d="M12 10h10a2 2 0 0 1 2 2v2H12a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z"
                fill="white"
                fillOpacity="0.6"
              />
              <rect x="10" y="13" width="20" height="19" rx="2" fill="white" />
              <path
                d="M15 20l2.5 2.5L22 18"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="15"
                y1="27"
                x2="25"
                y2="27"
                stroke="#93c5fd"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="header-title">{title}</h1>
        </div>

        {/* Center: Search Bar */}
        <div className="header-search">
          <svg
            className="header-search__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search tasks..."
            className="header-search__input"
            readOnly
          />
        </div>

        {/* Right: Theme Toggle + Profile */}
        <div className="header-actions">
          <button className="header-theme-toggle" aria-label="Toggle dark mode">
            {/* Sun icon (light mode indicator) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          <button className="header-profile" aria-label="User profile">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

