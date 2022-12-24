import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  color: #264653;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;


export const ProductsWrap = styled.div`
  display: block;
  width: fit-content;
 
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: #264653;

  a {
    text-decoration: none;
    color: #2a9d8f;
    
    

    :hover {
      color: #264653;
      font-weight: bold;
      text-decoration: underline;
    }

    
  }
`;
