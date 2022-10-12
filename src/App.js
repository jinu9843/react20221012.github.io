import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // JSX - .js파일에서 쓰는 html 대용품
  // React.createElement('div', null, 'Hello World') 를 대신해서 하는게 JSX
  // css class 라고 하면 안됨 왜냐면 이건 자바스크립트 이기 떄문에 자바스크립트에 class라는 예약어가 있어서
  // 겹칠수가 있어서 에러를 뱉을수 있으니 calssName 로 한다
  // {} 데이터 바인딩이라고한ㄷ JSX문법 어디든 넣을수 있다 클래스명등등

  //   let  post = 'favorite food'
  //   //document.getElementById('aaa').innerHTML = post;
  // return (
  //   <div className="App">
  //     <div className="black-nav">
  //    {/* style="color:red" 해야하지만 JSX문법에서는 {} 형식에 그안에 {} 오브젝트 형식으로
  //     font-size 는 fontSize로 이게 자바스크립트라 - 는 진짜 뺄셈으로 앎   리액트는 자바스크립트의 라이브러리이므로
  //    */}
  //       <h4 style={ { color : 'red' , fontSize : '30px'} }>블로그임</h4>
  //     </div>
  //       <h4>{ post }</h4>
  //   </div>
  // );

  // return () 안에는 태그 하나만 두개있으면 안됨
  // 리액트에서는 자료를 잠깐 저장할때 변수 말고 state에 저장 해도 된다
  // Destructuring문법
  // let [a,b] = [1,2]
  // 이와 마찬가지로 useState도 ['MAN coat', 함수]가 있는 것임
  // state 사용하는 이유 : 변수는 바뀌면 html에 자동으로 안바꿔줌 그래서 js는 doucument.ready해서 돔시작하자마 바뀌는 init() 함수 같은걸 사용함
  // state 는 그런거 사용안하고 바로바로 자동으로 바꿔줌  자동으로 바꿔주고 안바꿔주는냐가 변수랑 차이점 state는 자동으로 html이 재 랜덩링 됨
  // state 를 변경할려면 state 함수를 사용하여야함
  let [coat,man2] = useState(['MAN coat', 'WOMAN coat', 'CHILE coat']);
  let [good, goodPlus] = useState([0,0,0]);
  let [change,change1] = useState('WOMAN coat change');
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={()=>{
          let aaa = [...coat];
          console.log('aaaa', aaa);
          let bbb = aaa.sort();

          man2(bbb);
        }}>SORT</button>
        <button onClick={() => {
          // 상태값이 바뀌면 useState도 바뀐다.
          let ccc = ['zzzz','bbb','pppp'];
          console.log(coat);
          man2(ccc)}}>productChdfddfangeButton</button>
      
      {/* <div className="list">
        <h4 >{ coat[0] }<span onClick={(function(){goodPlus(good+1)})}>👍</span>{ good }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {

      }
      {/* <div className="list">
        <h4>{ coat[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div> */}
      {/* <div className="list" onClick={() => {
        if(modal == false) {
          setModal(true);
        } else {
          setModal(false);
        }
        
      }}> */}
        {/* <h4>{ coat[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* {
        modal == true ? <Modal></Modal> : null
      } */}
      {
        coat.map((a,i)=>{
          console.log(a);
          console.log('dsfdfd',good[i]);
          return(
            <div className="list">
            <h4 >{ coat[i] }<span onClick={(function(){goodPlus(good[i] + 1)})}>👍</span>{ good[i] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
          
        })
      }

    </div>
  )
}

let Modal = () => {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
