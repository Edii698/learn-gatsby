import React from "react"

const Footer = props => (
  <footer className="bg-primary text-white">
    <div className="container">
      <span className="text-muted">{props.footerText}</span>
      <ul>
        <li>{props.linkOne}</li>
        <li>{props.linkTwo}</li>
      </ul>
    </div>
  </footer>
)

export default Footer
