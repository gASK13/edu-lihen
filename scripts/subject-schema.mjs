export function validateSubject(subject, source = "subject") {
  const errors = [];
  for (const key of ["id", "gameTitle", "gameSubtitle"]) {
    if (typeof subject[key] !== "string" || !subject[key].trim()) errors.push(`${source}: missing ${key}`);
  }
  if (subject.schemaVersion !== 1) errors.push(`${source}: schemaVersion must be 1`);
  if (!subject.card || typeof subject.card !== "object") errors.push(`${source}: missing card metadata`);
  if (!subject.thresholds || !Number.isFinite(subject.thresholds.baby) || !Number.isFinite(subject.thresholds.adult)) errors.push(`${source}: invalid thresholds`);
  return errors;
}

export function validateTopic(topic, subjectId, source = "topic") {
  const errors = [];
  for (const key of ["id", "title", "description", "mascotName"]) {
    if (typeof topic[key] !== "string" || !topic[key].trim()) errors.push(`${source}: missing ${key}`);
  }
  if (topic.schemaVersion !== 1) errors.push(`${source}: schemaVersion must be 1`);
  if (topic.subjectId !== subjectId) errors.push(`${source}: subjectId must be ${subjectId}`);
  if (!topic.theme || !["primaryColor", "accentColor", "gradientStart", "gradientEnd"].every(key => typeof topic.theme[key] === "string")) errors.push(`${source}: incomplete theme`);
  if (!Array.isArray(topic.questions) || topic.questions.length === 0) errors.push(`${source}: requires questions`);
  for (const question of topic.questions || []) {
    if (!['abcd', 'boolean'].includes(question.type)) errors.push(`${source}: invalid question type`);
    if (!Array.isArray(question.options) || question.options.length < 2) errors.push(`${source}: invalid options`);
    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= (question.options || []).length) errors.push(`${source}: invalid answer index`);
    if (typeof question.question !== 'string' || typeof question.explanation !== 'string') errors.push(`${source}: incomplete question text`);
  }
  return errors;
}

export function manifestEntry(subject, file) {
  const { card } = subject;
  return { id: subject.id, file, order: card.order, label: card.label, title: card.title, description: card.description, tags: card.tags, buttonLabel: card.buttonLabel, colors: card.colors };
}

export function topicManifestEntry(topic, file) {
  const { questions, schemaVersion, subjectId, ...metadata } = topic;
  return { ...metadata, file };
}
