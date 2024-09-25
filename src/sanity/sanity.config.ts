import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@sanityConfig/schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Sanity Studio',
  apiVersion: '2023-10-05', // Latest version
  basePath: '/admin', // The path where Sanity Studio will be accessible
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
