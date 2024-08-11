'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
    return <button className="bg-green-400">{children}</button>;
};
