import styled from "@emotion/native";
import { Checkbox } from "react-native-paper";

export const CheckBoxStyled = styled(Checkbox)`
  margin: 50px auto;
  padding: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  max-width: 200px;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;
