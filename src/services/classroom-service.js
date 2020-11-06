import axios from "axios";

const baseUrl =
  "https://rif2h17gf0.execute-api.eu-west-2.amazonaws.com/dev/socialize";

const createClassroom = async () => {
  const response = await axios.post(baseUrl);
  return response.data.id;
};

const joinClassroom = async ({ id }) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  console.log('response in service', response)
  return response.data;
};

const createPerson = async (payload) => {
  console.log('payload', payload)
  const response = await axios.post(`${baseUrl}/add`, payload);
  console.log('posted', response)
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { createClassroom, joinClassroom, createPerson };
