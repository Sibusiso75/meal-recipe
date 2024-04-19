import React from "react";
import ReactLoading from "react-loading"
function Loading() {
  return (
    <div style={{ marginLeft:"50px" }}>
      <ReactLoading type={'spokes'} color={"white"} height={500} width={200}/>
     
    </div>
  );
}

export default Loading;