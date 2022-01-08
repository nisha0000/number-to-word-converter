import { PayloadAction } from "../store/types";

export const CONVERSION_SUCCESS = "[Conversion] convert to number success";
export type CONVERSION_SUCCESS = typeof CONVERSION_SUCCESS;

export type ConversionSuccessfulPayload = { stringOptions: string[] };

export type ConversionSuccessfulAction = PayloadAction<CONVERSION_SUCCESS, ConversionSuccessfulPayload>;
