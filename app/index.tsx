import {Button, View} from "react-native";
import {Camera} from "expo-camera";
import {router} from "expo-router";
import {useState} from "react";

export default function App() {
    const [camera, setCamera] = useState<Camera|null>(null);
    return <View>
        <Button title={"GETPERMMISION"} onPress={() => {
            Camera.requestCameraPermissionsAsync().then();
        }}/>
        <Button title={"GETPERMMISION"} onPress={() => {
            Camera.requestCameraPermissionsAsync().then();

        }}/>
        <Button title={"TO PAGE"} onPress={() => {
            router.push("/other");
        }}/>
        <Camera useCamera2Api={true} style={{height: "100%"}} ref={(e) => setCamera(e)}/>
    </View>
}