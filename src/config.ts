import type { Config } from "./types";

const config: Config = {
  technicUrl: "https://www.technicpack.net/modpack/mcnewhorizons.677387",
  curseforgeUrl: "https://www.curseforge.com/minecraft/modpacks/gt-new-horizons",
  wikiUrl: "https://wiki.gtnewhorizons.com/wiki/Main_Page",
  installGuideUrl: "https://wiki.gtnewhorizons.com/wiki/Installing_and_Migrating",
  discordUrl: "https://discord.gg/gtnh",
  githubUrl: "https://github.com/GTNewHorizons",
  bugReportsUrl: "https://github.com/GTNewHorizons/GT-New-Horizons-Modpack/issues",
  repoUrl: "https://github.com/GTNewHorizons/GTNewHorizons.github.io",
  // Will be used for the Downloads page, should point to a valid version
  latestVersion: "2.8.0",
  // Will be used for the Versions History page
  versions: {
    "2.8.0": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.4%20to%202.8.0.md">Click here to get the changelog</a>',
      releaseDate: "2025/09/27",
      maxJavaVersion: 25,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.8.0_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.8.0_Java_17-25.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.8.0_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.8.0_Server_Java_17-25.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.8.0_Client_Java_8.zip",
      },
    },
    "2.7.4": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.3%20to%202.7.4.md">Click here to get the changelog</a>',
      releaseDate: "2025/04/13",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.4_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.4_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.4_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.4_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.7.4_Client_Java_8.zip",
      },
    },
    "2.7.3": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.2%20to%202.7.3.md">Click here to get the changelog</a>',
      releaseDate: "2025/03/02",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.3_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.3_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.3_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.3_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.7.3_Client_Java_8.zip",
      },
    },
    "2.7.2": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.1%20to%202.7.2.md">Click here to get the changelog</a>',
      releaseDate: "2024/12/31",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.2_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.2_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.2_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.2_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.7.2_Client_Java_8.zip",
      },
    },
    "2.7.1": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0%20to%202.7.1.md">Click here to get the changelog</a>',
      releaseDate: "2024/12/20",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.1_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.1_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.1_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.1_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.7.1_Client_Java_8.zip",
      },
    },
    "2.7.0": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-RC-3%20to%202.7.0.md">Click here to get the changelog</a>',
      releaseDate: "2024/12/08",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.0_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.7.0_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.0_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.7.0_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.7.0_Client_Java_8.zip",
      },
    },
    "2.6.1": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.6.0%20to%202.6.1.md">Click here to get the changelog</a>',
      releaseDate: "2024/05/21",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.6.1_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.6.1_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.6.1_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.6.1_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.6.1_Client_Java_8.zip",
      },
    },
    "2.6.0": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.6.0-beta-3%20to%202.6.0.md">Click here to get the changelog</a>',
      releaseDate: "2024/04/28",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.6.0_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.6.0_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.6.0_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.6.0_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.6.0_Client_Java_8.zip",
      },
    },
    "2.5.1": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.5.0%20to%202.5.1.md">Click here to get the changelog</a>',
      releaseDate: "2023/12/20",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.5.1_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.5.1_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.5.1_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.5.1_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.5.1_Client_Java_8.zip",
      },
    },
    "2.5.0": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/older%20changelogs/changelog%20from%202.5.0-RC-1%20to%202.5.0.md">Click here to get the changelog</a>',
      releaseDate: "2023/12/17",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.5.0_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.5.0_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.5.0_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.5.0_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.5.0_Client_Java_8.zip",
      },
    },
    "2.4.0": {
      title: "Stable release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/older%20changelogs/changelog%20from%202.3.0%20to%202.4.0.md">Click here to get the changelog</a>',
      releaseDate: "2023/09/03",
      maxJavaVersion: 20,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.4.0_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_2.4.0_Java_17-20.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.4.0_Server_Java_8.zip",
        java17_2XUrl: "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_2.4.0_Server_Java_17-20.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_2.4.0_Client_Java_8.zip",
      },
    },
    "2.4.1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/older%20changelogs/changelog%20from%202.4.0%20to%202.4.1.md">Click here to get the changelog</a>',
      releaseDate: "2023/09/25",
      maxJavaVersion: 20,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.4.1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.4.1_Java_17-20.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.4.1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.4.1_Server_Java_17-20.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.4.1_Client_Java_8.zip",
      },
    },
    "2.5.0-beta-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/older%20changelogs/changelog%20from%202.4.0%20to%202.5.0-beta-1.md">Click here to get the changelog</a>',
      releaseDate: "2023/12/09",
      maxJavaVersion: 20,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.5.0-beta-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.5.0-beta-1_Java_17-20.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.5.0-beta-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.5.0-beta-1_Server_Java_17-20.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.5.0-beta-1_Client_Java_8.zip",
      },
    },
    "2.5.0-RC1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/older%20changelogs/changelog%20from%202.5.0-beta-1%20to%202.5.0-RC-1.md">Click here to get the changelog</a>',
      releaseDate: "2023/12/14",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.5.0-RC1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.5.0-RC1_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.5.0-RC1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.5.0-RC1_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.5.0-RC1_Client_Java_8.zip",
      },
    },
    "2.6.0-beta-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.5.1%20to%202.6.0-beta-1.md">Click here to get the changelog</a>',
      releaseDate: "2024/03/23",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-1_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-1_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.6.0-beta-1_Client_Java_8.zip",
      },
    },
    "2.6.0-beta-2": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.6.0-beta-1%20to%202.6.0-beta-2.md">Click here to get the changelog</a>',
      releaseDate: "2024/04/02",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-2_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-2_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-2_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-2_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.6.0-beta-2_Client_Java_8.zip",
      },
    },
    "2.6.0-beta-3": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.6.0-beta-2%20to%202.6.0-beta-3.md">Click here to get the changelog</a>',
      releaseDate: "2024/04/09",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-3_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.6.0-beta-3_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-3_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.6.0-beta-3_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.6.0-beta-3_Client_Java_8.zip",
      },
    },
    "2.7.0-beta-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.6.1%20to%202.7.0-beta-1.md">Click here to get the changelog</a>',
      releaseDate: "2024/09/21",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-1_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-1_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-beta-1_Client_Java_8.zip",
      },
    },
    "2.7.0-beta-2": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-beta-1%20to%202.7.0-beta-2.md">Click here to get the changelog</a>',
      releaseDate: "2024/09/29",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-2_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-2_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-2_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-2_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-beta-2_Client_Java_8.zip",
      },
    },
    "2.7.0-beta-3": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-beta-2%20to%202.7.0-beta-3.md">Click here to get the changelog</a>',
      releaseDate: "2024/10/21",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-3_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-3_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-3_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-3_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-beta-3_Client_Java_8.zip",
      },
    },
    "2.7.0-beta-4": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-beta-3%20to%202.7.0-beta-4.md">Click here to get the changelog</a>',
      releaseDate: "2024/11/18",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-4_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-beta-4_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-4_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-beta-4_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-beta-4_Client_Java_8.zip",
      },
    },
    "2.7.0-RC-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-beta-4%20to%202.7.0-RC-1.md">Click here to get the changelog</a>',
      releaseDate: "2024/11/26",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-1_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-1_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-RC-1_Client_Java_8.zip",
      },
    },
    "2.7.0-RC-2": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-RC-1%20to%202.7.0-RC-2.md">Click here to get the changelog</a>',
      releaseDate: "2024/12/01",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-2_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-2_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-2_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-2_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-RC-2_Client_Java_8.zip",
      },
    },
    "2.7.0-RC-3": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.0-RC-2%20to%202.7.0-RC-3.md">Click here to get the changelog</a>',
      releaseDate: "2024/12/05",
      maxJavaVersion: 21,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-3_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.7.0-RC-3_Java_17-21.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-3_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.7.0-RC-3_Server_Java_17-21.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.7.0-RC-3_Client_Java_8.zip",
      },
    },
    "April fools 2025": {
      title: "Stable release",
      description: "April fools 2025. Try to craft the Steam Gate!",
      releaseDate: "2025/04/01",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_Aprils_Fool_2025_Edition_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/GT_New_Horizons_Aprils_Fool_2025_Edition_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_Aprils_Fool_2025_Edition_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/GT_New_Horizons_Aprils_Fool_2025_Edition_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/GT_New_Horizons_Aprils_Fool_2025_Edition_Client_Java_8.zip",
      },
    },
    "2.8.0-beta-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.7.4%20to%202.8.0-beta-1.md">Click here to get the changelog</a>',
      releaseDate: "2025/07/15",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-1_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-1_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-beta-1_Client_Java_8.zip",
      },
    },
    "2.8.0-beta-2": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.8.0-beta-1%20to%202.8.0-beta-2.md">Click here to get the changelog</a>',
      releaseDate: "2025/07/27",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-2_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-2_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-2_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-2_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-beta-2_Client_Java_8.zip",
      },
    },
    "2.8.0-beta-3": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.8.0-beta-2%20to%202.8.0-beta-3.md">Click here to get the changelog</a>',
      releaseDate: "2025/08/31",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-3_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-3_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-3_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-3_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-beta-3_Client_Java_8.zip",
      },
    },
    "2.8.0-beta-4": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.8.0-beta-3%20to%202.8.0-beta-4.md">Click here to get the changelog</a>',
      releaseDate: "2025/09/07",
      maxJavaVersion: 21,
      mmc: {
        java8Url:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-4_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-beta-4_Java_17-21.zip",
      },
      server: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-4_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-beta-4_Server_Java_17-21.zip",
      },
      client: {
        java8Url:
          "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-beta-4_Client_Java_8.zip",
      },
    },
    "2.8.0-rc-1": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.8.0-beta-4%20to%202.8.0-rc-1.md">Click here to get the changelog</a>',
      releaseDate: "2025/09/21",
      maxJavaVersion: 24,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-rc-1_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-rc-1_Java_17-24.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-rc-1_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-rc-1_Server_Java_17-24.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-rc-1_Client_Java_8.zip",
      },
    },
    "2.8.0-rc-2": {
      title: "Beta release",
      description:
        '<a class="underline text-blue-400 hover:text-blue-200" target="_blank" href="https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/releases/changelogs/changelog%20from%202.8.0-rc-1%20to%202.8.0-rc-2.md">Click here to get the changelog</a>',
      releaseDate: "2025/09/25",
      maxJavaVersion: 25,
      mmc: {
        java8Url: "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-rc-2_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/Multi_mc_downloads/betas/GT_New_Horizons_2.8.0-rc-2_Java_17-25.zip",
      },
      server: {
        java8Url: "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-rc-2_Server_Java_8.zip",
        java17_2XUrl:
          "https://downloads.gtnewhorizons.com/ServerPacks/betas/GT_New_Horizons_2.8.0-rc-2_Server_Java_17-25.zip",
      },
      client: {
        java8Url: "https://downloads.gtnewhorizons.com/ClientPacks/betas/GT_New_Horizons_2.8.0-rc-2_Client_Java_8.zip",
      },
    },
  },
};

export default config;
