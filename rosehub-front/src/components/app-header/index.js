import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderCenter,
  HeaderRight
} from './style';


export default memo(function LSAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          Rose Hub
        </HeaderLeft>
        <HeaderCenter>
          {
            headerLinks.map((item,index) => {
              return (
                <Fragment key={item.title}>
                  <NavLink className="nav_a" to={item.link}>
                    {item.title}
                  </NavLink>
                </Fragment>
              )
            })
          }
        </HeaderCenter>
        <HeaderRight>
          登录
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
})
