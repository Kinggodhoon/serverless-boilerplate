import swaggerJsdoc from 'swagger-jsdoc';

// const responseSchemas = [];
// const generateResponseSchemas = () => {
//   const schemas = {};

//   for (const responseModel of responseSchemas) {
//     const keys = Object.keys(responseModel);
//     const responseModelKey = keys[0];
//     schemas[responseModelKey] = { message: 'Success', data: responseModel[responseModelKey] };
//   }

//   return schemas;
// };

const initOpenAPIDocs = () => {
  const options = {
    info: {
      title: 'This is my API Document',
      description: 'Serverless + express boilerplate',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        name: 'Authorization',
        description: 'User Authorization Token',
      },
    },
  };

  const swaggerDoc = swaggerJsdoc(options);

  return swaggerDoc;
}

export const generateSwaggerDocument = () => {
  const swaggerDoc = initOpenAPIDocs();

  return swaggerDoc;
}
