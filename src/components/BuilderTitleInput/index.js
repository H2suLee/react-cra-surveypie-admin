import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { setTitle } from '../../stores/survey/surveySlice';

function BuilderTitleInput() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.survey.data?.title || '');
  return (
    <Input
      placeholder="설문 제목을 입력해 주세요."
      value={title}
      /*
            onChange={(e) => {
              setData((state) => ({ ...state, title: e.target.value }));
            }}
            */
      // immer.js 사용1
      /*
            onChange={(e) => {
              const newData = produce(data, (draft) => {
                draft.title = e.target.value;
              })
            setData(newData);
            }}
            */
      // immer.js 를 더 간단히. react와 조합하면 data를 굳이 선언할 필요 x
      /*
            onChange={(e) => {
              setData(
                produce(data, (draft) => {
                  draft.title = e.target.value;
                }),
              );
            }}
            */
      // 위는 로컬 state를 변경하는 코드, 아래는 전역 state를 변경하는 코드
      onChange={(e) => {
        dispatch(setTitle(e.target.value));
      }}
    />
  );
}

export default BuilderTitleInput;
