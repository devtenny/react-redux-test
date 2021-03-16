import React from 'react'
import { connect } from 'react-redux'
import Pallete from '../components/Palette'
import { changeColor } from '../store/modules/counter'

const PaletteContainer = ({ changeColor, color }) => {
  const handleSelect = (color) => {
    console.log('what')
    changeColor(color)
  }
  return <Pallete onSelect={handleSelect} selected={color} />
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = (state) => ({
  color: state.counter.color,
})

// props로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
})

// 컴퍼넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer)
