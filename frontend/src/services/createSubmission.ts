import { Submission } from '../routes/check-list/types';
import { API } from 'aws-amplify';

export const createSubmission = async (submission: Submission) => {

  try {

    const result = await API.post('vehicleChecksSubmissionsAPI', '/submissions', {

    })

    console.log(result)
  } catch (err) {
    throw err
  }

}
