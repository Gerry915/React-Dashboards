import "../../../style/DashboardOne/Detail.scss";

const CreditCard = () => {
  return (
    <div className="credit-card-wrapper">
      <div className="foreground">
        <div className="chip-wrapper">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.4629 3.1582H5.53711C2.48391 3.1582 0 5.64211 0 8.69531V33.3047C0 36.3579 2.48391 38.8418 5.53711 38.8418H36.4629C39.5161 38.8418 42 36.3579 42 33.3047V8.69531C42 5.64211 39.5161 3.1582 36.4629 3.1582ZM40.7695 33.3047C40.7695 35.6794 38.8376 37.6113 36.4629 37.6113H5.53711C3.16239 37.6113 1.23047 35.6794 1.23047 33.3047V8.69531C1.23047 6.32059 3.16239 4.38867 5.53711 4.38867H36.4629C38.8376 4.38867 40.7695 6.32059 40.7695 8.69531V33.3047Z"
              fill="#E1E1E1"
            />
            <path
              d="M36.4629 5.61914H5.53711C3.84087 5.61914 2.46094 6.99907 2.46094 8.69531V12.3867C2.46094 12.7265 2.7364 13.002 3.07617 13.002C3.41595 13.002 3.69141 12.7265 3.69141 12.3867V8.69531C3.69141 7.67755 4.51935 6.84961 5.53711 6.84961H14.8477V9.46796C14.8477 10.4582 15.3447 11.4047 16.1772 11.9999C16.5146 12.241 16.7072 12.6326 16.6925 13.0473C16.6692 13.7008 16.0978 14.2323 15.4186 14.2323H3.07617C2.7364 14.2323 2.46094 14.5078 2.46094 14.8476V33.3046C2.46094 35.0008 3.84087 36.3808 5.53711 36.3808H36.4629C38.1591 36.3808 39.5391 35.0008 39.5391 33.3046V8.69531C39.5391 6.99907 38.1591 5.61914 36.4629 5.61914ZM38.3086 8.69531V14.2324H26.5814C25.9022 14.2324 25.3307 13.7009 25.3075 13.0474C25.2927 12.6326 25.4854 12.241 25.8228 11.9999C26.6553 11.4048 27.1523 10.4582 27.1523 9.46796V6.84961H36.4629C37.4807 6.84961 38.3086 7.67755 38.3086 8.69531ZM27.1966 21.6152H38.3086V26.5371H27.1966V21.6152ZM27.1966 20.3848V15.4629H38.3086V20.3848H27.1966ZM17.9222 13.091C17.9516 12.2628 17.5667 11.4807 16.8928 10.9988C16.3826 10.6342 16.0781 10.062 16.0781 9.46796V6.84961H25.9219V9.46796C25.9219 10.062 25.6174 10.6342 25.1072 10.9988C24.4332 11.4807 24.0484 12.2628 24.0778 13.091C24.1169 14.1915 24.9184 15.119 25.9662 15.3856V26.6142C24.9184 26.8808 24.1169 27.8084 24.0778 28.9089C24.0484 29.7371 24.4333 30.5192 25.1072 31.0011C25.6174 31.3657 25.9219 31.938 25.9219 32.532V35.1504H16.0781V32.532C16.0781 31.938 16.3826 31.3658 16.8928 31.0012C17.5668 30.5193 17.9516 29.7372 17.9222 28.909C17.8831 27.8086 17.0816 26.881 16.0338 26.6144V15.3857C17.0817 15.1191 17.8831 14.1915 17.9222 13.091V13.091ZM14.8034 26.5371H3.69141V21.6152H14.8034V26.5371ZM14.8034 15.4629V20.3848H3.69141V15.4629H14.8034ZM3.69141 33.3047V27.7676H15.4186C16.0978 27.7676 16.6693 28.2991 16.6925 28.9526C16.7073 29.3674 16.5146 29.759 16.1772 30.0001C15.3447 30.5952 14.8477 31.5418 14.8477 32.532V35.1504H5.53711C4.51935 35.1504 3.69141 34.3224 3.69141 33.3047ZM36.4629 35.1504H27.1523V32.532C27.1523 31.5418 26.6553 30.5953 25.8228 30.0001C25.4854 29.759 25.2928 29.3674 25.3075 28.9527C25.3307 28.2992 25.9022 27.7677 26.5814 27.7677H38.3086V33.3047C38.3086 34.3224 37.4807 35.1504 36.4629 35.1504V35.1504Z"
              fill="#E1E1E1"
            />
          </svg>
        </div>
        <div className="card-number-row">
          <p className="card-number-row__number">4622 3908 2238 5821</p>
        </div>
        <div className="card-holder-row">
          <p>Card Holder</p>
          <div className="master-card">
            <svg
              width="64"
              height="64"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 21C42 14.158 36.4452 8.53546 29.5355 8.53546C26.5548 8.53546 23.8452 9.55159 21.6774 11.3129C23.3032 12.8709 24.5903 14.8355 25.2 17.0709H24.1839C23.5065 15.1064 22.4226 13.3451 20.9323 11.9226C19.4419 13.3451 18.3581 15.1064 17.6806 17.0709H16.6645C17.3419 14.8355 18.5613 12.8709 20.1871 11.3129C18.0194 9.55159 15.3774 8.53546 12.3968 8.53546C5.55484 8.53546 0 14.158 0 21C0 27.8419 5.55484 33.4645 12.4645 33.4645C15.4452 33.4645 18.1548 32.3806 20.2548 30.6871C18.629 29.129 17.4097 27.1645 16.7323 24.929H17.7484C18.4258 26.8935 19.5097 28.6548 21 30.0774C22.4903 28.6548 23.6419 26.8935 24.2516 24.929H25.2677C24.5903 27.1645 23.371 29.129 21.7452 30.6871C23.9129 32.4484 26.6226 33.4645 29.6032 33.4645C36.4452 33.4645 42 27.8419 42 21Z"
                fill="#E52836"
              />
              <path
                d="M32.8548 23.9129L33.7355 19.3065H34.8194L34.9548 19.7807C35.1581 19.5774 35.4968 19.3065 36.1742 19.3065L35.8355 20.5258C35.4968 20.5258 34.9548 20.4581 34.5484 21.8129L34.1419 23.9129H32.8548Z"
                fill="white"
              />
              <path
                d="M16.2581 18.1548H17.4774L17.2064 19.3742H17.8839L17.6806 20.3226H17.071L16.7323 22.1516C16.6645 22.4903 16.7323 22.829 17.4097 22.6936L17.2742 23.7097C17.0032 23.9129 16.6645 23.9129 16.3258 23.9129C16.0548 23.9129 15.1065 23.7097 15.3097 22.4903L16.2581 18.1548Z"
                fill="white"
              />
              <path
                d="M21.6774 21.8807C21.8129 21.1355 22.1516 19.3065 19.9839 19.3065C17.9516 19.3065 17.6807 21.3387 17.6807 21.6097C17.6129 21.8807 17.6129 23.9129 19.7807 23.9129C20.3226 23.9129 21.0678 23.8452 21.4065 23.7097L21.6097 22.7613C21.4065 22.829 20.7291 22.8968 20.1871 22.8968C19.7129 22.8968 18.9 22.8968 19.0355 21.8807H21.6774"
                fill="white"
              />
              <path
                d="M15.0387 20.3903L15.3097 19.4419C14.7 19.2387 14.2258 19.2387 14.0903 19.2387C13.8871 19.2387 12.3968 19.2387 12.1936 20.3226C11.9903 21.2032 12.329 21.5419 12.6 21.6774C13.0742 21.8806 13.3452 22.0839 13.6161 22.2193C13.9549 22.3548 13.8871 22.8968 13.4807 22.8968C13.2774 22.8968 12.4645 22.9645 11.8549 22.7613L11.6516 23.7097C12.2613 23.8452 12.6678 23.8452 13.1419 23.8452C13.4807 23.8452 14.971 23.9129 15.1742 22.5581C15.3097 21.8806 14.971 21.6097 14.7678 21.4064C14.4968 21.271 14.1581 21 13.8871 20.9323C13.6161 20.7968 13.4129 20.3903 13.8871 20.2548C14.0903 20.3226 14.7 20.3226 15.0387 20.3903Z"
                fill="white"
              />
              <path
                d="M6.90968 23.9129L7.99355 18.3581H5.89355L4.40323 21.7452L4.13226 18.3581H2.16775L1.08388 23.9129H2.30323L3.11614 19.9162L3.45485 23.9129H4.60646L6.36775 19.9839L5.62259 23.9129H6.90968Z"
                fill="white"
              />
              <path
                d="M8.33226 19.442L8.12904 20.4581C8.46775 20.4581 9.28065 20.3226 9.68711 20.3226C10.0936 20.3226 10.6355 20.2549 10.4323 20.9323C10.0936 20.9323 7.85807 20.5936 7.51936 22.5581C7.38388 23.5065 8.19678 23.9807 8.80646 23.9807C9.41614 23.9807 9.61936 23.8452 9.82259 23.7097L9.95807 23.9807H11.1097L11.5839 21.4742C11.7194 20.8645 11.9226 19.3742 9.82259 19.3742C9.55162 19.3065 9.14517 19.3065 8.33226 19.442Z"
                fill="white"
              />
              <path
                d="M28.5871 19.6452C28.2484 19.442 28.0452 19.442 27.6387 19.442C27.2323 19.442 26.2839 19.8484 26.1484 20.9323C25.9452 22.2871 26.8258 22.8968 28.1129 22.4903L28.4516 23.642C28.0452 23.8452 27.6387 23.9129 26.9613 23.9129C25.6742 23.9129 24.2516 22.7613 24.8613 20.3903C25.3355 18.6968 26.8258 18.0194 27.7065 18.0871C28.7226 18.1549 29.1291 18.4936 29.4 18.8323L28.5871 19.6452Z"
                fill="white"
              />
              <path
                d="M39.2226 19.8484C38.9516 19.6452 38.8161 19.3065 38.2742 19.3065C37.5968 19.3065 36.5129 19.171 35.9032 21.271C35.4968 22.6935 36.3097 23.9129 37.1903 23.9129C37.5968 23.9129 38.0032 23.7097 38.2742 23.5742L38.4097 23.9129H39.7645L40.8484 18.0871H39.5613L39.2226 19.8484Z"
                fill="white"
              />
              <path
                d="M29.4677 19.442L29.2645 20.4581C29.6032 20.4581 30.4161 20.3226 30.8226 20.3226C31.229 20.3226 31.7032 20.2549 31.5678 20.9323C31.229 20.9323 28.9936 20.5936 28.6548 22.5581C28.5194 23.5065 29.3323 23.9807 29.9419 23.9807C30.5516 23.9807 30.7549 23.8452 30.9581 23.7097L31.0936 23.9807H32.2452L32.7194 21.4742C32.8549 20.8645 33.0581 19.3742 30.9581 19.3742C30.7549 19.3065 30.2807 19.3065 29.4677 19.442Z"
                fill="white"
              />
              <path
                d="M19.0355 21H20.5936C20.6613 20.5258 20.5258 20.1871 20.0516 20.1871C19.5097 20.1871 19.171 20.458 19.0355 21Z"
                fill="#E52836"
              />
              <path
                d="M10.229 21.8806C10.0258 21.8806 9.55162 21.7451 9.14516 22.0161C8.73871 22.2871 8.60323 22.7613 9.07742 22.8967C9.48387 23.0322 10.0258 22.7613 10.1613 22.3548L10.229 21.8806Z"
                fill="#E52836"
              />
              <path
                d="M38.8161 21.7452C38.9516 21.3387 38.8839 20.7968 38.7484 20.5936C38.3419 20.0516 37.4613 20.4581 37.1903 21.4742C36.9871 22.1516 37.3935 22.6258 37.8 22.6258C38.2742 22.6258 38.5452 22.2871 38.8161 21.7452Z"
                fill="#E52836"
              />
              <path
                d="M31.4323 21.8806C31.229 21.8806 30.7548 21.7451 30.3484 22.0161C29.9419 22.2871 29.8064 22.7613 30.2806 22.8967C30.6871 23.0322 31.2968 22.7613 31.3645 22.3548L31.4323 21.8806Z"
                fill="#E52836"
              />
              <path
                d="M21.6774 23.9129L22.5581 19.3742H23.6419L23.7774 19.8484C23.9806 19.6452 24.3194 19.3742 24.9968 19.3742L24.6581 20.5936C24.3871 20.5936 23.7774 20.5258 23.371 21.8807L22.9645 23.9807H21.6774"
                fill="white"
              />
              <path
                d="M12.4645 8.53546C6.97741 8.53546 2.30322 12.1258 0.677414 17.0709H16.8C17.4774 14.8355 18.6968 12.8709 20.3226 11.3129C18.0871 9.61933 15.3774 8.53546 12.4645 8.53546Z"
                fill="#F7142F"
              />
              <path
                d="M21 11.9903C19.5097 13.4129 18.4258 15.1064 17.7484 17.1387H24.2516C23.5742 15.1742 22.4903 13.4129 21 11.9903Z"
                fill="#F7142F"
              />
              <path
                d="M29.5355 8.53546C26.5548 8.53546 23.8452 9.55159 21.6774 11.3129C23.3032 12.8709 24.5226 14.8355 25.2 17.0709H41.3226C39.7645 12.1258 35.0903 8.53546 29.5355 8.53546Z"
                fill="#F7142F"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className="holder-name">Gerry Gao</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
