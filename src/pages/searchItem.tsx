import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Button from "ui/components/inputs/Button/Button";
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
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/search-itens", {
        params: {
          item: search,
        },
      })
      .then((res) => {
        const itens = res.data;
        const suggestions = itens.map((item: any) => ({
          id: item.id,
          title: item.descricao,
        }));
        setSuggestionsList(suggestions);
      });
    console.log(search);
  }, [search]);

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 50 }}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnSubmit={false}
        dataSet={suggestions}
        onChangeText={(text) => setSearch(text)}
        onSelectItem={(item) => {
          item && setSelectedItem(Number(item.id));
        }}
        textInputProps={{
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
