import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>C'est quoi ce bruit de con là?</p>
      <img src="/adlaurent.png" alt="" />
    </div>
  );
}