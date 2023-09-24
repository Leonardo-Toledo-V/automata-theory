import { Input } from '@nextui-org/react'
import React, {useMemo, useState} from 'react'

export default function Form() {

    const [value, setValue] = useState("SZ-0001-A");

    const validateEmail = (value) => value.match( /^(SZ|T[AB])-(?!0000)[0-9]{4}-([A-Z])$/i);

    const isInvalid = useMemo(() => { 
        if (value === "") return false;
        return validateEmail(value) ? false : true;
    }, [value]);

    return (
        <div className='mt-4'>
            <Input
                value={value}
                type="email"
                label="Enter your automata"
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={isInvalid && "Please enter a valid automata"}
                onValueChange={setValue}
                className="max-w-xs"
            />
        </div>
    )
}
