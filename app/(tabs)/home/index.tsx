import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import MovieListCard from '@/components/ui/movie-list-card';
import useMovie from '@/hooks/useMovie';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function HomeScreen() {


  //@ts-ignore
  const { movieData } = useMovie();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('playing');
  const [items, setItems] = useState([
    { label: 'Now Playing', value: 'playing' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Popular', value: 'popular' },
  ]);

  const [openSortBy, setOpenSortBy] = useState(false);
  const [valueSortBy, setValueSortBy] = useState("");
  const [itemsSortBy, setItemsSortBy] = useState([
    { label: 'By alphabetical order', value: 'alpabetical' },
    { label: 'By rating', value: 'rating' },
    { label: 'By release date', value: 'date' },
  ]);

  const [searchText, onSetSearchText] = useState('');


  return (
    <View
      style={styles.container}
    >
      <DropDownPicker
        closeOnBackPressed={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
        showTickIcon={false}
        style={styles.dropdownContainer}
        textStyle={styles.dropdownTextStyle}
        selectedItemLabelStyle={styles.dropdownSelectedItemLabelStyle}
        listItemLabelStyle={styles.dropdownlistItemLabelStyle}
        selectedItemContainerStyle={styles.dropdownSelectedItemContainerStyle}
        listItemContainerStyle={styles.dropdownListItemContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
      />

      <DropDownPicker
        open={openSortBy}
        value={valueSortBy}
        items={itemsSortBy}
        setOpen={setOpenSortBy}
        setValue={setValueSortBy}
        setItems={setItemsSortBy}
        theme="LIGHT"
        placeholder='Sort by'
        showTickIcon={false}
        style={[styles.dropdownContainer, { zIndex: 1 }]}
        textStyle={styles.dropdownTextStyle}
        selectedItemLabelStyle={styles.dropdownSelectedItemLabelStyle}
        listItemLabelStyle={styles.dropdownlistItemLabelStyle}
        selectedItemContainerStyle={styles.dropdownSelectedItemContainerStyle}
        listItemContainerStyle={styles.dropdownListItemContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
      />

      <TextInput
        style={styles.searchTextInput}
        onChangeText={onSetSearchText}
        value={searchText}
        placeholder="Search..."
      />

      <TouchableOpacity style={{
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 40,
        marginBottom: 10,
      }}
        onPress={() => { }}>
        <Text style={{ fontWeight: '600', fontSize: 13, color: "#00000077" }}>Search</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={{
          paddingVertical: 4
        }}
        data={movieData}

        renderItem={({ item }) => <MovieListCard item={item}></MovieListCard>}


        ListFooterComponent={<TouchableOpacity style={styles.listFooterComponentStyle}
          onPress={() => { }}>
          <Text style={styles.listFooterComponentText}> Load More</Text>
        </TouchableOpacity>
        } />


    </View >
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    // iOS Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    // Android Shadow
    elevation: 2,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#E3E3E3",
  },
  dropdownTextStyle: {
    fontWeight: '600'
  },
  dropdownSelectedItemLabelStyle: {
    fontWeight: '600',
    color: "white"
  },
  dropdownSelectedItemContainerStyle: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "#00B4E4",
    borderRadius: 3
  },
  dropdownlistItemLabelStyle: {
    fontWeight: '400',
  },
  dropdownListItemContainerStyle: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "#F8F8F8",
    borderRadius: 3
  },
  dropDownContainerStyle: {
    paddingVertical: 8,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "#E3E3E3"
  },
  searchTextInput: {
    // iOS Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    // Android Shadow
    elevation: 1,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#E3E3E3",
  },

  listFooterComponentStyle: {
    alignItems: 'center',
    backgroundColor: '#00B4E4',
    padding: 10,
    borderRadius: 5,
  },
  listFooterComponentText: {
    fontWeight: '700', fontSize: 13, color: "#FFF",
  },
  container: {
    paddingHorizontal: 25,
    backgroundColor: "white",
    flex: 1
  }
  
});
