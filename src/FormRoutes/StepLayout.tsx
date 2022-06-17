// export interface StepLayoutProps {}

import { useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import {
    Outlet,
    useNavigate,
    useOutletContext,
    useRoutes,
} from "react-router-dom";

type ContextType = { register: UseFormRegister<FieldValues> };

const StepLayout = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const next = (data: any) => {
        if (step === 0) {
            setStep(step + 1);
            navigate("/form-steps/step2-page");
        } else {
            console.log(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(next)}>
            <Outlet context={{ register }} />
        </form>
    );
};

export default StepLayout;

export function useRegister() {
    return useOutletContext<ContextType>();
}
