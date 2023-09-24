import React from "react";

import { Divider, Link, Radio, RadioGroup } from "@nextui-org/react";
import FormRegex from "./FormRegex";
import Form from "./Form";

export default function CardNext() {
    const [typeValidation, settypeValidation] = React.useState("Regex");
    return (
        <div
            className="max-w-[800px] font-inter">
            <div>
                <p className="font-inter text-sm truncate max-w-[200px] lg:max-w-7xl xl:text-lg font-semibold text-[#ccd0d3] mb-4 text-center">I have created this page for demonstration purposes to be able to validate an automata.</p>
            </div>
            <Divider />
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
