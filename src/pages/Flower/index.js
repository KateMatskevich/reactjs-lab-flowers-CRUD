import {useParams} from 'react-router-dom';

function Flower(){
    const {id} = useParams();
    return (
        <Flower
            flower={id}
            price={0}
        />
    );
}

export default Flower;
