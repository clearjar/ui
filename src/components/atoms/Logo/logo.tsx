import { SVGProps } from "react";
import { colors } from "../../../tailwind";

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: "small" | "medium" | "large" | "x-large";
  color?: "black" | "white" | "brand";
  border?: boolean;
}

export const Logo = ({
  size = "medium",
  color = "brand",
  border = false,
  ...props
}: LogoProps) => {
  let fillColor;
  switch (color) {
    case "white":
      fillColor = colors.alpha["00"];
      break;
    case "brand":
      fillColor = colors.blue[500];
      break;
    case "black":
    default:
      fillColor = colors.alpha["00"];
  }

  let path;
  switch (size) {
    case "small":
      path = (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g
            fill={fillColor}
            fillRule="evenodd"
            clipPath="url(#a)"
            clipRule="evenodd"
          >
            <path
              d="M8.51-.018h7.862c2.438.252 4.32 1.39 5.644 3.414a780.145 780.145 0 0 0 3.53 6.035c.226.378.372.78.437 1.207v.793a3.88 3.88 0 0 1-.367 1.069c-.434.752-.877 1.5-1.328 2.241a1290.53 1290.53 0 0 0-4.578-7.759c-1.453-1.938-3.404-3.024-5.854-3.258L4.91 3.689a58.528 58.528 0 0 1 1.555-2.603A3.278 3.278 0 0 1 8.51-.018Z"
              opacity={0.99}
            />
            <path
              d="M4.91 4.465c3-.04 6.005-.046 9.016-.017 2.145.233 3.863 1.192 5.155 2.879a856.68 856.68 0 0 1 4.56 7.741 92.327 92.327 0 0 1-4.368-.017 288.408 288.408 0 0 0-2.184-3.655c-1.43-1.899-3.346-2.973-5.749-3.224l-4.263-.035A547.596 547.596 0 0 0 4.91 4.465Z"
              opacity={0.992}
            />
            <path
              d="M4.246 4.81c.055.016.096.05.123.104a627.876 627.876 0 0 0 4.508 7.655c1.43 1.899 3.346 2.973 5.748 3.224 3.006.018 6.011.023 9.016.018a163.493 163.493 0 0 1-2.131 3.69c-3.145.04-6.29.045-9.436.016-2.2-.242-3.953-1.236-5.26-2.982-1.569-2.65-3.13-5.305-4.682-7.966a.228.228 0 0 1 .035-.207l2.08-3.551Z"
              opacity={0.99}
            />
            <path
              d="M17.457 23.983H9.595c-2.47-.255-4.363-1.416-5.68-3.483a759.127 759.127 0 0 0-3.494-5.965 3.284 3.284 0 0 1-.437-1.207v-.793a3.88 3.88 0 0 1 .367-1.069c.434-.753.877-1.5 1.328-2.241l4.508 7.655c1.458 1.987 3.433 3.108 5.924 3.362 2.982.006 5.964.023 8.946.052a72.52 72.52 0 0 1-1.555 2.586 3.278 3.278 0 0 1-2.044 1.103Z"
              opacity={0.99}
            />
          </g>
        </svg>
      );
      break;
    case "medium":
      path = (
        <svg
          width="52"
          height="48"
          viewBox="0 0 52 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill={fillColor}
            fillRule="evenodd"
            clipPath="url(#a)"
            clipRule="evenodd"
          >
            <path
              d="M17.02-.035h15.725c4.875.502 8.637 2.778 11.288 6.827a1556.5 1556.5 0 0 0 7.059 12.07c.453.757.744 1.561.873 2.413v1.586A7.767 7.767 0 0 1 51.233 25c-.868 1.506-1.753 3-2.656 4.483a2583.283 2583.283 0 0 0-9.156-15.517c-2.905-3.877-6.807-6.05-11.707-6.517L9.82 7.378c.993-1.763 2.03-3.499 3.11-5.206C14.023.938 15.386.202 17.02-.035Z"
              opacity={0.99}
            />
            <path
              d="M9.82 8.932c6-.08 12.01-.092 18.033-.035 4.289.466 7.725 2.386 10.309 5.759a1712.007 1712.007 0 0 1 9.12 15.483c-2.912.057-5.824.046-8.736-.035a577.04 577.04 0 0 0-4.368-7.31c-2.86-3.798-6.693-5.947-11.497-6.448l-8.527-.07A1091.863 1091.863 0 0 0 9.82 8.932Z"
              opacity={0.992}
            />
            <path
              d="M8.492 9.621c.11.03.192.1.245.207 2.97 5.126 5.976 10.23 9.016 15.31 2.86 3.798 6.693 5.947 11.498 6.449 6.01.034 12.021.046 18.032.034a327.039 327.039 0 0 1-4.264 7.38c-6.29.08-12.58.091-18.87.034-4.4-.485-7.907-2.473-10.52-5.966C10.49 27.77 7.37 22.46 4.265 17.14a.456.456 0 0 1 .07-.415l4.159-7.103Z"
              opacity={0.99}
            />
            <path
              d="M34.911 47.967H19.185C14.246 47.456 10.46 45.134 7.828 41A1523.57 1523.57 0 0 0 .838 29.07a6.568 6.568 0 0 1-.873-2.414V25.07c.137-.74.382-1.452.734-2.138.867-1.506 1.753-3 2.656-4.483l9.016 15.31c2.916 3.975 6.865 6.217 11.847 6.725 5.964.011 11.928.046 17.892.103A145.185 145.185 0 0 1 39 45.76c-1.092 1.233-2.455 1.97-4.089 2.207Z"
              opacity={0.99}
            />
          </g>
        </svg>
      );
      break;
    case "large":
      path = (
        <svg
          width="104"
          height="96"
          viewBox="0 0 104 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill={fillColor}
            fillRule="evenodd"
            clipPath="url(#a)"
            clipRule="evenodd"
          >
            <path
              d="M34.038-.068H65.49C75.24.936 82.765 5.488 88.065 13.587c4.671 8.068 9.377 16.114 14.119 24.138a13.181 13.181 0 0 1 1.747 4.827v3.173A15.535 15.535 0 0 1 102.463 50c-1.735 3.01-3.506 6-5.312 8.965A5164.379 5164.379 0 0 0 78.84 27.932c-5.81-7.754-13.615-12.099-23.414-13.035L19.64 14.76c1.985-3.528 4.058-7 6.22-10.414 2.184-2.467 4.91-3.939 8.177-4.413Z"
              opacity={0.99}
            />
            <path
              d="M19.64 17.861c11.999-.16 24.02-.183 36.065-.069 8.579.932 15.452 4.771 20.618 11.518a3425.38 3425.38 0 0 1 18.242 30.965c-5.825.115-11.649.092-17.473-.069-2.877-4.896-5.789-9.77-8.736-14.62C62.635 37.99 54.97 33.692 45.36 32.689l-17.054-.138a2190.395 2190.395 0 0 0-8.666-14.69Z"
              opacity={0.992}
            />
            <path
              d="M16.985 19.242c.22.06.383.198.49.414a2513.7 2513.7 0 0 0 18.032 30.62c5.72 7.595 13.385 11.894 22.994 12.897 12.021.07 24.043.092 36.065.07A654.239 654.239 0 0 1 86.039 78c-12.58.16-25.161.184-37.742.069-8.8-.97-15.813-4.947-21.038-11.931A5432.488 5432.488 0 0 1 8.528 34.277a.911.911 0 0 1 .14-.828l8.317-14.207Z"
              opacity={0.99}
            />
            <path
              d="M69.822 95.931H38.37C28.492 94.91 20.92 90.266 15.657 82A3045.298 3045.298 0 0 0 1.677 58.138 13.136 13.136 0 0 1-.07 53.31v-3.172c.274-1.48.764-2.905 1.467-4.276 1.736-3.011 3.506-6 5.312-8.965l18.032 30.62c5.833 7.95 13.73 12.432 23.694 13.449 11.929.023 23.857.092 35.785.206A289.9 289.9 0 0 1 78 91.517c-2.184 2.468-4.91 3.94-8.178 4.414Z"
              opacity={0.99}
            />
          </g>
        </svg>
      );
      break;
    case "x-large":
      path = (
        <svg
          width="208"
          height="192"
          viewBox="0 0 208 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill={fillColor}
            fillRule="evenodd"
            clipPath="url(#a)"
            clipRule="evenodd"
          >
            <path
              d="M68.077-.139h62.903c19.499 2.01 34.549 11.113 45.151 27.31a6233.868 6233.868 0 0 0 28.236 48.277c1.812 3.028 2.977 6.246 3.495 9.655v6.345a31.037 31.037 0 0 1-2.936 8.551c-3.47 6.023-7.011 12-10.623 17.931a10296.967 10296.967 0 0 0-36.624-62.069c-11.619-15.506-27.228-24.196-46.828-26.069l-71.57-.276A468.212 468.212 0 0 1 51.722 8.69C56.09 3.753 61.541.81 68.077-.14Z"
              opacity={0.99}
            />
            <path
              d="M39.277 35.725c23.996-.322 48.04-.368 72.129-.138 17.158 1.863 30.903 9.542 41.237 23.034a6878.453 6878.453 0 0 1 36.484 61.931c-11.65.23-23.299.184-34.946-.138a2313.346 2313.346 0 0 0-17.474-29.241c-11.441-15.19-26.771-23.787-45.989-25.793l-34.107-.276a4376.507 4376.507 0 0 0-17.334-29.38Z"
              opacity={0.992}
            />
            <path
              d="M33.97 38.482c.44.121.766.397.979.828a5020.196 5020.196 0 0 0 36.064 61.241c11.44 15.19 26.77 23.787 45.989 25.793 24.043.138 48.086.184 72.129.138A1308.264 1308.264 0 0 1 172.078 156c-25.161.322-50.323.367-75.484.138-17.601-1.94-31.626-9.894-42.076-23.862a10898.076 10898.076 0 0 1-37.462-63.725c-.177-.589-.084-1.14.28-1.655 5.548-9.479 11.092-18.95 16.634-28.414Z"
              opacity={0.99}
            />
            <path
              d="M139.644 191.862H76.741c-19.757-2.043-34.9-11.33-45.43-27.862a6094.276 6094.276 0 0 0-27.957-47.724c-1.814-3.028-2.979-6.246-3.495-9.655v-6.345a31.05 31.05 0 0 1 2.936-8.552c3.47-6.022 7.012-12 10.623-17.931l36.065 61.241c11.665 15.899 27.46 24.864 47.387 26.897 23.857.046 47.714.184 71.57.414a579.178 579.178 0 0 1-12.441 20.689c-4.367 4.936-9.819 7.878-16.355 8.828Z"
              opacity={0.99}
            />
          </g>
          <defs>
            <clipPath id="clip0_240_1028">
              <rect width="208" height="192" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    default:
      break;
  }

  if (border) {
    path = (
      <div className="border border-alpha-700 rounded-full p-5 w-fit">
        {path}
      </div>
    );
  }

  return path;
};
