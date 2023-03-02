const getTagName = (providerData, tagIds) => {
  const tagIdsWithNameObj = {};
  const tagNamesArr = [];

  providerData.map(provider => {
    return provider.care_provider_tags.map(array => {
      const { id, name } = array;
      tagIdsWithNameObj[id] = name;
    });
  });

  if (tagIds) {
    tagIds.map(id => {
      return tagNamesArr.push(tagIdsWithNameObj[id]);
    });
  }
  return tagNamesArr;
};
