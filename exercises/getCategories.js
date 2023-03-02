const getCategories = (providerRole) => {
  let formattedRole = camelCase(providerRole);
  let subHeadCategories = providerRole ? formattedRole : '';
  if (formattedRole === 'coach' && providerData.category && providerData.category?.length > 0) {
    return providerData.category.map(function (cat) { return translate(cat) }).join(', ');
  }
  return subHeadCategories;
};
