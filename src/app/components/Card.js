import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function CardNext() {
    return (
    <Card 
        isBlurred
        className="max-w-[800px] font-inter">
            <CardHeader className="flex gap-3">
            
                <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    );
}
