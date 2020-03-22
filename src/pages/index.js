import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/lessons/add"> Add</Link>
    <Link to="/lessons/list"> List</Link>
    <Link to="/lessons/create"> Create</Link>
  </Layout>
)

export default IndexPage
