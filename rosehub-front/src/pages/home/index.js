import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTestAction } from '../home/store/actionCreators';

export default memo(function LSHome() {

  // state

  // redux hooks
  const { test } = useSelector(state => ({
    test: state.getIn(["home", "test"])
  }), shallowEqual);
  console.log('test', test)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTestAction())
  }, [dispatch])

  return (
    <div>
      home
    </div>
  )
})
