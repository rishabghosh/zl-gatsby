import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <Hero showPerson />
      {/*<Posts posts={posts} title="Recent Activities" />*/}
      <Posts posts={[]} title="Recent Activities" />
    </Layout>
  );
};

export const query = graphql`
    {
        allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                excerpt
                frontmatter {
                    title
                    author
                    category
                    date(formatString: "MMMM, Do YYYY")
                    slug
                    readTime
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
            }
        }
    }
`;

export default IndexPage;
