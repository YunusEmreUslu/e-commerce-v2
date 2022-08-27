import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'

export const ShoppingIcon = styled(ShoppingSvg)`
 width: 30px;
 height: 30px;
`

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
`

export const ItemCount = styled.span`
  border-top: 3px;
  position: absolute;
  font-size: 14px;
  font-weight: bolder;
  bottom: 12px;
`

