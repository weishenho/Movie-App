import useWatchList from '@/hooks/useWatchList';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, TouchableOpacity, View } from "react-native";

export default function DetailsScreen() {

    //@ts-ignore
    const { watchListData, setWatchListData } = useWatchList();

    const router = useRouter();
    const item = useLocalSearchParams();



    const addToWatchList = useCallback(() => {

        if (Array.isArray(watchListData) &&
            !watchListData.find((e) => e === item.movie)
        ) {
            setWatchListData([...watchListData, item.movie]);
        }

    }, [watchListData, setWatchListData])

    console.log({watchListData})

    return (
        <View style={{ flex: 1, backgroundColor: "#00B4E4" }}>

            <View style={{ backgroundColor: "#0099C2", height: 260, borderWidth: 0, paddingTop: 18 }}>

                <TouchableOpacity

                    onPress={router.back}
                    style={{
                        position: 'absolute',
                        top: 5,
                        left: 11,
                        padding: 10,

                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 100
                    }}>
                    <FontAwesome6 name="chevron-left" size={24} color="white" />

                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <Text style={{ fontSize: 24, color: "#fff" }}><Text style={{ fontWeight: "600" }}>{item.movie}</Text> (2023)</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
                    <View style={{ backgroundColor: "grey", height: 150, width: 112 }}>

                    </View>
                    <View style={{ flex: 1, paddingLeft: 20, justifyContent: "space-evenly" }}>
                        <View style={{ padding: 8, width: 60, borderWidth: 1, borderRadius: 5, borderColor: "#ffffff77", alignItems: "center", justifyContent: "center", flexShrink: 1 }}>
                            <Text style={{ color: "#fff" }}>PG 13</Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff" }}>20/07/2023 (SG)   1h 54m</Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff" }}><Text style={{ fontWeight: "600" }}>Status: </Text> Released</Text>
                        </View>

                        <View>
                            <Text style={{ color: "#fff" }}><Text style={{ fontWeight: "600" }}>Original Language: </Text> English</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: "#00B4E4", flex: 1, paddingHorizontal: 30 }}>

                <TouchableOpacity onPress={addToWatchList}>
                    <View style={{ flexDirection: "row", borderWidth: 1, borderColor: "#ffffff99", borderRadius: 5, width: 191, height: 40, alignItems: "center", justifyContent: "space-evenly", marginTop: 10 }}>
                        <View>
                            <FontAwesome color="#ffff" size={18} name="bookmark" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff" }}>Add To Watchlist </Text>
                        </View>
                    </View>

                </TouchableOpacity>

            </View>


        </View >
    )
}