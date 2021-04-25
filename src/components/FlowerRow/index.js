import {Div, InputButton, Input} from './styles';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {baseInstance as axios} from "../../http/axiosInstance";

function FlowerRow(props){
    const {flower, price, id} = props;
    const {register, handleSubmit} = useForm();
    const [changed, setChanged] = useState(false);
    const update = async (data) => {
        axios
            .put(`/flowers/${id}.json`, data)
            .then((res) => {
                console.log(res);
               if (res.status / 100 < 4){
                   alert("Already up to date!");
               }
            });
    }
    const remove = async () => {
        axios
            .delete(`/flowers/${id}.json`)
            .then(res => {
              if (res.status / 100 < 4){
                  alert('Removed!');
              }
            })
    }
    return (
        <Div>
            <span>Flower:
                <Input
                    type="text"
                    defaultValue={flower}
                    onClick={() => setChanged(!changed)}
                    {...register("name", {required: true})}
                />
            </span>
            <span>Price:
                <Input
                    type="text"
                    defaultValue={price}
                    onClick={() => setChanged(!changed)}
                    {...register("price", {required: true, min: 1, max: 100})}
                />
                $</span>
            {changed?<span>
                <InputButton type="button" onClick={handleSubmit(update)} value="UPDATE"/>
                <InputButton type="button" onClick={handleSubmit(remove)} value="REMOVE"/>
            </span>:''}
        </Div>
    );
}

export default FlowerRow;
