import "../../style/dashbardOne.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="back-btn-wrapper">
        <Link to="/" className="back-btn">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0001 32C24.8224 32 31.9998 24.8223 31.9998 15.9999C31.9998 7.17766 24.8224 0 16.0001 0C7.17788 0 0.000366211 7.17766 0.000366211 15.9999C0.000366211 24.8223 7.17788 32 16.0001 32ZM16.0001 2.19027C23.6147 2.19027 29.8095 8.38523 29.8097 15.9999C29.8097 23.6146 23.6148 29.8096 16.0001 29.8097C8.3856 29.8096 2.19078 23.6146 2.19078 15.9998C2.19078 8.38538 8.3856 2.19027 16.0001 2.19027Z"
              fill="black"
            />
            <path
              d="M13.8514 22.8528C14.2791 23.2804 14.9725 23.2802 15.4001 22.8528C15.8279 22.425 15.8279 21.7317 15.3999 21.3039L11.1917 17.0958L23.3779 17.0946C23.9827 17.0944 24.4729 16.6043 24.4729 15.9992C24.4727 15.3944 23.9826 14.9043 23.3778 14.9043L11.1911 14.9055L15.4003 10.6965C15.828 10.2688 15.828 9.57525 15.4003 9.14771C15.1864 8.93394 14.9062 8.8269 14.6259 8.8269C14.3457 8.8269 14.0655 8.93394 13.8515 9.14756L7.77295 15.226C7.5675 15.4313 7.45215 15.7098 7.45215 16.0003C7.45229 16.2909 7.56765 16.5692 7.7731 16.775L13.8514 22.8528Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>

      <ul className="side-bar-list">
        <li className="side-bar-list-item side-bar-tab-active">
          <a href="http://123">
            <div className="notification">1</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M41.5528 17.0678L21.6441 2.49105C21.2602 2.21001 20.7387 2.21001 20.3549 2.49105L0.446097 17.0678C-0.040184 17.4239 -0.14584 18.1067 0.210257 18.593C0.566355 19.0792 1.24927 19.1847 1.73546 18.8288L20.9994 4.72403L40.2634 18.8287C40.4577 18.971 40.6834 19.0395 40.9072 19.0395C41.2432 19.0395 41.5748 18.8849 41.7885 18.5929C42.1447 18.1067 42.0391 17.4239 41.5528 17.0678Z"
                  fill="#14121F"
                />
                <path
                  d="M36.278 19.0758C35.6754 19.0758 35.1868 19.5644 35.1868 20.1671V37.5371H26.4568V28.0554C26.4568 25.0465 24.0089 22.5987 21.0001 22.5987C17.9914 22.5987 15.5434 25.0467 15.5434 28.0554V37.5372H6.81338V20.1671C6.81338 19.5645 6.32472 19.0759 5.72212 19.0759C5.11952 19.0759 4.63086 19.5645 4.63086 20.1671V38.6285C4.63086 39.2312 5.11952 39.7198 5.72212 39.7198H16.6347C17.2085 39.7198 17.6782 39.2764 17.7217 38.7135C17.7243 38.688 17.7259 38.6601 17.7259 38.6285V28.0555C17.7259 26.2501 19.1947 24.7813 21.0001 24.7813C22.8055 24.7813 24.2743 26.2502 24.2743 28.0555V38.6285C24.2743 38.6599 24.276 38.6873 24.2786 38.7125C24.3216 39.2758 24.7914 39.7198 25.3656 39.7198H36.2781C36.8808 39.7198 37.3694 39.2312 37.3694 38.6285V20.1671C37.3693 19.5644 36.8807 19.0758 36.278 19.0758Z"
                  fill="#14121F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="42" height="42" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li className="side-bar-list-item">
          <a href="https://">
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42 40.6H0V42H42V40.6Z" fill="#14121F" />
              <path
                d="M2.79998 39.2H9.79998C10.1866 39.2 10.5 38.8866 10.5 38.5V25.9C10.5 25.5134 10.1866 25.2 9.79998 25.2H2.79998C2.4134 25.2 2.09998 25.5134 2.09998 25.9V38.5C2.09998 38.8866 2.4134 39.2 2.79998 39.2ZM3.49998 26.6H9.09998V37.8H3.49998V26.6Z"
                fill="#14121F"
              />
              <path
                d="M22.4 39.2H29.4C29.7865 39.2 30.1 38.8866 30.1 38.5V17.5C30.1 17.1134 29.7865 16.8 29.4 16.8H22.4C22.0134 16.8 21.7 17.1134 21.7 17.5V38.5C21.7 38.8866 22.0134 39.2 22.4 39.2ZM23.1 18.2H28.7V37.8H23.1V18.2Z"
                fill="#14121F"
              />
              <path
                d="M12.6 39.2H19.6C19.9866 39.2 20.3 38.8866 20.3 38.5V9.10002C20.3 8.71345 19.9866 8.40002 19.6 8.40002H12.6C12.2134 8.40002 11.9 8.71345 11.9 9.10002V38.5C11.9 38.8866 12.2134 39.2 12.6 39.2ZM13.3 9.80002H18.9V37.8H13.3V9.80002Z"
                fill="#14121F"
              />
              <path
                d="M32.2 39.2H39.2C39.5866 39.2 39.9 38.8866 39.9 38.5V0.7C39.9 0.313425 39.5866 0 39.2 0H32.2C31.8134 0 31.5 0.313425 31.5 0.7V38.5C31.5 38.8866 31.8134 39.2 32.2 39.2ZM32.9 1.4H38.5V37.8H32.9V1.4Z"
                fill="#14121F"
              />
            </svg>
          </a>
        </li>
        <li className="side-bar-list-item">
          <a href="#2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M33.299 5.50296H29.4993V3.80312C29.4993 3.25315 28.8994 3.00319 28.3495 3.00319H25.3997C24.6998 1.00335 22.9499 0.00342028 20.9501 0.00342028C18.9722 -0.0709353 17.1733 1.14182 16.5004 3.00319H13.6006C13.0507 3.00319 12.5007 3.25315 12.5007 3.80312V5.50296H8.70092C6.4492 5.52698 4.60706 7.30328 4.50122 9.55261V38.2004C4.50122 40.4002 6.50107 42.0001 8.70092 42.0001H33.299C35.4989 42.0001 37.4987 40.4002 37.4987 38.2004V9.55271C37.3929 7.30328 35.5508 5.52698 33.299 5.50296ZM14.5005 5.00304H17.2503C17.7303 4.94448 18.1159 4.5793 18.2003 4.10312C18.4963 2.81372 19.6276 1.88815 20.9501 1.85331C22.2603 1.89303 23.3745 2.82147 23.6498 4.10312C23.7395 4.59576 24.1505 4.96563 24.6498 5.00304H27.4996V9.00274H14.5005V5.00304ZM35.4989 38.2005C35.4989 39.3004 34.399 40.0003 33.299 40.0003H8.70092C7.601 40.0003 6.50107 39.3004 6.50107 38.2005V9.55271C6.60308 8.4078 7.55162 7.52386 8.70092 7.5029H12.5006V10.0527C12.5534 10.6129 13.0386 11.032 13.6005 11.0027H28.3494C28.9216 11.034 29.422 10.6207 29.4992 10.0527V7.50281H33.2989C34.4482 7.52386 35.3968 8.40771 35.4988 9.55261V38.2005H35.4989Z"
                  fill="#14121F"
                />
                <path
                  d="M17.1502 22.3516C16.7752 21.9563 16.1526 21.934 15.7503 22.3016L12.5505 25.3513L11.2006 23.9514C10.8256 23.5561 10.203 23.5339 9.80071 23.9015C9.41343 24.3072 9.41343 24.9456 9.80071 25.3513L11.8505 27.4512C12.0279 27.6499 12.2842 27.7597 12.5504 27.7512C12.8142 27.7475 13.0658 27.6396 13.2504 27.4512L17.15 23.7515C17.5367 23.3969 17.5625 22.7959 17.2077 22.4094C17.1896 22.3892 17.1703 22.37 17.1502 22.3516Z"
                  fill="#14121F"
                />
                <path
                  d="M31.4993 24.5013H20.0002C19.4479 24.5013 19.0002 24.949 19.0002 25.5013C19.0002 26.0535 19.4479 26.5012 20.0002 26.5012H31.4993C32.0515 26.5012 32.4992 26.0535 32.4992 25.5013C32.4992 24.949 32.0515 24.5013 31.4993 24.5013Z"
                  fill="#14121F"
                />
                <path
                  d="M17.1502 14.3522C16.7752 13.9569 16.1526 13.9346 15.7503 14.3022L12.5505 17.352L11.2006 15.952C10.8256 15.5567 10.203 15.5344 9.80071 15.9021C9.41343 16.3078 9.41343 16.9462 9.80071 17.352L11.8505 19.4518C12.0279 19.6505 12.2842 19.7604 12.5504 19.7518C12.8142 19.7481 13.0658 19.6403 13.2504 19.4518L17.15 15.7521C17.5367 15.3975 17.5625 14.7965 17.2077 14.41C17.1896 14.3898 17.1703 14.3706 17.1502 14.3522Z"
                  fill="#14121F"
                />
                <path
                  d="M31.4993 16.502H20.0002C19.4479 16.502 19.0002 16.9496 19.0002 17.5019C19.0002 18.0541 19.4479 18.5018 20.0002 18.5018H31.4993C32.0515 18.5018 32.4992 18.0541 32.4992 17.5019C32.4992 16.9496 32.0515 16.502 31.4993 16.502Z"
                  fill="#14121F"
                />
                <path
                  d="M17.1502 30.3509C16.7752 29.9556 16.1526 29.9334 15.7503 30.3009L12.5505 33.3507L11.2006 31.9507C10.8256 31.5554 10.203 31.5332 9.80071 31.9008C9.41343 32.3065 9.41343 32.9449 9.80071 33.3507L11.8505 35.4505C12.0279 35.6492 12.2842 35.759 12.5504 35.7505C12.8142 35.7468 13.0658 35.6389 13.2504 35.4505L17.15 31.7508C17.5367 31.3962 17.5625 30.7952 17.2077 30.4087C17.1896 30.3886 17.1703 30.3694 17.1502 30.3509Z"
                  fill="#14121F"
                />
                <path
                  d="M31.4993 32.5007H20.0002C19.4479 32.5007 19.0002 32.9484 19.0002 33.5007C19.0002 34.0529 19.4479 34.5006 20.0002 34.5006H31.4993C32.0515 34.5006 32.4992 34.0529 32.4992 33.5007C32.4992 32.9484 32.0515 32.5007 31.4993 32.5007Z"
                  fill="#14121F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="42" height="42" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li className="side-bar-list-item">
          <a href="21">
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.3727 28.0148H30.1638V29.4178H34.3727V28.0148Z"
                fill="#14121F"
              />
              <path
                d="M28.7609 28.0148H24.5519V29.4178H28.7609V28.0148Z"
                fill="#14121F"
              />
              <path
                d="M23.149 28.0148H18.9401V29.4178H23.149V28.0148Z"
                fill="#14121F"
              />
              <path
                d="M41.3785 14.5484L27.4982 0.666043C27.104 0.268126 26.567 0.0445272 26.0068 0.0452287H26.0005C25.4441 0.0454918 24.9111 0.269178 24.5211 0.666043L9.79693 15.3881H2.10445C0.942181 15.3881 0 16.3303 0 17.4926V37.1341C0 38.2964 0.942181 39.2386 2.10445 39.2386H12.4976L14.5909 41.3339C14.985 41.7318 15.5221 41.9554 16.0822 41.9547H16.0878C16.6445 41.9546 17.1778 41.7309 17.568 41.3339L19.6654 39.2386H35.7757C36.938 39.2386 37.8802 38.2964 37.8802 37.1341V21.0238L41.3749 17.529C41.7738 17.1386 41.999 16.6042 42 16.0461C42.0021 15.4837 41.7781 14.9441 41.3785 14.5484ZM32.4549 7.60864L24.6754 15.3881H18.7184L29.4764 4.63013L32.4549 7.60864ZM25.5144 1.65514C25.7812 1.38182 26.2191 1.37656 26.4925 1.64347C26.4965 1.64733 26.5004 1.65119 26.5042 1.65514L28.4845 3.63823L16.7339 15.3881H11.7807L25.5144 1.65514ZM16.5747 40.3448C16.4464 40.4788 16.2691 40.5547 16.0836 40.5553C15.8956 40.5548 15.7157 40.4791 15.5842 40.3448L14.4821 39.2386H17.6816L16.5747 40.3448ZM36.4772 37.1341C36.4772 37.5215 36.1631 37.8356 35.7757 37.8356H2.10445C1.71706 37.8356 1.40297 37.5215 1.40297 37.1341V27.3133H36.4772V37.1341ZM36.4772 25.9104H1.40297V21.7015H36.4772V25.9104ZM36.4772 20.2985H1.40297V17.4926C1.40297 17.1052 1.71706 16.7911 2.10445 16.7911H35.7757C36.1631 16.7911 36.4772 17.1052 36.4772 17.4926V20.2985ZM40.3866 16.5336L37.8802 19.04V17.4926C37.8802 16.3303 36.938 15.3881 35.7757 15.3881H26.6564L33.444 8.60054L40.3838 15.5403C40.5185 15.6724 40.5944 15.8532 40.5942 16.0419C40.594 16.2271 40.5191 16.4044 40.3866 16.5336Z"
                fill="#14121F"
              />
              <path
                d="M6.72785 36.4516C6.83027 36.363 6.9262 36.2671 7.01476 36.1647C7.94239 37.2451 9.53625 37.4504 10.7074 36.6403C11.4632 36.1118 11.9169 35.2505 11.9251 34.3282C11.9251 32.7785 10.6689 31.5222 9.11921 31.5222C8.97997 31.5203 8.8409 31.5321 8.70393 31.5573L8.6857 31.5622C8.67868 31.5622 8.67167 31.5622 8.66535 31.5622C8.0227 31.669 7.43828 31.9988 7.01476 32.4938C6.00112 31.3216 4.22908 31.1932 3.05699 32.2069C1.88481 33.2205 1.75635 34.9926 2.77008 36.1647C3.78372 37.3368 5.55567 37.4653 6.72785 36.4516ZM8.94174 32.9399C9.00022 32.9288 9.05967 32.9239 9.11921 32.9252C9.89409 32.9252 10.5222 33.5533 10.5222 34.3282C10.5215 34.625 10.4248 34.9137 10.2465 35.151C10.2212 35.1854 10.2016 35.2212 10.1728 35.2569C10.1679 35.2626 10.1609 35.2661 10.1553 35.2717C9.89032 35.5643 9.51397 35.7312 9.11921 35.7311C8.34451 35.7179 7.72712 35.0792 7.74036 34.3045C7.75211 33.6166 8.26086 33.0387 8.94174 32.9399ZM4.91031 32.9252C5.68518 32.9252 6.31328 33.5533 6.31328 34.3282C6.31328 35.1031 5.68518 35.7311 4.91031 35.7311C4.13543 35.7311 3.50734 35.1031 3.50734 34.3282C3.50734 33.5533 4.13543 32.9252 4.91031 32.9252Z"
                fill="#14121F"
              />
            </svg>
          </a>
        </li>
        <li className="side-bar-list-item">
          <a href="12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.2635 4.05022C37.6839 3.3687 36.8388 2.97799 35.9447 2.97799H33.0102V2.06005C33.0102 0.924166 32.0859 0 30.9501 0H11.05C9.91399 0 8.98999 0.924166 8.98999 2.05997V2.9779H6.05515C5.16109 2.9779 4.31584 3.3687 3.73637 4.05014C3.16281 4.72452 2.91491 5.61029 3.05641 6.48024C3.82751 11.2217 6.8114 15.4104 11.0463 17.708C11.4332 18.6384 11.8714 19.5195 12.3594 20.3405C13.9182 22.9635 15.856 24.7762 17.989 25.6529C18.2052 27.8385 16.7508 29.9091 14.5606 30.4025C14.5559 30.4035 14.5526 30.4052 14.548 30.4063C14.1206 30.5084 13.8024 30.892 13.8024 31.3507V35.8102H11.9988C10.3908 35.8102 9.08269 37.1183 9.08269 38.7263V41.0279C9.08269 41.5648 9.51786 42 10.0548 42H32.0381C32.575 42 33.0102 41.5648 33.0102 41.0279V38.7263C33.0102 37.1183 31.702 35.8102 30.094 35.8102H28.2903V31.3508C28.2903 30.8911 27.971 30.507 27.5424 30.4058C27.5384 30.4048 27.5345 30.4035 27.5305 30.4025C25.3237 29.9058 23.8666 27.8144 24.1055 25.6123C26.2012 24.7215 28.1051 22.9249 29.6409 20.3407C30.1289 19.5196 30.567 18.6384 30.9541 17.7079C35.1887 15.4102 38.1724 11.2215 38.9435 6.48024C39.085 5.61029 38.8371 4.7246 38.2635 4.05022ZM4.97529 6.16811C4.92476 5.85745 5.01065 5.55254 5.2172 5.30957C5.42679 5.06314 5.73211 4.92188 6.05507 4.92188H8.98991V6.71033C8.98991 9.51466 9.34781 12.231 10.0261 14.7152C7.36044 12.6087 5.52507 9.5487 4.97529 6.16811ZM30.094 37.7544C30.63 37.7544 31.0661 38.1905 31.0661 38.7265V40.056H11.0267V38.7265C11.0267 38.1905 11.4628 37.7544 11.9988 37.7544H30.094V37.7544ZM26.3462 32.3228V35.8102H15.7467V32.3228H26.3462ZM18.296 30.3788C18.5362 30.1143 18.7559 29.8276 18.9524 29.5207C19.6002 28.5085 19.9402 27.3586 19.9555 26.1842C20.3007 26.2312 20.6492 26.2564 21.0006 26.2564C21.383 26.2564 21.7618 26.227 22.1369 26.1714C22.1591 27.7496 22.7733 29.2435 23.8062 30.3787H18.296V30.3788ZM31.066 6.71042C31.066 11.4993 29.9662 15.9873 27.9695 19.3473C26.067 22.549 23.592 24.3122 21.0005 24.3122C18.4085 24.3122 15.9333 22.549 14.0306 19.3474C12.0338 15.9873 10.9341 11.4994 10.9341 6.71058V2.05997C10.9341 1.99599 10.9861 1.94406 11.0499 1.94406H30.95C31.0139 1.94406 31.066 1.99607 31.066 2.05997V6.71042V6.71042ZM37.0246 6.16811C36.4749 9.54846 34.6397 12.6084 31.974 14.715C32.6523 12.2309 33.0102 9.51466 33.0102 6.71042V4.92197H35.9447C36.2677 4.92197 36.5731 5.06331 36.7826 5.30965C36.9891 5.55254 37.0751 5.85745 37.0246 6.16811Z"
                fill="#14121F"
              />
              <path
                d="M26.9014 9.9798C26.787 9.62805 26.4828 9.37162 26.1167 9.31829L23.1834 8.89206L21.8717 6.23408C21.7079 5.90234 21.37 5.69226 21 5.69226C20.63 5.69226 20.2921 5.90234 20.1283 6.23408L18.8166 8.89206L15.8833 9.31829C15.5171 9.37145 15.2129 9.62796 15.0986 9.97988C14.9843 10.3319 15.0796 10.7181 15.3446 10.9764L17.4672 13.0453L16.966 15.9667C16.9034 16.3314 17.0533 16.6999 17.3527 16.9174C17.652 17.1349 18.0489 17.1635 18.3764 16.9914L21 15.6122L23.6235 16.9914C23.7658 17.0662 23.9211 17.103 24.0757 17.103C24.2772 17.103 24.4778 17.0404 24.6471 16.9174C24.9465 16.6998 25.0964 16.3313 25.0338 15.9666L24.5327 13.0452L26.6552 10.9763C26.9204 10.7181 27.0157 10.3318 26.9014 9.9798ZM22.8099 12.0098C22.5808 12.2331 22.4762 12.5548 22.5304 12.8703L22.7848 14.3542L21.4522 13.6536C21.3107 13.5791 21.1553 13.542 20.9999 13.542C20.8446 13.542 20.6892 13.5793 20.5476 13.6536L19.215 14.3542L19.4695 12.8703C19.5236 12.5549 19.419 12.2332 19.1899 12.0098L18.1119 10.959L19.6018 10.7424C19.9183 10.6965 20.1921 10.4976 20.3337 10.2107L21 8.86064L21.6663 10.2107C21.8079 10.4976 22.0815 10.6964 22.3981 10.7424L23.888 10.959L22.8099 12.0098Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li className="side-bar-list-item">
          <a href="@3">
            <div className="notification">99+</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8815 1.08625C35.1785 0.762487 34.3504 0.888371 33.7753 1.40627L31.0458 3.82315L27.3322 0.501276C26.5861 -0.167092 25.4566 -0.167092 24.7106 0.501276L21 3.82001L17.2886 0.501276C16.5423 -0.167092 15.4127 -0.167092 14.6664 0.501276L10.9519 3.82315L8.21979 1.40637C7.41363 0.689808 6.17918 0.762487 5.46262 1.56864C5.14181 1.92957 4.96606 2.39663 4.96941 2.87951V39.1205C4.96301 40.2006 5.83349 41.0814 6.91363 41.0878C7.39662 41.0907 7.86367 40.9146 8.2247 40.5937L10.9542 38.1768L14.6678 41.4987C15.4139 42.1671 16.5434 42.1671 17.2895 41.4987L21 38.1796L24.7112 41.4983C25.4574 42.1666 26.587 42.1666 27.3333 41.4983L31.0479 38.1765L33.7799 40.5933C34.586 41.3101 35.8205 41.2377 36.5371 40.4317C36.8582 40.0706 37.034 39.6033 37.0306 39.1201V2.87951C37.0404 2.10581 36.5885 1.40066 35.8815 1.08625ZM32.3469 36.7033C31.6008 36.0423 30.4776 36.0453 29.735 36.7103L26.0215 40.0321L22.3109 36.7133C21.5647 36.045 20.4351 36.045 19.6889 36.7133L15.9779 40.0321L12.2628 36.7103C11.5231 36.0454 10.4019 36.0423 9.65851 36.7032L6.93635 39.1194V33.877L6.92652 2.88L9.6531 5.2963C10.3993 5.95729 11.5224 5.95434 12.265 5.28931L15.9785 1.96754L19.6891 5.28627C20.4353 5.95463 21.5649 5.95463 22.3111 5.28627L26.0221 1.96754L29.7372 5.28931C30.477 5.95424 31.5981 5.95729 32.3415 5.2964L35.0637 2.87951V27.7921L35.0735 39.1196L32.3469 36.7033Z"
                fill="#14121F"
              />
              <path
                d="M30.3227 20.0164H11.6774C11.1343 20.0164 10.694 20.4567 10.694 20.9998C10.694 21.543 11.1343 21.9833 11.6774 21.9833H30.3227C30.8659 21.9833 31.3062 21.543 31.3062 20.9998C31.3062 20.4567 30.8658 20.0164 30.3227 20.0164Z"
                fill="#14121F"
              />
              <path
                d="M21.4714 14.1155H11.6774C11.1343 14.1155 10.694 14.5558 10.694 15.099C10.694 15.6421 11.1343 16.0824 11.6774 16.0824H21.4714C22.0146 16.0824 22.4549 15.6421 22.4549 15.099C22.4549 14.5558 22.0145 14.1155 21.4714 14.1155Z"
                fill="#14121F"
              />
              <path
                d="M30.3227 25.9172H11.6774C11.1343 25.9172 10.694 26.3575 10.694 26.9006C10.694 27.4438 11.1343 27.8841 11.6774 27.8841H30.3227C30.8659 27.8841 31.3062 27.4438 31.3062 26.9006C31.3062 26.3575 30.8658 25.9172 30.3227 25.9172Z"
                fill="#14121F"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
