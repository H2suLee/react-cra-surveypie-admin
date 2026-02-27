import { useState } from 'react';
import { Col, Row, Input } from 'antd';
import { produce } from 'immer';

import MainLayout from '../layouts/MainLayout';
import PreviewSection from '../components/PreviewSection';
import OptionSection from '../components/OptionSection';

function BuilderPage() {
  const [data, setData] = useState({
    id: 1,
    title: '명절 선물 선호도 조사',
    questions: [
      {
        title: '설날에 받고 싶은 선물은 무엇인가요? (최대 3개)',
        desc: '특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.',
        type: 'select',
        required: false,
        options: {
          max: 3,
          items: ['식품', '전자기기', '도서', '의류', '돈'],
        },
      },
      {
        title: '추석에 받고 싶은 선물은 무엇인가요?',
        desc: '특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.',
        type: 'text',
        required: false,
        options: {
          max: 10,
          placeholder: '10자 이내로 입력해주세요.',
        },
      },
      {
        title: '입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)',
        desc: '',
        type: 'textarea',
        required: true,
        options: {
          max: 100,
          placeholder: '100자 이내로 입력해주세요.',
        },
      },
    ],
    createdAt: 1647160914620,
  });
  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해 주세요."
            value={data.title}
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
            onChange={(e) => {
              setData(
                produce(data, (draft) => {
                  draft.title = e.target.value;
                }),
              );
            }}
          />
          <PreviewSection
            questions={data.questions}
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
