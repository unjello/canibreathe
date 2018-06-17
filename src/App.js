import React, { Component } from 'react';

class App extends Component {
  render() {
    /*const svgStyle = {
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd
    }*/
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="21cm" height="14.8cm" viewBox="0 0 210000 148000">
        <g id="mapa">
          <path id="dz-xviii" className="fil0 str0" d="M179301 26785l1119 2489 -161 2169 804 1205 -1206 2009 -803 1607 -81 3214 -642 563 -804 241 -80 2089 241 1848 -4178 1205 -3214 321 -2330 -80 -2893 804 -3616 1044c0,0 -2089,402 -2571,402 -482,0 -2411,-804 -2411,-804l-4580 -1767 -2731 -1206 -1848 -80 -1849 402 -562 1446 -6026 3857 -3536 2410 241 1045 -1687 241 -3229 931 -1973 683 -1139 -1897 -986 -1746 -2429 -1669 -1138 -532 -911 -455 -2125 1518 -1518 1290 -1062 152 -1139 -76 -531 1442 -1578 952 -1078 1325 -1290 607 0 683 1593 303 2429 0 1214 380 683 683 -607 911 -379 1290 152 1973 1138 455 1745 1063 1367 -76 1442 911 1517 75 1215 0 531 911 -1442 -303 -1138 151 -228 1063 -607 759 -1442 1138 -76 1442 2201 1822 1290 76 1573 888 2652 884 2973 884 3616 80 2571 -321 4017 -804 2732 0 1848 724 563 1526 402 1688 -161 2008 723 1768 2089 884 2774 -468 2208 -175 2330 0 1848 884 1527 1125 1767 562 1607 -401 723 -1688 2009 -1687 2330 -482c0,0 1447,803 1848,803 402,0 2973,1286 2973,1286l2813 562 2973 0 2812 -642 3214 -1206 2812 -1044 3616 -81 2250 804 1637 1638 1452 513 1793 427 1964 -257 512 -1195 1025 -2477 1452 -1793 1366 -1025 -2989 -4013 -1024 -2989 -513 -1366 -854 -86 -1451 -1110 -1110 -597 -513 -1367 -1622 -1110 -940 -1025 171 -1195 1281 -939 1623 -86 170 -512 -1793 -769 0 -939 -2049 -3245 -342 -1879 -256 -683 -1623 0 -341 -598 1025 -512 1366 0 1537 -683 85 -3416 0 -3928c0,0 342,-2903 513,-3330 170,-427 1366,-2733 1366,-2733l256 -1452 1366 0 1794 -2220 1708 171 1024 -2220 513 -1025 -940 -427 -1622 341 171 -768 341 -769 -1110 0 0 -939 -683 -939 -1281 0 -598 512 -854 598 -597 -769 -1111 171 -426 1110 -1111 -341 -768 427 -256 683 -769 -427 -256 -598 -854 256 -342 427 -597 -256 -257 -1025 -1366 -939 -768 171 -513 256 -597 -769 -940 -85 -1281 0 -939 -1025 -1964 -256 -939 342 -1452 1793z"/>
          <path id="dz-xvii" className="fil0 str0" d="M179375 26702l1045 2572 -161 2169 804 1205 -1206 2009 -803 1607 -81 3214 -642 563 -804 241 -80 2089 241 1848 -4178 1205 -3214 321 -2330 -80 -2893 804 -3616 1044c0,0 -2089,402 -2571,402 -482,0 -2411,-804 -2411,-804l-4580 -1767 -2731 -1206 -1848 -80 -1849 402 -562 1446 -6026 3857 -3536 2410 241 1045 -1687 241 -2973 803 -1318 -2528 -304 -1822 -1366 76 -607 -759 -607 -1518 303 -1821 -1366 -683 -2580 -76 -1215 -76 -1593 -835 -228 -531 607 -759 -227 -911 -608 -2656 -986 -759 227 -683 1139 0 303 -1062 683 -1063 -227 -759 -380 -986 -986 -1139c482,-401 891,-1790 891,-1790l1446 0 321 -1447 482 -884 0 -964 1527 -482 482 482 1286 1607 1125 2089 1526 -723 965 -1285 1205 -884 1205 160 884 -1285 803 -161 643 241 241 723 1045 161 1928 -402 1205 322 0 723 3295 -161 562 482 -964 964 -964 884 964 965 1446 -161 1206 -643 642 -884 1688 -241 401 -1687 1768 0 1125 -804 80 -1687 1206 -1366 2089 643 2732 1366 1446 321c0,0 1848,-482 2250,-321 402,160 1928,482 1928,482l482 1446 0 4259 1848 803 3134 964 2973 402 2732 161 643 -3214 1687 -2732 1928 -1446 884 -1607 1366 401z"/>
          <path id="dz-xvi" className="fil0 str0" d="M106382 45511l1746 1138 2201 531 -531 2429 1897 835 152 1897 607 683 1745 987 1518 -911 531 -1442 1139 76 1062 -152 1518 -1290 2125 -1518 911 455 1138 532 2429 1669 986 1746 1139 1897 2049 -759 -1138 -2580 -304 -1822 -1366 76 -607 -759 -607 -1518 303 -1821 -1366 -683 -2580 -76 -1215 -76 -1593 -835 -228 -531 607 -759 -227 -911c0,0 -1670,0 -2050,0 -379,0 -1214,-151 -1214,-151l-1670 -835 -986 -683 -1214 -152 -1518 835 -1973 1594 -3416 2884z"/>
          <path id="dz-xv" className="fil0 str0" d="M119739 32836l835 1215 380 986 227 759 -683 1063 -303 1062 -1139 0 -227 683 986 759 304 2429c0,0 -1366,227 -1746,227 -379,0 -1214,-151 -1214,-151l-1670 -835 -986 -683 -1214 -152 -1518 835 -1973 1594 -3416 2884 -1669 0 -2733 151c0,0 -2352,152 -2732,152 -379,0 -2201,0 -2201,0l-2049 152 -834 -987 1062 -531 0 -911 2125 -151 1746 -835 758 -683 -607 -1670 -455 -1594 835 -1290 986 -303 1442 -76 456 -607 -532 -608 -1062 0 -228 -1214 76 -987 -1745 -758 1669 -683 1139 -759 2960 -76 4174 227 3415 608 2353 910 1442 987 1214 0 986 -683 1366 -456z"/>
          <path id="dz-xiv" className="fil0 str0" d="M126039 72604l-2277 1442 -2125 1442 -2049 76 -2201 -683 -1746 -1973 -1897 -607 -1746 986 -1214 2429 -1138 1214 -1594 304 -2049 -987 -2732 -2808 -1215 -2353 -1138 -2732 -911 -1290 -1366 -1214 -2201 0 -227 -1056 -955 -956 68 -751 1024 -478 1707 -341 1638 -137 410 -683 -2321 -1843 -2253 -1775 1775 -1502 1160 -887 -136 -1161 546 -887 -410 -1229 -205 -956 683 -478 -68 -1092 -615 -1229 -1092 -409 -1707 0 -751 -342 69 -1297 2267 -547c0,0 1822,0 2201,0 380,0 2732,-152 2732,-152l2733 -151 1518 -152 1897 1290 2201 531 -531 2429 1897 835 152 1897 607 683 1669 987 -1062 1366 -1290 607 0 683 1593 303 2429 0 1214 380 683 683 -607 911 -379 1290 152 1973 1138 455 1745 1063 1367 -76 1442 911 1517 75 1215 0 531 911 -1442 -303 -1138 151 -228 1063 -607 759 -1442 1138 -76 1442 2201 1822 1290 76 1670 910z"/>
          <path id="dz-xiii" className="fil0 str0" d="M74465 75452l-1551 1402 -987 1366 -228 1139 -1366 986 -1594 1366 -455 1291 -228 834 152 1746 1594 304 987 -152 683 910 986 304 1139 0 2276 152 1063 -987 -228 -1062 987 -532 455 987 1063 987 1518 835 1821 227 76 -1062 1214 -380 1290 -227 759 -911 835 -531 759 759 0 910 76 1063 152 607 910 -152 608 -455 910 455 1139 2277 1442 -76 1062 -455 531 607 835 227 1139 -986 1214 -1139 986 -1214 1139 -76 1745 987 3036 455 2353 987 1594 0 1821 1214 2960 1214 1594 228 834 -379 -151 -987 75 -1290 835 -1063 -76 -1518 228 -1138 987 -455 1062 -380 1594 532 987 910 4250 0 2732 76 1669 228 1974 76 2883 1062 2201 683 1215 -607 1821 -607 911 -531 -456 -683 304 -532 1366 -1062 -455 -531 -911 -987 152 -911 1442 -531 1062 -1062 835 -1139 683 380 987 910 0 1442 76 1898 986 910 1366 532 1215 -683 1214 -1594 1442 -835 709 -514 -2812 402 -2089 -884 -723 -1768 161 -2008 -402 -1688 -563 -1526 -1848 -724 -2732 0 -4017 804 -2571 321 -3616 -80 -2973 -884 -2724 -884 -2108 1464 -2125 1442 -2049 76 -2201 -683 -1746 -1973 -1897 -607 -1746 986 -1214 2429 -1138 1214 -1594 304 -2049 -987 -2732 -2808 -1215 -2353 -1138 -2732 -911 -1290 -1366 -1214 -1844 -245 -1562 1043 -651 1239 -782 1044 -455 717 -1563 522 -1823 782 -911 -65 -1237 -783 -1433 -195 -1628 0 -1171 587 -2279 1369 -1498 913 -1172 1109 -716 847 -1758 783 -1693 -65z"/>
          <path id="dz-xii" className="fil0 str0" d="M91431 89832l-531 2049 304 3871 -1063 1062 -1290 152 -228 607 1291 455 2732 380 1669 303 1746 -379 1366 -76 228 1366 -532 607 -76 911 911 1062 1822 1518 1366 1594 910 1746 -303 607 835 1442 1517 -835 1291 -683 1518 0 2049 -531 1138 531 1290 379 1063 152 759 1366 607 1366 1062 0 -76 -759 1291 -227 2049 0 1290 531 1138 683 1670 379 1442 0 -76 -1290 0 -1442 683 -1138 835 228 759 303 1745 -379 987 -683 1594 76 531 -835 0 -759 1214 -152 835 228 607 -1746 0 -2428 835 -2125 455 -2429 -531 -1138 -986 -1063 -456 -1062 152 -380 1290 -835 1366 -1745 1214 -1518 0 -759 -2125 -835 -2883 -1062 -1974 -76 -1669 -228 -2732 -76 -4250 0 -987 -910 -1594 -532 -1062 380 -987 455 -228 1138 76 1518 -835 1063 -75 1290 151 987 -834 379 -1594 -228 -2960 -1214 -1821 -1214 -1594 0 -2353 -987 -3036 -455 -1745 -987 -1139 76 -986 1214 -1214 1139 -1139 986 -835 -227 -531 -607 -1062 455 -1291 0z"/>
          <path id="dz-xi" className="fil0 str0" d="M91280 89908l-380 1973 304 3871 -1063 1062 -1290 152 -228 607 1291 455 2732 380 1669 303 1746 -379 1366 -76 228 1366 -532 607 -76 911 911 1062 1822 1518 1366 1594 910 1746 -303 607 866 1179 -107 111 -1442 -987 -1366 -531 -1366 -379 -532 910 -1366 456 -2201 1442 -2883 455 -2125 0 -1367 -531c0,0 -1290,531 -1669,683 -380,152 -1594,911 -1594,911l-1366 0 -1594 531 -2504 0 -1898 -456 -834 -1821c0,0 -532,-1063 -683,-1594 -152,-531 -1442,-986 -1442,-986l303 -1822 683 -1518 0 -2504 -227 -1746 759 -759 683 -1062 -1063 -987 -379 -683 1214 -607 683 -1290 -531 -1138 -532 -759 152 -5085 911 -987 -228 -1062 987 -532 455 987 1063 987 1518 835 1821 227 76 -1062 1214 -380 1290 -227 759 -911 835 -531 759 759 0 910 76 1063 152 607 910 -152 608 -455 910 455 1139 2277z"/>
          <path id="dz-ix" className="fil0 str0" d="M74280 107060l-1442 -380 -1594 -76 -1973 0 -304 -683 607 -835 759 -910 380 -1670 -1139 0 -1745 0 -1746 0 -1138 -455 -1670 0 -1062 -76 -532 -607 -1062 -759 -607 -228 -2125 0 379 -1442 -455 -683 -1063 -607 608 -1518 1745 -1290 987 303 531 -910 759 -607 0 -987 1138 -683 1442 -531 1594 -1215 -152 -2808 531 -531 1139 456 531 75 -76 -1138 683 -531 1594 152 987 -152 683 910 986 304 1139 0 2352 0 -76 5237 532 759 531 1138 -683 1290 -1214 607 379 683 1063 987 -683 1062 -759 759 227 1746 0 2504 -683 1518 -303 1822z"/>
          <path id="dz-x" className="fil0 str0" d="M102512 108957l-76 228 -304 1973 1139 835 2049 1290 1366 455 304 1442 531 2049 986 1746 683 455 152 987 -531 531 -1063 683 -1214 1746 -1290 607 -607 910 152 1442 -76 1139 -1594 759 -1518 0 -379 -532 -1063 152 -759 759 -2428 152 -3416 607 -2352 -76 152 -1518 834 -910 -986 -1366 531 -1063 455 -987 -759 -455 -2732 304 -3491 834 -1518 911 0 1366 835 1215 -379 834c0,0 -1063,-76 -1442,76 -380,152 -759,1366 -759,1366l455 1291 -531 531 -1063 -304 -607 531 -1593 -227 -304 -1139 -1290 -76 -911 -986 -1138 -1063 -1215 -227 -986 -835 -911 -759 -1442 0 -1214 -607 -835 -759 -76 -1063 -228 -759 -758 0 -987 -455 -304 -1290 -1138 -455 -1442 531 -1063 607 -2276 0 -1063 -304 -607 -910 -759 -380 -1594 304 -1214 -304 -1670 0 -1214 683 -2808 -303 -1821 -152 531 -1214 -228 -911 -910 -76 -380 -835 531 -1214 1139 -228 1442 -76 531 -531 -76 -911 -607 -531 -911 -759 152 -911 987 0 683 -379 759 -1062 379 -1215 -152 -1290 456 -531 1214 -759 1138 -1139 1139 -1669 835 -1670 1062 -1669 835 -1215 2125 152 607 228 1062 759 532 607 1062 76 1670 0 1138 455 1746 0 1745 0 1139 0 -380 1670 -759 910 -607 835 304 683 1973 0 1594 76 1442 456c0,0 1290,379 1442,910 151,531 683,1594 683,1594l834 1821 1898 456 2504 0 1594 -531 1366 0c0,0 1214,-759 1594,-911 379,-152 1669,-683 1669,-683l1367 531 2125 0 2883 -455 2201 -1442 1366 -456 532 -910 1366 379 1366 531 1442 987z"/>
          <path id="dz-ii" className="fil0 str0" d="M96623 65749l-1388 899 -651 1239 -782 1044 -455 717 -1563 522 -1823 782 -911 -65 -1237 -783 -1433 -195 -1628 0 -1171 587 -2182 1466 -1980 -3072 -887 -1161 -68 -1638 68 -3345 478 -1775 819 -1161 273 -1229 1297 -68 1024 -1912 1434 -2730 1570 -2799 1570 546 1639 1229 1433 1502 1229 2048 546 1570 342 1365 341 205 751 0 2116 -1912 2390 1980 2321 1843 -410 683 -1638 137 -1707 341 -1024 478 -68 751 955 956 410 955z"/>
          <path id="dz-i" className="fil0 str0" d="M81399 71962l-1595 816 -1172 1109 -716 847 -1758 783 -1654 -142 -1638 -1092 -1093 -2526 -614 -2389 -478 -888 -478 -273 -751 478 -846 -2819 -918 -1640 -80 -1848 80 -1688 724 -1767 1044 -2170 1366 -1446 1768 -803 1848 -161 803 -563 965 -1125 1205 -642 884 -322 237 -1097 1024 -1434 1365 410 1707 409 2799 888 -1570 3004 -1434 2730 -1024 1912 -1297 68 -273 1229 -819 1161 -478 1775 -68 3345 68 1638 887 1161 1980 3072z"/>
          <path id="dz-iii" className="fil0 str0" d="M79488 49228l1433 342 1707 409 2799 888 1570 751 1639 1229 1433 1502 1229 2048 546 1570 342 1365 341 205 751 0 2253 -1707 1775 -1502 1160 -887 -136 -1161 546 -887 -410 -1229 -205 -956 683 -478 -68 -1092 -615 -1229 -1092 -409 -1707 0 -751 -342 239 -1467 -786 -1212 1062 -531 0 -911 2125 -151 1746 -835 758 -683 -607 -1670 -455 -1594 835 -1290 986 -303 1442 -76 456 -607 -532 -608 -1062 0 -228 -1214 76 -987 -1685 -880 -2253 1024 -2321 1366 -1775 1502 -1844 1297 -1092 478 -887 273 -2799 2048 -2731 2321 -1912 1502 -819 2321 -1160 2457z"/>
          <path id="dz-iv" className="fil0 str0" d="M78437 50541l1051 -1313 1160 -2457 819 -2321 1912 -1502 2731 -2321 2799 -2048 887 -273 1092 -478 1844 -1297 1775 -1502 2321 -1366 2253 -1024 -3072 -751 -3619 -887 -1433 -751 -1707 -1434 -1229 -546 -614 478 -683 614 -887 273 -478 -477 68 -956 -1775 -1570 -1980 -2663 -614 -1843 0 -819 -683 -342 -1297 205 -1434 0 -409 410 136 1160 -546 547 -1570 0 -819 750 -1843 274 -1093 273 -682 -615 -478 478 -342 1024 -68 1297 273 1092 341 1229 956 0 137 -614 -546 -751 0 -546 751 -68 819 1024 409 1092 -887 546 205 1024 205 683 -888 409 -614 -819 -683 137 -1161 614 -1706 1161 -546 614 -342 819 -1707 -546 0 -2116 -1024 -6008 -1365 -4983 -1775 -2936 -1570 -1502 0 -614 -1434 -956 -1638 -137 -1024 478 68 820 -546 819 -1229 546 -1843 -68 -1161 478 -1365 1228 -614 1571 -478 1979 -615 1980 -1092 1092 -1912 1161 -1297 819 -887 137 -1024 -69 -615 615 -614 546 546 1707 478 1365 273 1365 1297 820 1574 1538 2604 2348 1498 1499 2474 2087 1758 848 846 521 326 457 -651 2282 586 326 2148 -130 1498 0 1953 978 2083 522 2605 0 3255 521 3256 131 2604 65 1107 978 1237 1239 1237 457 1953 -131z"/>
          <path id="dz-v" className="fil0 str0" d="M78437 50541l-142 1150 -884 322 -1205 642 -965 1125 -803 563 -1848 161 -1768 803 -1366 1446 -1044 2170 -724 1767 -80 1688 86 1792 -6445 -1565 -2865 -782 -912 -718 -1562 -1239 -2800 -1434 -2580 -1217 174 -1468 315 -1262 526 -315 2627 420 2523 946 1576 0 316 -630 1366 -3679 1261 -3994 2574 48 3255 521 3256 131 2604 65 1107 978 1237 1239 1237 457 1953 -131z"/>
          <path id="dz-vi" className="fil0 str0" d="M50564 57215l-1100 43 -1302 -326 -1107 -1174 -846 -978 -847 -196 -651 -456 -716 -522 -781 -65 -1302 65 -521 -456 -782 -848 -846 -65 -977 -718 -846 -978 -911 -847 -847 130 -716 -457 -651 -652 -1888 261 -1302 -261 -1042 -652 -1107 -1500 -1107 -1434 -716 -1565 195 -1109 0 -847 -1237 -913 1433 -1109 1692 -1304 1628 0c0,0 781,-587 1107,-718 325,-130 1823,-782 1823,-782l1693 196 1693 521 1432 718 521 -196 1042 -1826 1692 -2348 1693 1696 2604 2348 1498 1499 2474 2087 1758 848 846 521 326 457 -651 2282 586 326 2148 -130 1498 0 1953 978 2114 474 -1261 3994 -1366 3679 -316 630 -1576 0 -2523 -946 -2627 -420 -526 315 -315 1262 -140 1468z"/>
          <path id="dz-vii" className="fil0 str0" d="M19944 79990l-1721 1662 -2552 -949 -1365 -2375 0 -2670 -1128 -1247 475 -1365 1840 -2374 2008 -2503 993 -2612 240 -1505 497 -1162 -1077 -664 -1616 -747 -912 332 -1160 415 -249 -374 -372 -913 -870 -1120 -1244 -208 -414 -497 125 -1121 -291 -1784 -870 -1660 -41 -457 290 -664 1450 -788 1130 -2576 759 -1897 0 -1290 987 -683 1442 -152 2352 -380 2581 -1745 1745 -1518 1139 -1290 1366 -607 1138 0 1229 1106 0 847 -195 1109 716 1565 1107 1434 1107 1500 1042 652 1302 261 1888 -261 651 652 716 457 847 -130 911 847 846 978 977 718 846 65 782 848 521 456 1302 -65 781 65 716 522 651 456 847 196 846 978 1107 1174 1302 326 1237 65 2409 1109 2800 1434 1562 1239 912 718 2865 782 6510 1631 847 1630 979 2676 -1703 757 -1980 615 -1638 273 -1912 -68 -1911 68 -1639 1229 -1297 2184 -1433 2731 -1999 2532 -1484 474 -2612 -296 -2493 -178 -2611 -1247 -3858 -3680 -4036 594 -2434 -475 -4095 59 -2315 2374 -3264 2671 -2315 0 -2612 831z"/>
          <path id="dz-viii" className="fil0 str0" d="M19944 79990l148 963 380 1669 835 2125 -76 1594 -608 1518 -2125 1442 -1669 607 -1139 152 -758 -759 -683 -1366 -987 -1594 -987 -1063 -1214 0 -1290 456 -987 1138 -607 1518 -531 2504 -759 1215 -1138 759 -1215 531 -607 1214 -455 987 379 1821 456 3567 303 5009 -379 1139 76 834 455 380 455 -152 380 -911 531 0 379 607 380 1215 911 152 379 -228 607 759 987 152 455 379 607 -304 456 -986 910 -380 759 456 304 -683 1214 -911 1594 -152 1214 76 1442 380 3188 455 2656 683 1897 531 1518 0 1518 152 76 683 -531 1821 -304 2429 152 1670 531 227 1366 -227 2429 303 986 759 1290 76 759 835 228 1366 -228 1138 -986 456 379 910 -683 911 -531 607 531 987 1518 152 835 76 531 1062 76 759 683 379 1063 76 1821 380 1290 -152 531 -531 -75 -911 227 -683 1442 -379 911 -911 0 -1366 911 -987 683 -835 455 -910 -228 -911 -910 -76 -380 -835 531 -1214 1139 -228 1442 -76 531 -531 -76 -911 -607 -531 -911 -759 152 -911 987 0 683 -379 759 -1062 379 -1215 -152 -1290 456 -531 1214 -759 1138 -1139 1139 -1669 835 -1670 1062 -1669 911 -987 303 -1518 -455 -683 -1063 -607 608 -1518 1745 -1290 987 303 531 -910 759 -607 0 -987 1138 -683 1442 -531 1594 -1215 -152 -2808 531 -531 1139 456 531 75 -76 -1138 683 -683 -152 -1746 228 -834 455 -1291 1594 -1366 1366 -986 228 -1139 987 -1366 1590 -1479 -1638 -1092 -1093 -2526 -614 -2389 -478 -888 -478 -273 -751 478 -1570 614 -1980 615 -1638 273 -1912 -68 -1911 68 -1639 1229 -1297 2184 -1433 2731 -1999 2532 -1484 474 -2612 -296 -2493 -178 -2611 -1247 -3858 -3680 -4036 594 -2434 -475 -4095 59 -2315 2374 -3264 2671 -2315 0 -2612 831z"/>
          <path id="wisla" className="fil1 str1" d="M16736 82642l2734 -2097 2735 -1184 1822 -92 1368 -364 1640 -1550 2005 -1640 912 -1550 1914 -455 2005 273 2005 91 2005 0 2278 -182 1368 365 1093 1093 2005 2461 2461 820 1550 183 3190 91 1093 91 2461 -1185 912 -1823 911 -1731 729 -1276 912 -1914 1275 -1276 1823 0 2370 364 2461 -273 1654 -1053 1354 -588 1093 182 365 1459 547 2278 820 1732 1094 1094 1640 455 2279 -729 1823 -1549 2460 -1823 2552 -1094 2097 -364 1458 364 1970 571 2508 -722 1668 -1739 1064 -1793 908 -924 1281 -85 1195 0 1281 1110 1025 1281 1025 2049 427 2477 768 1366 1794 1623 1708 1537 1793 427 1452 -257 768 -939 210 -1281 729 -1537 1281 -1025 1537 256 1623 684 1366 1793 1708 427 1964 427 1623 -939 1366 -1452 2135 -940 1708 171 2561 1196 3307 704 2552 -273 2643 -456 2005 -820 2826 -91 1093 182 1185 729 820 1367 274 1459 91 2096 182 1549 821 912 1822 547 1003 91 2005 -547 2096 -365 2461 274c0,0 1094,1002 1641,1093 547,92 1640,1003 1640,1003l1185 364 1276 0 1094 -1367 1515 -1864 1073 -780 1562 0 1854 195 1952 878 2342 1171 1757 391 1561 0 2050 -98 1951 -878 3709 -1171 2342 -488 2245 -684c0,0 1561,-97 2049,0 488,98 1464,586 2050,879 585,293 1659,1464 1659,1464l1171 976 1952 195 1659 -98 976 -1171 390 -1366 976 -1854 1562 -1464 2342 -1367"/>
        </g>
      </svg>
    )
  }
}

export default App;
