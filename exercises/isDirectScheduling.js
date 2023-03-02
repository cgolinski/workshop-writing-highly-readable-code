const isDirectScheduling = (component) => {
  let qualifiesForCoaching = shouldShowCoaching(member, memberAssessments?.assessments?.data);
  const coach = careTeamData?.user.member.care_team.coach;
  const coachingFlag = component === 'carePlans' ? coachingCarePlanFlag : coachingAvailableSectionFlag;
  const paidCoachingExperience = coachingFlag && member?.visits_covered_coaching !== null && member?.visits_covered_coaching >= 0;
  const enableDirectSchedulingInCoaching = member?.cohort?.unlimited_coaching_direct_visits;
  const isDirectSchedulingComponent = component === 'carePlans' ? paidCoachingExperience : (enableDirectSchedulingInCoaching || paidCoachingExperience);
  qualifiesForCoaching = component === 'carePlans' ? qualifiesForCoaching : (!!coach || qualifiesForCoaching);

  return isDirectSchedulingComponent && qualifiesForCoaching;
};
