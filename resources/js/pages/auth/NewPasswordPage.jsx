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
import { ModeToggle } from '@/components/ui/mode-toggle';

const NewPasswordPage = () => {
  return (
    <main>
      <PageMeta title="Forgot Password" description="Welcome to the fittora"></PageMeta>
        <div className="flex justify-center items-center min-h-screen">
              <div className='fixed top-4 left-4 z-50'>
                  <ModeToggle></ModeToggle>
              </div>
              <Card className="w-full max-w-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold">Create New Password</CardTitle>
                <CardDescription>
                  Enter a new password for your account.
                </CardDescription>
                
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="password">New Password</Label>
                      <Input
                        id="email"
                        type="password"
                        placeholder="Enter your new password"
                        required
                      />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="password-confirmation">Password Confirmation</Label>
                      <Input
                        id="password-confirmation"
                        type="password"
                        placeholder="Enter password confirmation"
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </CardFooter>
            </Card>
        </div>
    </main>
  )
}

export default NewPasswordPage
