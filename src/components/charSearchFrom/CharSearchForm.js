import { useForm } from "react-hook-form"
import "./charSearchForm.scss"

const CharSearchForm = () =>{

  const register = useForm()

  return(
    <div className="">
      <h1>Or find a character by name</h1>

      <form onSubmit={handleSubmit((data)=>{
        console.log(data)
      })}>
        <input {...register('charName')} placeholder="Enter character name"/>
      </form>
    </div>
  )
}

export default CharSearchForm