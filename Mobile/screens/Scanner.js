import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const emptyData = {
  result: "",
  attendee: {
    _id: "",
    event_id: "",
    event_name: "",
    email: "",
    first_name: "",
    gender: "",
    scanned: false,
    surname: "",
  },
}

const PermissonChecker = () => {

  const { requestPermissionsAsync } = BarCodeScanner;
  const [hasPermission, setHasPermission] = useState(null);

  (async () => {
    const { status } = await requestPermissionsAsync();
    setHasPermission(status === "granted");
  })();

  return hasPermission;
};

const Scanner = ({ navigation }) => {
  const hasPermission = PermissonChecker();
  const [scanned, setScanned] = useState(false);
  const [url, setUrl] = useState(undefined)
  const [resData, setResData] = useState({
    result: "",
    attendee: {
      first_name: "",
      surname: ""
    }
  })

  useEffect(() => {
    if (url !== undefined) {
      fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => setResData(res))
        .catch(err => console.log(err))
    }
  }, [url])

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      await data
      setUrl(data)
      const alertLogic = () => {
        const res = resData.result
        console.log(res)
        if (res.length == 0) return "A bug detected"
        else if (res === "already scanned!" || res === "now scanned") {
          return `${resData.attendee.first_name} ${resData.attendee.surname} ${res}`
        }
        return res
      }
      alert(alertLogic())
      setScanned(true);
    } catch (err) {
      console.log(err)
      throw (err)
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const displayLogic = scanned && (
    <Button title={"Tap to Scan Again"} onPress={() => {
      setScanned(false);
      // setResult(undefined)
    }} />
  );

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {displayLogic}
    </View>
  );
};
export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
});
