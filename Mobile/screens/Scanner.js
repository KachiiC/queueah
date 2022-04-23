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

const Scanner = () => {
  const hasPermission = PermissonChecker();
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(undefined);
  const [result, setResult] = useState(emptyData);

  const args = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (data !== undefined) {
      fetch(data, args)
        .then((res) => res.json())
        .then((res) => setResult(res))
        .catch((err) => console.log(err));
    }
  }, [data]);

  const handleBarCodeScanned = ({ type, data }) => {
    setData(data);
    alert(
      `${result.attendee.first_name} ${result.attendee.surname} ${result.result}!`
    );
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const displayLogic = scanned && (
    <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
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
  },
});
