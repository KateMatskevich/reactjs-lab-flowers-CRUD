import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Li = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: #000000;

    :hover {
      border-bottom: 2px solid #343434;
      color: #343434;
    }
  }
`;
