import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@sanityConfig/schemas';

export default defineConfig({
  projectId: '80ylmqzb', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset
  title: 'Sanity Studio',
  apiVersion: '2023-10-05', // Latest version
  basePath: '/admin', // The path where Sanity Studio will be accessible
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
