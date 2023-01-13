// 📂 typeError.js
function typeError(message) {
  throw new TypeError(message);
}

// 📂 refError.js
export function refError(message) {
  throw new ReferenceError(message);
}

// 📂 syntaxError.js
function syntaxError(message) {
  throw new SyntaxError(message);
}
