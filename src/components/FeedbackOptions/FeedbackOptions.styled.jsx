import styled from 'styled-components';

export const FeedbackList = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  display: flex;
  list-style: none;

  :not(:last-child) {
    margin-right: 8px;
  }
`;
