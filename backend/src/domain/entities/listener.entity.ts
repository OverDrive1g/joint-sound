import { v4 as uuid } from 'uuid';
export class ListenerEntity {
  private _listenerId: string;
  constructor(private readonly _wsConnecion: any) {
    this._listenerId = uuid();
  }

  get listenerId() {
    return this._listenerId;
  }

  get wsConnection() {
    return this._wsConnecion;
  }
}
