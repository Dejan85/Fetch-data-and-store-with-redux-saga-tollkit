export interface initialStateInterface {
    username: string;
    password: string;
}

export interface actionInterface {
    type: string;
    payload: any;
}

export interface reducerInterface {
    username?: string;
    password?: string;
}

export interface userInterface {
    username: string;
    password: string;
    rememberMe: boolean;
}