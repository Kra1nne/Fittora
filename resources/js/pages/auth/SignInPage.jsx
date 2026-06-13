import React from 'react'
import PageMeta from '../../components/common/PageMeta';
import { Card,
        CardHeader,
        CardFooter,
        CardTitle,
        CardDescription,
        CardContent,} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const SignInPage = () => {
  return (
    <main>
      <PageMeta title="Sign In" description="Welcome to the fittora"></PageMeta>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email below to access your account
          </CardDescription>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
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
            </div>
          </form>
          <div className='flex justify-between items-center mt-1'>
              <div className='flex justify-center items-center gap-1'>
                  <Input
                  className="accent-primary"
                      id="email"
                      type="checkbox"
                      required
                  />
                  Remember
              </div>
              <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:text-primary"
              >
                  Forgot your password?
              </a>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        <div className="my-4 flex items-center w-full">
          <div className="flex-1 border-t border-gray-300" />

            <span className="mx-4 text-sm text-muted-foreground whitespace-nowrap">
      Or continue with
    </span>

          <div className="flex-1 border-t border-gray-300" />
        </div>
          <Button variant="outline" className="w-full">
            Sign In with Google
          </Button>
          <p className='mt-3'>Don't have a account? <a
                  href="/signup"
                  className="ml-auto inline-block text-sm text-primary"
              >
                  Sign up
              </a></p>
        </CardFooter>
      </Card>
      </div>
    </main>
  )
}

export default SignInPage
