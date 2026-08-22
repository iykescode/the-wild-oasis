import useLoggedInUser from "../features/authentication/useLoggedInUser.js";
import styled from "styled-components";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isCheckingAuth, isAuthenticated } = useLoggedInUser();

  useEffect(() => {
    if (!isAuthenticated && !isCheckingAuth) navigate("/login");
  }, [isAuthenticated, isCheckingAuth, navigate]);

  if (isCheckingAuth)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
