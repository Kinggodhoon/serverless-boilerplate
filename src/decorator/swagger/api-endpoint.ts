import { HttpMethod } from '../../swagger/model/types';

// mapping api endpoints with schemas
export function ApiEndpoint<ReqSchema, ResSchema>(
  path: string,
  method: HttpMethod,
  schema: {
    request: ReqSchema,
    response: ResSchema,
  },
) {
  return function initApiEndpoint(target: { [key: string]: any }, propertyKey: string) {
    if (!target.swaggerDocs) {
      Object.assign(target, { swaggerDocs: {} });
    }

    const endpoint = `${path}`;
    if (!target.swaggerDocs[endpoint]) {
      Object.assign(target.swaggerDocs, { [endpoint]: {} });
    }

    Object.assign(target.swaggerDocs[endpoint], {
      [method]: {
        tags: [],
        parameters: [],
        responses: {},
        requestSchema: schema.request,
        responseSchema: schema.response,
      },
    });
  };
}
