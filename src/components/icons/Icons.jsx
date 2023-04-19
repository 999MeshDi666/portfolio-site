import { SvgIcon } from "@mui/material";

export const BurgerBox = ({ isOpened }) => {
  return (
    <SvgIcon
      viewBox="0 0 16 16"
      sx={{
        width: { xs: "16px", sm: "24px" },
        height: { xs: "24px", sm: "24px" },
        transition: "transform .3s ease-in",
        transform: isOpened ? "rotate(45deg)" : "rotate(0deg)",
      }}
    >
      <rect x="0" width="6" height="6" rx="1" />
      <rect x="10" width="6" height="6" rx="1" />
      <rect x="10" y="10" width="6" height="6" rx="1" />
      <rect y="10" width="6" height="6" rx="1" />
    </SvgIcon>
  );
};

export const GitHub = () => {
  return (
    <SvgIcon
      viewBox="0 0 36 36"
      sx={{
        width: { xs: "18px", sm: "36px" },
        height: { xs: "18px", sm: "36px" },
      }}
    >
        <path d="M12.0411 28.9871C12.0411 29.136 11.8742 29.2551 11.6637 29.2551C11.4242 29.2775 11.2573 29.1584 11.2573 28.9871C11.2573 28.8383 11.4242 28.7192 11.6347 28.7192C11.8524 28.6968 12.0411 28.8159 12.0411 28.9871ZM9.78387 28.6522C9.73306 28.801 9.87823 28.9723 10.096 29.0169C10.2847 29.0914 10.5024 29.0169 10.546 28.868C10.5895 28.7192 10.4516 28.5479 10.2339 28.481C10.0452 28.4288 9.83468 28.5033 9.78387 28.6522ZM12.9919 28.5256C12.7815 28.5777 12.6363 28.7192 12.6581 28.8904C12.6798 29.0393 12.8685 29.136 13.0863 29.0839C13.2968 29.0318 13.4419 28.8904 13.4202 28.7415C13.3984 28.6001 13.2024 28.5033 12.9919 28.5256ZM17.7677 0C7.70081 0 0 7.83859 0 18.1635C0 26.4189 5.06613 33.4834 12.3024 35.9697C13.2315 36.1409 13.5581 35.5528 13.5581 35.0689C13.5581 34.6074 13.5363 32.0615 13.5363 30.4983C13.5363 30.4983 8.45565 31.6149 7.38871 28.28C7.38871 28.28 6.56129 26.1137 5.37097 25.5554C5.37097 25.5554 3.70887 24.3867 5.4871 24.4091C5.4871 24.4091 7.29435 24.5579 8.28871 26.3296C9.87823 29.203 12.5419 28.3767 13.5798 27.8854C13.7468 26.6944 14.2185 25.8681 14.7411 25.3768C10.6839 24.9152 6.59032 24.3123 6.59032 17.1511C6.59032 15.104 7.14194 14.0767 8.30323 12.7666C8.11452 12.2827 7.49758 10.2877 8.49194 7.71204C10.0089 7.22818 13.5 9.72193 13.5 9.72193C14.9516 9.30507 16.5121 9.08919 18.0581 9.08919C19.604 9.08919 21.1645 9.30507 22.6161 9.72193C22.6161 9.72193 26.1073 7.22073 27.6242 7.71204C28.6185 10.2951 28.0016 12.2827 27.8129 12.7666C28.9742 14.0842 29.6855 15.1114 29.6855 17.1511C29.6855 24.3346 25.4105 24.9078 21.3532 25.3768C22.021 25.9649 22.5871 27.0815 22.5871 28.8308C22.5871 31.3395 22.5653 34.4436 22.5653 35.054C22.5653 35.5379 22.8992 36.126 23.821 35.9548C31.079 33.4834 36 26.4189 36 18.1635C36 7.83859 27.8347 0 17.7677 0ZM7.05484 25.6745C6.96048 25.749 6.98226 25.9202 7.10565 26.0616C7.22177 26.1807 7.38871 26.2328 7.48306 26.1361C7.57742 26.0616 7.55565 25.8904 7.43226 25.749C7.31613 25.6299 7.14919 25.5778 7.05484 25.6745ZM6.27097 25.0716C6.22016 25.1683 6.29274 25.2875 6.4379 25.3619C6.55403 25.4363 6.69919 25.414 6.75 25.3098C6.80081 25.213 6.72823 25.0939 6.58306 25.0195C6.4379 24.9748 6.32177 24.9971 6.27097 25.0716ZM8.62258 27.7217C8.50645 27.8184 8.55 28.0418 8.71694 28.1832C8.88387 28.3544 9.09435 28.3767 9.18871 28.2576C9.28306 28.1609 9.23952 27.9375 9.09435 27.7961C8.93468 27.6249 8.71694 27.6026 8.62258 27.7217ZM7.79516 26.6274C7.67903 26.7018 7.67903 26.8954 7.79516 27.0666C7.91129 27.2378 8.10726 27.3122 8.20161 27.2378C8.31774 27.141 8.31774 26.9475 8.20161 26.7763C8.1 26.605 7.91129 26.5306 7.79516 26.6274Z" fill="black"/>
    </SvgIcon>
  );
};

export const Telegram = () => {
  return (
    <SvgIcon
      viewBox="0 0 24 20"
      sx={{
        width: { xs: "12px", sm: "20px" },
        height: { xs: "10px", sm: "20px" },
      }}
    >
        <path d="M23.9316 1.82074L20.3099 18.7927C20.0366 19.9905 19.3241 20.2887 18.3115 19.7244L12.7931 15.6837L10.1304 18.2284C9.83572 18.5212 9.58926 18.7661 9.02136 18.7661L9.41782 13.1815L19.6455 3.99813C20.0902 3.60418 19.5491 3.38591 18.9544 3.77986L6.3104 11.6909L0.86706 9.99795C-0.316974 9.63062 -0.338405 8.82141 1.11351 8.2571L22.4047 0.106506C23.3905 -0.26083 24.2531 0.324778 23.9316 1.82074Z" fill="white"/>
    </SvgIcon>
  );
};

export const LinkedIn = () => {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      sx={{
        width: { xs: "10px", sm: "20px" },
        height: { xs: "10px", sm: "20px" },
      }}
    >
       <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" fill="white"/>
    </SvgIcon>
  );
};
