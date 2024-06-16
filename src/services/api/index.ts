import { ExampleApiModule } from "./modules";

export * from "./modules";

class ApiService {
  example = new ExampleApiModule();
}

export const api = new ApiService();
