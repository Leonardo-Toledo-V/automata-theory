import { Button, Input } from '@nextui-org/react'
import React, { useMemo, useState } from 'react'

export default function Form() {
    const [value, setValue] = useState("SZ-0001-A");



    function validateAutomate(){
        console.log(value.toString)
    }

    return (
        <div className='mt-4 flex flex-col justify-center items-center gap-4'>
            <form className='flex flex-col gap-4' >
                <Input
                    label="Enter your automata:"
                    placeholder="Ex: SZ-0001-A"
                    isClearable
                    type="text"
                    variant="bordered"
                    onValueChange={setValue}
                    className="max-w-xs"
                />
                <Button color="default" onPress={validateAutomate}>
                    Check
                </Button>
            </form>
        </div>
    )
}
