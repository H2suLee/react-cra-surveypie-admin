import { createSlice } from '@reduxjs/toolkit';

/*
const initialState = {
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
};
 */
const initialState = {
  data: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.data.title = action.payload; // immer library가 내장돼있어서 불변성 걱정 ㄴㄴ
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options;
      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['가', '나', '다'],
        };
      }
      state.data.questions.push({
        title: 'Untitled',
        desc: '',
        type: type,
        required: false,
        options: options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      // 순서 바꾸기
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      // 순서 바꾸기
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      const index = action.payload;
      state.data.questions.splice(index, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;
