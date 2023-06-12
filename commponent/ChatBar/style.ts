import styled from "styled-components";

export const ChatBarWrapper = styled.div`
  height: 100%;
  color: red;
  background-color: #f9f5eb;
  flex: 0.2;
  padding: 20px;
  border-right: 1px solid #fdfdfd;
  .chat__sidebar {
    height: 100%;
    color: red;
    background-color: #f9f5eb;
    flex: 0.2;
    padding: 20px;
    border-right: 1px solid #fdfdfd;
  }
  .chat__header {
    margin: 30px 0 20px 0;
  }
  .chat__users > * {
    box-sizing: border-box;
    cursor: pointer;
    padding-left: 10px;
    line-height: 60px;
    background-color: #dcdbdb;

    color: #000000;
    font-size: 14px;
    height: 60px;
    border-bottom: 1px solid #000000;
    &:hover {
      background-color: #d0cfcf;
    }
  }
`;
