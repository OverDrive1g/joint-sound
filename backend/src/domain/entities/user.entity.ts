export type UserId = string | null;

export class UserEntity {
  constructor(
    private readonly _userId: UserId,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _passwordHash: string,
  ) {}

  public isValidPassword(password: string): boolean {
    return false; //TODO impliment this method
  }

  get userId(): UserId {
    return this._userId !== undefined ? this._userId : null;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }
}
