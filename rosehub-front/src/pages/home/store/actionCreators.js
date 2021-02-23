import {
  getTest 
} from '@/services/home';

const changeTestAction = (res) => ({
  type: 'test',
  test: res
})

export const getTestAction = () => {
  return dispatch => {
    getTest().then(res => {
      dispatch(changeTestAction(res))
    })
  }
}