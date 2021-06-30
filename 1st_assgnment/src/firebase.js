import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA27f4tVSXzqEXMS3q2BbIuD8wJTQMcv64",
  authDomain: "sparta-react01.firebaseapp.com",
  projectId: "sparta-react01",
  storageBucket: "sparta-react01.appspot.com",
  messagingSenderId: "760499078958",
  appId: "1:760499078958:web:3f1d87cf2410b4ad581cbf",
  measurementId: "G-S6DT7TX54Z",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
