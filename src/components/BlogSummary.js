import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Summary = ({ description = "", path, thumb, title, tags, className = "post-card" }) => (
  <Link to={path} className={className}>
    <article className={`${className}__container`}>
      <div className={`${className}__image`}>
        <Img sizes={thumb} />
      </div>
      <div className={`${className}__content`}>
        <h4 className={`${className}__title`}>{title}</h4>
        <div className={`${className}__description`}>{description}</div>
        {tags.map(tag => (
          <span className={`${className}__tag`} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  </Link>
)

export default Summary
