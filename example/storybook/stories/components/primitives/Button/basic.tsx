import React from 'react';
import {
  Button,
  Box,
  Transition,
  useDisclose,
  Center,
  Portal,
  VStack,
  IconButton,
  Stagger,
} from 'native-base';

function Gallery(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 53 53"
      width={53}
      height={53}
      {...props}
    >
      <defs>
        <circle id="prefix__a" cx={26.5} cy={26.5} r={25.5} />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <path
          fill="#AC44CF"
          d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
        />
        <path
          fill="#BF59CF"
          d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
        />
        <path fill="#AC44CF" d="M17 24.5h18v9H17z" />
      </g>
      <path
        d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 01-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364zm5.081 8.22l-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 00-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 00-.861.011zm8.351-5.22a1.75 1.75 0 10.001 3.501 1.75 1.75 0 00-.001-3.501z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

function Camera(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 53 53"
      width={53}
      height={53}
      {...props}
    >
      <defs>
        <circle id="prefix__a" cx={26.5} cy={26.5} r={25.5} />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <path
          fill="#D3396D"
          d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
        />
        <path
          fill="#EC407A"
          d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
        />
        <path fill="#D3396D" d="M17 24.5h15v9H17z" />
      </g>
      <path
        d="M27.795 17a3 3 0 012.405 1.206l.3.403a3 3 0 002.405 1.206H34.2a2.8 2.8 0 012.8 2.8V32a4 4 0 01-4 4H20a4 4 0 01-4-4v-9.385a2.8 2.8 0 012.8-2.8h1.295a3 3 0 002.405-1.206l.3-.403A3 3 0 0125.205 17h2.59zM26.5 22.25a5.25 5.25 0 10.001 10.501A5.25 5.25 0 0026.5 22.25zm0 1.75a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
        fill="#F5F5F5"
      />
    </svg>
  );
}
function Docs(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 53 53"
      width={53}
      height={53}
      {...props}
    >
      <defs>
        <circle id="prefix__a" cx={26.5} cy={26.5} r={25.5} />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <path
          fill="#5157AE"
          d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
        />
        <path
          fill="#5F66CD"
          d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
        />
      </g>
      <path
        d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18l5.5 5.5h-4.5c-.55 0-1-.45-1-1z"
        fill="#F5F5F5"
      />
    </svg>
  );
}
function Contacts(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 53 53"
      width={53}
      height={53}
      {...props}
    >
      <defs>
        <circle id="prefix__a" cx={26.5} cy={26.5} r={25.5} />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <path
          fill="#0795DC"
          d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
        />
        <path
          fill="#0EABF4"
          d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
        />
      </g>
      <path
        d="M26.5 26.5A4.5 4.5 0 0031 22a4.5 4.5 0 00-4.5-4.5A4.5 4.5 0 0022 22a4.5 4.5 0 004.5 4.5zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

function AttachIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="rgb(130, 134, 137)"
        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 003.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 01-2.829 1.171 3.975 3.975 0 01-2.83-1.173 3.973 3.973 0 01-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 00-.834.018l-7.205 7.207a5.577 5.577 0 00-1.645 3.971z"
      />
    </svg>
  );
}

export const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box>
      <Box flex={1} alignItems="center" minH={244}>
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: { duration: 100 },
          }}
        >
          <Box mb={4}>
            <Gallery />
          </Box>
          <Box mb={4}>
            <Camera />
          </Box>
          <Box mb={4}>
            <Docs />
          </Box>
          <Box>
            <Contacts />
          </Box>
        </Stagger>
      </Box>
      <IconButton
        mt={4}
        variant="unstyled"
        onPress={onToggle}
        icon={<AttachIcon />}
      >
        Press me
      </IconButton>
    </Box>
  );
};
