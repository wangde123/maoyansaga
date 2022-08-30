import React, { useEffect } from "react";
// import axios from "axios";

// import http from "../../utils/http";

// import { ratedApi } from "../../utils/api";

import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  // const [list, setList] = useState([]);
  const count = useSelector((state) => state.city.get("count"));
  const list = useSelector((state) => state.city.get("list"));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     const res = await ratedApi({ a: 3 });
  //     if (res) {
  //       setList(res.result);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    // console.log("111");
    dispatch({ type: "loadaction" });
  }, [dispatch]);

  return (
    <>
      <div>这是城市选择页</div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "addaction" })}>btn++</button>
      <button onClick={() => dispatch({ type: "minusaction" })}>btn--</button>
      <ul>
        {list.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
