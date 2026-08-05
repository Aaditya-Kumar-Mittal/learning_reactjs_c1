import React from 'react'
import styled from 'styled-components'

function CSBSStylingC() {

const Heading1 = styled.h1`
  color: red;
  font-size: 50px;
`

const Heading5 = styled.h5`
  color: blue;
  font-size: 20px;
`

  return (
    <div>
      <Heading1>Styled Components in ReactJS</Heading1>
      <Heading5>Styled Components in ReactJS</Heading5>
    </div>
  )
}

export default CSBSStylingC 