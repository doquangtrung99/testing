import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const WrapperItem = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const Item = ({ itemCount }: { itemCount: number }) => {
  const navigate = useNavigate();

  return (
    <WrapperItem>
      {itemCount}
      <button onClick={() => navigate("/photo")}>Go to</button>
    </WrapperItem>
  );
};

export default Item;
