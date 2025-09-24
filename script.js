// Games data array - Total 50 games (first 6 in HTML, next 44 generated dynamically here)
const games = [
    // Game 7: Bubble Shooter (Puzzle)
    {
        title: "Bubble Shooter",
        description: "Pop colorful bubbles by matching three or more of the same color in this classic arcade puzzle.",
        rating: 4.2,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?bubble,colorful",
        alt: "Colorful bubble shooter game with rainbow bubbles"
    },
    // Game 8: Chess Master (Strategy)
    {
        title: "Chess Master",
        description: "Test your strategic thinking in this classic game of chess against AI opponents of varying difficulty.",
        rating: 4.7,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?chess,board",
        alt: "Chess board with wooden pieces in strategic positions"
    },
    // Game 9: Jewel Miner (Adventure)
    {
        title: "Jewel Miner",
        description: "Dig deep into the earth to find precious jewels and avoid obstacles in this mining adventure.",
        rating: 4.4,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?mining,jewels",
        alt: "Underground mining game with jewels and crystals"
    },
    // Game 10: Tetris Classic (Puzzle)
    {
        title: "Tetris Classic",
        description: "The timeless puzzle game where you arrange falling blocks to create complete lines and clear the board.",
        rating: 4.8,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?blocks,puzzle",
        alt: "Classic Tetris game with colorful falling blocks"
    },
    // Game 11: Ninja Runner (Action)
    {
        title: "Ninja Runner",
        description: "Run, jump, and fight as a ninja through obstacle-filled levels in this fast-paced action game.",
        rating: 4.5,
        category: "action",
        image: "https://source.unsplash.com/400x300/?ninja,running",
        alt: "Ninja runner game with action and obstacles"
    },
    // Game 12: Basketball Slam (Sports)
    {
        title: "Basketball Slam",
        description: "Dunk like a pro and score points in this intense basketball game with realistic physics.",
        rating: 4.6,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?basketball,dunk",
        alt: "Basketball game with players dunking"
    },
    // Game 13: Tower Defense (Strategy)
    {
        title: "Tower Defense",
        description: "Build towers and defend your base from waves of enemies in this strategic tower defense game.",
        rating: 4.3,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?tower,defense",
        alt: "Tower defense game with strategy elements"
    },
    // Game 14: Fruit Ninja (Arcade)
    {
        title: "Fruit Ninja",
        description: "Slice flying fruits with your sword in this addictive and colorful arcade slicing game.",
        rating: 4.9,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?fruit,ninja",
        alt: "Fruit slicing arcade game"
    },
    // Game 15: Mario Kart (Sports)
    {
        title: "Mario Kart",
        description: "Race with friends in colorful karts through fun tracks with power-ups and obstacles.",
        rating: 4.7,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?kart,racing",
        alt: "Kart racing game with colorful tracks"
    },
    // Game 16: Sudoku Solver (Puzzle)
    {
        title: "Sudoku Solver",
        description: "Solve challenging Sudoku puzzles of various difficulty levels to sharpen your logic skills.",
        rating: 4.4,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?sudoku,puzzle",
        alt: "Sudoku number puzzle game"
    },
    // Game 17: Pirate Adventure (Adventure)
    {
        title: "Pirate Adventure",
        description: "Sail the seas as a pirate, battle enemies, and search for treasure in this swashbuckling adventure.",
        rating: 4.5,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?pirate,ship",
        alt: "Pirate adventure game with ships and treasure"
    },
    // Game 18: Flappy Bird (Arcade)
    {
        title: "Flappy Bird",
        description: "Guide your bird through pipes without crashing in this frustratingly addictive arcade game.",
        rating: 4.1,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?bird,flappy",
        alt: "Flappy bird arcade game with pipes"
    },
    // Game 19: Call of Duty (Action)
    {
        title: "Call of Duty",
        description: "Engage in intense first-person shooter battles in modern warfare settings.",
        rating: 4.8,
        category: "action",
        image: "https://source.unsplash.com/400x300/?soldier,war",
        alt: "First-person shooter action game"
    },
    // Game 20: Golf Masters (Sports)
    {
        title: "Golf Masters",
        description: "Play through beautiful courses and aim for hole-in-one in this relaxing golf simulation.",
        rating: 4.2,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?golf,course",
        alt: "Golf sports game on green course"
    },
    // Game 21: Candy Crush (Puzzle)
    {
        title: "Candy Crush",
        description: "Match sweet candies to progress through hundreds of challenging levels in this match-3 puzzle.",
        rating: 4.6,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?candy,sweet",
        alt: "Candy matching puzzle game"
    },
    // Game 22: Jungle Explorer (Adventure)
    {
        title: "Jungle Explorer",
        description: "Explore dangerous jungles, solve mysteries, and discover ancient ruins in this thrilling adventure.",
        rating: 4.3,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?jungle,explorer",
        alt: "Jungle adventure game with exploration"
    },
    // Game 23: Pac-Man (Arcade)
    {
        title: "Pac-Man",
        description: "Navigate mazes, eat dots, and avoid ghosts in this iconic arcade classic.",
        rating: 4.9,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?pacman,maze",
        alt: "Classic Pac-Man arcade game"
    },
    // Game 24: Sniper Elite (Action)
    {
        title: "Sniper Elite",
        description: "Take down enemies from long distances with precise sniper shots in this tactical action game.",
        rating: 4.5,
        category: "action",
        image: "https://source.unsplash.com/400x300/?sniper,elite",
        alt: "Sniper action game with precision shooting"
    },
    // Game 25: Tennis Pro (Sports)
    {
        title: "Tennis Pro",
        description: "Compete in high-stakes tennis matches against world-class opponents.",
        rating: 4.4,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?tennis,pro",
        alt: "Professional tennis sports game"
    },
    // Game 26: Risk Strategy (Strategy)
    {
        title: "Risk Strategy",
        description: "Conquer the world through strategic battles and alliances in this classic board game adaptation.",
        rating: 4.6,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?risk,strategy",
        alt: "World conquest strategy game"
    },
    // Game 27: Word Search (Puzzle)
    {
        title: "Word Search",
        description: "Find hidden words in a grid of letters to complete themed puzzles.",
        rating: 4.3,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?word,search",
        alt: "Word search puzzle game"
    },
    // Game 28: Space Explorer (Adventure)
    {
        title: "Space Explorer",
        description: "Travel through galaxies, discover planets, and uncover alien secrets in this sci-fi adventure.",
        rating: 4.7,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?space,explorer",
        alt: "Space exploration adventure game"
    },
    // Game 29: Snake Game (Arcade)
    {
        title: "Snake Game",
        description: "Grow your snake by eating food while avoiding walls and your own tail.",
        rating: 4.2,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?snake,game",
        alt: "Classic snake arcade game"
    },
    // Game 30: Battlefield (Action)
    {
        title: "Battlefield",
        description: "Fight in massive multiplayer battles across land, sea, and air.",
        rating: 4.8,
        category: "action",
        image: "https://source.unsplash.com/400x300/?battlefield,war",
        alt: "Multiplayer action battlefield game"
    },
    // Game 31: Boxing Champ (Sports)
    {
        title: "Boxing Champ",
        description: "Step into the ring and become the ultimate boxing champion through intense fights.",
        rating: 4.5,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?boxing,champ",
        alt: "Boxing sports game in the ring"
    },
    // Game 32: Civilization (Strategy)
    {
        title: "Civilization",
        description: "Build and manage your civilization from the stone age to the space age.",
        rating: 4.9,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?civilization,strategy",
        alt: "Empire-building strategy game"
    },
    // Game 33: Jigsaw Puzzle (Puzzle)
    {
        title: "Jigsaw Puzzle",
        description: "Assemble beautiful images from scattered puzzle pieces in relaxing sessions.",
        rating: 4.4,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?jigsaw,puzzle",
        alt: "Jigsaw puzzle assembly game"
    },
    // Game 34: Treasure Hunt (Adventure)
    {
        title: "Treasure Hunt",
        description: "Solve riddles and navigate maps to find hidden treasures around the world.",
        rating: 4.6,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?treasure,hunt",
        alt: "Treasure hunting adventure game"
    },
    // Game 35: Breakout (Arcade)
    {
        title: "Breakout",
        description: "Bounce a ball to break bricks and clear levels in this classic arcade game.",
        rating: 4.3,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?breakout,bricks",
        alt: "Breakout arcade game with ball and bricks"
    },
    // Game 36: Assassin Creed (Action)
    {
        title: "Assassin Creed",
        description: "Infiltrate cities and assassinate targets in this historical action-adventure.",
        rating: 4.7,
        category: "action",
        image: "https://source.unsplash.com/400x300/?assassin,creed",
        alt: "Assassin action game in historical settings"
    },
    // Game 37: Cricket World Cup (Sports)
    {
        title: "Cricket World Cup",
        description: "Lead your team to victory in international cricket matches with realistic gameplay.",
        rating: 4.5,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?cricket,worldcup",
        alt: "Cricket sports game tournament"
    },
    // Game 38: Age of Empires (Strategy)
    {
        title: "Age of Empires",
        description: "Build empires, gather resources, and wage wars in this real-time strategy classic.",
        rating: 4.8,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?empires,strategy",
        alt: "Real-time strategy empire game"
    },
    // Game 39: Crossword (Puzzle)
    {
        title: "Crossword",
        description: "Fill in the grid with words based on clever clues to complete the puzzle.",
        rating: 4.2,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?crossword,puzzle",
        alt: "Crossword word puzzle game"
    },
    // Game 40: Detective Story (Adventure)
    {
        title: "Detective Story",
        description: "Uncover clues and solve mysteries as a detective in this narrative adventure.",
        rating: 4.6,
        category: "adventure",
        image: "https://source.unsplash.com/400x300/?detective,story",
        alt: "Detective mystery adventure game"
    },
    // Game 41: Pong Classic (Arcade)
    {
        title: "Pong Classic",
        description: "The original paddle and ball game that started the video game revolution.",
        rating: 4.1,
        category: "arcade",
        image: "https://source.unsplash.com/400x300/?pong,classic",
        alt: "Classic Pong arcade game"
    },
    // Game 42: Fortnite Battle (Action)
    {
        title: "Fortnite Battle",
        description: "Survive in a battle royale with building and shooting mechanics.",
        rating: 4.7,
        category: "action",
        image: "https://source.unsplash.com/400x300/?fortnite,battle",
        alt: "Battle royale action game"
    },
    // Game 43: Swimming Race (Sports)
    {
        title: "Swimming Race",
        description: "Compete in fast-paced swimming races and break world records.",
        rating: 4.4,
        category: "sports",
        image: "https://source.unsplash.com/400x300/?swimming,race",
        alt: "Swimming sports competition game"
    },
    // Game 44: StarCraft (Strategy) - Last line completed here
    {
        title: "StarCraft",
        description: "Command armies in epic space battles with deep strategy and unit management.",
        rating: 4.9,
        category: "strategy",
        image: "https://source.unsplash.com/400x300/?starcraft,space",
        alt: "Sci-fi strategy battle game"
    },
    // Game 45: Mahjong (Puzzle)
    {
        title: "Mahjong",
        description: "Match identical tiles to clear the board in this traditional Chinese puzzle.",
        rating: 4.5,
        category: "puzzle",
        image: "https://source.unsplash.com/400x300/?mahjong,tiles",
        alt: "Mahjong tile matching puzzle"
    },
    // Game 46: Viking Voyage (Adventure)
    {
        title: "Viking Voyage",
        description: "Sail as a Viking warrior, raid villages, and explore new lands.",
        rating: 4.3,