import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M44.5 81.5833C64.9806 81.5833 81.5834 64.9805 81.5834 44.5C81.5834 24.0194 64.9806 7.41663 44.5 7.41663C24.0195 7.41663 7.41669 24.0194 7.41669 44.5C7.41669 64.9805 24.0195 81.5833 44.5 81.5833Z" stroke="#FFD1A7" stroke-width="5.5625"/>
<path d="M31.5209 46.3541L38.9375 53.7708L57.4792 35.2291" stroke="#FFD1A7" stroke-width="5.5625" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

export function SvgCheck() {
    return (
      <SvgXml xml={xml} width="100px" height="100px" />
    )
  }