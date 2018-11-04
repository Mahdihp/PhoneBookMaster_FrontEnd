import {Privileges} from './Privileges';

export class Role {
  private _longRoleId: string;
  private _name: string;
  private _privileges: Privileges[];


  get longRoleId(): string {
    return this._longRoleId;
  }

  set longRoleId(value: string) {
    this._longRoleId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get privileges(): Privileges[] {
    return this._privileges;
  }

  set privileges(value: Privileges[]) {
    this._privileges = value;
  }
}
