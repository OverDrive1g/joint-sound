export class SoundEntity {
  constructor(
    private readonly _name: string,
    private readonly _source: string,
    private readonly _startFrom: number,
  ) {}

  get name() {
    return this._name;
  }
  get source() {
    return this._source;
  }

  get startFrom() {
    return this._startFrom;
  }
}
