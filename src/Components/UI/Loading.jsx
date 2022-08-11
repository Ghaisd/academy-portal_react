import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Loading = ({ dataLength, children }) => {
  const override = `
    display: block;
    margin: 0 auto;
    padding-top: 400px;
  `;
  const loading = dataLength === 0 && (
    <ClimbingBoxLoader
      size={30}
      color="#537a5a;"
      className="loading"
      css={override}
    />
  );
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{loading || children}</>
  );
};

export default Loading;
