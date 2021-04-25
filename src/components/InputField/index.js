import {Input, Span} from './styles';

function InputField(props){
    const {placeHolder, type, errorMessage, register} = props;
    return (
        <>
            <Input type={type} placeHolder={placeHolder} {...register} />
            <Span>{errorMessage}</Span>
        </>
    );
}

export default InputField;
