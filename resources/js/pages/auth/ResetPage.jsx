import React from 'react'
import PageMeta from '../../components/common/PageMeta'
import { Card,
        CardHeader,
        CardFooter,
        CardTitle,
        CardDescription,
        CardContent,} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ResetPage = () => {
  return (
    <main>
      <PageMeta title="Forgot Password" description="Welcome to the fittora"></PageMeta>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email below to forgot your password
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Reset Password
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

export default ResetPage
