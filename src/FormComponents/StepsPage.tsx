// export interface StepsPageProps {}

import { useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";

const StepsPage = () => {
    const [step, setStep] = useState(0);
    const { register, handleSubmit } = useForm();

    const handleNext = () => {
        setStep(step + 1);
    };

    const send = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(send)}>
            {step === 0 && <Step1 onNext={handleNext} register={register} />}
            {step === 1 && <Step2 register={register} />}
        </form>
    );
};

export default StepsPage;
