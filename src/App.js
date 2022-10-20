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

  // 동적인 UI만드는 step
  // html css로 미리 디자인 완성
  // ui의 현재 상태를 state 로 저장
  // state에따라ui가 어떻게 보일지 작성
  let [coat,man2] = useState(['MAN coat', 'WOMAN coat', 'CHILE coat']);
  let [good, goodPlus] = useState([0,0,0]);
  let [change,change1] = useState('WOMAN coat change');
  let [modal, setModal] = useState([false,false,false]);
  let [color, setColor] = useState(['grey','grey','grey']);
  let [input, setInput] =  useState('');

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
      {/* let [good, goodPlus] = useState([0,0,0]); */}
      {
        coat.map((a,i)=>{
          return(
            <div className="list">
            <h4 onClick={(() => {
                let copyArr0 = [...modal];
                if (copyArr0[i] === false) {
                  copyArr0[i] = true;
                  setModal(copyArr0);
                } else {
                  copyArr0[i] = false;
                  setModal(copyArr0);
                }
              })}>{ coat[i] }<span onClick={(()=>{
                let copyArr = [...good]; // useState 와 상태값은 타입이 같아야한다 배열타입이나 배열타입으로
                copyArr[i] = copyArr[i] + 1; 
                goodPlus(copyArr);
              })}>👍</span>{ good[i] }
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={(e)=>{
              let copy = [...coat];
              copy.splice(i,1);
              //let bbb = copy[i];
              // console.log('bbbbbbb',bbb);
              // for(let j = 0 ; j < copy.length; j++) {
              //   console.log('for for');
              //   if (copy[j] === bbb) {
              //     console.log('for for2222',);
              //     copy.splice(i,1);
              //     j--;
              man2(copy);
                // }
              // }
            }}>삭제</button>
            {
              
              modal[i] == true ? <Modal modalComponent={coat[i]} aaa={color[i]} bbb={man2}/> : null
            }
          </div>
          )
        })
        

      }
      <input onChange={(e)=>{
        setInput(e.currentTarget.value);
      }} ></input>
      <button onClick={()=>{
        let copyarr01 = [...coat];
        copyarr01.unshift(input);
        man2(copyarr01);
      }}>추가</button>
      {/* 추가 버튼 누르면 맨위에 글 추가 
       let [coat,man2] = useState(['MAN coat', 'WOMAN coat', 'CHILE coat']);
      */}
     {/* 템플릿 만들어 놓고 놓을자리에 상태값에 따라서 보여주고 안보여주고 로직짜고 , 클릭버튼에 로직짜고 */}

    </div>
  )
  // props 자식컴포넌트에 작명={ststa이름}
  // 부모->자식 state전송하려면 props문법 사용하면된다

  // 1. 버튼 누르면 글 하나 추가되는 기능
  // 2. 삭제 버튼 누르고 누르면 삭제되는거
}
  function Modal(props) {
    return(
      <div className="modal" style={{background: props.aaa}}>
        <h4>{props.modalComponent}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          props.bbb(['1111','2222','3333']);
        }}>글 수정</button>
      </div>
    )
  }
  // 글 수정 버튼 누르면 첫 글제목이 여자코트 추천으로 바뀌어야함

// let Modal = () => {
//   return(
//     <div className="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }


export default App;
