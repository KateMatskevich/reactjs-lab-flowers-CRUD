import FlowerRow from "../../components/FlowerRow";
import {useState, useEffect} from "react";
import {Container} from './styles';
import {baseInstance as axios} from "../../http/axiosInstance";
import {Div} from "../../components/FlowerRow/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Flower from "../Flower";

function Dashboard() {

    const [flowers, setFlowers] = useState([]);
    const [keys, setKeys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        axios
            .get('/flowers.json')
            .then((res) => {
                setFlowers(Object.values(res.data));
                setKeys(Object.keys(res.data));
                setLoading(false);
            })
    }, [flowers, loading])

    return (
        <>
            <Container>
                {
                    flowers.map((flower, index) => {
                        return <FlowerRow
                            key={keys[index]}
                            id={keys[index]}
                            flower={flower.name}
                            price={flower.price}
                        />
                    })
                }
                <div>

                </div>
            </Container>
        </>
    );
}

export default Dashboard;
