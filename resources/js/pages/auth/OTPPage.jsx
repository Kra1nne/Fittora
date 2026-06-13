import React from 'react'
import PageMeta from '../../components/common/PageMeta'
import { Card,
        CardHeader,
        CardFooter,
        CardTitle,
        CardDescription,
        CardContent,} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Field } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const OTPPage = () => {
  return (
    <main>
      <PageMeta title="OTP" description="Welcome to the fittora"></PageMeta>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">OTP Verification</CardTitle>
          <CardDescription>
            Enter the verification code sent to your email address.
          </CardDescription>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex items-center justify-center gap-6">
              <Field className="w-fit">
                <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                    <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-14 w-14 text-xl"  />
                    <InputOTPSlot index={1} className="h-14 w-14 text-xl"  />
                    <InputOTPSlot index={2} className="h-14 w-14 text-xl"  />
                    <InputOTPSlot index={3} className="h-14 w-14 text-xl"  />
                    <InputOTPSlot index={4} className="h-14 w-14 text-xl"  />
                    <InputOTPSlot index={5} className="h-14 w-14 text-xl"  />
                    </InputOTPGroup>
                </InputOTP>
                </Field>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Submit
          </Button>
          <p className='mt-3'>Didn't receive the code? <a
                  href="#"
                  className="ml-auto inline-block text-sm text-primary"
              >
                  Resend
              </a></p>
        </CardFooter>
      </Card>
      </div>
    </main>
  )
}

export default OTPPage
