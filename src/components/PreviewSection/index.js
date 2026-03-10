import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

import { useDispatch, useSelector } from 'react-redux';
import {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setSurvey,
} from '../../stores/survey/surveySlice';

function PreviewSection() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.data?.questions || []);

  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };
  const handleMoveUpQuestion = (index) => {
    if (index === 0) {
      return;
    }

    dispatch(moveUpQuestion(index));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };
  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) {
      return;
    }
    dispatch(moveDownQuestion(index));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpBtnClick={() => handleMoveUpQuestion(index)}
          onDelBtnClick={() => handleDeleteQuestion(index)}
          onDownBtnClick={() => handleMoveDownQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </div>
  );
}

export default PreviewSection;
