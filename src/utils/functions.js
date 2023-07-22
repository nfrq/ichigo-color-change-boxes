function classNames(...names) {
  return names.filter((name) => name !== '').join(' ');
}

export { classNames };