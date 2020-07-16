const getVehicleCallSign = (submission) => {

  const callSignField = submission.sections[0].fields.find(field => {
    field.label === 'Call Sign'
  })

  if (callSignField) {
    return callSignField.value
  }

  console.log('Unable to find call sign for submission')

  return null

}

module.exports = { getVehicleCallSign }
