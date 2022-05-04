export type Fn<T> = Promise<T> | (() => Fn<T> | T);
export type Res<T> = [T, null]
export type Err<E extends Error> = [null, E]

export default function tryDo<E extends Error = Error, T = any>(fn: Fn<T>) {
  return new Promise<Res<T> | Err<E>>((resolve) => {
    if (typeof fn === 'function') {
      try {
        const result = fn();
        if (result instanceof Promise) {
          result.then((res) => resolve([res, null] as Res<T>)).catch((err) => resolve([null, err] as Err<E>));
        } else {
          resolve([result as T, null] as Res<T>);
        }
      } catch (e) {
        resolve([null, e] as Err<E>);
      }
    } else {
      fn.then((res) => resolve([res, null] as Res<T>)).catch((err) => resolve([null, err] as Err<E>));
    }
  });
}