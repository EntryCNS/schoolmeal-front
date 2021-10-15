const initialState = [

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
