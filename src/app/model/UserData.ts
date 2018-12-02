import { User } from "./User";

export class UserData {
    private _status: string;
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    private _message: string;
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    private _errorCode: string;

  get errorCode(): string {
    return this._errorCode;
  }

  set errorCode(value: string) {
    this._errorCode = value;
  }

  private _dataList: Array<User>;
    public get dataList(): Array<User> {
        return this._dataList;
    }
    public set dataList(value: Array<User>) {
        this._dataList = value;
    }
}
