const shouldCloseSidebar = (match) => {
  if (!match.matches) {
    props.closeSidebar();
  }
};
