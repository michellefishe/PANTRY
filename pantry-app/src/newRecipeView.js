const newRecView = () => {
    return (
        <body className="App-NewRecipe">  
            <form>  
            <b> Select you favourite tutorial site using dropdown list </b>  
            <select id = "myList" onchange = "favTutorial()" >  
                <option> ---Choose tutorial--- </option>  
                <option> w3schools </option>  
                <option> Javatpoint </option>  
                <option> tutorialspoint </option>  
                <option> geeksforgeeks </option>  
            </select>  
            </form>  
        </body>  
    );
}

export default newRecView;