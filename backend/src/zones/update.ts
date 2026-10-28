import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { catalog, json, readBody } from './model.js';
import type { ZoneStatus } from './model.js';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id;
  if (!id) return json(400, { message: 'Falta id' });
  if (!catalog.some(item => item.id === id)) return json(404, { message: 'Zona no encontrada' });
  const input = readBody(event.body);
  if (!input || Object.keys(input).length !== 1 || (input.status !== 'OPEN' && input.status !== 'CLOSED')) {
    return json(400, { message: 'PATCH admite únicamente status OPEN o CLOSED' });
  }
  console.log('PATCH zone:', id);
  return json(200, { id, changes: { status: input.status as ZoneStatus }, operation: 'UPDATED' });
};
