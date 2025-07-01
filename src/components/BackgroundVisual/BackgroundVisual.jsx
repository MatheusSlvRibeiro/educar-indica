const BackgroundVisual = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 653 2156"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 -z-10 w-full h-full"
    >
      <rect width="653" height="2156" fill="#0040B2" />

      {/* Fundo abstrato fluido */}
      <path
        fill="#082D71"
        d="M818.495 2218.82c-181.676 206.12-382.546 359.62-526.321 167.14-143.775-192.49-113.05-515.62 68.626-721.74 181.677-206.11 445.507-217.16 589.282-24.67 143.778 192.48 50.088 373.16-131.587 579.27Z"
        opacity="0.3"
      />
      <path
        fill="#0D1626"
        d="M701.362 1704.98c0 254.97-167.714 461.67-374.6 461.67-206.886 0-374.6-206.7-374.6-461.67 0-254.98 167.714-461.67 374.6-461.67 206.886 0 374.6 206.69 374.6 461.67Z"
        opacity="0.5"
      />

      {/* Topo da página */}
      <circle cx="120" cy="100" r="180" fill="#90F" opacity="0.12" />
      <ellipse
        cx="540"
        cy="250"
        rx="120"
        ry="180"
        transform="rotate(-30 540 250)"
        fill="#9A1BEE"
        opacity="0.12"
      />
      <circle cx="200" cy="400" r="100" fill="#6FFF00" opacity="0.08" />

      {/* Meio da página */}
      <ellipse
        cx="100"
        cy="750"
        rx="180"
        ry="300"
        transform="rotate(35 100 750)"
        fill="#90F"
        opacity="0.1"
      />
      <ellipse
        cx="80"
        cy="950"
        rx="160"
        ry="260"
        transform="rotate(-30 80 950)"
        fill="#2D0440"
        opacity="0.12"
      />

      {/* Parte inferior */}
      <circle cx="580" cy="1550" r="150" fill="#6FFF00" opacity="0.08" />
      <ellipse
        cx="100"
        cy="1800"
        rx="100"
        ry="200"
        transform="rotate(25 100 1800)"
        fill="#9A1BEE"
        opacity="0.08"
      />
    </svg>
  );
};

export default BackgroundVisual;
