import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type TableData = {
  id: number;
  tableName: string;
  name: string;
  photo: string;
  title: string;
  flag: string;
};

export async function GET(request: Request) {
  try {
    const data = await prisma.tableData.findMany();

    // Map over the array of fetched data and format it as needed
    const formattedData: TableData[] = data.map((item) => ({
      id: item.id,
      tableName: item.tableName,
      name: item.name,
      photo: item.photo,
      title: item.title,
      flag: item.flag,
    }));

    return new Response(JSON.stringify({formattedData}));
  } catch (error) {
    console.error('Error fetching table data:', error);
    return new Response(JSON.stringify({error: error}));
  } finally {
    await prisma.$disconnect();
  }
}
