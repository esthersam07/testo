/*React styling
1. inline {{}}
2. inline*/

function F1()
{
    const mystyle={
        color:"blue",
        backgrounColor:"black"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline style</h1>
            <h1 style={mystyle}>Internal style</h1>
            <h1 class="text-center text">Bootstrap style</h1>
        </div>
    )
}