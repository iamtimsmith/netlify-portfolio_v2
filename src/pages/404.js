import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import RecentPosts from '../components/RecentPosts';

const NotFoundPage = ({ data }) => (
  <Layout location="404">
    <section className="section is-medium has-text-centered">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>
        I'm afraid the page you're looking for isn't available. Here are some
        blog posts that might interest you though...
      </p>
    </section>
    <RecentPosts />
  </Layout>
)

export default NotFoundPage