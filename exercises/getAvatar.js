const getAvatar = (providerData) => {
  if (providerData?.avatar) {
    const imgProps = { alt: providerData.name };
    return (
      <div onClick={() => infoAction(providerData)} className={styles.avatar}>
        <Avatar imgProps={imgProps} src={providerData.avatar} round />
      </div>
    );
  }
  return providerAttributes.emptyIcon;
};
