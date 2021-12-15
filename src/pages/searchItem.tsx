import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Button from "ui/components/inputs/Button/Button";
import CheckBox from "ui/components/inputs/Button/CheckBox";
import ViewStyled from "ui/components/box/viewStyled";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "ui/router/Router";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import axios from "axios";

type NavigationProp = StackNavigationProp<RootStackParamList, "SearchItem">;

interface SearchItemProps {
  navigation: NavigationProp;
}

const SearchItem: React.FC<SearchItemProps> = ({ navigation }) => {
  const [search, setSearch]: any = useState();
  const [suggestions, setSuggestionsList]: any = useState(null);
  const [selectedItem, setSelectedItem]: any = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios
      .get("https://logfast-api.herokuapp.com/api/search-itens", {
        params: {
          item: search,
          preventiva: checked,
        },
      })
      .then((res) => {
        const itens = res.data;
        const suggestions = itens.map((item: any) => ({
          id: item.idSubInventario,
          title: item.descricao,
        }));
        setSuggestionsList(suggestions);
        console.log(suggestions);
      });
    console.log(suggestions);
  }, [search]);

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 10 }}>
      <ViewStyled style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => {
            setChecked(!checked);
          }}
        >
          Filtrar subinventário PREVENTIVA
        </Text>
      </ViewStyled>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnSubmit={false}
        dataSet={suggestions}
        onChangeText={(text) => setSearch(text)}
        onSelectItem={(item) => {
          item && setSelectedItem(item.id);
        }}
        textInputProps={{
          placeholder: "Digite a descrição do item",
          autoCorrect: false,
          autoCapitalize: "none",
          style: {
            paddingLeft: 18,
          },
        }}
      />
      <Button
        mode={"contained"}
        onPress={() => {
          navigation.navigate("ItemDetail", { itemId: selectedItem });
        }}
      >
        Ver Item
      </Button>
    </View>
  );
};

export default SearchItem;
