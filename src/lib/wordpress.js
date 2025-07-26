import { GraphQLClient, gql } from 'graphql-request';

// Use environment variable with fallback
const endpoint = import.meta.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.acmemarketing.us/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any authentication headers if needed
  },
});

export { gql };

async function fetchAPI(query, { variables } = {}) {
  const data = await graphQLClient.request(query, variables);
  return data;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC }, categoryName: "mindlooker,all" }) {
        edges {
          node {
            id
            date
            title
            slug
            excerpt
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPostBySlug(slug) {
    const data = await fetchAPI(
      `
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
          slug
          content
          date
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG'
        }
      }
    );
    return data?.post;
  }