import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;

  background-color: #040836;

  text-align: center;

  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;

  margin: 0px;
  margin-bottom: 20px;

  -webkit-text-stroke: 2px white;

  color: #040836;
`;

export const Undertitle = styled.h2`
  font-size: 26px;
  font-weight: 500;

  margin: 0px;
  margin-bottom: 10px;

  color: white;
`;

export const Input = styled.input`
  width: 200px;

  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border: 1px solid white;

  padding: 10px;
  margin: 0px;

  width: 500px;
`;
