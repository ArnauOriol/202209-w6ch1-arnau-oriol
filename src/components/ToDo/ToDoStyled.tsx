import styled from "styled-components";

const ToDoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2f2f2f;
  padding: 5px 0;
  .task {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__checkbox {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }
  }
`;

export default ToDoStyled;
