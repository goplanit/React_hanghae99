import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import DicTemplate from "./components/DicTemplate";
import DicList from "./components/DicList";
import DicHead from "./components/DicHead";
import DicAddTemplate from "./components/DicAddTemplate";
import NotFound from "./components/NotFound";
import { firestore } from "./firebase";
import { doc } from "prettier";
import { dicFB } from "./store/module/DicContext.js";

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(dicFB());
  },
  // create: (new_item) => {
  //   console.log(new_item);
  //   dispatch(createBucket(new_item));
  // },
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e0f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 30px;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.load();
  }

  // dictionary.get().then((docs) => {
  //   let dictionary_Data = [];

  //   docs.forEach((doc) => {
  //     if (doc.exists) {
  //       dictionary_Data = [...dictionary_Data, { id: doc.id, ...doc.data() }];
  //     }
  //   });
  //   console.log(dictionary_Data);
  // });

  // dictionary
  //   .add({
  //     id: "dic_5",
  //     textDic: "where",
  //     textExplain: "~한 사실이 있으므로",
  //     textExam:
  //       "Some of the studies show positive results, whereas others do not.",
  //   })
  //   .then((docRef) => {
  //     console.log(docRef);
  //     console.log(docRef.id);
  //   });

  // dictionary
  //   .doc("dic")
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       console.log(doc);
  //       console.log(doc.data());
  //       console.log(doc.id);
  //     }
  //   });

  // dictionary.get().then((docs) => {
  //   let dic_data = [];
  //   docs.forEach((doc) => {
  //     // 도큐먼트 객체를 확인해보자!
  //     console.log(doc);
  //     // 도큐먼트 데이터 가져오기
  //     console.log(doc.data());
  //     // 도큐먼트 id 가져오기
  //     console.log(doc.id);
  //   });
  // });

  // dictionary.add({ text: "수영 배우기", completed: false });
  //   console.log(docRef);
  //   console.log(docRef.id);

  //   dictionary
  //     .doc("xQxVrSZAqkQT15yd8kzZ")
  //     .delete()
  //     .then((docRef) => {
  //       console.log("지웠어요!!");
  //     });
  // }

  // const dictionary = firestore.collection("dictionary1");
  // console.log(firestore);

  // dictionary.doc("dic").set({
  //   id: "dic_4",
  //   textDic: "whereas",
  //   textExplain: "~한 사실이 있으므로",
  //   textExam:
  //     "Some of the studies show positive results, whereas others do not.",
  // });

  render() {
    return (
      <>
        <GlobalStyle />
        <h1>MY DICTIONARY</h1>
        <DicTemplate>
          <DicHead />
          <Switch>
            <Route path="/" exact component={DicList} />
            <Route path="/add" component={DicAddTemplate} />
            <Route component={NotFound} />
          </Switch>
        </DicTemplate>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App));
