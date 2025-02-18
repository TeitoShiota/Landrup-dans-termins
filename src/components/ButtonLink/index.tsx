import Link from "next/link";

// Styles
import './button-link.scss';

type ButtonLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function ButtonLink(
    {
        href = '/',
        className,
        children
    } : ButtonLinkProps
){
    return (
        <Link
            href={ href }
            className={`base-button-link${ className ? ` ${className}` : ''}`}
        >
            { children }
        </Link>
    )
}