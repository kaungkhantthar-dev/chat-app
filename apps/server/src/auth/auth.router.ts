import { procedure, router } from '@server/trpc/trpc';

import { signupSchema, loginSchema } from '@shared/schemas';

export const authRouter = router({
  signup: procedure.input(signupSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    console.log({ email, password }, 'from signup');
    return ctx.authService.signup(email, password);
  }),

  login: procedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    return ctx.authService.login(email, password);
  }),
});
