// prisma/seed.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const uniqueRecords = [
    { 
      tableName: "Table 1", 
      name: "John Doe", 
      title: "Manager", 
      flag: "us", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 2", 
      name: "Jane Smith", 
      title: "Engineer", 
      flag: "ca", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 3", 
      name: "Michael Johnson", 
      title: "Designer", 
      flag: "fr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 4", 
      name: "Emily Brown", 
      title: "Analyst", 
      flag: "de", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 5", 
      name: "David Wilson", 
      title: "Developer", 
      flag: "es", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 6", 
      name: "Sarah Miller", 
      title: "Consultant", 
      flag: "it", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 7", 
      name: "Kevin Davis", 
      title: "Manager", 
      flag: "nl", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 8", 
      name: "Rachel Martinez", 
      title: "Engineer", 
      flag: "se", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 9", 
      name: "Robert Garcia", 
      title: "Designer", 
      flag: "no", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 10", 
      name: "Lisa Thompson", 
      title: "Analyst", 
      flag: "dk", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 11", 
      name: "Steven Harris", 
      title: "Developer", 
      flag: "fi", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 12", 
      name: "Michelle Clark", 
      title: "Consultant", 
      flag: "jp", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 13", 
      name: "Daniel Lewis", 
      title: "Manager", 
      flag: "cn", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 14", 
      name: "Angela Scott", 
      title: "Engineer", 
      flag: "kr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 15", 
      name: "Andrew Green", 
      title: "Designer", 
      flag: "br", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 16", 
      name: "Karen Young", 
      title: "Analyst", 
      flag: "in", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 17", 
      name: "James Moore", 
      title: "Developer", 
      flag: "ru", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 18", 
      name: "Patricia Martinez", 
      title: "Consultant", 
      flag: "au", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 19", 
      name: "Richard Garcia", 
      title: "Manager", 
      flag: "nz", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 20", 
      name: "Jennifer Brown", 
      title: "Engineer", 
      flag: "za", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 21", 
      name: "Christopher Lee", 
      title: "Designer", 
      flag: "us", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 22", 
      name: "Amanda White", 
      title: "Analyst", 
      flag: "ca", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 23", 
      name: "Joshua Hall", 
      title: "Developer", 
      flag: "fr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 24", 
      name: "Jessica Martinez", 
      title: "Consultant", 
      flag: "de", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 25", 
      name: "Brian Thompson", 
      title: "Manager", 
      flag: "es", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 26", 
      name: "Nicole Davis", 
      title: "Engineer", 
      flag: "it", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 27", 
      name: "Ryan Wilson", 
      title: "Designer", 
      flag: "nl", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 28", 
      name: "Stephanie Harris", 
      title: "Analyst", 
      flag: "se", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 29", 
      name: "Brandon Clark", 
      title: "Developer", 
      flag: "no", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 30", 
      name: "Ashley Scott", 
      title: "Consultant", 
      flag: "dk", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 31", 
      name: "Erica Lewis", 
      title: "Manager", 
      flag: "fi", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 32", 
      name: "Justin Green", 
      title: "Engineer", 
      flag: "jp", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 33", 
      name: "Samantha Young", 
      title: "Designer", 
      flag: "cn", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 34", 
      name: "Matthew Moore", 
      title: "Analyst", 
      flag: "kr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 35", 
      name: "Laura Green", 
      title: "Developer", 
      flag: "br", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 36", 
      name: "Tyler Young", 
      title: "Consultant", 
      flag: "in", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 37", 
      name: "Kayla Moore", 
      title: "Manager", 
      flag: "ru", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 38", 
      name: "Cody Martinez", 
      title: "Engineer", 
      flag: "au", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 39", 
      name: "Kristen Rodriguez", 
      title: "Designer", 
      flag: "nz", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 40", 
      name: "Dylan Hernandez", 
      title: "Analyst", 
      flag: "za", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 41", 
      name: "Jordan King", 
      title: "Developer", 
      flag: "us", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 42", 
      name: "Victoria Wright", 
      title: "Consultant", 
      flag: "ca", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 43", 
      name: "Ethan Perez", 
      title: "Manager", 
      flag: "fr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 44", 
      name: "Madison Moore", 
      title: "Engineer", 
      flag: "de", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 45", 
      name: "Isaac Adams", 
      title: "Designer", 
      flag: "es", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 46", 
      name: "Olivia Walker", 
      title: "Analyst", 
      flag: "it", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 47", 
      name: "Gabriel Hill", 
      title: "Developer", 
      flag: "nl", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 48", 
      name: "Hannah Flores", 
      title: "Consultant", 
      flag: "se", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 49", 
      name: "Nathan Cook", 
      title: "Manager", 
      flag: "no", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 50", 
      name: "Zoe Bailey", 
      title: "Engineer", 
      flag: "dk", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 51", 
      name: "Wyatt Reed", 
      title: "Designer", 
      flag: "fi", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 52", 
      name: "Sophia Ward", 
      title: "Analyst", 
      flag: "jp", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 53", 
      name: "Jackson Cox", 
      title: "Developer", 
      flag: "cn", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 54", 
      name: "Lily Rivera", 
      title: "Consultant", 
      flag: "kr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 55", 
      name: "Aiden Ward", 
      title: "Manager", 
      flag: "br", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 56", 
      name: "Alyssa Bennett", 
      title: "Engineer", 
      flag: "in", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 57", 
      name: "Luke Simmons", 
      title: "Designer", 
      flag: "ru", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 58", 
      name: "Emma Reed", 
      title: "Analyst", 
      flag: "au", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 59", 
      name: "Connor Griffin", 
      title: "Developer", 
      flag: "nz", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 60", 
      name: "Brooklyn Torres", 
      title: "Consultant", 
      flag: "za", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 61", 
      name: "Julian Ward", 
      title: "Manager", 
      flag: "us", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 62", 
      name: "Ella Foster", 
      title: "Engineer", 
      flag: "ca", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 63", 
      name: "Grayson Coleman", 
      title: "Designer", 
      flag: "fr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 64", 
      name: "Hazel Marshall", 
      title: "Analyst", 
      flag: "de", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 65", 
      name: "Liam Hamilton", 
      title: "Developer", 
      flag: "es", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 66", 
      name: "Scarlett Simpson", 
      title: "Consultant", 
      flag: "it", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 67", 
      name: "Mason Matthews", 
      title: "Manager", 
      flag: "nl", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 68", 
      name: "Addison Ellis", 
      title: "Engineer", 
      flag: "se", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 69", 
      name: "Avery Knight", 
      title: "Designer", 
      flag: "no", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 70", 
      name: "Evelyn Kennedy", 
      title: "Analyst", 
      flag: "dk", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 71", 
      name: "Oliver Patel", 
      title: "Developer", 
      flag: "fi", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 72", 
      name: "Natalie Myers", 
      title: "Consultant", 
      flag: "jp", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 73", 
      name: "Leo Hughes", 
      title: "Manager", 
      flag: "cn", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 74", 
      name: "Bella Ward", 
      title: "Engineer", 
      flag: "kr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 75", 
      name: "Jackie Riley", 
      title: "Designer", 
      flag: "br", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 76", 
      name: "Adrian Morgan", 
      title: "Analyst", 
      flag: "in", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 77", 
      name: "Clara Cunningham", 
      title: "Developer", 
      flag: "ru", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 78", 
      name: "Roman Herrera", 
      title: "Consultant", 
      flag: "au", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 79", 
      name: "Maya Palmer", 
      title: "Manager", 
      flag: "nz", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 80", 
      name: "Mateo Hawkins", 
      title: "Engineer", 
      flag: "za", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 81", 
      name: "Julia Fitzgerald", 
      title: "Designer", 
      flag: "us", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 82", 
      name: "Gabriel Norton", 
      title: "Analyst", 
      flag: "ca", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 83", 
      name: "Elena Flynn", 
      title: "Developer", 
      flag: "fr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 84", 
      name: "Isaiah Doyle", 
      title: "Consultant", 
      flag: "de", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 85", 
      name: "Violet Stanley", 
      title: "Manager", 
      flag: "es", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 86", 
      name: "Nolan Graham", 
      title: "Engineer", 
      flag: "it", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 87", 
      name: "Lila West", 
      title: "Designer", 
      flag: "nl", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 88", 
      name: "Gavin Gordon", 
      title: "Analyst", 
      flag: "se", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 89", 
      name: "Leah Bell", 
      title: "Developer", 
      flag: "no", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 90", 
      name: "Eliana Harrison", 
      title: "Consultant", 
      flag: "dk", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 91", 
      name: "Jace Woods", 
      title: "Manager", 
      flag: "fi", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 92", 
      name: "Kylie Weaver", 
      title: "Engineer", 
      flag: "jp", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 93", 
      name: "Bentley Burton", 
      title: "Designer", 
      flag: "cn", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 94", 
      name: "Audrey Fisher", 
      title: "Analyst", 
      flag: "kr", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 95", 
      name: "Santiago Saunders", 
      title: "Developer", 
      flag: "br", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 96", 
      name: "Clara Warner", 
      title: "Consultant", 
      flag: "in", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 97", 
      name: "Jasper Hudson", 
      title: "Manager", 
      flag: "ru", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 98", 
      name: "Mila Andrews", 
      title: "Engineer", 
      flag: "au", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 99", 
      name: "Roman Knight", 
      title: "Designer", 
      flag: "nz", 
      photo: "https://picsum.photos/500/575" 
    },
    { 
      tableName: "Table 100", 
      name: "Aria Coleman", 
      title: "Analyst", 
      flag: "za", 
      photo: "https://picsum.photos/500/575" 
    }
  ];

  // Create records in the database
  for (let record of uniqueRecords) {
    await prisma.tableData.create({
      data: record,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
