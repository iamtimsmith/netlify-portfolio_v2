import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const PortfolioItems = ({ url, name, tags, img, data }) => (
  <Link className="portfolio-item column is-one-third" to={url}>
    <div>
      <p className="is-size-4">{name}</p>
      <span />
      <p className="is-italic is-lowercase">{tags}</p>
    </div>
    <Img sizes={img} />
  </Link>
)

PortfolioItems.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  tags: PropTypes.string,
  img: PropTypes.object,
}

export default PortfolioItems
