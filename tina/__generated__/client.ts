import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ce5741c11b2708dfa2c05aa0591b073b0d040e27', queries,  });
export default client;
  