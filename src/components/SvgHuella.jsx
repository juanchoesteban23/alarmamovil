import React from 'react'
import { SvgXml } from "react-native-svg";

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
<path d="M102.761 12.9017C105.757 14.3174 106.708 18.0461 105.047 20.9139C103.387 23.7817 99.7067 24.7637 96.6875 23.3984C90.1799 20.4561 83.1834 18.694 76.0254 18.212C66.867 17.5954 57.6897 19.091 49.201 22.5833C40.7122 26.0756 33.1393 31.4714 27.0664 38.3543C22.32 43.7338 18.589 49.9093 16.036 56.5793C14.8515 59.6741 11.5459 61.566 8.34823 60.6966C5.15059 59.8276 3.2022 56.5094 4.33461 53.3951C7.40653 44.947 12.0399 37.1315 18.0107 30.3643C25.3075 22.0943 34.4067 15.611 44.6062 11.4149C54.8056 7.21872 65.8326 5.42175 76.8366 6.16266C85.8408 6.7689 94.6332 9.0612 102.761 12.9017Z" fill="white"/>
<path d="M120.121 53.4973C116.854 47.0813 112.337 41.3833 106.835 36.7387C101.334 32.094 94.959 28.5964 88.086 26.4517C81.213 24.3068 73.9806 23.5582 66.8142 24.2496C59.6474 24.941 52.6914 27.0587 46.3552 30.478C40.0191 33.8972 34.4306 38.549 29.9187 44.1598C25.4067 49.7706 22.0623 56.227 20.0823 63.1494C19.1123 66.5406 18.4793 70.0098 18.1873 73.5066C18.0651 73.9842 18 74.4846 18 75V103.999C18 108.946 16.7788 111.874 15.855 113.413C15.1978 114.508 14.6166 115.028 14.5018 115.125C11.8846 117.001 11.208 120.629 13.0078 123.328C14.8459 126.085 18.5712 126.83 21.3283 124.992C21.7923 124.682 22.3481 124.262 23.1802 123.43C24.0583 122.552 25.1208 121.294 26.145 119.587C28.2213 116.126 30 111.054 30 103.999V77.0046C30.0845 73.4394 30.6229 69.891 31.6082 66.4464C33.1487 61.0608 35.7506 56.0377 39.2609 51.6725C42.7711 47.3073 47.1189 43.6882 52.0485 41.0281C56.978 38.3678 62.3898 36.7204 67.9656 36.1824C73.5408 35.6444 79.1676 36.2269 84.5148 37.8956C89.862 39.5642 94.8216 42.2853 99.102 45.8989C103.382 49.5124 106.896 53.9453 109.438 58.937C110.69 61.3956 111.693 63.9648 112.438 66.6072C114.556 75.54 115.588 81.5646 115.881 88.0224C116.233 95.7636 115.537 104.328 114.03 119.403C113.7 122.7 116.106 125.641 119.403 125.97C122.7 126.3 125.641 123.894 125.97 120.597C127.463 105.671 128.267 96.2364 127.869 87.4776C127.579 81.105 126.66 75.1944 125.046 67.8948C124.795 66.5736 124.493 65.2626 124.144 63.9648C123.212 60.0288 121.917 57.0242 120.121 53.4973Z" fill="white"/>
<path d="M7.03542 66.0637C3.80446 65.4703 0.678102 67.6081 0.353133 70.8769C-0.488442 79.3423 0.177086 87.8911 2.31871 96.1243C3.14568 99.3037 6.56526 100.932 9.6654 99.8455C12.7656 98.7589 14.3671 95.3689 13.5922 92.1769C12.0727 85.9165 11.5694 79.4521 12.1018 73.0327C12.3733 69.7585 10.2664 66.6577 7.03542 66.0637Z" fill="white"/>
<path d="M143.991 76.8498C144.043 80.133 141.185 82.6146 137.908 82.3962C134.632 82.1778 132.185 79.3404 132.079 76.0584C131.809 67.719 129.805 59.5036 126.169 51.9451C122.533 44.3866 117.366 37.6929 111.019 32.2765C108.521 30.1451 107.833 26.4616 109.707 23.7658C111.581 21.0699 115.304 20.3856 117.837 22.4758C125.852 29.0926 132.359 37.3825 136.884 46.7911C141.41 56.1997 143.825 66.4578 143.991 76.8498Z" fill="white"/>
<path d="M107.965 79.5828C107.819 82.8936 104.577 84.966 101.337 84.273L99.216 83.8194C95.9754 83.1264 93.999 79.9068 93.7866 76.5996C93.7044 75.321 93.5094 74.0484 93.2022 72.7962C92.4156 69.5928 90.9138 66.609 88.809 64.0692C86.7042 61.53 84.0516 59.5001 81.0498 58.1327C78.048 56.7654 74.7756 56.0961 71.478 56.1749C68.1804 56.2538 64.9434 57.0789 62.0106 58.5881C59.0778 60.0972 56.525 62.2518 54.5441 64.8888C52.5632 67.5264 51.2057 70.5786 50.5734 73.8156C50.3264 75.081 50.1926 76.362 50.1716 77.643C50.1174 80.9562 48.2969 84.267 45.0933 85.1142L42.9966 85.6686C39.793 86.5152 36.4554 84.6006 36.1517 81.3006C35.8388 77.9034 36.0096 74.4684 36.6674 71.1C37.7099 65.7618 39.9485 60.729 43.2151 56.3799C46.4816 52.0308 50.6912 48.4784 55.5276 45.9897C60.3642 43.5009 65.7018 42.1403 71.139 42.0103C76.5768 41.8802 81.9732 42.984 86.9232 45.2387C91.8732 47.4934 96.2478 50.8404 99.7182 55.0284C103.189 59.2163 105.666 64.1364 106.962 69.4188C107.78 72.7518 108.115 76.1748 107.965 79.5828Z" fill="white"/>
<path d="M48 99C48 95.6862 45.3137 93 42 93C38.6863 93 36 95.6862 36 99C36 108.629 33.9388 116.123 31.9291 121.147C30.9232 123.661 29.9307 125.556 29.2175 126.784C28.8927 127.343 28.5566 127.901 28.1797 128.427C26.2155 131.077 26.7581 134.819 29.4 136.8C32.0509 138.788 35.8117 138.251 37.8 135.6C38.4501 134.704 39.0393 133.766 39.595 132.809C40.5693 131.132 41.8267 128.714 43.0708 125.603C45.5612 119.377 48 110.371 48 99Z" fill="white"/>
<path d="M102 93C105.314 93 108 95.6862 108 99C108 109.786 107.23 118.301 106.447 124.168C106.056 127.102 105.662 129.374 105.359 130.937C105.197 131.777 105.029 132.619 104.822 133.45C104.018 136.665 100.76 138.625 97.545 137.821C94.3332 137.018 92.379 133.766 93.177 130.554C93.333 129.927 93.4554 129.29 93.5778 128.657C93.8382 127.314 94.194 125.273 94.5528 122.582C95.2704 117.199 96 109.214 96 99C96 95.6862 98.6862 93 102 93Z" fill="white"/>
<path d="M70.9435 74.6857C75.3055 73.1923 75.8137 77.0353 76.3765 80.7607C77.6389 89.1217 76.7167 102.448 75.0295 119.407C74.7013 122.704 77.1085 125.644 80.4061 125.972C83.7037 126.299 86.6425 123.892 86.9707 120.595C88.6171 104.045 89.7733 89.1097 88.2415 78.9685C87.4927 74.0077 85.9237 68.8015 82.1443 65.4451C77.8123 61.5967 72.2971 61.5385 67.0567 63.3331C64.4857 64.2133 62.1451 65.4487 60.2605 67.2919C58.3121 69.1969 57.1794 71.4289 56.5684 73.7551C55.989 75.9613 55.8814 78.2455 55.9003 80.3509C55.919 82.4395 56.0768 84.8263 56.1998 87.1471C56.6917 96.4297 56.994 109.783 48.4852 129.637C47.1799 132.683 48.5908 136.21 51.6365 137.515C54.6823 138.821 58.2096 137.41 59.515 134.364C69.0061 112.218 68.7301 96.8419 68.1829 86.5123C68.0461 83.9311 67.9153 81.9823 67.8997 80.2435C67.8751 77.4535 68.0719 75.6691 70.9435 74.6857Z" fill="white"/>
</svg>`

export function SvgHuella() {
  return (
    <SvgXml xml={xml} width="100%" height="100%" />
  )
}

