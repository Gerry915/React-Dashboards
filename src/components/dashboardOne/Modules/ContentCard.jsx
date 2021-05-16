import "../../../style/DashboardOne/ContentCard.scss";

const ContentCard = (props) => {
  return (
    <div className="content-card">
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M12 5.33338C13.4728 5.33338 14.6667 4.13946 14.6667 2.66669C14.6667 1.19392 13.4728 0 12 0C10.5272 0 9.33331 1.19392 9.33331 2.66669C9.33331 4.13946 10.5272 5.33338 12 5.33338Z"
              fill="#B2D5FB"
            />
            <path
              d="M12 14.6667C13.4728 14.6667 14.6667 13.4728 14.6667 12C14.6667 10.5272 13.4728 9.33331 12 9.33331C10.5272 9.33331 9.33331 10.5272 9.33331 12C9.33331 13.4728 10.5272 14.6667 12 14.6667Z"
              fill="#B2D5FB"
            />
            <path
              d="M12 24C13.4728 24 14.6667 22.8061 14.6667 21.3333C14.6667 19.8605 13.4728 18.6666 12 18.6666C10.5272 18.6666 9.33331 19.8605 9.33331 21.3333C9.33331 22.8061 10.5272 24 12 24Z"
              fill="#B2D5FB"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="content-card__icn">{props.icon}</div>
      <h3 className="content-card__title">{props.title}</h3>
      <p className="content-card__amount">
        <span>$</span>
        {props.amount}
      </p>
    </div>
  );
};

export default ContentCard;
