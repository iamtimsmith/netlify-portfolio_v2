import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import PortfolioItem from '../styles/elements/PortfolioItem'

const PortfolioItems = ({ url, name, tags, img, data }) => (
  <PortfolioItem>
    <Link to={url}>
      <div>
        <p>{name}</p>
        <span />
        <p>{tags}</p>
      </div>
      <Img sizes={img} />
    </Link>
  </PortfolioItem>
)

PortfolioItems.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  tags: PropTypes.string,
  img: PropTypes.object,
}

export default PortfolioItems
