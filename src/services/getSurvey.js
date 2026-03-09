import fetcher from '../lib/fetcher';
import { setSurvey, setError, setLoading } from '../stores/survey/surveySlice';

const getSurvey = (surveyId) => (dispatch, getState) => {
  setLoading(true);
  fetcher(`/surveys/${surveyId}`)
    .then((data) => {
      dispatch(setSurvey(data));
    })
    .catch((err) => {
      dispatch(setError(err));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export default getSurvey;
