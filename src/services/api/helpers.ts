import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class AbstractApiModule {
  private url: string;

  constructor() {
    // TODO: add env variable with url
    this.url = "";
  }

  protected async fetch<T, Error = object>(
    config: AxiosRequestConfig
  ): Promise<T> {
    const response = await axios<AxiosError<Error>, AxiosResponse<T>>(
      `${this.url}/${config.url}`,
      config
    );

    return response.data;
  }
}
