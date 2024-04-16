import React from "react";
import ReactLoading from "react-loading"
function Loading() {
  return (
    <div style={{ margin: "40px", boxAlign:"center" }}>
      <ReactLoading type={'spokes'} color={"orange"} height={'20%'} width={'20%'}/>
     
    </div>
  );
}

export default Loading;