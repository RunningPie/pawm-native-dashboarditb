import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type IconProps = {
  size?: number;
  color?: string;
};

export const IconContainer = ({
  Icon,
  style,
}: {
  Icon: React.ComponentType<IconProps>;
  style?: any;
}) => (
  <View style={[styles.iconContainer, style]}>
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} style={styles.gradient}>
      <Icon size={44} color="white" />
    </LinearGradient>
  </View>
);

export default IconContainer;

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "100%",
    paddingRight: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
