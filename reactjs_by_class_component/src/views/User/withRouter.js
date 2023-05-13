import React from 'react';
import { useParams } from 'react-router-dom';
 /**
  * Định nghĩa một Higher-Order Component (HOC) withRouter.
  * Sử dụng để truy cập Route parameters trong các class component trong React Router Dom.
  * Khi một class component được bọc bởi HOC withRouter, nó sẽ có thể truy cập vào các Route parameters thông qua props params.
  * HOC này sử dụng hook useParams để lấy các Route parameters, và truyền chúng vào WrappedComponent bằng cách sử dụng Spread syntax ({...props}).
  * Các tham số của HOC withRouter bao gồm:
        WrappedComponent: Component được bọc (EditUser,DetailUser).
        props: Props của Wrapped Component.
  * @param {*} WrappedComponent 
  * @returns 
  */
const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};
 
export default withRouter;