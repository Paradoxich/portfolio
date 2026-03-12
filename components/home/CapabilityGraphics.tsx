/* Capability section illustrations – inline SVGs using theme tokens */

import { productPath, productPath2, engineersPath } from "./capability-collab-paths";

const svgBaseClass =
  "absolute inset-0 w-full h-full object-cover object-right-bottom pointer-events-none";

function GraphicOwnership() {
  return (
    <svg
      className={svgBaseClass}
      width="320"
      height="160"
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id="ownership-clip">
          <rect width="320" height="160" fill="white" />
        </clipPath>
        <linearGradient
          id="ownership-gradient"
          x1="160.331"
          y1="5.3612e-08"
          x2="159.302"
          y2="159.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-0)" />
          <stop offset="0.290243" stopColor="var(--color-0)" stopOpacity="0.3" />
          <stop offset="0.995192" stopColor="var(--color-0)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath="url(#ownership-clip)">
        <g opacity="0.3">
          <path
            d="M225 85.5L180 68.5L135 85.5V111L180 128L225 111V85.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M225 85.5L180 68.5L135 85.5M225 85.5L180 102.5M225 85.5V111L180 128M180 102.5L135 85.5M180 102.5V128M135 85.5V111L180 128"
            stroke="var(--color-40)"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M336 85.5L291 68.5L246 85.5V111L291 128L336 111V85.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M336 85.5L291 68.5L246 85.5M336 85.5L291 102.5M336 85.5V111L291 128M291 102.5L246 85.5M291 102.5V128M246 85.5V111L291 128"
            stroke="var(--color-40)"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M225 60.5L180 43.5L135 60.5V86L180 103L225 86V60.5Z"
            fill="var(--color-0)"
          />
          <path
            d="M225 60.5L180 43.5L135 60.5M225 60.5L180 77.5M225 60.5V86L180 103M180 77.5L135 60.5M180 77.5V103M135 60.5V86L180 103"
            stroke="var(--color-40)"
            strokeLinejoin="round"
          />
        </g>
        <rect
          width="320"
          height="160"
          fill="url(#ownership-gradient)"
        />
        <path
          d="M280 106.5L235 89.5L190 106.5V132L235 149L280 132V106.5Z"
          fill="var(--color-0)"
        />
        <path
          d="M280 106.5L235 89.5L190 106.5M280 106.5L235 123.5M280 106.5V132L235 149M235 123.5L190 106.5M235 123.5V149M190 106.5V132L235 149"
          stroke="var(--color-40)"
          strokeLinejoin="round"
          strokeDasharray="2 2"
        />
        <path
          d="M280 81.5L235 64.5L190 81.5V107L235 124L280 107V81.5Z"
          fill="var(--color-0)"
        />
        <path
          d="M280 81.5L235 64.5L190 81.5M280 81.5L235 98.5M280 81.5V107L235 124M235 98.5L190 81.5M235 98.5V124M190 81.5V107L235 124"
          stroke="var(--color-40)"
          strokeLinejoin="round"
        />
        <path
          d="M280 56.5L235 39.5L190 56.5V82L235 99L280 82V56.5Z"
          fill="var(--color-10)"
        />
        <path
          d="M280 56.5L235 39.5L190 56.5M280 56.5L235 73.5M280 56.5V82L235 99M235 73.5L190 56.5M235 73.5V99M190 56.5V82L235 99"
          stroke="var(--color-40)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <ellipse
          cx="235"
          cy="56.5"
          rx="2"
          ry="1.5"
          fill="var(--color-graphic-muted)"
        />
      </g>
    </svg>
  );
}

function GraphicDomains() {
  return (
    <svg
      className={svgBaseClass}
      width="320"
      height="160"
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id="domains-clip">
          <rect width="320" height="160" fill="white" />
        </clipPath>
        <linearGradient
          id="domains-gradient"
          x1="320"
          y1="80.3313"
          x2="0.00898839"
          y2="78.2726"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00480771" stopColor="var(--color-0)" stopOpacity="0" />
          <stop offset="0.709757" stopColor="var(--color-0)" stopOpacity="0.3" />
          <stop offset="1" stopColor="var(--color-0)" />
        </linearGradient>
      </defs>
      <g clipPath="url(#domains-clip)">
        <path d="M-0.355469 250.5L-0.355484 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M169.697 250.5L169.697 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M18.5391 250.5L18.539 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M188.592 250.5L188.592 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M37.4336 250.5L37.4336 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M207.488 250.5L207.488 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M56.3281 250.5L56.3281 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M226.383 250.5L226.383 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M75.2246 250.5L75.2246 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M245.277 250.5L245.277 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M94.1191 250.5L94.1191 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M264.172 250.5L264.172 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M113.014 250.5L113.014 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M283.066 250.5L283.066 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M131.908 250.5L131.908 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M301.961 250.5L301.961 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M150.803 250.5L150.803 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 89.6974H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 108.592H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 127.487H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 146.382H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 14.1182H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 33.0127H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 51.9082H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-10 70.8026H330.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <rect
          width="320"
          height="160"
          fill="url(#domains-gradient)"
        />
        <path d="M169 127L209 127" stroke="var(--color-20)" strokeDasharray="4 4" />
        <path d="M189 107L189 147" stroke="var(--color-20)" strokeDasharray="4 4" />
        <path d="M300 109L228 109" stroke="var(--color-20)" strokeDasharray="4 4" />
        <path d="M264 73L264 145" stroke="var(--color-20)" strokeDasharray="4 4" />
        <path d="M283 32L283 72" stroke="var(--color-20)" strokeDasharray="4 4" />
        <path d="M303 52L263 52" stroke="var(--color-20)" strokeDasharray="4 4" />
        <circle cx="189" cy="127" r="8.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <circle cx="189" cy="127" r="5.5" fill="var(--color-10)" stroke="var(--color-40)" />
        <path
          d="M189.504 126.5H191V127.5H189.504V129.005H188.504V127.5H187V126.5H188.504V125.005H189.504V126.5Z"
          fill="var(--color-80)"
          fillOpacity="0.5"
        />
        <circle cx="264" cy="109" r="13.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <circle cx="264" cy="109" r="8.75" fill="var(--color-10)" stroke="var(--color-40)" strokeWidth="1.5" />
        <path
          d="M264.504 108.495H266V109.495H264.504V111H263.504V109.495H262V108.495H263.504V107H264.504V108.495Z"
          fill="var(--color-80)"
          fillOpacity="0.5"
        />
        <circle cx="283" cy="52" r="8.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <circle cx="283" cy="52" r="5.5" fill="var(--color-10)" stroke="var(--color-40)" />
        <path
          d="M283.504 51.4951H285V52.4951H283.504V54H282.504V52.4951H281V51.4951H282.504V50H283.504V51.4951Z"
          fill="var(--color-80)"
          fillOpacity="0.5"
        />
      </g>
    </svg>
  );
}

function GraphicCollaboration() {
  return (
    <svg
      className={svgBaseClass}
      width="320"
      height="160"
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id="collab-clip">
          <rect width="320" height="160" fill="white" />
        </clipPath>
        <linearGradient
          id="collab-gradient"
          x1="159.331"
          y1="5.3612e-08"
          x2="158.302"
          y2="159.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-0)" />
          <stop offset="0.290243" stopColor="var(--color-0)" stopOpacity="0.3" />
          <stop offset="0.995192" stopColor="var(--color-0)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath="url(#collab-clip)">
        <path d="M168.697 250.5L168.697 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M17.5391 250.5L17.539 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M187.592 250.5L187.592 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M36.4336 250.5L36.4336 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M206.488 250.5L206.488 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M55.3281 250.5L55.3281 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M225.383 250.5L225.383 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M74.2246 250.5L74.2246 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M244.277 250.5L244.277 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M93.1191 250.5L93.1191 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M263.172 250.5L263.172 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M112.014 250.5L112.014 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M282.066 250.5L282.066 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M130.908 250.5L130.908 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M300.961 250.5L300.961 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M149.803 250.5L149.803 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M319.855 250.5L319.855 -90" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 89.6974H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 108.592H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 127.487H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 146.382H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 14.1182H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 33.0127H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 51.9082H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <path d="M-11 70.8026H329.5" stroke="var(--color-20)" strokeOpacity="0.3" />
        <rect x="-1" width="320" height="160" fill="url(#collab-gradient)" />
        <rect x="135.5" y="113.5" width="69" height="26" rx="13" fill="var(--color-10)" stroke="var(--color-40)" />
        <path d={productPath} fill="var(--color-80)" />
        <rect x="224.5" y="76.5" width="62" height="26" rx="13" fill="var(--color-10)" stroke="var(--color-40)" />
        <path d={productPath2} fill="var(--color-80)" />
        <rect x="47.5" y="76.5" width="72" height="26" rx="13" fill="var(--color-10)" stroke="var(--color-40)" />
        <path d={engineersPath} fill="var(--color-80)" />
        <circle cx="169" cy="68" r="5.75" fill="var(--color-10)" stroke="var(--color-40)" strokeWidth="1.5" />
        <path
          d="M169.504 67.4951H171V68.4951H169.504V70H168.504V68.4951H167V67.4951H168.504V66H169.504V67.4951Z"
          fill="var(--color-80)"
          fillOpacity="0.5"
        />
        <path d="M169 75.5C169 90.5352 169 95.9648 169 111" stroke="var(--color-40)" strokeDasharray="4 4" />
        <path d="M161.5 68H151.621H99C96.2386 68 94 70.2386 94 73" stroke="var(--color-40)" strokeDasharray="4 4" />
        <path d="M177.5 68H186.379L239.5 68C242.261 68 244.5 70.2386 244.5 73" stroke="var(--color-40)" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}

function GraphicFocusAreas() {
  return (
    <svg
      className={svgBaseClass}
      width="320"
      height="160"
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id="focus-clip">
          <rect width="320" height="160" fill="white" />
        </clipPath>
        <linearGradient
          id="focus-gradient"
          x1="160.331"
          y1="0.341003"
          x2="159.546"
          y2="104.338"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-0)" />
          <stop offset="0.4597" stopColor="var(--color-0)" stopOpacity="0.3" />
          <stop offset="0.995192" stopColor="var(--color-0)" stopOpacity="0" />
        </linearGradient>
        <filter
          id="focus-drop-shadow"
          x="172.197"
          y="103.001"
          width="94"
          height="106"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
      <g clipPath="url(#focus-clip)">
        {/* Flow lines (background) */}
        <path d="M222.199 141.001C222.199 125.15 222.199 121.871 222.199 112.717C222.199 104.445 218.234 96.6663 211.536 91.8123C198.698 82.5084 190.848 67.82 190.247 51.9763L188.199 -1.99878" stroke="var(--color-40)" strokeWidth="1.5" />
        <path d="M272.199 141.001L272.199 126.082C272.199 110.059 262.424 95.6566 247.533 89.7406C217.75 77.9087 198.199 49.1047 198.199 17.0578L198.199 -1.9986" stroke="var(--color-40)" strokeDasharray="4 4" />
        <path d="M94.1992 141L94.1992 126.081C94.1992 110.057 103.975 95.6554 118.866 89.7395C148.649 77.9075 168.199 49.1035 168.199 17.0567L168.199 -1.99977" stroke="var(--color-40)" strokeDasharray="4 4" />
        <path d="M147.199 141.001C147.199 124.692 147.199 121.691 147.199 111.908C147.199 104.092 150.746 96.694 156.842 91.8028C168.501 82.4482 175.525 68.4928 176.091 53.5557L178.199 -1.99878" stroke="var(--color-40)" strokeDasharray="4 4" />

        {/* Focus gradient overlay between lines and cards */}
        <path d="M0 0.341003H320V160.341H0V0.341003Z" fill="url(#focus-gradient)" />
        <rect x="232.697" y="115.841" width="79" height="80" rx="7.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <rect x="54.6953" y="115.841" width="79" height="88" rx="7.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <rect x="112.697" y="115.841" width="79" height="93" rx="7.5" fill="var(--color-0)" stroke="var(--color-10)" />
        <g filter="url(#focus-drop-shadow)">
          <rect x="176.197" y="103.001" width="86" height="98" rx="10" fill="var(--color-0)" />
          <rect x="176.697" y="103.501" width="85" height="97" rx="9.5" stroke="var(--color-10)" />
        </g>
        <rect x="179.697" y="106.5" width="79" height="90" rx="7.5" fill="var(--color-10)" stroke="var(--color-40)" />
        <circle cx="188" cy="114.341" r="2" fill="var(--color-graphic-muted)" />
      </g>
    </svg>
  );
}

export { GraphicOwnership, GraphicDomains, GraphicCollaboration, GraphicFocusAreas };
