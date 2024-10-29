import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading, size = 150, inline }) => {
  const override = {
    display: "block",
    margin: inline ? "0" : "100px auto",
  };
  return (
    <ClipLoader
      color="#433ca"
      loading={loading}
      cssOverride={override}
      size={size}
    />
  );
};

export default Spinner;
