export interface SelectInterface {
    name: string;
    onChange: (value: any) => any;
    defaultValue?: string;
    placeholder: string;
    className?: string;
    disabled?: boolean;
    isTwo?: boolean;
}
