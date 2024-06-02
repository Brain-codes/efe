import { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {}

export const GraphicsPen: React.FC<Props> = (props) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.69159 15.8083C8.56659 15.8083 8.44992 15.775 8.34159 15.7C8.16659 15.5833 8.06659 15.3917 8.06659 15.1833C8.06659 15.0583 8.05826 14.925 8.04159 14.7917C7.96659 14.2 7.69992 13.6833 7.24992 13.2333C6.79992 12.7833 6.24159 12.5 5.64159 12.425C5.54159 12.4167 5.39992 12.4083 5.26659 12.4167C5.04992 12.4333 4.84992 12.3417 4.72492 12.1667C4.59992 12 4.56659 11.775 4.63326 11.575C4.75826 11.2333 4.94159 10.925 5.15826 10.675L6.44159 9.05834C8.64992 6.30001 13.1249 2.98334 16.3999 1.66667C17.0916 1.40001 17.8333 1.55834 18.3416 2.05834C18.8666 2.58334 19.0249 3.33334 18.7499 4.01667C17.4333 7.30001 14.1249 11.7667 11.3666 13.975L9.72492 15.2917C9.41659 15.5167 9.16659 15.6583 8.91659 15.7583C8.84992 15.7917 8.76659 15.8083 8.69159 15.8083ZM6.28326 11.2833C6.98326 11.4667 7.60826 11.8333 8.13326 12.3583C8.65826 12.875 9.00826 13.475 9.18326 14.1417L10.5916 13.0083C13.2083 10.9167 16.3499 6.67501 17.5916 3.55834C17.7166 3.25001 17.5416 3.03334 17.4583 2.95834C17.3999 2.90001 17.1833 2.71667 16.8499 2.84167C13.7499 4.09167 9.50826 7.23334 7.40826 9.85001L6.28326 11.2833Z"
        fill="currentcolor"
      />
      <path
        d="M3.39997 19.4583C2.77497 19.4583 2.17497 19.2083 1.72497 18.7583C1.2083 18.2417 0.958303 17.525 1.04164 16.7917L1.26664 14.7417C1.4833 12.7083 3.14997 11.2 5.21664 11.1583C5.37497 11.15 5.5833 11.1583 5.77497 11.175C6.6833 11.2917 7.49164 11.7 8.14164 12.35C8.7833 12.9917 9.16664 13.7583 9.2833 14.6167C9.3083 14.8 9.32497 15 9.32497 15.175C9.32497 16.275 8.89997 17.3 8.1333 18.075C7.49164 18.7083 6.66664 19.1 5.7333 19.2167L3.67497 19.4417C3.5833 19.45 3.49164 19.4583 3.39997 19.4583ZM5.37497 12.4167C5.34164 12.4167 5.29997 12.4167 5.26664 12.4167C4.0083 12.4417 2.67497 13.3 2.5083 14.8833L2.2833 16.9333C2.24164 17.2833 2.36664 17.625 2.6083 17.875C2.84997 18.1167 3.19164 18.2417 3.5333 18.2L5.5833 17.975C6.22497 17.8917 6.79997 17.625 7.2333 17.1917C7.76664 16.6583 8.06664 15.9417 8.06664 15.175C8.06664 15.05 8.0583 14.9167 8.04164 14.7833C7.96664 14.1917 7.69997 13.675 7.24997 13.225C6.79997 12.775 6.24164 12.4917 5.64164 12.4167C5.57497 12.4167 5.47497 12.4167 5.37497 12.4167Z"
        fill="currentcolor"
      />
      <path
        d="M11.8667 13.1833C11.525 13.1833 11.2417 12.9 11.2417 12.5583C11.2417 10.725 9.75005 9.24167 7.92505 9.24167C7.58338 9.24167 7.30005 8.95834 7.30005 8.61667C7.30005 8.275 7.57505 7.99167 7.91672 7.99167C10.4334 7.99167 12.4834 10.0417 12.4834 12.5583C12.4917 12.9083 12.2084 13.1833 11.8667 13.1833Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const DownArrow: React.FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48C3.26002 9.19 3.26002 8.71 3.55002 8.42C3.84002 8.13 4.32002 8.13 4.61002 8.42L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42C19.68 8.13 20.16 8.13 20.45 8.42C20.74 8.71 20.74 9.19 20.45 9.48L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const PhoneIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7501 20.8542H8.25008C4.20758 20.8542 2.97925 19.6258 2.97925 15.5833V6.41668C2.97925 2.37418 4.20758 1.14584 8.25008 1.14584H13.7501C17.7926 1.14584 19.0209 2.37418 19.0209 6.41668V15.5833C19.0209 19.6258 17.7926 20.8542 13.7501 20.8542ZM8.25008 2.52084C4.96841 2.52084 4.35425 3.14418 4.35425 6.41668V15.5833C4.35425 18.8558 4.96841 19.4792 8.25008 19.4792H13.7501C17.0317 19.4792 17.6459 18.8558 17.6459 15.5833V6.41668C17.6459 3.14418 17.0317 2.52084 13.7501 2.52084H8.25008Z"
        fill="currentcolor"
      />
      <path
        d="M12.8334 5.72916H9.16675C8.79091 5.72916 8.47925 5.41749 8.47925 5.04166C8.47925 4.66582 8.79091 4.35416 9.16675 4.35416H12.8334C13.2092 4.35416 13.5209 4.66582 13.5209 5.04166C13.5209 5.41749 13.2092 5.72916 12.8334 5.72916Z"
        fill="currentcolor"
      />
      <path
        d="M10.9999 18.205C9.83577 18.205 8.8916 17.2608 8.8916 16.0967C8.8916 14.9325 9.83577 13.9883 10.9999 13.9883C12.1641 13.9883 13.1083 14.9325 13.1083 16.0967C13.1083 17.2608 12.1641 18.205 10.9999 18.205ZM10.9999 15.3542C10.5966 15.3542 10.2666 15.6842 10.2666 16.0875C10.2666 16.4908 10.5966 16.8208 10.9999 16.8208C11.4033 16.8208 11.7333 16.4908 11.7333 16.0875C11.7333 15.6842 11.4033 15.3542 10.9999 15.3542Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const WebIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.9999 20.1667C16.0625 20.1667 20.1666 16.0626 20.1666 11C20.1666 5.9374 16.0625 1.83334 10.9999 1.83334C5.93731 1.83334 1.83325 5.9374 1.83325 11C1.83325 16.0626 5.93731 20.1667 10.9999 20.1667Z"
        stroke="#A4FCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33338 2.75H8.25005C6.46255 8.10333 6.46255 13.8967 8.25005 19.25H7.33338"
        stroke="#A4FCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 2.75C15.5375 8.10333 15.5375 13.8967 13.75 19.25"
        stroke="#A4FCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.75 14.6667V13.75C8.10333 15.5375 13.8967 15.5375 19.25 13.75V14.6667"
        stroke="#A4FCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.75 8.25002C8.10333 6.46252 13.8967 6.46252 19.25 8.25002"
        stroke="#A4FCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

// -------------------------------- LOGO

export const NextIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width="150"
      height="32"
      viewBox="0 0 150 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15_500)">
        <path
          d="M99.7154 0.78418H125.843V5.60661H115.478V30.9768H110.296V5.60661H99.7154V0.78418Z"
          fill="white"
        />
        <path
          d="M56.7457 0.78418V5.60661H35.8028V13.3644H52.645V18.1869H35.8028V26.1544H56.7457V30.9768H30.6205V5.60661H30.6184V0.78418H56.7457Z"
          fill="white"
        />
        <path
          d="M69.7919 0.796753H63.0099L87.3015 30.9894H94.1033L81.956 15.9034L94.0839 0.819788L87.3015 0.830269L78.5604 11.6864L69.7919 0.796753Z"
          fill="white"
        />
        <path
          d="M76.7513 22.3636L73.3549 18.1407L62.9905 31.0125H69.7919L76.7513 22.3636Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.8022 30.9768L6.47783 0.771606H0V30.9642H5.18227V7.22526L24.2919 30.9768H30.8022Z"
          fill="white"
        />
        <path
          d="M127.008 30.7924C126.628 30.7924 126.305 30.6609 126.035 30.398C125.765 30.135 125.631 29.8167 125.635 29.4395C125.631 29.0728 125.765 28.7579 126.035 28.4949C126.305 28.232 126.628 28.1005 127.008 28.1005C127.373 28.1005 127.692 28.232 127.963 28.4949C128.237 28.7579 128.373 29.0728 128.377 29.4395C128.373 29.6886 128.31 29.917 128.184 30.1211C128.054 30.3288 127.889 30.4914 127.682 30.609C127.478 30.7301 127.253 30.7924 127.008 30.7924Z"
          fill="white"
        />
        <path
          d="M135.853 18.0731H138.149V26.9206C138.146 27.7337 137.97 28.4292 137.626 29.0139C137.279 29.5987 136.797 30.045 136.179 30.3599C135.565 30.6713 134.845 30.8305 134.027 30.8305C133.279 30.8305 132.608 30.6955 132.011 30.4325C131.414 30.1696 130.94 29.7751 130.593 29.2561C130.241 28.7371 130.069 28.0901 130.069 27.315H132.37C132.373 27.6541 132.45 27.9482 132.598 28.1939C132.745 28.4395 132.949 28.6263 133.209 28.7578C133.472 28.8893 133.774 28.9551 134.114 28.9551C134.483 28.9551 134.799 28.8789 135.056 28.7232C135.312 28.571 135.509 28.3426 135.646 28.0381C135.779 27.7372 135.849 27.3635 135.853 26.9206V18.0731Z"
          fill="white"
        />
        <path
          d="M147.598 21.5332C147.542 20.9969 147.296 20.5782 146.868 20.2806C146.436 19.9796 145.878 19.8308 145.193 19.8308C144.712 19.8308 144.298 19.9035 143.954 20.0454C143.609 20.1907 143.343 20.3844 143.16 20.6301C142.977 20.8758 142.886 21.1561 142.879 21.4709C142.879 21.7339 142.942 21.9622 143.065 22.1526C143.188 22.3463 143.353 22.5089 143.567 22.6404C143.778 22.7754 144.013 22.8861 144.27 22.976C144.529 23.066 144.789 23.1421 145.049 23.2044L146.246 23.4985C146.727 23.6092 147.195 23.7581 147.64 23.9483C148.086 24.1352 148.49 24.3739 148.845 24.6611C149.199 24.9483 149.48 25.2943 149.687 25.6991C149.895 26.104 150 26.578 150 27.1247C150 27.8617 149.81 28.5087 149.427 29.0692C149.045 29.6263 148.494 30.0623 147.77 30.3772C147.05 30.6886 146.18 30.8477 145.154 30.8477C144.164 30.8477 143.3 30.6955 142.573 30.391C141.843 30.09 141.274 29.6471 140.863 29.0658C140.453 28.4845 140.231 27.7752 140.2 26.9413H142.475C142.507 27.3772 142.647 27.7406 142.886 28.0347C143.128 28.3253 143.444 28.5399 143.831 28.6852C144.22 28.827 144.656 28.8997 145.137 28.8997C145.639 28.8997 146.081 28.8236 146.464 28.6748C146.843 28.526 147.142 28.3184 147.356 28.0486C147.574 27.7821 147.683 27.4672 147.686 27.1074C147.683 26.7787 147.584 26.5053 147.394 26.2908C147.201 26.0763 146.935 25.8964 146.594 25.751C146.25 25.6057 145.849 25.4742 145.393 25.36L143.939 24.9933C142.889 24.7269 142.057 24.322 141.45 23.7788C140.839 23.2356 140.537 22.5159 140.537 21.6128C140.537 20.8723 140.74 20.2219 141.152 19.6648C141.558 19.1077 142.117 18.6752 142.823 18.3672C143.532 18.0558 144.333 17.9036 145.224 17.9036C146.13 17.9036 146.924 18.0558 147.609 18.3672C148.293 18.6752 148.831 19.1042 149.22 19.6509C149.61 20.1976 149.814 20.8239 149.824 21.5332H147.598Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_500">
          <rect
            width="150"
            height="30.4569"
            fill="white"
            transform="translate(0 0.771606)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Ps: React.FC<Props> = (props) => {
  return (
    <svg
      width="60"
      height="58"
      viewBox="0 0 60 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15_510)">
        <path
          d="M49.375 58H10.625C4.75 58 0 53.2906 0 47.4658V10.5342C0 4.7094 4.75 0 10.625 0H49.375C55.25 0 60 4.7094 60 10.5342V47.4658C60 53.2906 55.25 58 49.375 58Z"
          fill="#26C9FF"
        />
        <path
          d="M48.425 55.5214H11.575C6.575 55.5214 2.5 51.4812 2.5 46.5239V11.4761C2.5 6.51881 6.575 2.47864 11.575 2.47864H48.4C53.425 2.47864 57.475 6.51881 57.475 11.4761V46.4991C57.5 51.4812 53.425 55.5214 48.425 55.5214Z"
          fill="#061E26"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.75 14.5248C14.75 14.376 14.8 14.2521 15 14.2521C16.575 14.1777 18.825 14.1282 21.25 14.1282C28 14.1282 30.95 17.7966 30.95 22.506C30.95 28.653 26.4 31.2803 20.9 31.2803C19.975 31.2803 19.65 31.2307 19 31.2307V40.6495C19 40.8478 18.925 40.9222 18.725 40.9222H15.025C14.825 40.9222 14.75 40.8478 14.75 40.6495V14.5248ZM19 27.3641C19.55 27.4136 20 27.4136 20.975 27.4136C23.825 27.4136 26.55 26.4222 26.55 22.5803C26.55 19.5068 24.6 17.9453 21.325 17.9453C20.35 17.9453 19.425 17.9948 19 18.0196V27.3641ZM40.8 24.4889C38.875 24.4889 38.225 25.4555 38.225 26.2487C38.225 27.1162 38.675 27.7359 41.25 29.0495C45.075 30.8837 46.275 32.6436 46.275 35.2461C46.275 39.1128 43.3 41.1948 39.275 41.1948C37.15 41.1948 35.25 40.7487 34.2 40.1538C34.05 40.0795 34 39.9555 34 39.7572V36.188C34 35.9401 34.125 35.8658 34.275 35.9897C35.8 36.9812 37.675 37.4273 39.275 37.4273C41.2 37.4273 42 36.6342 42 35.5436C42 34.676 41.45 33.9077 38.975 32.6188C35.5 30.9829 34.075 29.2974 34.075 26.5213C34.075 23.3983 36.525 20.8205 40.8 20.8205C42.9 20.8205 44.45 21.1427 45.25 21.4897C45.45 21.6136 45.5 21.8119 45.5 21.9607V25.282C45.5 25.4803 45.375 25.6042 45.15 25.5299C44.05 24.8854 42.375 24.4889 40.8 24.4889Z"
          fill="#D9F5FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_510">
          <rect width="60" height="58" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Flutter: React.FC<Props> = (props) => {
  return <></>;
};
export const Kotlin: React.FC<Props> = (props) => {
  return (
    <svg
      width="156"
      height="34"
      viewBox="0 0 156 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15_552)">
        <path
          d="M147.445 9.37135C145.616 9.37135 144.006 9.81304 142.634 10.7145C141.533 11.4288 140.653 12.3815 139.959 13.572L139.925 9.93422H135.096V33.4703H140.126V20.3083C140.126 19.0326 140.363 17.9078 140.854 16.9214C141.329 15.9349 142.009 15.1711 142.89 14.6267C143.771 14.0824 144.785 13.8098 145.97 13.8098C147.02 13.8098 147.937 14.0315 148.682 14.4737C149.444 14.9159 150.002 15.5603 150.391 16.3768C150.781 17.2102 150.967 18.1989 150.967 19.3384V33.4702H155.997V18.6223C156.031 16.8024 155.659 15.2043 154.965 13.8097C154.293 12.4587 153.253 11.3268 151.966 10.5452C150.679 9.76284 149.173 9.37135 147.445 9.37135Z"
          fill="black"
        />
        <path
          d="M124.341 0.052002V5.23792H129.424V0.052002H124.341ZM124.341 9.93417V33.4702H129.372V9.93417H124.341Z"
          fill="black"
        />
        <path d="M113.637 0V33.4705H118.667V0H113.637Z" fill="black" />
        <path
          d="M99.308 4.04773V8.04345C99.308 8.67275 99.1559 9.1508 98.851 9.45695C98.5461 9.7631 98.0717 9.93423 97.4281 9.93423H95.0059V14.1685H99.2227V26.8379C99.2227 28.1475 99.4929 29.3223 100.018 30.3258C100.543 31.3293 101.306 32.1098 102.288 32.654C103.27 33.1983 104.442 33.4893 105.78 33.4893H109.555V29.0836H106.709C105.981 29.0836 105.389 28.829 104.914 28.3187C104.457 27.8085 104.238 27.1284 104.238 26.2781V14.1839H109.692V9.93428H104.238V4.04784L99.308 4.04773Z"
          fill="black"
        />
        <path
          d="M81.8938 9.37134C79.5563 9.37134 77.4726 9.89861 75.6263 10.9531C73.8111 11.9801 72.3162 13.4939 71.3089 15.3251C70.2756 17.196 69.7671 19.3218 69.7671 21.6859C69.7671 24.0671 70.2756 26.1757 71.3089 28.0467C72.2938 29.8833 73.7799 31.4 75.5928 32.4187C77.439 33.4732 79.5227 34.0005 81.8602 34.0005C84.1637 34.0005 86.2313 33.4732 88.0606 32.4187C89.8566 31.389 91.3291 29.8743 92.311 28.0467C93.3272 26.1758 93.8344 24.05 93.8344 21.6859C93.8344 19.3047 93.3272 17.1961 92.311 15.3251C91.2947 13.4543 89.8899 12.0075 88.0606 10.9531C86.2482 9.89864 84.1973 9.37134 81.8938 9.37134ZM81.8603 13.9117C83.1645 13.9117 84.3339 14.2366 85.3673 14.8999C86.3836 15.5633 87.1788 16.4816 87.7377 17.6383C88.2967 18.8118 88.5695 20.1535 88.5695 21.7013C88.5864 23.2321 88.3136 24.5755 87.7377 25.7491C87.1788 26.9226 86.3835 27.8411 85.3673 28.4874C84.351 29.1507 83.1663 29.4756 81.8451 29.4756C80.507 29.4756 79.3212 29.1507 78.2712 28.4874C77.2379 27.8241 76.4247 26.9058 75.849 25.7491C75.2731 24.5755 74.9836 23.2321 74.9836 21.7013C74.9836 20.1706 75.2731 18.8119 75.849 17.6383C76.4248 16.4647 77.238 15.5463 78.2712 14.8999C79.3044 14.2366 80.5052 13.9117 81.8603 13.9117Z"
          fill="black"
        />
        <path
          d="M64.3469 1.2421L50.4927 16.0899V1.29113H45.377V33.4709H50.4927V17.8766L64.3987 33.4709H70.9861L56.1659 16.821L70.7148 1.24194L64.3469 1.2421Z"
          fill="black"
        />
        <path
          d="M32.0642 33.4721H0V1.29236H32.0642L15.7014 17.1434L32.0642 33.4721Z"
          fill="url(#paint0_radial_15_552)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_15_552"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30.9941 2.60991) scale(36.7142 36.8662)"
        >
          <stop offset="0.003" stop-color="#E44857" />
          <stop offset="0.469" stop-color="#C711E1" />
          <stop offset="1" stop-color="#7F52FF" />
        </radialGradient>
        <clipPath id="clip0_15_552">
          <rect width="156" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const TypS: React.FC<Props> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15_561)">
        <path
          d="M1.875 0H48.125C49.1606 0 50 0.839462 50 1.875V48.125C50 49.1606 49.1606 50 48.125 50H1.875C0.839462 50 0 49.1606 0 48.125V1.875C0 0.839462 0.839462 0 1.875 0Z"
          fill="white"
        />
        <path
          d="M1.875 0H48.125C49.1606 0 50 0.839462 50 1.875V48.125C50 49.1606 49.1606 50 48.125 50H1.875C0.839462 50 0 49.1606 0 48.125V1.875C0 0.839462 0.839462 0 1.875 0ZM27.7942 26.6V22.4992H9.99962V26.6H16.3527V44.8588H21.41V26.6H27.7942ZM29.8106 44.3767C30.6262 44.7925 31.5908 45.1044 32.7044 45.3123C33.8179 45.5202 34.9915 45.6242 36.2254 45.6242C37.4279 45.6242 38.5702 45.5098 39.6523 45.2812C40.7346 45.0525 41.6835 44.6756 42.499 44.1506C43.3146 43.6256 43.9602 42.9396 44.436 42.0923C44.9117 41.245 45.1496 40.1977 45.1496 38.9502C45.1496 38.0458 45.0137 37.2533 44.7419 36.5723C44.47 35.8913 44.0779 35.2858 43.5656 34.7556C43.0533 34.2254 42.4388 33.7498 41.7227 33.3288C41.0063 32.9079 40.1987 32.5102 39.2994 32.136C38.6408 31.8656 38.05 31.6031 37.5271 31.3485C37.0044 31.0938 36.56 30.8338 36.194 30.5688C35.8281 30.3037 35.5458 30.0231 35.3471 29.7267C35.1485 29.4306 35.049 29.0952 35.049 28.721C35.049 28.3779 35.1381 28.0687 35.3158 27.7933C35.4935 27.5177 35.7444 27.2812 36.0687 27.0837C36.3927 26.8862 36.79 26.7329 37.2606 26.6237C37.7312 26.5146 38.2538 26.46 38.829 26.46C39.2471 26.46 39.689 26.4912 40.1542 26.5535C40.6196 26.616 41.0875 26.7121 41.5579 26.8419C42.0285 26.9719 42.486 27.1356 42.9304 27.3333C43.3748 27.5308 43.7852 27.7594 44.1615 28.0192V23.3569C43.3983 23.0658 42.5644 22.85 41.66 22.7098C40.7554 22.5694 39.7177 22.4992 38.5467 22.4992C37.3546 22.4992 36.2254 22.6265 35.1588 22.8813C34.0923 23.136 33.154 23.5337 32.3437 24.0742C31.5333 24.6148 30.8929 25.3035 30.4223 26.1402C29.9517 26.9771 29.7165 27.9777 29.7165 29.1419C29.7165 30.6287 30.1479 31.8969 31.0106 32.9467C31.8731 33.9967 33.1827 34.8856 34.9394 35.6133C35.6294 35.894 36.2725 36.1694 36.8685 36.4398C37.4644 36.71 37.9794 36.9908 38.4133 37.2817C38.8473 37.5729 39.1896 37.8898 39.4406 38.2329C39.6915 38.576 39.8171 38.9658 39.8171 39.4025C39.8171 39.7248 39.7387 40.0237 39.5817 40.299C39.425 40.5746 39.1871 40.8137 38.8683 41.0163C38.5492 41.219 38.1519 41.3777 37.6762 41.4919C37.2004 41.6063 36.6437 41.6635 36.0058 41.6635C34.9185 41.6635 33.8415 41.4738 32.775 41.0944C31.7085 40.715 30.7204 40.1458 29.8106 39.3869V44.3767Z"
          fill="#3178C6"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_561">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Express: React.FC<Props> = (props) => {
  return (
    <svg
      width="150"
      height="34"
      viewBox="0 0 150 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_17_702)">
        <path
          d="M0.757263 26.3481V13.3971H16.9261V12.6396H0.757263V0.824577H17.9484V0.0672607H0V27.1054H18.0998V26.3481H0.757263ZM32.6784 7.64088L25.9763 16.4643L19.4252 7.64111H18.4407L25.5217 17.0326L17.7589 27.1052H18.6677L25.9758 17.6001L33.3218 27.1052H34.2684L26.4681 17.0321L33.5868 7.64065H32.6782L32.6784 7.64088ZM36.5407 33.7703V21.6526H36.6163C37.0709 23.4197 37.967 24.8398 39.3049 25.9128C40.6429 26.9856 42.3467 27.5223 44.4167 27.5223C45.7546 27.5223 46.9412 27.2509 47.9762 26.7081C49.0112 26.1654 49.8757 25.4269 50.57 24.4928C51.2641 23.5586 51.7943 22.4731 52.1605 21.236C52.5264 19.9991 52.7095 18.6988 52.7095 17.3358C52.7095 15.8714 52.52 14.5206 52.1414 13.2837C51.7627 12.0466 51.2136 10.9736 50.4943 10.0649C49.7748 9.15597 48.9039 8.44888 47.8814 7.94431C46.8592 7.43928 45.7042 7.18676 44.4167 7.18676C43.4322 7.18676 42.5172 7.332 41.6715 7.62224C40.8258 7.91271 40.0749 8.32274 39.4186 8.85299C38.7584 9.38733 38.1837 10.0194 37.7145 10.7274C37.235 11.447 36.8688 12.2359 36.6163 13.0944H36.5407V7.64088H35.7834V33.7703H36.5407ZM44.4167 26.8024C42.044 26.8024 40.1379 25.9883 38.699 24.36C37.2602 22.7317 36.5407 20.39 36.5407 17.3353C36.5407 16.073 36.7175 14.8738 37.0709 13.7378C37.4243 12.6018 37.9354 11.6045 38.6043 10.7463C39.2733 9.88783 40.1002 9.2062 41.0845 8.70139C42.069 8.19637 43.1799 7.94385 44.4167 7.94385C45.679 7.94385 46.7835 8.19637 47.7301 8.70139C48.6766 9.2062 49.4594 9.89419 50.0778 10.7652C50.6962 11.6361 51.1632 12.6334 51.4789 13.7567C51.7943 14.8802 51.952 16.073 51.952 17.3353C51.952 18.4715 51.8071 19.6013 51.5166 20.7246C51.2264 21.8481 50.7782 22.8579 50.1723 23.7543C49.5666 24.6503 48.7905 25.3824 47.8437 25.9506C46.8969 26.5186 45.7546 26.8024 44.4167 26.8024ZM56.8747 27.1054V16.0857C56.8747 15.0254 57.0261 13.9901 57.3293 12.9805C57.632 11.9707 58.099 11.0806 58.7301 10.3108C59.3613 9.54076 60.1626 8.93482 61.1347 8.49297C62.1065 8.05113 63.2614 7.86816 64.5994 7.94385V7.18653C63.438 7.16153 62.4221 7.28745 61.5512 7.56519C60.6801 7.84294 59.9292 8.22159 59.2981 8.70139C58.667 9.18097 58.1622 9.74259 57.7836 10.3865C57.4052 11.0294 57.1244 11.7249 56.9504 12.4502H56.8747V7.64088H56.1175V27.1056L56.8747 27.1054ZM65.546 17.5246H81.8283C81.8789 16.1866 81.7464 14.8993 81.4308 13.6621C81.1153 12.425 80.6103 11.3268 79.9162 10.3676C79.2219 9.40825 78.3258 8.63821 77.2276 8.05749C76.1295 7.47678 74.8231 7.18653 73.3086 7.18653C72.2229 7.18653 71.1627 7.41382 70.1277 7.86839C69.0927 8.32274 68.1839 8.98527 67.4014 9.85623C66.6189 10.7272 65.9878 11.7938 65.5082 13.0564C65.0287 14.3185 64.7887 15.7575 64.7887 17.3733C64.7887 18.8122 64.9528 20.1566 65.281 21.4062C65.6091 22.6558 66.1139 23.7416 66.7955 24.663C67.4773 25.5844 68.3546 26.2976 69.4273 26.8024C70.5 27.3075 71.7938 27.5473 73.3086 27.522C75.5299 27.522 77.3981 26.897 78.9126 25.6476C80.4274 24.3978 81.3235 22.637 81.6012 20.3648H80.8439C80.5158 22.5108 79.6762 24.1202 78.3258 25.193C76.9751 26.266 75.2777 26.8024 73.2327 26.8024C71.8443 26.8024 70.6704 26.5626 69.7111 26.0831C68.7521 25.6035 67.9693 24.9469 67.3634 24.1139C66.7578 23.2806 66.3096 22.3024 66.0194 21.1789C65.7289 20.0557 65.5712 18.8374 65.546 17.5246ZM81.071 16.7673H65.5462C65.6217 15.4041 65.8741 14.1797 66.3032 13.0941C66.7325 12.0084 67.2941 11.0806 67.9884 10.3108C68.6825 9.54076 69.4905 8.95391 70.4118 8.54979C71.3332 8.14591 72.3241 7.94385 73.3843 7.94385C74.6465 7.94385 75.757 8.1775 76.7165 8.64457C77.6756 9.11164 78.4772 9.74918 79.121 10.557C79.7646 11.3647 80.2505 12.3052 80.5787 13.378C80.9069 14.451 81.071 15.5809 81.071 16.7673ZM97.5428 13.3971H98.3001C98.3001 11.2259 97.669 9.64804 96.4069 8.66344C95.1444 7.67884 93.4279 7.18653 91.257 7.18653C90.0452 7.18653 89.0229 7.33813 88.1898 7.64111C87.3568 7.94385 86.6752 8.33524 86.145 8.81481C85.615 9.29438 85.2364 9.82464 85.0091 10.4054C84.7819 10.9861 84.6682 11.5416 84.6682 12.0716C84.6682 13.1319 84.8575 13.9776 85.2364 14.6088C85.615 15.24 86.2082 15.7323 87.0159 16.0857C87.5714 16.338 88.2023 16.5653 88.9093 16.7675C89.6161 16.9694 90.4366 17.1839 91.3706 17.411C92.2036 17.6133 93.024 17.8151 93.832 18.0169C94.6397 18.219 95.3528 18.4904 95.9713 18.8311C96.5899 19.172 97.0946 19.6075 97.486 20.1377C97.8771 20.6678 98.0728 21.3621 98.0728 22.2204C98.0728 23.0536 97.8774 23.7604 97.486 24.3409C97.098 24.9186 96.5873 25.4036 95.9903 25.7612C95.3844 26.1272 94.709 26.3922 93.9645 26.5563C93.2197 26.7204 92.494 26.8024 91.7872 26.8024C89.49 26.8024 87.7291 26.2913 86.5048 25.2689C85.2805 24.2464 84.6684 22.637 84.6684 20.4405H83.911C83.911 22.8895 84.5737 24.6819 85.8989 25.8181C87.2243 26.954 89.187 27.522 91.7872 27.522C92.6202 27.522 93.4595 27.4272 94.3054 27.2379C95.1508 27.0486 95.9083 26.7395 96.5772 26.3101C97.2403 25.8869 97.7974 25.3169 98.2053 24.6441C98.6219 23.9623 98.8303 23.1293 98.8303 22.1447C98.8303 21.2105 98.6471 20.4532 98.2812 19.8725C97.9151 19.292 97.4355 18.8122 96.8421 18.4335C96.249 18.0549 95.5801 17.7583 94.8354 17.5437C94.0864 17.3279 93.3353 17.1195 92.5822 16.9187C91.6554 16.6755 90.7276 16.4357 89.7991 16.1993C89.0041 15.9973 88.2657 15.7575 87.5841 15.4797C86.9277 15.202 86.4039 14.8045 86.0125 14.2869C85.6212 13.7694 85.4257 13.031 85.4257 12.0716C85.4257 11.895 85.4762 11.5793 85.5771 11.1249C85.678 10.6704 85.918 10.2097 86.2966 9.74259C86.6752 9.27575 87.2557 8.85913 88.0384 8.49297C88.8209 8.12704 89.8938 7.94385 91.257 7.94385C92.1911 7.94385 93.0429 8.04499 93.8129 8.24682C94.5829 8.44888 95.2456 8.77072 95.8008 9.21256C96.3562 9.6544 96.7853 10.216 97.0883 10.8977C97.3912 11.5795 97.5428 12.4125 97.5428 13.3971ZM115.075 13.3971H115.832C115.832 11.2259 115.201 9.64804 113.939 8.66344C112.676 7.67884 110.96 7.18653 108.789 7.18653C107.577 7.18653 106.555 7.33813 105.722 7.64111C104.889 7.94385 104.207 8.33524 103.677 8.81481C103.147 9.29438 102.768 9.82464 102.541 10.4054C102.314 10.9861 102.2 11.5416 102.2 12.0716C102.2 13.1319 102.39 13.9776 102.768 14.6088C103.147 15.24 103.74 15.7323 104.548 16.0857C105.103 16.338 105.734 16.5653 106.441 16.7675C107.148 16.9694 107.968 17.1839 108.902 17.411C109.736 17.6133 110.556 17.8151 111.364 18.0169C112.172 18.219 112.885 18.4904 113.503 18.8311C114.122 19.172 114.627 19.6075 115.018 20.1377C115.409 20.6678 115.605 21.3621 115.605 22.2204C115.605 23.0536 115.409 23.7604 115.018 24.3409C114.63 24.9186 114.119 25.4036 113.522 25.7612C112.916 26.1272 112.241 26.3922 111.496 26.5563C110.752 26.7204 110.026 26.8024 109.319 26.8024C107.022 26.8024 105.261 26.2913 104.037 25.2689C102.812 24.2464 102.2 22.637 102.2 20.4405H101.443C101.443 22.8895 102.105 24.6819 103.431 25.8181C104.756 26.954 106.719 27.522 109.319 27.522C110.152 27.522 110.992 27.4272 111.837 27.2379C112.683 27.0486 113.44 26.7395 114.109 26.3101C114.772 25.8869 115.329 25.3169 115.737 24.6441C116.154 23.9623 116.362 23.1293 116.362 22.1447C116.362 21.2105 116.179 20.4532 115.813 19.8725C115.447 19.292 114.968 18.8122 114.374 18.4335C113.781 18.0549 113.112 17.7583 112.367 17.5437C111.618 17.3279 110.867 17.1195 110.114 16.9187C109.187 16.6755 108.26 16.4357 107.331 16.1993C106.536 15.9973 105.797 15.7575 105.116 15.4797C104.46 15.202 103.936 14.8045 103.545 14.2869C103.153 13.7694 102.958 13.031 102.958 12.0716C102.958 11.895 103.008 11.5793 103.109 11.1249C103.21 10.6704 103.45 10.2097 103.828 9.74259C104.207 9.27575 104.788 8.85913 105.57 8.49297C106.353 8.12704 107.426 7.94385 108.789 7.94385C109.723 7.94385 110.575 8.04499 111.345 8.24682C112.115 8.44888 112.777 8.77072 113.333 9.21256C113.888 9.6544 114.317 10.216 114.62 10.8977C114.923 11.5795 115.075 12.4125 115.075 13.3971H115.075Z"
          fill="white"
        />
      </g>
      <g clip-path="url(#clip1_17_702)">
        <path
          d="M121.346 0.0565186H150V28.711H121.346V0.0565186Z"
          fill="#F7DF1E"
        />
        <path
          d="M128.88 24.0023L131.073 22.6752C131.496 23.4253 131.881 24.0599 132.804 24.0599C133.688 24.0599 134.246 23.7138 134.246 22.3675V13.2118H136.939V22.4056C136.939 25.1946 135.304 26.4641 132.919 26.4641C130.765 26.4641 129.515 25.3485 128.88 24.0021M138.402 23.7137L140.594 22.4443C141.172 23.3869 141.922 24.0793 143.249 24.0793C144.365 24.0793 145.076 23.5214 145.076 22.752C145.076 21.8288 144.345 21.5017 143.114 20.9634L142.441 20.6746C140.498 19.8477 139.21 18.809 139.21 16.6163C139.21 14.5966 140.748 13.0577 143.153 13.0577C144.865 13.0577 146.096 13.6541 146.98 15.2121L144.884 16.5586C144.422 15.7316 143.922 15.4046 143.153 15.4046C142.364 15.4046 141.864 15.9047 141.864 16.5586C141.864 17.3664 142.364 17.6936 143.518 18.1937L144.191 18.4822C146.48 19.4632 147.769 20.4634 147.769 22.7136C147.769 25.1374 145.865 26.4645 143.306 26.4645C140.806 26.4645 139.19 25.2719 138.402 23.7138"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_17_702">
          <rect
            width="116.362"
            height="33.887"
            fill="white"
            transform="translate(0 0.0565186)"
          />
        </clipPath>
        <clipPath id="clip1_17_702">
          <rect
            width="28.6545"
            height="28.6545"
            fill="white"
            transform="translate(121.346 0.0565186)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};