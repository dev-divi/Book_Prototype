import b3 from '../book-images/3.png'; 
//write a script that writes these pages for me 

// it uses x + 1 when inputting the next page 
const page2 = () => {
    return ( 
        <>
            <div className="book-page"> 
                <img src={b3} className="App-logo" alt="logo" />
                <br/> 
                page 3 
            </div>
            
        </>
     );
}
 
export default page2;