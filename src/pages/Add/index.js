import {useForm} from 'react-hook-form';
import InputField from "../../components/InputField";
import {baseInstance as axios} from '../../http/axiosInstance';
import {Form} from "./styles";

function Add() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const Add = async (data) => {
        await axios.post("/flowers.json", data)
            .then(res => {
                if (res.status / 100 < 4) alert("Flower added!");
            });
    }
    const registerName = register("name", {
        required: true
    });
    const registerPrice = register("price", {
        required: true,
        min: 1,
        max: 100
    });
    return (
        <Form onSubmit={handleSubmit(Add)}>
            <InputField
                type="text"
                placeHolder="Enter flower name"
                register={{...registerName}}
                errorMessage={errors.name && 'Name is required field!'}
            />
            <InputField
                type="text"
                placeHolder="Enter flower price"
                register={{...registerPrice}}
                errorMessage={errors.name && 'Price is must be since 1 to 100!'}
            />
            <input type="submit" value="Add" />
        </Form>
    );
}

export default Add;
