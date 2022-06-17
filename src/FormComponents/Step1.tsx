import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

export interface Step1Props {
    onNext: () => void;
    register: UseFormRegister<FieldValues>;
}

const Step1 = ({ onNext, register }: Step1Props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Nome"
                id="name"
                {...register("name")}
            />
            <button onClick={onNext}>Próximo</button>
            <div>Estapa 1</div>
        </div>
    );
};

export default Step1;
