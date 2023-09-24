import React from "react";

import { Divider, Link } from "@nextui-org/react";
import Form from "./Form";

export default function CardNext() {
    return (
    <div
        className="max-w-[800px] font-inter">
            <div>
                <p className="font-inter text-lg font-semibold text-gray-300 mb-4">I have created this page for demonstration purposes to be able to validate an automata</p>
            </div>
            <Divider />
            <div className="flex items-center flex-col gap-2">
                <Form/>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/Leonardo-Toledo-V"
                >
                    Visit source code on GitHub.
                </Link>
            </div>
        </div>
    );
}
