import './Error.css'

function Error({dark}){
    return(
        <> 
        <main className="frameC center" >
            <h1 style={{fontFamily: 'Helvetica'}}>Error: page not found!</h1>
            <img className='imgSprite' src="/ded_bred.png" alt="" />
            <p className='errorMSG1'>Theres nothing here...</p>
            <p className='errorMSG2'>wonder why that is...</p>
            <p className='errorMSG3'>if only there were text telling me why...</p>
        </main>
            
        </>
    );
}
export default Error;