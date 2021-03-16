// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// 액션 생성함수 정의
// 반드시 export로 -> 컴포넌트에서 불러와서 사용하기 때문
export const changeColor = (color) => ({ type: CHANGE_COLOR, color })
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

// 초기 상태 정의
const initialState = {
  color: 'red',
  number: 0,
}

// 리듀서 작성
// 반드시 export default! -> 스토어 생성시 필요로 함
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      }
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
