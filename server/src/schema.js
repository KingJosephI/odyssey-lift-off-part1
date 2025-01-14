const gql = require("graphql-tag");

const typedefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's appromiximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    moduleCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typedefs;
