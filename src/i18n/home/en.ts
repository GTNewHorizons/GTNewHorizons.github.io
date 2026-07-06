export const home = {
  welcome: "Welcome to",
  subtitle: "A hardcore, content rich and meticulously crafted technical modpack",
  downloads: "Downloads",
  agesWalkthrough: "The Ages Walkthrough",
  agesDescription: "Here is how hundreds of mods intertwine to create a directed, deliberate journey",
  readyToBegin: "Ready To Begin Your Journey?",
  joinPlayers:
    "Join thousands of players in the most comprehensive and challenging technical Minecraft experience ever created",
  joinDiscord: "Join Discord",

  features: {
    techAdventure: {
      title: "The Ultimate Tech Adventure",
      subtitle: "A modpack where effort pays off, and every step matters",
    },
    journey: {
      title: "Curated journey",
      subtitle:
        "Hundreds of mods, each a piece of a seamless puzzle, with over 3900 quests to guide you through each of them",
    },
    playstyles: {
      title: "Numerous Playstyles Available",
      subtitle: "Adapt your playing style as you see fit",
    },
    technical: {
      title: "Technical Excellence",
      subtitle: "From custom recipes to custom mods, purpose-built for GT:NH",
    },
    community: {
      title: "A Technical, Supportive, and Worldwide Community",
      subtitle: "An active playerbase fostering collaboration and support",
    },
  },

  featureBodies: {
    techAdventure: `Think you know modded Minecraft? Forget everything. GregTech: New Horizons is a hardcore journey through one of the most ambitious, complex, and rewarding modpacks ever created.

You begin with a stick and a rock and you will end up building quantum machines, space stations, and even interdimensional bases. Every step forward is earned. Every achievement, hard-won.

GT:NH isn't for those who want instant gratification. It's for players who love understanding systems, optimizing builds, and slowly building a technological empire. If you crave challenge, this is it.`,
    journey: `With over 300 carefully integrated mods, dense tech trees, a logical progression system, and deeply interconnected mechanics, GT:NH offers a truly unique experience.

But you'll never feel lost. A detailed questbook with over 3900 quests will guides you through complex systems, goals, and unlocks, making learning part of the fun.`,
    playstyles: `In GT:NH, there is never just one way to progress in the game. Whether you are a fan of complex production chains and advanced optimizations, a renowned thaumaturge, an advocate of renewable production, an outstanding beekeeper, or a master of botany, GT:NH has something to offer you.

What's more, even for your play style, GT:NH offers you various ways to solve a problem, imposing only the milestones of your progress.

Be the sole master of your progress!`,
    technical: `GT:NH isn't a bunch of JARs dumped into /mods, it's a big project with deliberate vision that doesn't limit itself to off-the-shelf solutions.

We develop and maintain:
- Dozens of forks of popular mods
- Many exclusive mods, made for GT:NH from the ground up
- Resource packs, shader packs, localizations and more!
- We are even compatible with LWJGL3 and Java 25!

As a result, GT:NH is able to run on modest computers!`,
    ourGithub: "Our Github",
    community: `The GT:NH community is made up of highly technical and passionate players: engineers, science enthusiasts, and logic lovers who thrive on complexity and optimization. While the community is generally helpful and welcoming, it expects you to make an effort and do your research before asking for help.

Most discussions, guides, and spreadsheets are in English, but we also have dedicated channels for Chinese, French, German, Polish, Portuguese, Russian and Spanish speakers. If you enjoy learning, problem-solving, and engaging with like-minded players, you'll feel right at home.`,
  },

  ages: {
    stone: { label: "Stone Age", quests: "quests" },
    steam: { label: "Steam Age", quests: "quests" },
    lv: { label: "Low Voltage", quests: "quests" },
    mv: { label: "Medium Voltage", quests: "quests" },
    hv: { label: "High Voltage", quests: "quests" },
    ev: { label: "Extreme Voltage", quests: "quests" },
    iv: { label: "Insane Voltage", quests: "quests" },
    luv: { label: "Ludicrous Voltage", quests: "quests" },
    beyond: { label: "...and beyond!", quests: "quests" },
  },

  agePanels: {
    challenges: "Challenges",
    stone: {
      lead: "Explore the unique GT:NH world generation and survive the early game challenges long enough to progress out of here.",
      more: "Dark and harsh nights, various intimidating infernal monsters and a precarious food situation awaits you. Only one way out of here: mining the necessary materials for bronze steam boilers!",
      exploration: {
        title: "Exploration",
        desc: "Special ore generation accompanied with an overworld filled with goodies",
      },
      survival: {
        title: "Survival",
        desc: "A horde of Infernal monsters while you are at your most vulnerable",
      },
    },
    steam: {
      lead: "Perform your own industrial revolution!",
      more: "You will start making your first automated systems, ranging from coke ovens to your first ore processing. You will also have access to your first set of machines to reduce the costs of your crafts.",
      steamProduction: {
        title: "Your First Steam Production",
        desc: "You will need to develop a solid steam production to sustain your first machines.",
      },
      weapons: {
        title: "Your First Weapons",
        desc: "Mobs will become less of a problem once you will start making your first weapons with Tinkers' Construct.",
      },
    },
    lv: {
      lead: "Your first electrical tier!",
      more: "In LV, you will discover how to generate electrical power and build your first electric machines, including the Electrical Blast Furnace to make steel ingots faster.",
      energy: {
        title: "Your First Electrical Energy Production",
        desc: "With LV, you'll have to manage your first electrical energy production, and you will learn how to deal with losses in the wires.",
      },
      ebf: {
        title: "The Electric Blast Furnace",
        desc: "Your very first electrical multiblock! Unlike single block machines, GT multiblocks will void their production if there is not enough power, so ensure you have enough energy to run them!",
      },
    },
    mv: {
      lead: "Improve your base a little!",
      more: "In MV, your main tasks will consist of developing reliable aluminium and silicon sources, as well as upgrading your EBF coils from cupronickel to kanthal.",
      silicon: {
        title: "Silicon Solar Grade (Poly SI) Ingots",
        desc: "The production of Silicon Solar Grade (Poly SI) ingots will be your first long-standing passive production setup, as it is used a lot throughout the game.",
      },
      kanthal: {
        title: "Kanthal Ingots",
        desc: "Your first EBF coil upgrade, improving speed and unlocking new recipes.",
      },
    },
    hv: {
      lead: "Your first complex processing lines!",
      more: "In HV, you will develop many chemical processes to gather many needed products: Polytetrafluoroethylene (PTFE), Silicone Rubber, Ammonia, Nitric Acid... It is also the last tier before you unlock AE2. You will also launch your first rocket in HV.",
      cleanroom: {
        title: "The Cleanroom",
        desc: "As you do technological progress, you lean towards more and more sophisticated circuitry, so you'll need to craft your circuits inside a cleanroom. Make sure the cleanroom is fully operational before crafting, or you might destroy your production!",
      },
      rocket: {
        title: "Your First Rocket",
        desc: "It is time for you to become an astronaut! But beware, because space exploration might reserve you some surprises!",
      },
    },
    ev: {
      lead: "Applied Energistics unlocked!",
      more: "In EV, you will finally get your hands on AE2 components to automate your first crafts, which will cause your first massive base rework. Good luck!",
      ae2: {
        title: "Your First AE2 System",
        desc: "With it unlocked, no more microcrafting. But unlike other modpacks, in GT:NH you'll learn how to use 100% of the capabilities AE2 has to offer.",
      },
      radon: {
        title: "Get Enough Radon",
        desc: "In EV, you will start relying on Radon to craft new circuits. It's also useful for EBF smelting, so try to get a solid source!",
      },
    },
    iv: {
      lead: "The last tier of the early game!",
      more: "This is the last tier before your base is upscaled significantly.",
      platinum: {
        title: "The Platinum Line",
        desc: "One of the most iconic processing lines in GT:NH. This poses a large infrastructure challenge, as you'll need the byproducts of this line in great quantities.",
      },
      assline: {
        title: "Your First Assembly Line",
        desc: "Your new assembling machine! You will need to figure out how to insert the recipe ingredients in the correct order for the machine to run. Make sure you automate this well, as you will need many Assembly Lines in the future.",
      },
    },
    luv: {
      lead: "Swap your single block machines for their multiblock equivalents!",
      more: "In this tier you will start replacing your single block machines for their much faster multiblock equivalents. You will also face new lines, such as the Naquadah and Netherite lines, and you will unlock your first fusion reactor.",
      naquadah: {
        title: "The Naquadah Line",
        desc: "With this line, you'll need to figure out how to produce lots of fluorine, one way or another.",
      },
      fusion: {
        title: "Your First Fusion Reactor",
        desc: "The fusion reactor allows you to access precious new materials by fusing 2 different fluids. Your main challenge will be to sustain the fusion process as long as possible to avoid large fusion startup costs.",
      },
    },
    beyond: {
      lead: "Be ready to push your base even further beyond!",
      more: "Face more and more complex automations as you progress: the Waterline, the Black Hole Compressor, the Eye of Harmony, the creation of Quark Gluon Plasma, and more! You will also begin an endless race for faster and bigger production capabilities!",
      infrastructure: {
        title: "Infrastructure Checks",
        desc: "The progression in GT:NH often forces you to rebuild some part of your base in order to improve crafting capabilities, so that you can get crafts done in a reasonable amount of time. Your matter manipulator will become your best friend!",
      },
      stargate: {
        title: "Craft The Stargate",
        desc: "The ultimate goal of GT:NH, the Stargate is a reward to the most dedicated players, willing to spend thousands of hours to finally beat the modpack!",
      },
    },
  },
};
