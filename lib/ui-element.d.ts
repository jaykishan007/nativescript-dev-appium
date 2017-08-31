import { Point } from "./point";
export declare class UIElement {
    private _element;
    private _driver;
    private _webio;
    private _searchMethod;
    private _searchParams;
    private _index;
    constructor(_element: any, _driver: any, _webio: any, _searchMethod: string, _searchParams: string, _index?: number);
    click(): Promise<any>;
    tap(): Promise<any>;
    location(): Promise<Point>;
    size(): Promise<any>;
    text(): Promise<any>;
    element(): Promise<any>;
    isDisplayed(): Promise<any>;
    exists(): Promise<boolean>;
    waitForExistNot(wait?: number): Promise<any>;
    waitForExist(wait?: number): Promise<any>;
    getAttribute(attr: any): Promise<any>;
    log(): Promise<void>;
    refetch(): Promise<any>;
}