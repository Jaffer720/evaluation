"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Better Auth routes are nested under /api/auth; ensure we point to them even without env config.
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL ?? "/api/auth",
});