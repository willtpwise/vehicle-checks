const formatSubmissionToEmailBody = (submission, callSign) => {

  const friendlyCreatedAt = new Date(submission.createdAt).toDateString()

  return `
Please find attached a vehicle check for: ${callSign}.
\n
${
  submission.sections.map(section => {
    return `
${section.label}\n
${section.fields.map(field => {
  return `\t${field.label}: ${field.value}\n`
}).join('')}
\n`
  }).join('')
}
\n
Created on: ${friendlyCreatedAt} by: ${submission.createdBy}`
}
module.exports = { formatSubmissionToEmailBody }
