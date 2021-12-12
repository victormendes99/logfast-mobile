import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import Button from "ui/components/inputs/Button/Button";
import TextInputStyled from "ui/components/inputs/TextInput/TextInput";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "ui/router/Router";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

type NavigationProp = StackNavigationProp<RootStackParamList, "ItemDetail">;

interface ItemDetailProps {
  navigation: NavigationProp;
  route: RootStackParamList;
}

const ItemDetail: React.FC<ItemDetailProps> = (route, navigation) => {
  const { itemId }: any = route.navigation.getState().routes[1].params;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem]: any = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/item", {
        params: {
          item: itemId,
        },
      })
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
          console.log(item);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Text>Error</Text>;
  } else if (!isLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <TextInputStyled label={"Código"} value={item?.id} editable={false} />
        <TextInputStyled
          label={"Descrição"}
          value={item?.descricao}
          editable={false}
        />
        <TextInputStyled
          label={"Endereço"}
          value={item?.endereco}
          editable={false}
        />
        <TextInputStyled
          label={"Quantidade"}
          value={item?.estoque}
          editable={false}
        />
        <TextInputStyled
          label={"Valor UND"}
          value={item?.custoUnitario}
          editable={false}
        />
        <TextInputStyled
          label={"SubInventário"}
          value={item?.subInventario}
          editable={false}
        />
      </View>
    );
  }
};

export default ItemDetail;
