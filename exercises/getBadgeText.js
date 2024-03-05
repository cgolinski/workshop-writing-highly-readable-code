const EXERCISE_TYPES = {
  audioAndText: "audio_text",
  interactiveVideo: "interactive_video",
};

const mapTagsToStrings = {
  new: "Brand new!",
  recommended: "You might like",
  repeat: "Watch again",
};

const getBadgeText = (exercise) => {
  const isExerciseTypeInteractiveVideo = exercise.type === EXERCISE_TYPES.interactiveVideo;
  
  if (isExerciseTypeInteractiveVideo) {
    return EXERCISE_TYPES.interactiveVideo;
  }
  
  return mapTagsToStrings[exercise.tag_key];
};
