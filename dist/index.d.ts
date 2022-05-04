type Fn<T> = Promise<T> | (() => Fn<T> | T);
type Res<T> = [
    T,
    null
];
type Err<E extends Error> = [
    null,
    E
];
declare function tryDo<E extends Error = Error, T = any>(fn: Fn<T>): Promise<Res<T> | Err<E>>;
export { Fn, Res, Err, tryDo as default };
