import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;

  .modal__content {
    width: 335px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: #fff;
    align-items: center;

    h2 {
      margin-top: 4px;
      font-size: 16px;
      color: #333;
      letter-spacing: 0.3px;
      flex: 1;
    }

    form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-self: stretch;

      input {
        height: 41px;
        padding: 0 20px;
        border-radius: 5px;
        display: flex;
        flex: 1;
        color: #999;
        border: 1px solid #ccc;
        font-size: 14px;
        letter-spacing: -0.2px;
      }

      .buttons__container {
        margin-top: 10px;
        display: flex;
        flex: 1;
        justify-content: space-between;
        flex-direction: row;

        .button {
          width: 140px;
          height: 42px;
          border: 0;
          border-radius: 5px;
          background-color: #ccc;
          color #fff;
          font-size: 14px;
          font-weight: bold;

          &.button__save {
            background-color: #85c47c;
          }

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
