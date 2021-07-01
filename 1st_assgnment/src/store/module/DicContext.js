import { firestore } from "../../firebase";

const dic_db = firestore.collection("dictionary1");

// Actions
const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const ISLOADED = "dic/ISLOADED";
// const DELETE = "dic/DELETE";
// const UPDATE = "dic/UPDATE";

const initialState = {
  is_loaded: false,
  list: [
    {
      id: "dic_1",
      textDic: "whereas",
      textExplain: "~한 사실이 있으므로",
      textExam:
        "Some of the studies show positive results, whereas others do not.",
    },
    {
      id: "dic_2",
      textDic: "sustain",
      textExplain: "살아가게하다, 지속시키다",
      textExam: "Which planets can sustain life?",
    },
    {
      id: "dic_3",
      textDic: "commit",
      textExplain: "저지르다, 자살하다, 약속하다",
      textExam: "The President is committed to reforming health care.",
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

export const isLoaded = (loaded) => {
  return { type: ISLOADED, loaded };
};

// export const deleteDic = (del) => {
//   return { type: DELETE, del };
// };

// export const updateDic = (update) => {
//   return { type: UPDATE, update };
// };

// 파이어베이스랑 통신하는 부분
export const dicFB = () => {
  return function (dispatch) {
    dic_db.get().then((docs) => {
      let dic_data = [];
      docs.forEach((doc) => {
        console.log(doc);
        console.log(doc.data());
        console.log(doc.id);

        if (doc.exists) {
          dic_data = [...dic_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(dic_data);
      dispatch(loadDic(dic_data));
    });
  };
};

export const addDicFB = (add_data) => {
  return function (dispatch) {
    console.log(add_data);
    let dic_data = add_data;

    dic_db
      .add(add_data)
      .then((docRef) => {
        dic_data = { ...dic_data, id: docRef.id };
        console.log(dic_data);

        dispatch(createDic(dic_data));
      })
      .catch((err) => {
        console.log(err);
        window.alert("오류가 났네요! 나중에 다시 시도해주세요!");
      });
  };
};

// Reducer
export default function dic(state = initialState, action = {}) {
  switch (action.type) {
    case "dic/LOAD":
      if (action.list.length > 0) {
        return { list: action.list, is_loaded: true };
      }
      return state;

    case "dic/CREATE":
      const new_dic_list = [...state.list, action.create];
      return { ...state, list: new_dic_list };

    case "dict/ISLOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    // case "bucket/DELETE":
    //   const del_list = state.list.filter((element, index) => {
    //     if (index !== action.del) {
    //       return element;
    //     }
    //   });
    //   return { list: del_list };

    // case "dic/UPDATE": {
    //   const update_list = state.list.map((element, index) => {
    //     if (index === action.update) {
    //       return { ...element, completed: true };
    //     }
    //     return element;
    //   });
    //   return { list: update_list };
    // }
    default:
      return state;
  }
}
