// Styles
import './button-style.scss';


// Types
type ButtonProps = {
    text: string,
    onClick?: VoidFunction,
    className?: string,
    disabled?: boolean,
    formAction?: ( formData: FormData ) => void;
}

/**
 * @description - Button component with primary styling
 * * Make sure to mark the parent component with 'use client' at the top of the file; to ensure the component is rendered on the client side
 * 
 * @param {string} text - Button text
 * @param {string} className - Additional class names
 * @param {function} onClick - Click event handler
 * @param {boolean} disabled - Button disabled state
 * @param {function} formAction - Form action handler
 * @returns {JSX.Element} - Button component
 * 
 * @example
 * <Button
 *      text="Contact Us"
     * />
 * @example
 * <Button
 *      text="Contact Us"
 *      onClick={() => alert('hello world')}
 *      className="contactButton"
 *      disabled
 * />
 */
export default function Button(
    {
        text,
        className,
        onClick,
        disabled,
        formAction
    }: ButtonProps){
    return(
        <button
            className={`baseButtonStyling${ className ? ' ${className}' : ''}`}
            onClick={ onClick ? onClick : undefined}
            disabled={ disabled ? disabled : undefined}
            formAction={ formAction ? formAction : undefined }
        >
            { text }
        </button>
    )
};