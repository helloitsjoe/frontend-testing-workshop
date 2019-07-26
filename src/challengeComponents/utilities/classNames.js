function classNames(rules) {
  let classes = "";

  Object.keys(rules).forEach(item => {
    if (rules[item]) classes += (classes.length ? " " : "") + item;
  });

  return classes;
}

export default classNames;
