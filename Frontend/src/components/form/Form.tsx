import React from 'react';
import {
    useForm,
    UseFormProps,
    FieldValues,
    SubmitHandler,
    Resolver,
    FormProvider,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormProps<TFormValues extends FieldValues> {
    name: string;
    /** The Zod schema for form validation. */
    schema: z.ZodSchema<TFormValues>;
    /** The function to call when the form is submitted and validation passes. */
    onSubmit: SubmitHandler<TFormValues>;
    /** The content of the form. */
    children: React.ReactNode;
    /** Optional useForm configuration. */
    options?: UseFormProps<TFormValues> & {
        resolver?: Resolver<TFormValues>;
    };
    /** Optional CSS class for the form element. */
    className?: string;
    /** Optional ID for the form element. */
    id?: string;
    /** Optional autocomplete attribute for the form element. */
    autoComplete?: 'on' | 'off';
    // Add any other specific HTML form attributes you might need.
}

/**
 * A generic and reusable form component that handles validation and submission.
 */
export const Form = <TFormValues extends FieldValues>({
    name,
    schema,
    onSubmit,
    children,
    options,
    className,
    id,
    autoComplete,
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        ...options,
        resolver: zodResolver(schema) as Resolver<TFormValues>,
    });

    return (
        <FormProvider {...methods}>
            <h2 className="text-4xl font-extrabold mb-10 text-center text-orange-500 drop-shadow-lg">
                {name}
            </h2>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={className}
                id={id}
                autoComplete={autoComplete}
            >
                {children}
            </form>
        </FormProvider >
    );
};