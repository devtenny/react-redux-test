import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as waitingActions from '../store/modules/waiting'
import WaitingList from '../components/WaitingList'

const WaitingListContainer = ({ WaitingActions, input, list }) => {
  // 인풋 변경 이벤트
  const handleChange = (e) => {
    WaitingActions.changeInput(e.target.value)
  }
  // 등록 이벤트
  const handleSubmit = (e) => {
    e.preventDefault()
    WaitingActions.create(input) // 등록
    WaitingActions.changeInput('') // 인풋 값 초기화
  }
  // 입장
  const handleEnter = (id) => {
    WaitingActions.enter(id)
  }
  // 나가기
  const handleLeave = (id) => {
    WaitingActions.leave(id)
  }
  return (
    <WaitingList
      input={input}
      waitingList={list}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onEnter={handleEnter}
      onLeave={handleLeave}
    />
  )
}

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  list: waiting.list,
})

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = (dispatch) => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingListContainer)
