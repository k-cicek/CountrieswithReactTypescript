import { FunctionComponent } from "react";

interface ILoadingProps {
  loading: boolean;
}

const loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading) {
    return <>Loading..</>;
  }

  return <>{props.children}</>;
};

export default loading;
