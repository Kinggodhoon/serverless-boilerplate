import 'reflect-metadata';
import { OpenAPITypes } from '../../swagger/model/types';

// mapping metadata in api properties
export function ApiProperty(attributes: {
  type: OpenAPITypes,
  isRequired: boolean,
  description?: string,
  isArray?: boolean,
  enum?: any[] | Record<string, any> | (() => (any[] | Record<string, any>)),
  }) {
  return function initApiProperty(target: { [key: string]: any }, propertyKey: string) {
    Object.assign(target, { [propertyKey]: attributes });
  };
}
