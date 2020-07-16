const formatSubmissionToEmailBody = (submission, callSign) => {

  const friendlyCreatedAt = new Date(submission.createdAt).toLocaleString()

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
\n\n`
  }).join('')
}
\n
Created at: ${friendlyCreatedAt}\n
Created by: ${submission.createdBy}`
}
module.exports = { formatSubmissionToEmailBody }
