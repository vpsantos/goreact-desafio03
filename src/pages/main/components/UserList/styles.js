import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const User = styled.li`
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0;
    padding: 0;
    border: 0;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 100px;
  }

  .detail {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;

    strong {
      font-size: 16px;
      color: #333;
      letter-spacing: -0.7px;
    }

    small {
      margin-top: 1px;
      font-size: 14px;
      color: #999;
      letter-spacing: -0.4px;
    }
  }

  a {
    margin-right: 22px;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  .fa-times-circle {
    font-size: 20px;
    color: #d45454;
  }

  .fa-angle-right {
    font-size: 20px;
    color: #999;
  }
`;
