import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '83e03a32d52362feb6e9c2e06b334aa7662ea4ee', queries,  });
export default client;
  