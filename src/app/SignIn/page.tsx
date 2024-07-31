'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
import { ChromeIcon, FacebookIcon, GithubIcon } from "../components/IconsSvg"

export default function SignInPage() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push('/dashboard')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Entrar</h1>
          <p className="mt-2 text-muted-foreground">Digite seu e-mail e senha para acessar sua conta.</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full" onClick={handleSignIn}>
            Sign In
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou entre com</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline">
            <FacebookIcon className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </div>
    </div>
  )
}