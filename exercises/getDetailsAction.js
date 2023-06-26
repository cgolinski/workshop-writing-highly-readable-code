const getDetailsAction = () => {
  return (providerData) => {
    props.openModal(
      modalIds.careProviderDetailModal,
      {...providerData},
    );
  };
};
