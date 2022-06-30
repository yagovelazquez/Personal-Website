import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 78px 15px 0 78px;
  width: 100%;
  background: rgb(25, 25, 25);

  .aboutButton {
    width: 144px;
    min-height: 36px;
  }

  @media (max-width: 830px) {
    padding: 15px;
  }
`;

const HomeTitle = styled.p`
  color: white;
  border-bottom: 4px solid white;
  padding-bottom: 20px;
  line-height: 56px;
  font-size: 3.5rem;
  font-weight: 600;
  width: 700px;
  margin-bottom: 15px;

  @media (max-width: 830px) {
    font-size: 3rem;
    max-width: 700px;
    width: initial;
  }
`;

const HomeButton = styled.p`
  background: black;
  border: 3px solid white;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`;

export { HomeContainer, HomeTitle, HomeButton };
