import React from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
 
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  size: 150
`;

type Props = {
  loading: boolean
};
 
export const Loader = (props: Props) => {
 
  return(
      <div className="sweet-loading">
        <FadeLoader
          css={override}
          color={"red"}
          loading={props.loading}
        />
      </div>
    );
}