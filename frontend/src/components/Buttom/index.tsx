import * as C from "./styles";
import icon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";

type Props = {
  saleId: number;
};

const handleClick = (id: number) => {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("SUCESSO");
  });
};

const Button = ({ saleId }: Props) => {
  return (
    <C.Container onClick={() => handleClick(saleId)}>
      <C.ButtonImage src={icon} />
    </C.Container>
  );
};

export default Button;
