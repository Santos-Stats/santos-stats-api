import axios from 'axios';
export async function getRequest(url, header = null, params = null){
  try {
    const { data } = await axios.request
    ({
      method: 'GET',
      url: url,
      params: params,
      headers: header
    });
    return data;
  } catch (error) {
    return error;
  }
};
