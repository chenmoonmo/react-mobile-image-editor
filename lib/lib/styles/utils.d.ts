import { Point } from "./types";
export declare const getImageSize: (imageWidth: number, imageHeight: number, width: number, height: number) => number[] | readonly [number, number];
export declare const rotatePoint: (x: number, y: number, r: number) => number[];
export declare const getDistance: (p1: Point, p2: Point) => number;
export declare const getCenter: (p1: Point, p2: Point) => {
    x: number;
    y: number;
};
export declare const getRotateDistance: (dx: number, dy: number, r: number) => number[];
export declare const generateImageData: (imgObj: any, width: number, height: number) => ImageData;
