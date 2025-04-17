
function handleSubmit(event){
    console.log("FORM was Submit");
    event.preventDefault();
    
}
const Form = () => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="WRITE SOMETHING"/>
            <button>SUBMIT</button>
        </form>


    </div>
  )
}

export default Form