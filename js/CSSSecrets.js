(function CSS() {
  const $$ = (selector, othercontext) => {
    const context = othercontext || document;
    const elements = context.querySelectorALL(selector);
    return Array.prototype.slice.call(elements);
  };
  console.log($$);
})();
