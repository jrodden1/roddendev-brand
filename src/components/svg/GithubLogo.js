import React from 'react';

const GithubLogo = ({
   width = "48px", 
   height= "48px"
}) => {
   return (
      <svg width={width} height={height} viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg">
         <path 
            d="M48 25.1727C48 11.5567 37.2548 0.518766 24.0001 0.518766C10.7452 0.518766 0 11.5567 0 25.1727C0 35.9801 6.76993 45.1621 16.1905 48.4908C16.7648 48.0651 17.4262 47.54 17.4262 46.6551C17.4262 45.2991 17.3977 41.811 17.3977 41.811C17.3977 41.811 16.3558 41.9931 14.8692 41.9931C11.1231 41.9931 9.9386 39.5511 9.37479 38.1843C8.64104 36.4043 7.68958 35.5684 6.67871 34.9001C6.0579 34.4894 5.91525 34.0059 6.63357 33.8674C9.9492 33.2296 10.7972 37.7093 13.0116 38.4236C14.5922 38.9326 16.6245 38.7126 17.6355 38.0445C17.7687 36.6764 18.7344 35.493 19.5383 34.8698C13.906 34.317 10.5664 32.3183 8.83482 29.106L8.64934 28.7463L8.21413 27.7257L8.08564 27.36C7.54336 25.7295 7.30308 23.862 7.30308 21.7759C7.30308 18.0726 8.43289 16.6754 9.9492 14.7011C8.78968 10.479 10.3655 7.59351 10.3655 7.59351C10.3655 7.59351 12.8035 7.07711 17.4119 10.4487C19.9093 9.35517 26.5693 9.26404 29.7209 10.2056C31.6534 8.89957 35.1915 7.0467 36.6187 7.56548C37.0052 8.20093 37.8377 10.0538 37.1241 14.124C37.6081 15.017 40.127 16.9185 40.1366 22.2948C40.0962 24.2775 39.8939 25.9519 39.5193 27.3673L39.3112 28.0914C39.3112 28.0914 39.1923 28.4328 39.0626 28.7584L38.9104 29.1181C37.2395 32.8674 33.812 34.2672 28.2735 34.8491C30.0681 36.0034 30.5831 37.4515 30.5831 41.3699C30.5831 45.2882 30.5319 45.8143 30.5439 46.7158C30.5542 47.5124 31.1744 48.0851 31.7323 48.5188C41.1933 45.2132 48 36.0096 48 25.1727Z" 
         />
      </svg>
   );
}

export default GithubLogo;