const PrintDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

const double = (n) => {
  return n * 2;
};

const msg = "Hello Everyone";

// export default PrintDetails4; //default export
// export default double;
export { PrintDetails4, double, msg }; // named export

//type of import & export
//1. named import & export (prefered)
//2. default import & export
