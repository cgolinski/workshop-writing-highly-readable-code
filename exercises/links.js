const links = () => {
  let dependentLeftLinkData = enableSingleScheduleView ? navConfigs.web.dependentLeftLinkData.newMenu : navConfigs.web.dependentLeftLinkData.oldMenu;
  if (enableSingleScheduleView) {
    navConfigs.web.leftLinkData[2].trackingText = 'Schedule';
  }

  navConfigs.web.leftLinkData[0] = {
    alias          : 'MemberHome',
    path           : routes.MemberHome.as,
    navText        : 'Home',
    linkName       : 'Home',
    trackingText   : 'Home',
    translatedText : 'navigation.links.home',
    spring_doc_id  : 'HPR_001',
  };
  navConfigs.mobile.homepageSidebar[0] = {
    icon         : <Home w={27} h={27} />,
    text         : 'navigation.links.home',
    trackingText : 'Home',
    linkname     : 'Home',
    alias        : 'MemberHome',
  };

  let links = props.isAManagedMinor ? dependentLeftLinkData : navConfigs.web.leftLinkData;
  return links;
}
