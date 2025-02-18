// Styles
import './page-heading-style.scss';

export default function PageHeading(
    {
        text = ''
    } : {
        text: string
    }
){
    return (
        <h2 className="base-page-heading">{ text }</h2>
    )
}