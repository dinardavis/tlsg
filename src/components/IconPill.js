import React from 'react'

export default function IconPill({ icon: Icon, children }) {
      return (
        <span className="about-icon-pill">
          <span className="about-icon" aria-hidden="true">
            <Icon size={16} />
          </span>
          <span>{children}</span>
        </span>
      );
    }
