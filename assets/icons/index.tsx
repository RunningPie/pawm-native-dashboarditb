import Svg, { Circle, Path } from "react-native-svg";
import React from "react";

interface RootLightProps {
  size?: number;
  color?: string;
}

export function RootLight({ size = 24, color = "white" }: RootLightProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.5 14.5L14.5 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 14.5L18.5 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5 7.5H13.5975C13.5382 7.5 13.4845 7.53491 13.4604 7.58908L9.65707 16.1466C9.60145 16.2717 9.42101 16.263 9.3777 16.1331L8.53419 13.6026C8.51377 13.5413 8.45645 13.5 8.39189 13.5H7.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function AtomLight(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="1" fill="white" />
      <Path
        d="M16.5 12C16.5 14.7006 15.9516 17.1209 15.0883 18.8475C14.2101 20.604 13.0893 21.5 12 21.5C10.9107 21.5 9.78993 20.604 8.91168 18.8475C8.04839 17.1209 7.5 14.7006 7.5 12C7.5 9.29937 8.04839 6.87912 8.91168 5.15254C9.78993 3.39605 10.9107 2.5 12 2.5C13.0893 2.5 14.2101 3.39605 15.0883 5.15254C15.9516 6.87912 16.5 9.29937 16.5 12Z"
        stroke="white"
      />
      <Path
        d="M14.2499 15.8969C11.9111 17.2472 9.5409 17.9824 7.61399 18.0981C5.6537 18.2158 4.31731 17.6932 3.77266 16.7498C3.22801 15.8064 3.44362 14.3878 4.52567 12.749C5.58929 11.138 7.41109 9.45301 9.7499 8.10269C12.0887 6.75237 14.4589 6.01717 16.3858 5.90151C18.3461 5.78385 19.6825 6.30645 20.2271 7.2498C20.7718 8.19316 20.5562 9.61181 19.4741 11.2506C18.4105 12.8616 16.5887 14.5466 14.2499 15.8969Z"
        stroke="white"
      />
      <Path
        d="M14.2499 8.10284C11.9111 6.75252 9.5409 6.01732 7.61399 5.90166C5.6537 5.78399 4.31731 6.30659 3.77266 7.24995C3.22801 8.19331 3.44362 9.61196 4.52567 11.2508C5.58929 12.8617 7.41109 14.5467 9.7499 15.8971C12.0887 17.2474 14.4589 17.9826 16.3858 18.0982C18.3461 18.2159 19.6825 17.6933 20.2271 16.75C20.7718 15.8066 20.5562 14.3879 19.4741 12.7491C18.4105 11.1382 16.5887 9.45315 14.2499 8.10284Z"
        stroke="white"
      />
    </Svg>
  );
}

export function CertificateLight(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.5 9.5V8.7C18.5 7.57989 18.5 7.01984 18.282 6.59202C18.0903 6.21569 17.7843 5.90973 17.408 5.71799C16.9802 5.5 16.4201 5.5 15.3 5.5H7.7C6.57989 5.5 6.01984 5.5 5.59202 5.71799C5.21569 5.90973 4.90973 6.21569 4.71799 6.59202C4.5 7.01984 4.5 7.57989 4.5 8.7V12.3C4.5 13.4201 4.5 13.9802 4.71799 14.408C4.90973 14.7843 5.21569 15.0903 5.59202 15.282C6.01984 15.5 6.57989 15.5 7.7 15.5H13.5"
        stroke="white"
        stroke-linecap="round"
      />
      <Path d="M7.5 12.5H11.5" stroke="white" stroke-linecap="round" />
      <Path d="M7.5 8.5H14.5" stroke="white" stroke-linecap="round" />
      <Circle cx="17.5" cy="13.5" r="2" stroke="white" />
      <Path
        d="M19.5 18.5C19.5 18.5 19 17.5 17.5 17.5C16 17.5 15.5 18.5 15.5 18.5"
        stroke="white"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export function FlaskLight(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M15.5 10.5C15.5 10.5 15.5 15.077 15.5 18.5016C15.5 20.1584 14.1569 21.5 12.5 21.5V21.5C10.8431 21.5 9.5 20.1569 9.5 18.5V10.5"
        stroke="white"
        stroke-linejoin="round"
      />
      <Path
        d="M15.5 8.5H16.5C17.0523 8.5 17.5 8.94772 17.5 9.5V9.5C17.5 10.0523 17.0523 10.5 16.5 10.5H8.5C7.94772 10.5 7.5 10.0523 7.5 9.5V9.5C7.5 8.94772 7.94772 8.5 8.5 8.5H11.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.5 18.5V15.5H11.5V18.5C11.5 19.0523 11.9477 19.5 12.5 19.5C13.0523 19.5 13.5 19.0523 13.5 18.5Z"
        stroke="white"
        stroke-linejoin="round"
      />
      <Circle cx="16" cy="4" r="1.5" stroke="white" stroke-linejoin="round" />
      <Circle cx="13.5" cy="8.5" r="0.5" fill="white" />
      <Circle cx="9.5" cy="5.5" r="1" stroke="white" stroke-linejoin="round" />
    </Svg>
  );
}
