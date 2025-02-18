import './front-page-heading-style.scss'

export default function FrontPageHeading(){
    return (
        <section className='front-page-heading'>
            <div className='front-page-heading__content'>
                <h1 className='front-page-heading__text'>Landrup<br/><span>Dans</span></h1>
                <div className='front-page-heading__underline'></div>
            </div>
        </section>
    );
}