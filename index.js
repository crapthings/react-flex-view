import React from 'react'

const Flex = ({
  flexHeight,
  row,
  column,
  flex,
  wrap,
  xEnd,
  xCenter,
  yEnd,
  yCenter,
  center,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  width,
  height,
  xScroll,
  yScroll,
  tag,
  style,
  children,
  ...props,
}) => {

  const flexStyle = {
    overflowX: `${xScroll && 'scroll'}`,
    overflowY: `${yScroll && 'scroll'}`,
    display: 'flex',
    flex: `${(ten && 10) || (nine && 9) || (eight && 8) || (seven && 7) || (six && 6) || (five && 5) || (four && 4) || (three && 3) || (two && 2) || (one && 1) || flex || ''}`,
    width: `${width || '100%'}`,
    height: `${flexHeight ? '100vh' : (height || 'auto')}`,
    flexFlow: `${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}`,
    justifyContent: `${(column && yEnd && 'flex-end') || (column && yCenter && 'center') || (!column && xEnd && 'flex-end') || (!column && xCenter && 'center') || (center && 'center')}`,
    alignItems: `${(column && xEnd && 'flex-end') || (column && xCenter && 'center') || (!column && yEnd && 'flex-end') || (!column && yCenter && 'center') || (center && 'center')}`,
    ...style
  }

  return React.createElement(tag || 'div', { style: flexStyle, ...props }, children)

}

export default Flex
