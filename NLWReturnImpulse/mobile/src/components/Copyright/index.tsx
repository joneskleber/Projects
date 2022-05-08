import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ♥ pela Visão On-line
        {/* <a
          className="underline underline-offset-2"
          href="https://visao-ol.com.br"
        >
          Visão On-line
        </a> */}
      </Text>

      {/* <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://visao-ol.com.br"
        >
          Visão On-line
        </a>
      </footer> */}
    </View>
  );
}
