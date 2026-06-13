import React from 'react'
import { Card,
        CardHeader,
        CardFooter,
        CardTitle,
        CardDescription,
        CardContent,} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import PageMeta from '../../components/common/PageMeta'

const SignUpPage = () => {
   return (
    <main>
       <PageMeta title="Sign Up" description="Welcome to the fittora"></PageMeta>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Create Account</CardTitle>
          <CardDescription>
            Welcome! Let's get your account set up.
          </CardDescription>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className='flex gap-4'>
                  <div className="grid gap-2 flex-1">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="email"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password-confirmation">Password Confirmation</Label>
                </div>
                <Input id="password-confirmation" type="password" placeholder="Enter your password confirmation" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        <div className="my-4 flex items-center w-full">
          <div className="flex-1 border-t border-gray-300" />

            <span className="mx-4 text-sm text-muted-foreground whitespace-nowrap">
      Or continue with
    </span>

          <div className="flex-1 border-t border-gray-300" />
        </div>
          <Button variant="outline" className="w-full">
            Sign Up with Google
          </Button>
          <p className='mt-3'>Already have a account? <a
                  href="/signin"
                  className="ml-auto inline-block text-sm text-primary"
              >
                  Sign in
              </a></p>
        </CardFooter>
      </Card>
      </div>
    </main>
  )
}

export default SignUpPage
