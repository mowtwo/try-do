import tryDo from "../dist/index.js";

void (async () => {
  const [res1, err1] = await tryDo(() => 1);
  if (err1 !== null) {
    console.error(err1);
  } else {
    console.log(res1);
  }
  const [res2, err2] = await tryDo(() =>
    Promise.reject(new SyntaxError("error"))
  );
  if (err2 !== null) {
    console.error(err2);
  } else {
    console.log(res2);
  }
  const [res3, err3] = await tryDo(() => {
    throw new Error("error");
  });
  if (err3 !== null) {
    console.error(err3);
  } else {
    console.log(res3);
  }
  const [res4, err4] = await tryDo(() => Promise.resolve(1));
  if (err4 !== null) {
    console.error(err4);
  } else {
    console.log(res4);
  }
})();
