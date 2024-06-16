import { AbstractApiModule } from "../../helpers";
import { Example } from "./types";

export class ExampleApiModule extends AbstractApiModule {
  example() {
    return this.fetch<Example>({
      url: "example",
    });
  }
}
