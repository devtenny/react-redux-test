import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' // (1) 불러오기
import Counter from '../components/Counter'
import { increment, decrement } from '../store/modules/counter'

const CounterContainer = ({ increment, decrement, color, number }) => {
  const handleIncrement = () => {
    increment()
  }
  const handleDecrement = () => {
    decrement()
  }
  return (
    <Counter
      color={color}
      value={number}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
})

const mapDispatchToProps = (dispatch) =>
  // increment: () => dispatch(increment()),
  // decrement: () => dispatch(decrement()),

  // (2) bindActionCreators 사용.
  bindActionCreators({ increment, decrement }, dispatch)

// 아래 코드도 위의 동작과 같은 동작을 함
// const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
