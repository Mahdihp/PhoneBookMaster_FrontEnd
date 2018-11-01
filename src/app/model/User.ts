export class User{
    private _userId: string;
    public get userId(): string {
        return this._userId;
    }
    public set userId(value: string) {
        this._userId = value;
    }
    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    private _displayname: string;
    public get displayname(): string {
        return this._displayname;
    }
    public set displayname(value: string) {
        this._displayname = value;
    }
}