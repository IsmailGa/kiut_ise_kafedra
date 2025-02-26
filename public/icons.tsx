type ArrowRightType = {
  color?: string;
};

type ArrowRightDiagonal = {
  style?: string;
};

export const ArrowRight = ({ color }: ArrowRightType) => {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM16.7071 8.20711C17.0976 7.81658 17.0976 7.18342 16.7071 6.79289L10.3431 0.428932C9.95262 0.0384078 9.31946 0.0384078 8.92893 0.428932C8.53841 0.819457 8.53841 1.45262 8.92893 1.84315L14.5858 7.5L8.92893 13.1569C8.53841 13.5474 8.53841 14.1805 8.92893 14.5711C9.31946 14.9616 9.95262 14.9616 10.3431 14.5711L16.7071 8.20711ZM1 8.5H16V6.5H1V8.5Z"
        fill={color}
      />
    </svg>
  );
};

export const ArrowLeft = ({ color }: ArrowRightType) => {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292893 6.79289ZM16 8.5C16.5523 8.5 17 8.05228 17 7.5C17 6.94772 16.5523 6.5 16 6.5V8.5ZM1 8.5H16V6.5H1V8.5Z"
        fill={color}
      />
    </svg>
  );
};

export const ArrowDiagonal = ({ style }: ArrowRightDiagonal) => {
  return (
    <svg
      className={style}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.585786 22.5858C-0.195262 23.3668 -0.195262 24.6332 0.585786 25.4142C1.36684 26.1953 2.63316 26.1953 3.41421 25.4142L0.585786 22.5858ZM25.2132 2.7868C25.2132 1.68223 24.3178 0.786796 23.2132 0.786796L5.2132 0.786796C4.10864 0.786795 3.2132 1.68223 3.2132 2.7868C3.2132 3.89137 4.10864 4.7868 5.2132 4.7868L21.2132 4.7868L21.2132 20.7868C21.2132 21.8914 22.1086 22.7868 23.2132 22.7868C24.3178 22.7868 25.2132 21.8914 25.2132 20.7868L25.2132 2.7868ZM3.41421 25.4142L24.6274 4.20101L21.799 1.37258L0.585786 22.5858L3.41421 25.4142Z" />
    </svg>
  );
};

export const SearchIcon = ({ style }: { style?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 16.5L15 15"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CalendarIcon = ({ style }: { style?: string }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2V4.25"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 2V4.25"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.625 7.31738H15.375"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.75 6.875V13.25C15.75 15.5 14.625 17 12 17H6C3.375 17 2.25 15.5 2.25 13.25V6.875C2.25 4.625 3.375 3.125 6 3.125H12C14.625 3.125 15.75 4.625 15.75 6.875Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.771 10.7754H11.7778"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.771 13.0254H11.7778"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99661 10.7754H9.00335"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99661 13.0254H9.00335"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.22073 10.7754H6.22747"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.22073 13.0254H6.22747"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ClockIcon = ({ style }: { style?: string }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 9.5C16.5 13.64 13.14 17 9 17C4.86 17 1.5 13.64 1.5 9.5C1.5 5.36 4.86 2 9 2C13.14 2 16.5 5.36 16.5 9.5Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7824 11.8848L9.45741 10.4973C9.05241 10.2573 8.72241 9.67982 8.72241 9.20732V6.13232"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
