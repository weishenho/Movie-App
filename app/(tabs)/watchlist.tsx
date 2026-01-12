import MovieListCard from '@/components/ui/movie-list-card';
import useMovie from '@/hooks/useMovie';
import useWatchList from '@/hooks/useWatchList';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



export default function WatchList() {
  //@ts-ignore
  const { movieData } = useMovie();
  //@ts-ignore
  const { watchListData, setWatchListData } = useWatchList();

  const data = useMemo(() => {

    if (Array.isArray(watchListData)

    ) {
      //@ts-ignore
      return movieData.filter((e) => watchListData.find(a => a === e.movie))
    }
    return []
  }, [movieData, watchListData])


  const [openSortBy, setOpenSortBy] = useState(false);
  const [valueSortBy, setValueSortBy] = useState('rating');
  const [itemsSortBy, setItemsSortBy] = useState([
    { label: 'Alphabetical', value: 'alpabetical' },
    { label: 'Rating', value: 'rating' },
    { label: 'Release date', value: 'date' },
  ]);


  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingVertical: 40, backgroundColor: "#042541", flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginLeft: 30, height: 64, width: 64, backgroundColor: "#9747FF", alignItems: "center", justifyContent: "center", borderRadius: 64 }}>
          <Text style={{ fontSize: 36, color: "#fff" }}>J</Text>
        </View>
        <View style={{ marginLeft: 26 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 3 }}>John Lee</Text>
          <Text style={{ fontSize: 16, color: "#ffffff99" }}>Member since August 2023</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 30, marginBottom: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 700, }}>My Watchlist</Text>
        <View style={{
          flexDirection: "row", alignItems: "center"
        }}>
          < Text style={{ fontSize: 16, color: "#828282", marginRight: 15 }}>Filter by:</Text>


          <View>
            <DropDownPicker
              showTickIcon={false}
              showArrowIcon={true}
              open={openSortBy}
              value={valueSortBy}
              items={itemsSortBy}
              setOpen={setOpenSortBy}
              setValue={setValueSortBy}
              setItems={setItemsSortBy}
              theme="LIGHT"
              textStyle={{
                color: "#00B4E4",
                fontWeight: '600',
                fontSize: 16
              }}
              //@ts-ignore
              arrowIconStyle={{ tintColor: "#00B4E4" }}
              style={{
                zIndex: 1,
                marginRight: 20,
                width: 100,
                flexShrink: 1,
                padding: 0,
                margin: 0,
                borderWidth: 0,
                borderBottomWidth: 2,
                borderColor: "#00B4E4"
              }}
              listItemContainerStyle={{
                width: 90
              }}
              dropDownContainerStyle={{
                width: 90
              }}
            />
          </View>

          <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Text style={{ fontSize: 16, color: "#828282", marginRight: 6 }}>Order:</Text>
            <FontAwesome6 color="#000000" size={15} name="arrow-up" />
          </TouchableOpacity>


        </View>
      </View >

      <FlatList
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 30
        }}
        data={data}
        renderItem={({ item }) => <MovieListCard item={item} showCloseBtn={true}></MovieListCard>}
      />

    </View >
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
