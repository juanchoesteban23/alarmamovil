import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<g clip-path="url(#clip0_1_55)">
<path d="M10.6667 53.3333H21.3334L49.3334 25.3333C50.0337 24.6329 50.5893 23.8015 50.9684 22.8864C51.3474 21.9713 51.5425 20.9905 51.5425 20C51.5425 19.0095 51.3474 18.0287 50.9684 17.1136C50.5893 16.1985 50.0337 15.367 49.3334 14.6667C48.633 13.9663 47.8015 13.4107 46.8864 13.0317C45.9713 12.6526 44.9905 12.4575 44 12.4575C43.0095 12.4575 42.0287 12.6526 41.1136 13.0317C40.1985 13.4107 39.3671 13.9663 38.6667 14.6667L10.6667 42.6667V53.3333Z" stroke="#001749" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36 17.3333L46.6667 27.9999" stroke="#001749" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_55">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>`

export const SvgPencil = () => <SvgXml xml={xml} width="100%" height="100%" />

