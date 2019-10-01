import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Summary = ({ path, thumb, title, tags, className = "post-card" }) => (
  <Link to={path} className={className}>
    <article className="card">
      <div className="card-image">
        <Img sizes={thumb} />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        {tags.map(tag => (
          <span className="tag is-light" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  </Link>
)

export default Summary
