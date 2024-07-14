// app/api/updateUser.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: Request) {

    const formData = await request.formData();

    const id = Number(formData.get('id'));

  try {
    const deletedData = await prisma.tableData.delete({
        where: { id: Number(id) },
      });

    return new Response(JSON.stringify({ message: 'Data deleted successfully', deletedData }));
  } catch (error) {
    console.error('Error updating data:', error);
    return new Response(JSON.stringify({error: error}));
  } finally {
    await prisma.$disconnect();
  }
}
