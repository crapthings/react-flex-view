import React from 'react'

const Flex = ({
  flexHeight,
  row,
  column,
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
  yScroll,
  tag,
  style,
  children,
  ...props,
}) => {

  const flexStyle = {
    overflowY: `${yScroll && 'scroll'}`,
    display: 'flex',
    flex: `${(ten && 10) || (nine && 9) || (eight && 8) || (seven && 7) || (six && 6) || (five && 5) || (four && 4) || (three && 3) || (two && 2) || (one && 1) || ''}`,
    width: '100%',
    height: `${flexHeight ? '100vh' : 'auto'}`,
    flexFlow: `${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}`,
    justifyContent: `${(column && yEnd && 'flex-end') || (column && yCenter && 'center') || (!column && xEnd && 'flex-end') || (!column && xCenter && 'center') || (center && 'center')}`,
    alignItems: `${(column && xEnd && 'flex-end') || (column && xCenter && 'center') || (!column && yEnd && 'flex-end') || (!column && yCenter && 'center') || (center && 'center')}`,
    ...style
  }

  return React.createElement(tag || 'div', { style: flexStyle, ...props }, children)

}

export default Flex
