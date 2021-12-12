import styled from "@emotion/native";
import { TextInput } from "react-native-paper";

export const TextInputStyled = styled(TextInput)`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
`;

TextInputStyled.defaultProps = {
  mode: "outlined",
};
