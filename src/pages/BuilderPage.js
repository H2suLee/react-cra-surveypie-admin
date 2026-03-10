import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Input } from 'antd';
import { produce } from 'immer';

import MainLayout from '../layouts/MainLayout';
import PreviewSection from '../components/PreviewSection';
import OptionSection from '../components/OptionSection';
import fetcher from '../lib/fetcher';

import getSurvey from '../services/getSurvey';

import { useDispatch, useSelector } from 'react-redux';
import BuilderTitleInput from '../components/BuilderTitleInput';

function BuilderPage() {
  const [data, setData] = useState({}); // 로컬 state
  //const survey = useSelector((state) => state.survey.data); // 전역 state, data = survey, 이 컴포넌트에 이 state가 있는 것은 비효율적임
  const error = useSelector((state) => state.survey.error);
  const loading = useSelector((state) => state.survey.loading);
  const dispatch = useDispatch();
  const params = useParams();

  // 렌더링 될때마다 dispatch 가 실행되는 걸 방지하기 위해 useEffect로 감싸기
  useEffect(() => {
    dispatch(getSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (error) {
    return 'error';
  }

  if (/*!survey ||*/ loading) {
    return 'loading';
  }

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <BuilderTitleInput />
          <PreviewSection
          /*questions={survey.questions}
            addQuestion={(type) => {
              setData((state) => ({
                ...state,
                questions: [
                  ...state.questions,
                  {
                    title: 'Untitled',
                    desc: '',
                    type: 'text',
                    required: false,
                    options: {
                      max: 20,
                      placeholder: '',
                    },
                  },
                ],
              }));
             setData(
                produce((draft) => {
                  draft.questions.push({
                    title: 'Untitled',
                    desc: '',
                    type: 'text',
                    required: false,
                    options: {
                      max: 20,
                      placeholder: '',
                    },
                  });
                }),
              );
              // 위는 로컬 state를 변경하는 코드, 아래는 전역 state를 변경하는 코드
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              /*
              setData(
                produce((draft) => {
                  const temp = draft.questions[index];
                  // 순서 바꾸기
                  draft.questions[index] = draft.questions[index - 1];
                  draft.questions[index - 1] = temp;
                }),
              );
              dispatch(moveUpQuestion(index));
            }}
            deleteQuestion={(index) => {
              dispatch(deleteQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
              */
          />
        </Col>
        <Col flex="350px">
          <OptionSection />{' '}
        </Col>
      </Row>
    </MainLayout>
  );
}

export default BuilderPage;
