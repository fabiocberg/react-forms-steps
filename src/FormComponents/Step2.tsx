export interface Step2Props {
    register: UseFormRegister<FieldValues>;
}

import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

const Step2 = ({ register }: Step2Props) => {
    return (
        <>
            <input
                placeholder="Email"
                type="email"
                {...register("email")}
                id="email"
            />
            <button type="submit">Enviar</button>
            <div>Estapa 2</div>
        </>
    );
};

export default Step2;
