import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepsPage from "./FormComponents/StepsPage";
import Step1Page from "./FormRoutes/Step1Page";
import Step2Page from "./FormRoutes/Step2Page";
import StepLayout from "./FormRoutes/StepLayout";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StepsPage />} />
                <Route path="/form-steps" element={<StepLayout />}>
                    <Route index element={<Navigate to="step1-page" />} />
                    <Route path="step1-page" element={<Step1Page />} />
                    <Route path="step2-page" element={<Step2Page />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
