import useWatchList from "@/hooks/useWatchList";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type Props = {
    item: any
    showCloseBtn?: boolean
}

const MovieListCard = ({ item, showCloseBtn }: Props) => {
    const router = useRouter();
    //@ts-ignore
    const { watchListData, setWatchListData } = useWatchList();

    const removeWatchListItem = () => {

        if (Array.isArray(watchListData)

        ) {
            setWatchListData(watchListData.filter((e) => e !== item.movie));
        }

    }

    return (
        <TouchableOpacity key={item.movie} style={{ backgroundColor: "#FFF", borderRadius: 5, borderWidth: 1, borderColor: "#E3E3E3", flexDirection: "row", marginBottom: 8 }}
            onPress={() => router.navigate({
                pathname: "/(tabs)/home/details",
                params: item
            })}>
            {
                showCloseBtn === true ? <TouchableOpacity style={styles.closeBtn} onPress={removeWatchListItem}>
                    <FontAwesome color="#595959" size={15} name="close" />
                </TouchableOpacity> : null
            }


            <View style={styles.imageView}>
                <Image style={{ flex: 1 }} source={item.imgSrc} contentFit='fill' ></Image>
            </View>
            <View style={styles.textsView}>
                <Text style={{
                    fontWeight: "600", fontSize: 16
                }}>{item.movie}</Text>
                <Text style={{
                    fontSize: 14, color: "#999999", marginBottom: 17
                }}>{item.date}</Text>
                <Text style={{ fontSize: 14, }} numberOfLines={2} ellipsizeMode='tail' >{item.description}</Text>
            </View>

        </TouchableOpacity>
    )

}

export default MovieListCard;


const styles = StyleSheet.create({
    closeBtn: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    imageView: {
        height: 141, width: 96
    },
    textsView: {
        paddingRight: 10,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 14
    }

});
