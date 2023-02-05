import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerCantainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = () => {
  return (
    <SpinnerCantainer>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ef5330"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </SpinnerCantainer>
  );
};
