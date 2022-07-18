/**
 * File: @types - index.d.ts
 * Author: Jones Kleber
 * Version: 0.0.1
 * Date: 04/07/2022
 * Description: acrescenta os novos tipos dentros dos request no express.
 */
declare namespace Express {
  export interface Request {
    id: string;
    name: string;
    userName: string;
  }
}
