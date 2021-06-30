// Actions
const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";

const initialState = {
  list: [
    {
      id: "1",
      textDic: "whereas",
      textExplain: "~한 사실이 있으므로",
      textExam:
        "Some of the studies show positive results, whereas others do not.",
      done: false,
    },
    {
      id: "2",
      textDic: "sustain",
      textExplain: "살아가게하다, 지속시키다",
      textExam: "Which planets can sustain life?",
      done: false,
    },
    {
      id: "3",
      textDic: "commit",
      textExplain: "저지르다, 자살하다, 약속하다",
      textExam: "The President is committed to reforming health care.",
      done: false,
    },
  ],
};

// Action Creators
export const loadDic = (list) => {
  return { type: LOAD, list };
};

export const createDic = (create) => {
  return { type: CREATE, create };
};

export const deleteDic = (del) => {
  return { type: DELETE, del };
};

export const updateDic = (update) => {
  return { type: UPDATE, update };
};

// Reducer
export default function dic(state = initialState, action = {}) {
  switch (action.type) {
    case "dic/LOAD":
      return state;

    case "dic/CREATE":
      const new_dic_list = [...state.list, action.create];
      return { ...state, list: new_dic_list };

    case "bucket/DELETE":
      const del_list = state.list.filter((element, index) => {
        if (index !== action.del) {
          return element;
        }
      });
      return { list: del_list };

    case "dic/UPDATE": {
      const update_list = state.list.map((element, index) => {
        if (index === action.update) {
          return { ...element, completed: true };
        }
        return element;
      });
      return { list: update_list };
    }
    default:
      return state;
  }
}
