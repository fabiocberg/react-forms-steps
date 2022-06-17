// export interface Step1PageProps {}

import { useRegister } from "./StepLayout";

const Step1Page = () => {
    const { register } = useRegister();
    return (
        <>
            <input type="text" {...register("name")} id="name" />
            <button type="submit">Próximo</button>
            <div>Estapa 1</div>
        </>
    );
};

export default Step1Page;
