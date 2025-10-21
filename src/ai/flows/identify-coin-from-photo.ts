// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent that identifies a coin from a photo.
 *
 * - identifyCoinFromPhoto - A function that handles the coin identification process.
 * - IdentifyCoinFromPhotoInput - The input type for the identifyCoinFromPhoto function.
 * - IdentifyCoinFromPhotoOutput - The return type for the identifyCoinFromPhoto function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyCoinFromPhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of a coin, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type IdentifyCoinFromPhotoInput = z.infer<typeof IdentifyCoinFromPhotoInputSchema>;

const IdentifyCoinFromPhotoOutputSchema = z.object({
  identification: z.object({
    isCoin: z.boolean().describe('Whether or not the input is a coin.'),
    origin: z.string().describe('The origin of the identified coin.'),
    historicalPeriod: z.string().describe('The historical period of the coin.'),
    estimatedValue: z.string().describe('The estimated value of the coin.'),
  }),
  description: z.string().describe('A detailed description of the coin.'),
});
export type IdentifyCoinFromPhotoOutput = z.infer<typeof IdentifyCoinFromPhotoOutputSchema>;

export async function identifyCoinFromPhoto(input: IdentifyCoinFromPhotoInput): Promise<IdentifyCoinFromPhotoOutput> {
  return identifyCoinFromPhotoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyCoinFromPhotoPrompt',
  input: {schema: IdentifyCoinFromPhotoInputSchema},
  output: {schema: IdentifyCoinFromPhotoOutputSchema},
  prompt: `You are an expert numismatist specializing in identifying antique coins.

You will use this information to identify the coin, and provide details such as origin, historical period, and estimated value. You will also provide a detailed description of the coin.

Use the following as the primary source of information about the coin.

Photo: {{media url=photoDataUri}}`,
});

const identifyCoinFromPhotoFlow = ai.defineFlow(
  {
    name: 'identifyCoinFromPhotoFlow',
    inputSchema: IdentifyCoinFromPhotoInputSchema,
    outputSchema: IdentifyCoinFromPhotoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
