import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getRandomUsers } from "../redux";

const SampleProductContainer3 = ({ users, getRandomUsers }) => {
  // const dispatch = useDispatch();
  // const data = useSelector(({ users }) => users);
  console.log(users)
  useEffect(() => {
    getRandomUsers();
  }, [getRandomUsers]);

  return (<></>)

  // return data?.loading ? (
  //   <h1>loading...</h1>
  // ) : data.error ? (
  //   <h1>{data?.error}</h1>
  // ) : (
  //   <ul>
  //     {data?.users?.map((user) => (
  //       <li key={user?.id}>{user?.id}</li>
  //     ))}
  //   </ul>
  // );
};

const mapStateToProps = ({ users }) => ({ data: users });
const mapDispatchToProps = (dispatch) => ({
  getRandomUsers: () => dispatch(getRandomUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleProductContainer3);
