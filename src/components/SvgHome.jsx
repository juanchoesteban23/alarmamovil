import React from "react";
import { SvgXml } from "react-native-svg";
import { Link } from "react-router-native";

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<g clip-path="url(#clip0_1_183)">
<path d="M13.3333 32H8L32 8L56 32H50.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 32V50.6667C13.3333 52.0812 13.8952 53.4377 14.8954 54.4379C15.8956 55.4381 17.2522 56 18.6667 56H45.3333C46.7478 56 48.1044 55.4381 49.1046 54.4379C50.1048 53.4377 50.6667 52.0812 50.6667 50.6667V32" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 56V40C24 38.5855 24.5619 37.229 25.5621 36.2288C26.5623 35.2286 27.9188 34.6667 29.3333 34.6667H34.6667C36.0812 34.6667 37.4377 35.2286 38.4379 36.2288C39.4381 37.229 40 38.5855 40 40V56" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_183">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>`;

export function SvgHome({r,b}) {
  return (
    <Link
      to="/"
      style={{
        borderRadius: 40,
        position: "absolute",
        backgroundColor: "#E4EFFF",
        right: r,
        bottom: b,
      }}
      activeOpacity={0.5} underlayColor='#FFF5F5'
    >
      <SvgXml xml={xml} width="70px" height="70px" />
    </Link>
  );
}
