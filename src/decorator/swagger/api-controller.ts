import 'reflect-metadata';

// mapping api controller
export const ApiContoller = (tag: string) => (target: Function) => {
  Reflect.defineMetadata('tag', tag, target);
}
