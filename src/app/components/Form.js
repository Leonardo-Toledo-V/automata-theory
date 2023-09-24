import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import IsValid from './IsValid';

export default function Form() {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        validateAutomate(value);
    }

    function validateAutomate(automate) {
        const automateArray = automate.toUpperCase().split('');
        if(automateArray.length !== 9) return setIsInvalid(true)
        switch (automateArray[0]) {
            case 'S':
                if (automateArray[1] === 'Z') {
                    if (automateArray[2] === '-') {
                        const num1 = automateArray[3]
                        const num2 = automateArray[4]
                        const num3 = automateArray[5]
                        const num4 = automateArray[6]
                        const slazh = automateArray[7]
                        if (validateNumbers(num1, num2, num3, num4, slazh) === true) {
                            if (validateAlphabet(automateArray[8]) === true) {
                                setIsInvalid(false)
                            } else {
                                setIsInvalid(true)
                            }
                        } else {
                            setIsInvalid(true)
                        }
                    } else {
                        setIsInvalid(true)
                    }
                } else {
                    setIsInvalid(true)
                }
                break;
            case 'T':
                if(automateArray[1]=== 'A' || automateArray[0] === 'B'){
                    if (automateArray[2] === '-') {
                        const num1 = automateArray[3]
                        const num2 = automateArray[4]
                        const num3 = automateArray[5]
                        const num4 = automateArray[6]
                        const slazh = automateArray[7]
                        if (validateNumbers(num1, num2, num3, num4, slazh) === true) {
                            if (validateAlphabet(automateArray[8]) === true) {
                                setIsInvalid(false)
                            } else {
                                setIsInvalid(true)
                            }
                        } else {
                            setIsInvalid(true)
                        }
                    } else {
                        setIsInvalid(true)
                    }
                }
                break;
            default: {
                setIsInvalid(true);
            }
        }
    }

    function validateNumbers(num1, num2, num3, num4, slazh) {
        if (slazh === '-') {
            const concatenated = `${num1}${num2}${num3}${num4}`;
            const parsedNumber = parseInt(concatenated);
            return parsedNumber >= 1 && parsedNumber <= 9999 && concatenated.length === 4;
        }
        return false;
    }

    function validateAlphabet(letter) {
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (alphabet.indexOf(letter.toUpperCase()) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className='mt-4 flex flex-col justify-center items-center gap-4'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <Input
                    autoComplete='off'
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
                <Button
                    type='submit'
                    color="default">
                    Check
                </Button>
            </form>
            {isInvalid ? "Automate false": "Automate true"}
        </div>
    )
}
