import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query MyQuery {
      categories {
        image {
          id
          url
        }
        name
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getDoctor = async () => {
  const query = gql`
    query MyQuery {
      doctors {
        address
        about
        image {
          url
        }
        name
        patients
        phoneNumber
        prenium
        yearOfExperience
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
  getDoctor,
};
