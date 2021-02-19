import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height:56px;
  line-height:56px;
  
  .content{
    display:flex;
  }

`

export const HeaderLeft = styled.div`
  flex: 1;
  text-align:center;
  
`
export const HeaderCenter = styled.div`
  flex:1.8;
  display:flex;
  justify-content: center;

  .nav_a{
    width:80px;
    margin-right:10px;
    text-align:center;
    transition: all 300ms linear;
    &:hover{
      background-color: rgb(231,231,231);
      text-decoration: none;
    }
    &.active{
      background-color: rgb(207,207,207);
    }
  }
`
export const HeaderRight = styled.div`
  flex:1;
  text-align:center;
`