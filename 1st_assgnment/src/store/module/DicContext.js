import { firestore } from "../../firebase";

const dic_db = firestore.collection("dictionary1");

// Actions
const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";

const initialState = {
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
        // 도큐먼트 객체를 확인해보자!
        console.log(doc);
        // 도큐먼트 데이터 가져오기
        console.log(doc.data());
        // 도큐먼트 id 가져오기
        console.log(doc.id);

        if (doc.exists) {
          dic_data = [...dic_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(dic_data);
      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      dispatch(loadDic(dic_data));
    });
  };
};

export const AddDicFB = (data) => {
  return function (dispatch) {
    console.log(data);
    // 생성할 데이터를 미리 만들게요!
    let dic_data = {
      textDic: "whereas",
      textExplain: "~한 사실이 있으므로",
      textExam:
        "Some of the studies show positive results, whereas others do not.",
    };

    // add()에 데이터를 넘겨줍시다!
    dic_db
      .add(dic_data)
      .then((docRef) => {
        // id를 추가한다!
        dic_data = { ...dic_data, id: docRef.id };

        console.log(dic_data);

        // 성공했을 때는? 액션 디스패치!
        dispatch(createDic(dic_data));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
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
        return { list: action.list };
      }
      return state;

    case "dic/CREATE":
      const new_dic_list = [...state.list, action.create];
      return { ...state, list: new_dic_list };

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
