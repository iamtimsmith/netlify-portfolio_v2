import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Summary = props => (
  <Link to={props.path} className="post-card">
    <article className="card">
      <div className="card-image">
        <Img sizes={props.thumb} />
      </div>
      <div className="card-content">
        <h4>{props.title}</h4>
        {props.tags.map(tag => (
          <span className="tag is-light" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  </Link>
)

export default Summary
