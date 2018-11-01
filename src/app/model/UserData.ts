import { User } from "./User";

export class UserData {
    private _statusCode: string;
    public get statusCode(): string {
        return this._statusCode;
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    private _message: string;
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    private _dataList: Array<User>;
    public get dataList(): Array<User> {
        return this._dataList;
    }
    public set dataList(value: Array<User>) {
        this._dataList = value;
    }

    // constructor(data: Partial<UserData>) {
    //     Object.assign(this, data);
    // }
}