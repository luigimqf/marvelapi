import styled from 'styled-components';

export const MainComicsContainer = styled.div`
  background-color: var(--red-bg-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (max-width: 1024px){
    clip-path: none;
    width: 100%;
    padding: 0px;
  }

` 

export const SkeletonComic = styled.div`
  width: 20%;
  height: 100%;
  margin: 1.5px;
  background-color: #7f8c8d;
` 

export const Comic = styled.div`
  width: 20%;
  height: 100%;
  margin: 1.5px;

  background-size: cover;
  background-position: center;

  border: 3px solid var(--dark-bg-color);

  transition: 0.5s;
` 