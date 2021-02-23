import React, { memo } from 'react';

import { Carousel } from 'antd';
import {
  SwiperWrpper
} from './style';

export default memo(function LSHomeSwiper() {

  const swiperList = [
    {id: 0, url: require('@/assets/img/2021022300.jpg').default},
    {id: 1, url: require('@/assets/img/2021022301.jpg').default},
    {id: 2, url: require('@/assets/img/2021022302.jpg').default},
  ]
  return (
    <SwiperWrpper>
      <Carousel autoplay effect="fade" >
        {
          swiperList.map((item, index) => {
            return (
              <div className="img_content" key={item.id}>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
      </Carousel>
    </SwiperWrpper>
  )
})
