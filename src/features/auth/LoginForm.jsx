import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";
import { toast } from 'react-toastify'

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });
  //sent request
  // localstorage.setItem('token)

  const { login } = useAuth()

  const handleSubmitForm = e => {
    e.preventDefault()
    login(input).catch(err => {
      toast.error(err.response.data.message)
    })
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />

      <LoginInput
        type="password"
        placeholder="Password"
        value={input.password}
        onChange = {e => setInput({... input, password: e.target.value})}
      />

      <LoginButton />
    </form>
  );
}
