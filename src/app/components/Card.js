import React from "react";

import {  Link, Radio, RadioGroup } from "@nextui-org/react";
import FormRegex from "./FormRegex";
import Form from "./Form";

export default function CardNext() {
    const [typeValidation, settypeValidation] = React.useState("Regex");
    return (
        <div
            className="max-w-[800px] font-inter">
            <div className="flex items-center flex-col gap-2">
                <RadioGroup
                className="mt-8"
                    orientation="horizontal"
                    value={typeValidation}
                    onValueChange={settypeValidation}
                >
                    <Radio value="Regex">Regex</Radio>
                    <Radio value="Native">Native</Radio>
                </RadioGroup>
                {typeValidation === "Regex" ? <FormRegex /> : <Form/>}
                <Link
                    className=" text-[#ccd0d3] mt-12"
                    isExternal
                    showAnchorIcon
                    href="https://github.com/Leonardo-Toledo-V/automata-theory"
                >
                    Visit source code on GitHub.
                </Link>
            </div>
        </div>
    );
}
