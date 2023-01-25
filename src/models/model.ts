export interface IValueResults {
    Value: string;
    ValueId: string;
    Variable: string;
    VariableId: number;
}

export interface IServerResponse<T> {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: T[];
}


export interface IVariableResult {
    DataType: string;
    Description: string;
    GroupName: string;
    ID: number;
    Name: string;
}

export interface IRootVariableObject {
    Count: number;
    Message: string;
    SearchCriteria?: any;
    Results: IVariableResult[];
}

export interface IVariableResponseResult {
    Message: string,
    Results: IVariableResult[];
}


export interface IReducedItems extends IValueResults, IVariableResult {}
