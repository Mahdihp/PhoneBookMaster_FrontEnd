export class Contact {
  private _contactId: string;
  private _firstName: string;
  private _lastName: string;
  private _homePhone: string;
  private _mobile: string;
  private _email: string;

  get contactId(): string {
    return this._contactId;
  }

  set contactId(value: string) {
    this._contactId = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get homePhone(): string {
    return this._homePhone;
  }

  set homePhone(value: string) {
    this._homePhone = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
