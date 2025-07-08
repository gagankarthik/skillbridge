"use client";

// This file is used to configure Amplify in a Next.js application.
// It imports the Amplify library and the outputs from the Amplify project.

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true })

export default function ConfigureAmplify() {
  return null;
}