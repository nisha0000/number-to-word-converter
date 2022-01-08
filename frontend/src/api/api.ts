import axios, { AxiosResponse } from "axios";



export const get = async (url: string): Promise<AxiosResponse<any>> => {
  return axios.get(url);
};


export const convertNumbersToString = (
  numbersToConvert: string,
) => {
  return get(`/api/convert/${numbersToConvert}`)

}