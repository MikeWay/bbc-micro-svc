export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
/**
 * DevelopersApi - fetch parameter creator
 */
export declare const DevelopersApiFetchParamCreactor: {
    searchInventory(params: {
        itemId: string;
    }): FetchArgs;
};
/**
 * DevelopersApi - functional programming interface
 */
export declare const DevelopersApiFp: {
    searchInventory(params: {
        itemId: string;
    }): (fetch: FetchAPI, basePath?: string) => Promise<number>;
};
/**
 * DevelopersApi - object-oriented interface
 */
export declare class DevelopersApi extends BaseAPI {
    /**
     * Returns the number of days to get an item into stock
     * By passing in the itemId it will return the number of days to fulfill the stock
     * @param itemId pass an optional search string for looking up inventory
     */
    searchInventory(params: {
        itemId: string;
    }): Promise<number>;
}
/**
 * DevelopersApi - factory interface
 */
export declare const DevelopersApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    searchInventory(params: {
        itemId: string;
    }): Promise<number>;
};
