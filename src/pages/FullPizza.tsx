import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63a2fd389704d18da08257f0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} руб</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
