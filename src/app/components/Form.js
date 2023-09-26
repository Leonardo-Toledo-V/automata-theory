import React, { useState, useEffect } from "react";
import { Avatar, Input } from "@nextui-org/react";
import ModalNext from "./Modal";

export default function Form() {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(true);
    const [q0, setQ0] = useState(true);
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);
    const [q7, setQ7] = useState(false);
    const [q8, setQ8] = useState(false);
    const [q9, setQ9] = useState(false);
    const [q10, setQ10] = useState(false);
    const [q11, setQ11] = useState(false);
    const [q12, setQ12] = useState(false);
    const [q13, setQ13] = useState(false);
    const [q14, setQ14] = useState(false);
    const [q15, setQ15] = useState(false);
    const [q16, setQ16] = useState(false);

    useEffect(() => {
        validateAutomate(value);
        if (value === "") {
            setQ1(false);
            setQ2(false);
            setQ3(false);
            setQ4(false);
            setQ5(false);
            setQ6(false);
            setQ7(false);
            setQ8(false);
            setQ9(false);
            setQ10(false);
            setQ11(false);
            setQ12(false);
            setQ13(false);
            setQ14(false);
            setQ15(false);
            setQ16(false);
            setIsInvalid(true);
        }
    }, [value]);

    const validateAutomate = (automate) => {
        const automateArray = automate.toUpperCase().split("");
        if (automateArray.length > 9) return setIsInvalid(true);
        switch (automateArray[0]) {
            case "S":
                setQ1(true);
                if (automateArray[1] === "Z") {
                    setQ2(true);
                    if (automateArray[2] === "-") {
                        setQ3(true);
                        const num1 = automateArray[3];
                        const num2 = automateArray[4];
                        const num3 = automateArray[5];
                        const num4 = automateArray[6];
                        if (parseInt(num1) >= 1) {
                            setQ4(true);
                            if (parseInt(num2) >= 0) {
                                setQ6(true);
                                if (parseInt(num3) >= 0) {
                                    setQ7(true);
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (parseInt(num1) === 0) {
                            setQ5(true);
                            if (parseInt(num2) === 0) {
                                setQ10(true);
                                if (parseInt(num3) === 0) {
                                    setQ12(true);
                                    if (parseInt(num4) >= 1) {
                                        setQ13(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {//Here
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                } else if (parseInt(num3) >= 1) {
                                    setQ11(true);
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            } else if (parseInt(num2) >= 1) {
                                setQ9(true);
                                if (parseInt(num3) >= 0) {
                                    setQ7(true)
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {//Here
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        setIsInvalid(true);
                    }
                } else {
                    setIsInvalid(true);
                }
                break;
            case "T":
                setQ15(true);
                if (automateArray[1] === "A" || automateArray[1] === "B") {
                    setQ2(true);
                    if (automateArray[2] === "-") {
                        setQ3(true);
                        const num1 = automateArray[3];
                        const num2 = automateArray[4];
                        const num3 = automateArray[5];
                        const num4 = automateArray[6];
                        if (parseInt(num1) >= 1) {
                            setQ4(true);
                            if (parseInt(num2) >= 0) {
                                setQ6(true);
                                if (parseInt(num3) >= 0) {
                                    setQ7(true);
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (parseInt(num1) === 0) {
                            setQ5(true);
                            if (parseInt(num2) === 0) {
                                setQ10(true);
                                if (parseInt(num3) === 0) {
                                    setQ12(true);
                                    if (parseInt(num4) >= 1) {
                                        setQ13(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                } else if (parseInt(num3) >= 1) {
                                    setQ11(true);
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            } else if (parseInt(num2) >= 1) {
                                setQ9(true);
                                if (parseInt(num3) >= 0) {
                                    setQ7(true)
                                    if (parseInt(num4) >= 0) {
                                        setQ8(true);
                                        if (automateArray[7] === "-") {
                                            setQ14(true);
                                            if (validateAlphabet(automateArray[8])) {
                                                setIsInvalid(false);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        setIsInvalid(true);
                    }
                }
        }
    };

    const validateAlphabet = (letter) => {
        const alphabet = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P",
            "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        ];
        if (letter !== undefined) {
            if (alphabet.includes(letter.toUpperCase())) {
                setQ16(true);
                return true;
            }
            else {
                false
            }
        }
    };

    return (
        <div className="mt-4 flex flex-col justify-center items-center gap-4">
            <div className="w-screen h-[400px]">
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-11 grid-rows-5 gap-4">
                        <div className="col-span-11 row-span-1 flex justify-around">
                            <div className="w-1/11 p-2 text-black">---------------</div>
                            <div className="w-1/11 p-2 text-black"> ---------------</div>
                            <div className="w-1/11 p-2 text-black"> ---------------</div>
                            <div className="w-1/11 p-2 text-black"> </div>
                            <div className="w-1/11 p-2 text-black mx-4"><Avatar isBordered color={q4 ? "primary" : "default"} name="Q4" /></div>
                            <div className="w-1/11 p-2 text-black mx-4"><Avatar isBordered color={q6 ? "primary" : "default"} name="Q6" /></div>
                            <div className="w-1/11 p-2 text-black mx-4"><Avatar isBordered color={q7 ? "primary" : "default"} name="Q7" /></div>
                            <div className="w-1/11 p-2 text-black mx-4"><Avatar isBordered color={q8 ? "primary" : "default"} name="Q8" /></div>
                            <div className="w-1/11 p-2 text-black"> </div>
                            <div className="w-1/11 p-2 text-black"> </div>
                            <div className="w-1/11 p-2 text-black"> </div>
                        </div>
                        <div className="col-span-11 row-span-1 bg-transparent flex justify-around">
                            <div className="w-1/11 p-2"><Avatar isBordered color={q0 ? "primary" : "default"} name="Q0" /></div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q1 ? "primary" : "default"} name="Q1" /></div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q2 ? "primary" : "default"} name="Q2" /></div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q3 ? "primary" : "default"} name="Q3" /></div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                        </div>
                        <div className="col-span-11 row-span-1 bg-transparent flex justify-around">
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2 ml-20"><Avatar isBordered color={q15 ? "primary" : "default"} name="Q15" /></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2 text-black ml-32">--------------------</div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q5 ? "primary" : "default"} name="Q5" /></div>
                            <div className="w-1/11 p-2 ml-12 "><Avatar isBordered color={q9 ? "primary" : "default"} name="Q9" /></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2 ml-64"><Avatar isBordered color={q14 ? "primary" : "default"} name="Q14" /></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2 ml-12"><Avatar isBordered color={q16 ? "primary" : "default"} name="Q16" /></div>
                        </div>
                        <div className="col-span-11 row-span-1 bg-transparent flex justify-around">
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2 text-black">------------</div>
                            <div className="w-1/11 p-2 ml-20"><Avatar isBordered color={q10 ? "primary" : "default"} name="Q10" /></div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q11 ? "primary" : "default"} name="Q11" /></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                            <div className="w-1/11 p-2"></div>
                        </div>
                        <div className="col-span-11 row-span-1 bg-transparent flex justify-around">
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2 text-black">------------ </div>
                            <div className="w-1/11 p-2 ml-12"><Avatar isBordered color={q12 ? "primary" : "default"} name="Q12" /></div>
                            <div className="w-1/11 p-2"><Avatar isBordered color={q13 ? "primary" : "default"} name="Q13" /></div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                            <div className="w-1/11 p-2"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-sm text-center font-inter mt-4">
                    <span className="bg-gradient-to-l from-[#ccd0d3] to-[#728596] text-transparent bg-clip-text">SZ-0001-A to TB-9999-Z</span>
                </h3>
                <Input
                    autoComplete="off"
                    label="Enter your automata:"
                    placeholder="Ex: SZ-0001-A"
                    isClearable
                    type="text"
                    variant="bordered"
                    onValueChange={setValue}
                    isInvalid={isInvalid}
                    color={isInvalid ? "#2c3e50" : "#ccd0d3"}
                    className="max-w-xs"
                />
            </div>
            {isInvalid ? "" : <ModalNext />}
        </div>
    );
}
