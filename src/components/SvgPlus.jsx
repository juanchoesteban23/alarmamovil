import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="111" height="111" viewBox="0 0 111 111" fill="none">
<g clip-path="url(#clip0_1_88)">
<path d="M55.5 27.75V83.25" stroke="#FFD1A7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.75 55.5H83.25" stroke="#FFD1A7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_88">
<rect width="111" height="111" fill="white"/>
</clipPath>
</defs>
</svg>`

export function SvgPlus() {
    return (
      <SvgXml xml={xml} width="100px" height="100px" />
    )
  }