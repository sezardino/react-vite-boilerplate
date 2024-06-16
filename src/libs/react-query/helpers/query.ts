import { useCallback, useMemo } from "react";

interface UseQueryHelper<Params extends object, Response> {
  params: Params;
  key: string;
  enabled?: boolean;
  apiHandler: (params: Params) => Promise<Response>;
}

interface UseQueryHelperReturn<Response> {
  queryKey: (string | number)[];
  queryFn: () => Promise<Response>;
  enabled: boolean;
}

export const useQueryHelper = <Response, Params extends object>(
  props: UseQueryHelper<Params, Response>
): UseQueryHelperReturn<Response> => {
  const { enabled = true, params, key, apiHandler } = props;

  const queryKey = useMemo(
    () => [key, ...Object.values(params)],
    [params, key]
  );

  const queryFn = useCallback(
    async () => await apiHandler(params),
    [apiHandler, params]
  );

  return {
    queryFn,
    queryKey,
    enabled,
  };
};
