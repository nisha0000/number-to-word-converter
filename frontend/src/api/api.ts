import axios, { AxiosResponse } from "axios";



export const post = async (url: string, payload: unknown): Promise<AxiosResponse<any>> => {
  return axios.post(url, payload);
};


export const convertNumbersToString = (
  numbersToConvert: string,
) => {
  return post(`/api/convert`, numbersToConvert)

}