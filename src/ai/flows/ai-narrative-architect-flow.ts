'use server';
/**
 * @fileOverview An AI-powered storytelling tool that helps clients articulate their brand's narrative,
 * emotional tone, and high-fashion copy for creative projects with Brunst Studios.
 *
 * - generateNarrative - A function that generates a brand narrative and high-fashion copy.
 * - AiNarrativeArchitectInput - The input type for the generateNarrative function.
 * - AiNarrativeArchitectOutput - The return type for the generateNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiNarrativeArchitectInputSchema = z.object({
  brandName: z.string().describe("The name of the client's brand."),
  projectDescription: z
    .string()
    .describe('A detailed description of the creative project.'),
  targetAudience: z
    .string()
    .describe('The primary target audience for the creative project.'),
  desiredEmotionalTones: z
    .array(z.string())
    .describe(
      'A list of emotional tones the client wants to convey (e.g., luxury, avant-garde, minimalist, empowering).'
    ),
  keywords: z
    .array(z.string())
    .optional()
    .describe('Any specific keywords or phrases the client wants to include.'),
});
export type AiNarrativeArchitectInput = z.infer<
  typeof AiNarrativeArchitectInputSchema
>;

const AiNarrativeArchitectOutputSchema = z.object({
  narrativeSummary: z
    .string()
    .describe(
      "A concise, high-level summary of the brand's story for the creative project."
    ),
  highFashionCopy: z
    .array(z.string())
    .describe(
      'Several options for high-fashion, editorial-style copy suitable for a luxury brand website or campaign.'
    ),
  suggestedTones: z
    .array(z.string())
    .describe(
      'The AI\'s suggestion of the most prominent emotional tones captured and conveyed in the narrative.'
    ),
  brunstverseConnection: z
    .string()
    .describe(
      'A brief explanation of how this narrative connects to the overall \'Brunstverse of Creativity\' concept.'
    ),
});
export type AiNarrativeArchitectOutput = z.infer<
  typeof AiNarrativeArchitectOutputSchema
>;

export async function generateNarrative(
  input: AiNarrativeArchitectInput
): Promise<AiNarrativeArchitectOutput> {
  return aiNarrativeArchitectFlow(input);
}

const narrativeArchitectPrompt = ai.definePrompt({
  name: 'narrativeArchitectPrompt',
  input: {schema: AiNarrativeArchitectInputSchema},
  output: {schema: AiNarrativeArchitectOutputSchema},
  prompt: `You are an AI-powered narrative architect and luxury creative director for Brunst Studios.
Your task is to help a client articulate their brand's story and create high-fashion copy for their creative project.
Focus on emotion, motion, and typography, maintaining a minimal, elegant, and animation-driven aesthetic consistent with high-end brands like Apple, Aesop, and Rosberg Ventures.

Client Brand Name: {{{brandName}}}
Project Description: {{{projectDescription}}}
Target Audience: {{{targetAudience}}}
Desired Emotional Tones: {{#each desiredEmotionalTones}}- {{{this}}}\n{{/each}}
{{#if keywords}}
Additional Keywords/Phrases: {{#each keywords}}- {{{this}}}\n{{/each}}
{{/if}}

Craft a compelling narrative summary and several high-fashion copy options that resonate with the desired emotional tones and target audience.
Ensure the language is sophisticated, evocative, and suitable for a luxury editorial context. Explicitly mention how this narrative fits within the 'Brunstverse of Creativity'.`,
});

const aiNarrativeArchitectFlow = ai.defineFlow(
  {
    name: 'aiNarrativeArchitectFlow',
    inputSchema: AiNarrativeArchitectInputSchema,
    outputSchema: AiNarrativeArchitectOutputSchema,
  },
  async (input) => {
    const {output} = await narrativeArchitectPrompt(input);
    if (!output) {
      throw new Error('Failed to generate narrative and copy.');
    }
    return output;
  }
);
