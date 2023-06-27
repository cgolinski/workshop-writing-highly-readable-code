const renderCorrectIcon = (subject) => {
  let subjectType = getSubjectType(subject);
  if (subjectType === "math") {
    return <MathIcon />;
  } else if (subjectType === "arts") {
    return <ArtsIcon />;
  } else {
    return <HistoryIcon />;
  }
};
