import { httpGet } from './mock-http-interface';

// TODO define this type properly
type TResultKeys = 'Arnie Quote' | 'FAILURE';
type TResult = {
  [K in TResultKeys]?: string;
};

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
  // TODO: Implement this function.
  const responses = await Promise.all(urls.map((url) => httpGet(url)));

  const results = responses.map((response) => {
    const body = JSON.parse(response.body);
    if (response.status === 200) {
      return {
        'Arnie Quote': body.message,
      };
    }

    return {
      FAILURE: body.message,
    };
  });

  return results;
};
