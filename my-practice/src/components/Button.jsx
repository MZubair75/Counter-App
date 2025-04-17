function hello(){
    console.log("Hello, World!");
}
function Pupo(){
    console.log("Bye!");
}
const Button = () => {
  return (
    <div>
        <button onClick={hello}>CLICK ME!</button>
        <p onMouseOver={Pupo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore porro amet, nulla distinctio dignissimos architecto soluta incidunt recusandae ducimus sunt! Eveniet natus sit fuga aliquam fugiat illo hic perspiciatis.</p>
    </div>
  )
}

export default Button