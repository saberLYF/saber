import _ from "lodash";

let obj = {
  a: 1,
  b: [1, 2, 3, 4],
  c() {},
  d: new Date(),
  e: /^1[35789]\d{9}$/,
};

export const res = _.cloneDeep(obj);
