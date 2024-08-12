import { Input } from 'antd';
import { ChangeEvent } from 'react';

const { TextArea: AntdTextArea } = Input;

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const TextArea = ({ value, onChange }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <AntdTextArea
            showCount
            maxLength={100}
            value={value}
            onChange={handleChange}
            placeholder="disable resize"
            style={{ height: 120, resize: 'none' }}
        />
    );
};
