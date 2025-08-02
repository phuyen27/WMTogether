import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { FieldError, useFormContext, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    fieldName: string;
    icon?: IconType;
    error?: FieldError;
}

const InputField = ({
    label,
    fieldName,
    icon,
    error,
    type,
    placeholder,
    id,
    required,
    value,
    onChange,
    // You can add more props here if needed
}: InputFieldProps) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-6 form-group">
            <label
                className="block mb-2 text-sm font-semibold text-gray-300"
                htmlFor={id || label}
            >
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        {React.createElement(icon)}
                    </div>
                )}
                <input
                    {...register(fieldName)}
                    id={id || label}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    aria-invalid={error ? 'true' : 'false'}
                    className={`w-full pr-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md border border-gray-700 shadow-md
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            hover:scale-[1.02] transition-all duration-300 ease-in-out ${icon ? 'pl-10' : 'pl-4'}`}
                />
            </div>
            {error && (
                <p role="alert" className="mt-2 text-sm text-red-600">
                    {error.message}
                </p>
            )}
        </div>
    );
};

InputField.displayName = 'InputField';

export default InputField;