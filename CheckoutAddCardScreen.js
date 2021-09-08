import * as React from "react";
import { WebView } from "react-native-webview";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const CheckoutAddCardScreen = ({ navigation }) => {
  return (
    <WebView
      onMessage={(event) => {
        const { data } = event.nativeEvent;
        if (data === "success") {
          var last4 = (Math.floor(Math.random() * 10000) + 10000)
            .toString()
            .substring(1);

          navigation.navigate("Root", {
            creditCard: {
              name: "New Card",
              last4,
              exp: `${getRandomInt(1, 12)}/${getRandomInt(22, 28)}`,
            },
          });
        }
      }}
      style={{ flex: 1 }}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/mattdemo-b6664.appspot.com/o/index.html?alt=media",
      }}
    />
  );
};

export default CheckoutAddCardScreen;
