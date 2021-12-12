import styled from "@emotion/native";
import { Button } from "react-native-paper";

export const ButtonStyled = styled(Button)`
  margin: 50px auto;
  padding: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  max-width: 200px;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

ButtonStyled.defaultProps = {
  dark: true,
  uppercase: false,
};
