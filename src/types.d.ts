export type Config = {
  technicUrl: string;
  curseforgeUrl: string;
  wikiUrl: string;
  installGuideUrl: string;
  discordUrl: string;
  githubUrl: string;
  bugReportsUrl: string;
  repoUrl: string;
  latestVersion: string;
  versions: Record<string, VersionEntry>;
};

export type VersionEntry = {
  title?: string;
  description?: string;
  releaseDate?: string; // YYYY/MM/DD
  maxJavaVersion?: number; // e.g., 21 or 25
  mmc?: {
    java8Url?: string;
    java17_2XUrl?: string;
  };
  server?: {
    java8Url?: string;
    java17_2XUrl?: string;
  };
  client?: {
    java8Url?: string;
  };
};
