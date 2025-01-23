import type { CLIConfiguration } from "@uniformdev/cli";

const config: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      aggregate: {},
      asset: {},
      category: {},
      component: {},
      componentPattern: { publish: true },
      composition: { publish: true },
      compositionPattern: { publish: true },
      contentType: {},
      dataType: {},
      enrichment: {},
      entry: { publish: true },
      entryPattern: { publish: true },
      locale: {},
      previewUrl: {},
      previewViewport: {},
      projectMapDefinition: {},
      projectMapNode: {},
      prompt: {},
      quirk: {},
      redirect: {},
      signal: {},
      test: {},
      workflow: {},
    },
    directory: "./content/",
    format: "yaml",
  },
};

module.exports = config;
