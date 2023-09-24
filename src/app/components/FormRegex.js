import { Input } from '@nextui-org/react'
import React, { useMemo, useState } from 'react'

export default function FormRegex() {
    const [value, setValue] = useState("SZ-0001-A");

    const Regex = (value) => value.match(/^(SZ|T[AB])-(?!0000)[0-9]{4}-([A-Z])$/i);

    const isInvalid = useMemo(() => {
        if (value === "") return false;
        return Regex(value) ? false : true;
    }, [value]);

    return (
        <div className='mt-4 flex flex-col justify-center items-center gap-4'>
            <div className='flex'>
                <Input
                    label="Enter your automata:"
                    placeholder="Ex: SZ-0001-A"
                    isClearable
                    type="text"
                    variant="bordered"
                    isInvalid={isInvalid}
                    color={isInvalid ? "#ccd0d3" : "#2c3e50"}
                    onValueChange={setValue}
                    className="max-w-xs"
                />
            </div>
        </div>
    )
}
