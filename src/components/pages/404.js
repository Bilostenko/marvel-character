import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ "fontWeight": 'bol', "color": "red", "fontSize": "30px", "textAlign": "center", "padding": "20px", "margin": "20px", "border": "1px solid red", "borderRadius": "10px", "backgroundColor": "white", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>Page is not found</p>
      <Link to="/" style={{ "textDecoration": "none", "color": "black", "fontSize": "30px", "textAlign": "center", "border": "1px solid black", "borderRadius": "10px", "backgroundColor": "white", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>Back to main page</Link>
    </div >
  )
}

export default Page404