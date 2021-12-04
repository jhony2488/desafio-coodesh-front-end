export interface SelectInterface {
    name: string;
    onChange: () => any;
    defaultValue?: string;
    placeholder: string;
    className?: string;
    disabled?: boolean;
    isTwo?: boolean;
}
