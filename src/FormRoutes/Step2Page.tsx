// export interface Step2PageProps {}

import { useRegister } from "./StepLayout";

const Step2Page = () => {
    const { register } = useRegister();

    return (
        <>
            <input type="email" {...register("email")} id="email" />
            <button type="submit">Enviar</button>
            <div>Estapa 2</div>
        </>
    );
};

export default Step2Page;
