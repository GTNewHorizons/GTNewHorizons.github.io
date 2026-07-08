import type * as en from "./en";

type FlattenKeys<T, Prefix extends string = ""> = T extends string
  ? Prefix
  : T extends readonly (infer U)[]
    ? `${Prefix}${Prefix extends "" ? "" : "."}${number}`
    : T extends object
      ? {
          [K in keyof T & string]: FlattenKeys<
            T[K],
            `${Prefix}${Prefix extends "" ? "" : "."}${K}`
          >;
        }[keyof T & string]
      : never;

export type TranslationKey = FlattenKeys<typeof en>;
