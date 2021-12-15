import styled from "@emotion/native";
import { View } from "react-native";

export const ViewStyled = styled(View)`
  margin-bottom: 20px;
  padding: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
`;
