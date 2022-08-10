import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = (props) => {
  const override = `
    display: block;
    margin: 0 auto;
    padding-top: 400px;
  `;
  let loading = props.DataLength === 0 && (
    <ClimbingBoxLoader
      size={30}
      color={"#537a5a;"}
      className="loading"
      css={override}
    />
  );
  return <>{loading || props.children}</>;
};

export default Loading;
