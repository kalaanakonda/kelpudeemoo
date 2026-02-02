'use server';

/**
 * @fileOverview This file defines a Genkit flow for simulating restaking rewards.
 *
 * - `simulateRestakingRewards` - A function that takes restaking parameters and returns estimated rewards.
 * - `RestakingSimulationInput` - The input type for the `simulateRestakingRewards` function.
 * - `RestakingSimulationOutput` - The return type for the `simulateRestakingRewards` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RestakingSimulationInputSchema = z.object({
  ethAmount: z
    .number()
    .describe('The amount of ETH to restake.'),
  apr: z
    .number()
    .describe('The estimated Annual Percentage Rate (APR) for restaking.'),
  periodLengthDays: z
    .number()
    .describe('The length of the restaking period in days.'),
});
export type RestakingSimulationInput = z.infer<typeof RestakingSimulationInputSchema>;

const RestakingSimulationOutputSchema = z.object({
  estimatedRewards: z
    .number()
    .describe('The estimated rewards earned during the restaking period.'),
  formattedRewards: z
    .string()
    .describe('The estimated rewards formatted as a string with currency symbol.'),
});
export type RestakingSimulationOutput = z.infer<typeof RestakingSimulationOutputSchema>;

export async function simulateRestakingRewards(input: RestakingSimulationInput): Promise<RestakingSimulationOutput> {
  return restakingSimulationFlow(input);
}

const restakingSimulationPrompt = ai.definePrompt({
  name: 'restakingSimulationPrompt',
  input: {schema: RestakingSimulationInputSchema},
  output: {schema: RestakingSimulationOutputSchema},
  prompt: `You are a financial advisor specializing in restaking.
  You will calculate the estimated rewards a user will receive from restaking their ETH.
  The user will provide the amount of ETH to restake, the estimated APR, and the length of the restaking period in days.

  Calculate the estimated rewards using the following formula:
  rewards = ethAmount * (apr / 100) * (periodLengthDays / 365)

  Format the 'formattedRewards' field as a string with the '$' symbol and 2 decimal places based on the calculated rewards.

  ETH Amount: {{{ethAmount}}}
  APR: {{{apr}}}
  Period Length (Days): {{{periodLengthDays}}}
  `,
});

const restakingSimulationFlow = ai.defineFlow(
  {
    name: 'restakingSimulationFlow',
    inputSchema: RestakingSimulationInputSchema,
    outputSchema: RestakingSimulationOutputSchema,
  },
  async input => {
    const rewards = input.ethAmount * (input.apr / 100) * (input.periodLengthDays / 365);
    const formattedRewards = `$${rewards.toFixed(2)}`;
    return {
      estimatedRewards: rewards,
      formattedRewards: formattedRewards,
    };
  }
);
