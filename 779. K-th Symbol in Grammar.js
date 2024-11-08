/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;

  let length = Math.pow(2, n - 1);

  let mid = length / 2;

  if (k < mid) {
    const r = kthGrammar(n - 1, k);
    console.log("length", length);
    console.log("mid", mid);
    console.log("n", n);
    console.log("k", k);
    console.log(r);

    return r;
  } else {
    const r1 = 1 - kthGrammar(n - 1, k - mid);
    console.log("length", length);
    console.log("mid", mid);
    console.log("n", n);
    console.log("k", k);

    console.log("r1", r1);

    return r1;
  }
};
