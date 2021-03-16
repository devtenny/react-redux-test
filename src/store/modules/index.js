import { combineReducers } from 'redux'
import counter from './counter'
import waiting from './waiting'

export default combineReducers({
  counter,
  waiting,
  // 다른 리듀서를 만들게 되면 여기에 넣어줌
})

/* 
이렇게 리듀서를 합치게 되면, 루트 리듀서의 초깃값은 아래와 같은 구조가 됨
{
  counter: {
    color: 'red',
    number: 0
  },
  // ...다른 리듀서에서 사용하는 초깃값들
}
*/
