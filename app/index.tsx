import {Button, View} from "react-native";
import {Camera} from "expo-camera";
import {router} from "expo-router";
import {useState} from "react";
import {CameraView} from "expo-camera/next";

export default function App() {
    const [isShowing,setShowing]=useState<boolean>(false);
    return <View>
        <Button title={"GETPERMMISION"} onPress={() => {
            Camera.requestCameraPermissionsAsync().then();
        }}/>
        <Button title={"GETPERMMISION"} onPress={() => {
            Camera.requestCameraPermissionsAsync().then();
        }}/>
        <Button title={"close"} onPress={() => {
            setShowing(false);
        }}/>
        <Button title={"open"} onPress={() => {
           setShowing(true);
        }}/>
        <Button title={"TO PAGE"} onPress={() => {
            router.push("/other");
        }}/>

        {isShowing&&  <CameraView style={{height: "100%"}}/>}
    </View>
}