const initialState = [
  {
    id: 0,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 1,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 2,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 3,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    id: 4,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 5,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 6,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 7,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    id: 8,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 9,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 10,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 11,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    id: 12,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 13,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 14,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 15,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    id: 16,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 17,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 18,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 19,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    id: 20,
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    id: 21,
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    id: 22,
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    id: 23,
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
];

export const Add = "ADD";
export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";

let id_ = 24;

const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add:
      return [
        ...state,
        {
          id: id_++,
          title: action.name,
          description: action.des,
          like: 0,
        },
      ];
    case LIKE: {
      return state.map((i) =>
        i.id === parseInt(action.id) ? { ...i, like: i.like + 1 } : i
      );
    }
    case UNLIKE: {
      return state.map((i) =>
        i.id === parseInt(action.id) ? { ...i, like: i.like - 1 } : i
      );
    }
    // return [
    //   ...state,
    //   (state[action.id] = {
    //     ...state[action.id],
    //     like: state[action.id].like + 1,
    //   }),
    // ];
    default:
      return state;
  }
};

export default MealReducer;
