import { ChangeEvent } from 'react';
import { Input as AntdInput } from 'antd';
interface Props {
    value: string;
    className?: string;
    onChange: (value: string) => void;
}
export const Input = ({ value, onChange, className }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return <AntdInput value={value} onChange={handleChange} className={`w-full ${className}`} />;
};
