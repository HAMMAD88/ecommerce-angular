import { commonEnvironment } from "./environment.common";

const env: Partial<typeof commonEnvironment> = {
  baseHref: 'https://baeyung.github.io/ecommerce-angular/'
}


export const environment = {
  ...commonEnvironment,
  ...env
};
