import { useState } from 'react';
import { Col, Row, Input } from 'antd';
import { produce } from 'immer';

import MainLayout from '../layouts/MainLayout';
import PreviewSection from '../components/PreviewSection';
import OptionSection from '../components/OptionSection';

import {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
} from '../stores/survey/surveySlice';
import { useDispatch, useSelector } from 'react-redux';

function BuilderPage() {
  const [data, setData] = useState({}); // 로컬 state
  const survey = useSelector((state) => state.survey); // 전역 state, data = survey
  const dispatch = useDispatch();
  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해 주세요."
            value={survey.title}
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
          <PreviewSection
            questions={survey.questions}
            addQuestion={() => {
              /*
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
              */
              /*
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
              */
              // 위는 로컬 state를 변경하는 코드, 아래는 전역 state를 변경하는 코드
              dispatch(addQuestion());
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
              */
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
