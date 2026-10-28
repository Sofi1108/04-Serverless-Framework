import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { isZoneInput, json, readBody } from './model.js';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const input = readBody(event.body);
  if (!isZoneInput(input)) {
    return json(400, { message: 'JSON con name, capacity entero positivo y status OPEN o CLOSED requerido' });
  }
  console.log('POST zone:', input.name);
  return json(201, { id: 'ZONE-NEW', ...input });
};
